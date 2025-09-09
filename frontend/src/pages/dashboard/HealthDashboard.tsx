import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Leaf, Upload, AlertCircle, Image as ImageIcon, Info } from "lucide-react";

interface Prediction {
  disease: string;
  confidence: number;
  description: string;
  treatment: string;
  prevention: string;
}

interface ApiResponse {
  predictions: Array<{
    label: string;
    score: number;
  }>;
}

const DISEASE_INFO = {
  'Tomato_healthy': {
    description: 'The tomato plant appears to be healthy with no signs of disease.',
    treatment: 'Continue current care practices.',
    prevention: 'Maintain proper watering, fertilization, and pest control.'
  },
  'Tomato_Bacterial_spot': {
    description: 'Bacterial spot is caused by Xanthomonas bacteria, appearing as small, dark, water-soaked spots on leaves.',
    treatment: 'Use copper-based fungicides and practice crop rotation.',
    prevention: 'Use disease-free seeds and avoid overhead watering.'
  },
  'Tomato_Early_blight': {
    description: 'Early blight is caused by the fungus Alternaria solani, showing as concentric rings on leaves.',
    treatment: 'Apply fungicides containing chlorothalonil or mancozeb.',
    prevention: 'Remove infected leaves and maintain proper plant spacing.'
  },
  'Tomato_Late_blight': {
    description: 'Late blight is caused by Phytophthora infestans, showing as large, dark lesions on leaves and stems.',
    treatment: 'Apply fungicides containing chlorothalonil or copper.',
    prevention: 'Avoid overhead watering and ensure good air circulation.'
  },
  'Tomato_Leaf_Mold': {
    description: 'Leaf mold is caused by the fungus Passalora fulva, appearing as yellow spots on upper leaf surfaces.',
    treatment: 'Apply fungicides containing chlorothalonil or mancozeb.',
    prevention: 'Maintain proper plant spacing and ventilation.'
  },
  'Tomato_Septoria_leaf_spot': {
    description: 'Septoria leaf spot is caused by Septoria lycopersici, showing as small, circular spots with dark margins.',
    treatment: 'Remove infected leaves and apply copper-based fungicides.',
    prevention: 'Avoid overhead watering and practice crop rotation.'
  },
  'Tomato_Spider_mites': {
    description: 'Spider mites are tiny pests that feed on plant sap, causing stippling and webbing on leaves.',
    treatment: 'Use miticides or insecticidal soap.',
    prevention: 'Maintain proper humidity and remove affected leaves.'
  },
  'Tomato_Target_Spot': {
    description: 'Target spot is caused by Corynespora cassiicola, showing as circular spots with concentric rings.',
    treatment: 'Apply fungicides containing chlorothalonil or mancozeb.',
    prevention: 'Remove infected leaves and maintain proper spacing.'
  },
  'Tomato_mosaic_virus': {
    description: 'A viral disease causing mottled leaves and stunted growth.',
    treatment: 'Remove and destroy infected plants.',
    prevention: 'Use disease-free seeds and control aphid populations.'
  },
  'Tomato_YellowLeaf_Curl_Virus': {
    description: 'A viral disease transmitted by whiteflies, causing yellowing and curling of leaves.',
    treatment: 'Remove and destroy infected plants.',
    prevention: 'Control whitefly populations and use resistant varieties.'
  },
  'Potato_healthy': {
    description: 'The potato plant appears to be healthy with no signs of disease.',
    treatment: 'Continue current care practices.',
    prevention: 'Maintain proper soil conditions and pest control.'
  },
  'Potato_Early_blight': {
    description: 'Early blight is caused by Alternaria solani, showing as dark spots with concentric rings.',
    treatment: 'Apply fungicides containing chlorothalonil or mancozeb.',
    prevention: 'Practice crop rotation and remove infected leaves.'
  },
  'Potato_Late_blight': {
    description: 'Late blight is caused by Phytophthora infestans, showing as dark lesions on leaves and stems.',
    treatment: 'Apply fungicides containing chlorothalonil or copper.',
    prevention: 'Use certified disease-free seed potatoes.'
  },
  'Pepper_bell_healthy': {
    description: 'The bell pepper plant appears to be healthy with no signs of disease.',
    treatment: 'Continue current care practices.',
    prevention: 'Maintain proper watering and fertilization.'
  },
  'Pepper_bell_Bacterial_spot': {
    description: 'Bacterial spot is caused by Xanthomonas bacteria, appearing as small, dark spots on leaves.',
    treatment: 'Use copper-based fungicides.',
    prevention: 'Use disease-free seeds and avoid overhead watering.'
  }
};

