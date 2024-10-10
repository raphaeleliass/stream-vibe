import { Heart, Menu, PlayCircle, Search, X } from "lucide-react";
import { Menubar, MenubarMenu, MenubarTrigger } from "../ui/menubar";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: countFav } = useQuery({
    queryKey: ["count-content"],
    queryFn: () => {
      const response = JSON.parse(
        localStorage.getItem("favorite-Movies") || "[]",
      );
      return response;
    },
    refetchInterval: 1000,
  });

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <header className="sticky inset-0 z-40 mx-auto flex w-full items-center justify-between bg-background py-6 md:static">
      <div className="z-50 mx-auto flex w-full max-w-xs flex-row justify-between md:max-w-3xl lg:max-w-6xl">
        <Link
          to={"/"}
          className="z-50 flex flex-row items-center gap-1 text-xl"
        >
          <PlayCircle className="text-red-600" />

          <p>Stream Vibe</p>
        </Link>
        <nav className={`navbar ${menuOpen && "active"}`}>
          <Menubar className="flex h-44 w-full max-w-xs flex-col justify-around md:h-auto md:max-w-min md:flex-row">
            <MenubarMenu>
              <MenubarTrigger onClick={toggleMenu}>
                <Link to={"/"}>Home</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={toggleMenu}>
                <Link to={"/movies&shows"}>Movies&Shows</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={toggleMenu}>
                <Link to={"/support"}>Support</Link>
              </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger onClick={toggleMenu}>
                <Link to={"/subscriptions"}>Subscriptions</Link>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </nav>
        <div className="z-50 flex flex-row items-center justify-center gap-4">
          <button>
            <Search />
          </button>
          <button className="relative">
            <Link to="/liked">
              <Heart />

              <span
                className={`absolute right-0.5 top-1/2 size-4 flex-col items-center justify-center rounded-full bg-red-600 text-[8px] font-bold md:text-xs ${countFav?.length === 0 ? "hidden" : "flex"}`}
              >
                {countFav?.length}
              </span>
            </Link>
          </button>

          <button className="block md:hidden" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {menuOpen && (
          <div
            className="fixed inset-0 z-30 min-h-dvh overflow-y-clip bg-black bg-opacity-70 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;
