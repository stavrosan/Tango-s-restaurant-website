import React from "react";
import { CgProfile } from "react-icons/cg";
import bgImg from "../../assets/bgimage.jpg";
import pic2 from "../../assets/pasta2.webp";
import pic3 from "../../assets/pizza.webp";
import pic4 from "../../assets/burger.png";

const ImageList = [
  {
    id: 1,
    img: pic4,
  },
  {
    id: 2,
    img: pic2,
  },
  {
    id: 3,
    img: pic3,
  },
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%",
};

const Hero = () => {
  const [imageId, setImageId] = React.useState(pic3);
  return (
    <div
      style={bgImage}
      className="min-h-[500px] sm:min-h-[600px]
    bg-gray-100 duration-200 flex justify-center items-center">
      <div className="container pb-6 sm:pb-0">
        <div className="grid grid-cols-1
        sm:grid-cols-2">
          <div className="flex flex-col
            justify-center gap-4 pt-12 sm:pt-0
            text-center sm:text-center order-1
            sm:order-1 p-2">
            <h1 data-aos="fade-up" className="text-5xl sm:text-6xl lg:text-7xl 
                font-bold text-white">
              Welcome to{" "}
              <span className="font-serif bg-clip-text brightness-75 text-transparent bg-gradient-to-t from-primaryDark/90 to-secondary">
                   Tango's
                </span>{" "}
                restaurant
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-white">
            At Tango's restaurant, we bring the vibrant flavors of Italy and the world to your table in a warm and 
            welcoming atmosphere!
            </p>
             {/* Button section*/}
             <div data-aos="fade" className='flex justify-center items-center group mt-10
            sm:mt-14'>
                <button className='bg-primary h-[40px] text-white px-3 py-2'>Sign in</button>
                < CgProfile className='inline-block p-2 text-base h-[40px] w-[40px]
                bg-primaryDark text-white' />
            </div>
          </div>
          {/* Image section*/}
          <div className="order-1
            sm:order-1 min-h-[450px] sm:min-h[450px]
            flex justify-center items-center relative">
            {/* Main image section*/}
            <div className="flex justify-center
                items-center h-[300px] sm:h-[300px] overflow-hidden">
              <img src={imageId}
                alt=""
                className="justufy-center items-center max-w-[300px] h-[300px] w-[300px] sm:w-[350px] object-cover mx-auto spin"/>
            </div>
            {/* Image list section*/}
            <div className="flex lg:flex-col lg:top-1/2
                lg:-translate-y-1/2 lg:py-2 mx-4 justify-center
                gap-4 absolute bottom-[0px] lg:-right-10 
                bg-white/30 rounded-full">
              {ImageList.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  className="max-w-[50px] h-[50px]
                         object-cover inline-block
                         hover:scale-105 duration-200 rounded-full"
                      onClick={() => {
                      setImageId(
                       item.id === 1 ? pic4 : item.id === 2 ? pic2 : pic3,
                      );
                   }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
