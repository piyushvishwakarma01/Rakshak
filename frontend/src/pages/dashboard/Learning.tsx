import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Tractor, Sprout, Droplet, BookmarkPlus } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

const Learning = () => {
  const [message, setMessage] = useState("");

  const learningResources = [
    {
      title: "Introduction to Organic Farming",
      duration: "15 min",
      description: "Learn the fundamentals of organic farming and sustainable agriculture.",
      image: "/images/organic-farming.jpg",
      tags: ["Organic Farming", "Sustainability", "Agriculture"],
    },
    {
      title: "Soil Health Management",
      duration: "20 min",
      description: "Understanding soil composition, testing, and improvement techniques.",
      image: "/images/soil-health.jpg",
      tags: ["Soil Health", "Fertility", "Management"],
    },
    {
      title: "Water Conservation Methods",
      duration: "12 min",
      description: "Efficient irrigation techniques and water management strategies.",
      image: "/images/water-conservation.jpg",
      tags: ["Irrigation", "Conservation", "Management"],
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-white mb-8">AI Learning Hub</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AI Learning Assistant Section */}
        <div className="lg:col-span-2">
          <Card className="bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="bg-green-500 p-2 rounded">
                  <Tractor className="h-5 w-5 text-white" />
                </div>
                AI Learning Assistant
                <div className="ml-auto">
                  <Select defaultValue="English">
                    <SelectTrigger className="w-[120px] bg-black/20 border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="English">English</SelectItem>
                      <SelectItem value="Hindi">Hindi</SelectItem>
                      <SelectItem value="Marathi">Marathi</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-[#0A0A0F] rounded-lg p-6 min-h-[300px]">
                <div className="mb-4">
                  <h3 className="text-xl text-white mb-4">AI Response</h3>
                  <p className="text-gray-300">
                    {message || "Hello! I'm your AI learning assistant. What would you like to learn about today?"}
                  </p>
                </div>
                <div className="mt-4">
                  <textarea
                    className="w-full bg-black/30 text-white rounded-lg p-3 min-h-[100px]"
                    placeholder="Ask me anything about farming..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Button className="mt-2 bg-green-500 hover:bg-green-600">
                    Send Message
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Resources Section */}
        <div>
          <Card className="bg-[#1B2B1B]">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <div className="bg-orange-500 p-2 rounded">
                  <BookmarkPlus className="h-5 w-5 text-white" />
                </div>
                Learning Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {learningResources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-[#0A0A0F] rounded-lg overflow-hidden hover:ring-1 hover:ring-green-500 transition-all cursor-pointer"
                >
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-white font-medium">{resource.title}</h3>
                      <span className="text-sm text-gray-400">{resource.duration}</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{resource.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {resource.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <Button variant="outline" className="bg-green-500/10 text-green-500 border-0 hover:bg-green-500/20">
          <Tractor className="h-5 w-5 mr-2" />
          Farming
        </Button>
        <Button variant="outline" className="bg-gray-500/10 text-gray-300 border-0 hover:bg-gray-500/20">
          <Sprout className="h-5 w-5 mr-2" />
          Soil Health
        </Button>
        <Button variant="outline" className="bg-gray-500/10 text-gray-300 border-0 hover:bg-gray-500/20">
          <Droplet className="h-5 w-5 mr-2" />
          Irrigation
        </Button>
      </div>
    </div>
  );
};

export default Learning; 