import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Droplet, Thermometer, AlertCircle, Info } from "lucide-react";

const WaterDashboard = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Water Quality Monitoring</h1>
        <div className="flex items-center gap-2 text-primary bg-primary-50 px-4 py-2 rounded-lg">
          <Droplet className="h-5 w-5" />
          <span>Coming Soon</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplet className="h-5 w-5" />
              pH Level
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold">Coming Soon</div>
              <p className="text-sm text-gray-500 mt-2">Water pH monitoring will be available soon</p>
              <div className="mt-4 text-left text-sm text-gray-600">
                <p className="font-medium">Features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Continuous pH level monitoring</li>
                  <li>pH trend analysis</li>
                  <li>Automated pH adjustment alerts</li>
                  <li>Optimal pH range tracking</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Turbidity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold">Coming Soon</div>
              <p className="text-sm text-gray-500 mt-2">Water turbidity monitoring will be available soon</p>
              <div className="mt-4 text-left text-sm text-gray-600">
                <p className="font-medium">Features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Real-time turbidity measurement</li>
                  <li>Water clarity analysis</li>
                  <li>Contamination detection</li>
                  <li>Filtration system alerts</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Thermometer className="h-5 w-5" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold">Coming Soon</div>
              <p className="text-sm text-gray-500 mt-2">Water temperature monitoring will be available soon</p>
              <div className="mt-4 text-left text-sm text-gray-600">
                <p className="font-medium">Features:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Continuous temperature tracking</li>
                  <li>Temperature trend analysis</li>
                  <li>Optimal temperature alerts</li>
                  <li>Seasonal temperature patterns</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About Water Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <AlertCircle className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <p className="font-medium">Feature Coming Soon</p>
                <p className="text-sm text-gray-500">
                  We are working on integrating IoT sensors for real-time water quality monitoring. This will include:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>Real-time pH level monitoring</li>
                  <li>Turbidity measurement</li>
                  <li>Water temperature tracking</li>
                  <li>Water quality alerts</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <p className="font-medium">Technology Stack</p>
                <p className="text-sm text-gray-500">
                  Our water monitoring system will utilize:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>High-precision water quality sensors</li>
                  <li>ESP8266 microcontrollers</li>
                  <li>Real-time data processing</li>
                  <li>Cloud-based analytics platform</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-green-500 mt-1" />
              <div>
                <p className="font-medium">Benefits</p>
                <p className="text-sm text-gray-500">
                  The water monitoring system will help farmers:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-500">
                  <li>Ensure optimal water quality</li>
                  <li>Prevent crop damage from poor water</li>
                  <li>Optimize irrigation schedules</li>
                  <li>Reduce water waste</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WaterDashboard;
