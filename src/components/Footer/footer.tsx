import {
  TbBrandFacebook,
  TbBrandLinkedin,
  TbBrandTwitter,
} from "react-icons/tb";
import { Separator } from "../ui/separator";

function Footer() {
  const footerData = [
    {
      title: "Home",
      items: ["Categories", "Devices", "Pricing", "FAQ"],
    },
    {
      title: "Movies",
      items: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
      title: "Shows",
      items: ["Genres", "Trending", "New Release", "Popular"],
    },
    {
      title: "Support",
      items: ["Contact Us"],
    },
    {
      title: "Subscription",
      items: ["Plans", "Features"],
    },
  ];

  return (
    <footer className="relative flex flex-col items-center justify-between bg-black px-6 pb-32 pt-12">
      <div className="flex flex-row flex-wrap justify-center gap-12">
        {footerData.map((item) => (
          <ul key={item.title}>
            <li className="font-semibold">
              {item.title}
              <ul>
                {item.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm font-normal text-muted-foreground"
                  >
                    <a href="#" className="underline-offset-2 hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
        <ul>
          <li>
            Contact us
            <ul className="flex flex-row items-center justify-center gap-2">
              <li>
                <a href="#">
                  <TbBrandLinkedin />
                </a>
              </li>
              <li>
                <a href="#">
                  <TbBrandTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <TbBrandFacebook />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-0 flex flex-col items-center justify-center gap-x-4 text-xs md:flex-row">
        <p>@2023 streamvibe, All Rights Reserved</p>
        <span className="flex flex-row items-center justify-center gap-4">
          <p>Terms of Use</p>
          <Separator className="h-12 w-px" />
          <p>Privacy Policy</p>
          <Separator className="h-12 w-px" />
          <p>Cookie Policy</p>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
