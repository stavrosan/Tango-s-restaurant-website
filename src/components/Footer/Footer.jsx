import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import footerLogo from "../../assets/DJANGO_LOGO.png";

const Footer = () => {
  return (
    <> 
    <div className="container bg-gradient-to-b from-primaryDark/70 to-secondary rounded-t-3xl">
    <section className="max-w-[1200px] mx-auto text-white">
      <div className=" grid md:grid-cols-3 border-b-2 border-white pb-6">
        <div className=" py-8 px-4 ">
          <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
            <img src={footerLogo} alt="Logo" className="max-w-[50px] bg-white p-1 rounded-lg" />
            TANGO'S RESTAURANT
          </h1>
          <h2 className="font-bold">
            CONTACT US{" "}
          </h2>
          <br />
          <div className="flex items-center gap-3">
            <FaLocationArrow />
            <p>Vienna, Austria</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <FaMobileAlt />
            <p>+43 23114455</p>
          </div>
          {/* Social Handle */}
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className={`flex flex-col gap-3`}>
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Other links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Recipes</li>
                <li className="cursor-pointer">Privacy policy</li>
                <li className="cursor-pointer">Regulations</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Info
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Supply</li>
                <li className="cursor-pointer">Join the newsletter</li>
                <li className="cursor-pointer">Check the order status</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          @Copyright 2024. All rights reserved 
        </div>
      </div>
    </section>
  </div></>
  );
};

export default Footer;