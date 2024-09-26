import { Bell, PlayCircle, Search } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="mx-auto flex w-full max-w-xs items-center justify-between py-6 md:max-w-3xl lg:max-w-6xl">
      <a href="#" className="flex flex-row items-center gap-1 text-xl">
        <PlayCircle className="text-red-600" />
        <p>Stream Vibe</p>
      </a>

      <nav>
        <Menubar className="hidden md:flex">
          <MenubarMenu>
            <MenubarTrigger>
              <Link to={"/"}>Home</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link to={"/movies&shows"}>Movies&Shows</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link to={"/support"}>Support</Link>
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>
              <Link to={"/subscriptions"}>Subscriptions</Link>
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </nav>

      <div className="flex flex-row items-center justify-center gap-4">
        <button>
          <Search />
        </button>
        <button>
          <Bell />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
