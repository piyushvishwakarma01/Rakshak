import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Sun, Cloud, CloudRain, Wind, Info } from "lucide-react";

const WeatherDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Weather Monitoring</h1>
        <div className="flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-lg">
          <Sun className="h-5 w-5" />
          <span>Coming Soon</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-[#1B2B1B]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Sun className="h-5 w-5 text-yellow-500" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-white">Coming Soon</div>
              <p className="text-sm text-gray-300 mt-2">Real-time temperature monitoring</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1B2B1B]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Cloud className="h-5 w-5 text-blue-500" />
              Humidity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-white">Coming Soon</div>
              <p className="text-sm text-gray-300 mt-2">Humidity level tracking</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1B2B1B]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <CloudRain className="h-5 w-5 text-blue-500" />
              Rainfall
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-white">Coming Soon</div>
              <p className="text-sm text-gray-300 mt-2">Precipitation forecast</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1B2B1B]">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Wind className="h-5 w-5 text-gray-400" />
              Wind Speed
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <div className="text-2xl font-bold text-white">Coming Soon</div>
              <p className="text-sm text-gray-300 mt-2">Wind conditions</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#1B2B1B]">
        <CardHeader>
          <CardTitle className="text-white">About Weather Monitoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-yellow-500 mt-1" />
              <div>
                <p className="font-medium text-white">Feature Coming Soon</p>
                <p className="text-sm text-gray-300">
                  We are working on integrating real-time weather monitoring. This will include:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
                  <li>Real-time temperature tracking</li>
                  <li>Humidity monitoring</li>
                  <li>Rainfall predictions</li>
                  <li>Wind speed analysis</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Info className="h-5 w-5 text-blue-500 mt-1" />
              <div>
                <p className="font-medium text-white">Benefits</p>
                <p className="text-sm text-gray-300">
                  The weather monitoring system will help farmers:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
                  <li>Plan irrigation schedules</li>
                  <li>Protect crops from adverse weather</li>
                  <li>Optimize planting times</li>
                  <li>Make informed farming decisions</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherDashboard; 