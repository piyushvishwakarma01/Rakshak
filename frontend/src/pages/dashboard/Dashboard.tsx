import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Leaf, Droplet, Thermometer, Sun, AlertCircle, Info, BookOpen, Bot } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="space-y-8 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Agricultural Dashboard</h1>
        <div className="flex items-center gap-2 text-primary bg-primary-50 px-4 py-2 rounded-lg">
          <Leaf className="h-5 w-5" />
          <span>Real-time Monitoring</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/dashboard/learning">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bot className="h-5 w-5 text-green-500" />
                AI Learning Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Get personalized farming guidance</p>
                <div className="flex items-center gap-2 text-green-500">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">Active Assistant</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/crop-health">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Leaf className="h-5 w-5 text-green-500" />
                Crop Health
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Monitor and detect crop diseases</p>
                <div className="flex items-center gap-2 text-green-500">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">Active Monitoring</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/soil">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Thermometer className="h-5 w-5 text-orange-500" />
                Soil Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Analyze soil conditions and health</p>
                <div className="flex items-center gap-2 text-orange-500">
                  <Info className="h-4 w-4" />
                  <span className="text-sm">Coming Soon</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/water">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Droplet className="h-5 w-5 text-blue-500" />
                Water Quality
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Monitor water quality and irrigation</p>
                <div className="flex items-center gap-2 text-blue-500">
                  <Info className="h-4 w-4" />
                  <span className="text-sm">Coming Soon</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/weather">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Sun className="h-5 w-5 text-yellow-500" />
                Weather & Climate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Track weather conditions and forecasts</p>
                <div className="flex items-center gap-2 text-yellow-500">
                  <Info className="h-4 w-4" />
                  <span className="text-sm">Coming Soon</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link to="/dashboard/learning">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-purple-500" />
                Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-gray-300">Access farming guides and tutorials</p>
                <div className="flex items-center gap-2 text-purple-500">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Card className="bg-[#1B2B1B]">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link to="/dashboard/learning">
              <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Bot className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-medium text-white">Ask AI Assistant</h3>
                  <p className="text-sm text-gray-300">Get farming guidance</p>
                </div>
              </div>
            </Link>

            <Link to="/dashboard/crop-health">
              <div className="flex items-center gap-4 p-4 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-colors">
                <Leaf className="h-8 w-8 text-green-500" />
                <div>
                  <h3 className="font-medium text-white">Upload Crop Image</h3>
                  <p className="text-sm text-gray-300">Get instant disease detection</p>
                </div>
              </div>
            </Link>

            <Link to="/dashboard/learning">
              <div className="flex items-center gap-4 p-4 bg-purple-500/10 rounded-lg hover:bg-purple-500/20 transition-colors">
                <BookOpen className="h-8 w-8 text-purple-500" />
                <div>
                  <h3 className="font-medium text-white">Browse Resources</h3>
                  <p className="text-sm text-gray-300">Access farming guides</p>
                </div>
              </div>
            </Link>

            <Link to="/dashboard/weather">
              <div className="flex items-center gap-4 p-4 bg-yellow-500/10 rounded-lg hover:bg-yellow-500/20 transition-colors">
                <Sun className="h-8 w-8 text-yellow-500" />
                <div>
                  <h3 className="font-medium text-white">Weather Forecast</h3>
                  <p className="text-sm text-gray-300">View weather conditions</p>
                </div>
              </div>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard; 