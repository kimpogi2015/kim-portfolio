import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MenuBar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location]);

  const menuItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "Projects",
      route: "/projects",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Blog",
      route: "/blog",
    },
  ];
  console.log(active);
  return (
    <div className=" px-20 py-4 flex justify-between items-center">
      <menu className=" flex gap-x-10">
        <h2 className=" px-10"> LOGO HERE</h2>
        {menuItems?.map((obj, i) => {
          if (active === obj.route) {
            return (
              <Link
                onClick={() => {
                  setActive(obj.route);
                }}
                className=" text-yellow-500 no-underline hover:text-yellow-500 text-lg"
                to={obj.route}
                key={i}
              >
                {obj.name}
              </Link>
            );
          }
          return (
            <Link
              onClick={() => {
                setActive(obj.route);
              }}
              className=" text-black no-underline hover:text-yellow-500 text-lg"
              to={obj.route}
              key={i}
            >
              {obj.name}
            </Link>
          );
        })}
      </menu>
      <h2 className=" px-10">BUTTON HERE</h2>
    </div>
  );
};

export default MenuBar;
