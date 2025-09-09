import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Leaf, Droplet, Thermometer, AlertCircle, Info } from "lucide-react";

const SoilDashboard = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Soil Quality Monitoring</h1>
        <div className="flex items-center gap-2 text-primary bg-primary-50 px-4 py-2 rounded-lg">
          <Leaf className="h-5 w-5" />
          <span>Coming Soon</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              Soil Moisture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold">Coming Soon</div>
              <p className="text-sm text-gray-500 mt-2">Real-time soil moisture monitoring will be available soon</p>
              <div className="mt-4 text-left text-sm text-gray-600">
                <p className="font-medium">Features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Continuous moisture level tracking</li>
                  <li>Smart irrigation recommendations</li>
                  <li>Historical moisture data analysis</li>
                  <li>Customizable moisture thresholds</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              pH Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold">Coming Soon</div>
              <p className="text-sm text-gray-500 mt-2">Soil pH monitoring will be available soon</p>
              <div className="mt-4 text-left text-sm text-gray-600">
                <p className="font-medium">Features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Real-time pH level monitoring</li>
                  <li>pH trend analysis</li>
                  <li>Soil amendment recommendations</li>
                  <li>Optimal pH range alerts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              Soil Fertility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold">Coming Soon</div>
              <p className="text-sm text-gray-500 mt-2">Soil fertility analysis will be available soon</p>
              <div className="mt-4 text-left text-sm text-gray-600">
                <p className="font-medium">Features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Nutrient level monitoring</li>
                  <li>Fertilizer recommendations</li>
                  <li>Soil health scoring</li>
                  <li>Crop-specific fertility analysis</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About Soil Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <p className="font-medium">Feature Coming Soon</p>
                <p className="text-sm text-gray-500">
                  We are working on integrating IoT sensors for real-time soil monitoring. This will include:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>Real-time soil moisture monitoring</li>
                  <li>pH level tracking</li>
                  <li>Soil fertility analysis</li>
                  <li>Automated irrigation recommendations</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <p className="font-medium">Technology Stack</p>
                <p className="text-sm text-gray-500">
                  Our soil monitoring system will utilize:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>ESP8266 microcontrollers for data collection</li>
                  <li>High-precision soil sensors</li>
                  <li>Real-time data processing</li>
                  <li>Cloud-based analytics</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-green-500 mt-1" />
              <div>
                <p className="font-medium">Benefits</p>
                <p className="text-sm text-gray-500">
                  The soil monitoring system will help farmers:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>Optimize water usage</li>
                  <li>Improve crop yields</li>
                  <li>Reduce fertilizer waste</li>
                  <li>Make data-driven decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SoilDashboard;
