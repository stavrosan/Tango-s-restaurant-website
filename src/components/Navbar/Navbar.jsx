import React from "react";
import Logo from "../../assets/DJANGO_LOGO.png";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-gradient-to-b from-slate-200 to-secondary duration-200">
        <div className="container py-3 sm:py-0">
          <div className="flex justify-between items-center">
            <div>
              <a href="#"
                className="flex items-center
                gap-2 text-2xl sm:text-3xl font-bold px-4">
                <img src={Logo} alt="Our restaurant" className="w-10 font-bold" />
                Tango's restaurant
              </a>
            </div>
            <div>
              <ul className="flex items-center lg:gap-10 sm:gap-4">
                <li>
                  <a href="#"
                    className="hidden sm:inline-block py-4 px-4
                    hover:text-primary font-semibold">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#"
                    className="hidden sm:inline-block py-4 px-4
                    hover:text-primary font-semibold">
                    About
                  </a>
                </li>
                <li>
                  <a href="#"
                    className="hidden sm:inline-block py-4 px-4
                    hover:text-primary font-semibold">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
