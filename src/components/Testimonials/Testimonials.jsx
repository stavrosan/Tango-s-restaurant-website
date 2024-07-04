import React from 'react';
import Slider from 'react-slick';
import pic1 from "../../assets/avatar_user.png";
import pic2 from "../../assets/tarantino.jpg";
import pic3 from "../../assets/nirv.png";


const testimonialData = [
    {
      id: 1,
      name: "Nick A.",
      text: "I visited Tango's with my family, and we were all blown away by the quality of the food. The pizzas were absolutely delicious, and the pasta was cooked to perfection.",
      img: pic1,
    },
    {
      id: 1,
      name: "John",
      text: "Tango's is a hidden gem! The atmosphere is cozy and inviting, and the staff is incredibly friendly. I had the best burger I've ever tasted here. Highly recommend!",
      img: pic2,
    },
    {
      id: 1,
      name: "Jane Mrd",
      text: "Finally, a place that serves authentic Italian food! The flavors are spot on, and the ingredients are fresh. The Margherita pizza and Carbonara pasta are must-tries.",
      img: pic3,
    },
  ];

const Testimonials = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };

 return (
    <>
    <div className='py-14'>
       <div className='container'>
       {/* Header */}
       <div className="text-center mb-20 max-w-[400px]
        mx-auto">
          <h1 className="text-3xl font-bold p-2">Testimonials</h1>
          <p className="text-black-400">
            Our customers experiences!
          </p>
        </div>
        { /* Testimonials */}
        <div className="grid grid-cols-1 max-w-[600px] mx-auto gap-6">
          <Slider {...settings}>
            {testimonialData.map(({ id, name, text, img})=>{
              return(
              <div className="my-6">
              <div 
                key={id}
                className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl bg-slate-100 relative">
                <img
                  className="rounded-full block mx-auto object-cover max-w-[170px] max-h-[120px]"
                  src={img} 
                  alt=""/>
                <p className="text-gray-500 text-sm">{text}</p>
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                </p>
              </div>
            </div>
            );
           })}
          </Slider>
        </div>
      </div> 
    </div>
    </>
  );
};

export default Testimonials;