const HealthDashboard = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [prediction, setPrediction] = useState<Prediction | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      
      // Validate image size
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError("Image size should be less than 5MB");
        return;
      }

      // Validate image type
      if (!file.type.startsWith('image/')) {
        setError("Please upload an image file");
        return;
      }

      setSelectedImage(file);
      setPrediction(null);
      setError(null);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) return;
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", selectedImage);

    try {
      console.log("Sending image for analysis...");
      const response = await axios.post<ApiResponse>(
        "http://localhost:8001/predict/",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      
      console.log("API Response:", response.data);
      
      if (response.data && response.data.predictions && response.data.predictions.length > 0) {
        const prediction = response.data.predictions[0];
        const diseaseInfo = DISEASE_INFO[prediction.label as keyof typeof DISEASE_INFO] || {
          description: `Analysis complete for ${prediction.label}.`,
          treatment: 'Follow standard treatment practices.',
          prevention: 'Maintain proper plant care and monitoring.'
        };
        
        const predictionData: Prediction = {
          disease: prediction.label,
          confidence: prediction.score,
          description: diseaseInfo.description,
          treatment: diseaseInfo.treatment,
          prevention: diseaseInfo.prevention
        };
        
        setPrediction(predictionData);
        
        if (prediction.score < 0.5) {
          setError("Low confidence in prediction. Please ensure the image is clear and well-lit.");
        }
      } else {
        const errorMessage = "Invalid response from server. Please try again.";
        console.error("Invalid response structure:", response.data);
        setError(errorMessage);
      }
    } catch (error: any) {
      console.error("Error uploading image:", error);
      
      let errorMessage = "Failed to analyze image. Please try again.";
      
      if (error.response) {
        // Server responded with an error
        console.error("Server error response:", error.response.data);
        errorMessage = error.response.data.error || error.response.data.message || errorMessage;
      } else if (error.request) {
        // Request was made but no response received
        console.error("No response received:", error.request);
        errorMessage = "No response from server. Please check if the server is running.";
      } else {
        // Something happened in setting up the request
        console.error("Request setup error:", error.message);
        errorMessage = error.message || errorMessage;
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Crop Disease Detection</h1>
        <div className="flex items-center gap-2 text-primary bg-primary-50 px-4 py-2 rounded-lg">
          <Leaf className="h-5 w-5" />
          <span>Plant Health Analysis</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        <Card>
          <CardHeader>
            <CardTitle>Upload Plant Image</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Upload a clear, well-lit image of a plant leaf to detect diseases. For best results:
                <ul className="list-disc list-inside mt-2">
                  <li>Ensure good lighting</li>
                  <li>Focus on the affected area</li>
                  <li>Avoid blurry images</li>
                  <li>Image size should be less than 5MB</li>
                </ul>
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                {imagePreview ? (
                  <div className="space-y-4">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="max-h-64 mx-auto rounded-lg object-contain"
                    />
                    <button
                      onClick={() => {
                        setImagePreview(null);
                        setSelectedImage(null);
                      }}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Change Image
                    </button>
                  </div>
                ) : (
                  <div className="py-8">
                    <ImageIcon className="h-12 w-12 mx-auto text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">
                      Drag and drop an image here, or click to select
                    </p>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 cursor-pointer"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Select Image
                    </label>
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleUpload}
              className="w-full bg-green-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 hover:bg-green-600 transition-colors"
              disabled={!selectedImage || loading}
            >
              {loading ? (
                <>
                  <AlertCircle className="h-5 w-5 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Upload className="h-5 w-5" />
                  Analyze Image
                </>
              )}
            </button>
            {error && (
              <div className="text-red-500 text-sm flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Section */}
        {prediction && (
          <Card>
            <CardHeader>
              <CardTitle>Analysis Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Detected Disease:</span>
                  <span className="text-lg font-bold">
                    {prediction.disease}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Confidence:</span>
                  <span className={`font-bold ${
                    prediction.confidence >= 0.7 ? 'text-green-500' :
                    prediction.confidence >= 0.5 ? 'text-yellow-500' : 'text-red-500'
                  }`}>
                    {(prediction.confidence * 100).toFixed(1)}%
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-4">
                <div>
                  <h3 className="font-medium mb-2">Description:</h3>
                  <p className="text-sm text-gray-600">{prediction.description}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Treatment:</h3>
                  <p className="text-sm text-gray-600">{prediction.treatment}</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Prevention:</h3>
                  <p className="text-sm text-gray-600">{prediction.prevention}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HealthDashboard;
