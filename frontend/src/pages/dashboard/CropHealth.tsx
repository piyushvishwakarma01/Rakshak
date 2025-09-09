import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Upload, Leaf, AlertCircle } from "lucide-react";
import axios from "axios";

interface PredictionResult {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string;
}

interface ApiResponse {
  disease: string;
  confidence: number;
  treatment: string;
  prevention: string;
}

const CropHealth = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [error, setError] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setImagePreview(URL.createObjectURL(file));
      setError("");
      setResult(null);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage) {
      setError("Please select an image first");
      return;
    }

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await axios.post<ApiResponse>("http://localhost:8000/api/predict-disease/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setResult({
        disease: response.data.disease,
        confidence: response.data.confidence,
        treatment: response.data.treatment,
        prevention: response.data.prevention,
      });
    } catch (err) {
      setError("Failed to analyze image. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Crop Disease Detection</h1>
        <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-4 py-2 rounded-lg">
          <Leaf className="h-5 w-5" />
          <span>Plant Health Analysis</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-[#1B2B1B]">
          <CardHeader>
            <CardTitle className="text-white">Upload Plant Image</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div
                className={`border-2 border-dashed rounded-lg p-6 text-center ${
                  imagePreview ? "border-green-500" : "border-gray-600"
                }`}
              >
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Selected plant"
                    className="max-h-64 mx-auto rounded-lg"
                  />
                ) : (
                  <div className="space-y-4">
                    <Upload className="h-12 w-12 mx-auto text-gray-400" />
                    <div className="text-gray-300">
                      <p className="text-lg font-medium">Upload plant image</p>
                      <p className="text-sm text-gray-400">
                        Drag and drop or click to select
                      </p>
                    </div>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              <Button
                onClick={handleSubmit}
                disabled={!selectedImage || loading}
                className="w-full bg-green-500 hover:bg-green-600"
              >
                {loading ? "Analyzing..." : "Detect Disease"}
              </Button>

              {error && (
                <div className="flex items-center gap-2 text-red-500 bg-red-500/10 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5" />
                  <p>{error}</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1B2B1B]">
          <CardHeader>
            <CardTitle className="text-white">Analysis Results</CardTitle>
          </CardHeader>
          <CardContent>
            {result ? (
              <div className="space-y-6">
                <div className="bg-green-500/10 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-green-500 mb-2">
                    Detected Disease
                  </h3>
                  <p className="text-white">{result.disease}</p>
                  <div className="mt-2 text-sm text-gray-400">
                    Confidence: {(result.confidence * 100).toFixed(2)}%
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Treatment
                    </h3>
                    <p className="text-gray-300">{result.treatment}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      Prevention
                    </h3>
                    <p className="text-gray-300">{result.prevention}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-400">
                <Leaf className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">
                  Upload a plant image to get disease analysis
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropHealth; 