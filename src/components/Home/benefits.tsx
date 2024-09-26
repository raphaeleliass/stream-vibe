import { Gamepad, Headset, Laptop, Smartphone, Tablet, Tv } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function Benefits() {
  const devices = [
    {
      title: "Smartphones",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Tablets",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Smart TVs",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Laptops",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "Gaming Consoles",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
    {
      title: "VR Headsets",
      desc: "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {devices.map((item) => (
        <Card
          key={item.title}
          className="bg-gradient-to-tr from-background via-background to-red-950"
        >
          <CardHeader className="flex flex-row items-center gap-4">
            <Card className="flex items-center justify-center p-4 text-red-600">
              {item.title === "Smartphones" && <Smartphone />}
              {item.title === "Tablets" && <Tablet />}
              {item.title === "Smart TVs" && <Tv />}
              {item.title === "Laptops" && <Laptop />}
              {item.title === "Gaming Consoles" && <Gamepad />}
              {item.title === "VR Headsets" && <Headset />}
            </Card>

            <CardTitle className="text-lg">{item.title}</CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription>{item.desc}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default Benefits;
