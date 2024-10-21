import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavMenuItemsType } from "../../interfaces/Interfaces";
import {
  matchPath,
  NavigateFunction,
  useLocation,
  useNavigate,
} from "react-router-dom";
const Navbar = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("home");
  const { pathname } = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const routes = ["/", "/plan"];
  useEffect(() => {
    const matchedRoute = routes.find((el) => matchPath(el, pathname));
    if (matchedRoute == "/") {
      setActiveTab("home");
    } else if (matchedRoute == "/plan") {
      setActiveTab("plan");
    }
  }, []);
  const navMenuItems: NavMenuItemsType[] = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "plan",
      url: "/plan",
    },
  ];
  const handleNavigate = (item: NavMenuItemsType): void => {
    navigate(item.url);
    setActiveTab(item.name);
  };
  return (
    <div>
      <nav className="bg-white border-gray-200 border-b">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-1 ">
            <span className="font-bree text-dark-pink text-2xl sm:text-3xl font-semibold whitespace-nowrap">
              Tripsify
            </span>
          </a>
          <button
            onClick={() => setShowNav(!showNav)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden cursor-pointer focus:bg-gray-200"
          >
            <GiHamburgerMenu size={20} color="black" />
          </button>
          <div
            className={` ${
              showNav ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 space-y-3 md:space-y-0">
              {navMenuItems.map((nit: NavMenuItemsType, i: number) => (
                <li
                  onClick={() => handleNavigate(nit)}
                  key={i}
                  className="cursor-pointer"
                >
                  <div
                    className={`block hover:bg-dark-pink hover:text-white py-2 capitalize px-3 text-black md:py-1 md:px-3 
                    rounded-2xl ${
                      nit.name === activeTab
                        ? "shadow-md border border-gray-400"
                        : "border border-gray-50"
                    } md:hover:scale-90 duration-100  font-poppins`}
                  >
                    {nit.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
