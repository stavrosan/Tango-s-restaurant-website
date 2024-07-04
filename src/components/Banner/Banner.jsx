import React from 'react';
import pic2 from "../../assets/pasta2.webp";
import pic3 from "../../assets/pizza.webp";
import pic4 from "../../assets/burger.png";
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="container p-10 relative">
        <div className='relative'>
            <h1 className='text-center mb-20 max-w-[400px]
           mx-auto bg-clip-text
          text-black text-3xl font-bold'>
                Taste the difference
            </h1>
            <div className='space-y-10'>
                <div className='grid grid-cols-1
                sm:grid-cols-2 gap-4 py-10'>
                    <div>
                        <p data-aos="fade-up">
                            {" "}
                            We know that <span className='text-primary'>time is a valuable thing
                            </span>. Our healthy meals
                            are prepared with love and kindness. <span className='text-primary'>Our pasta
                            </span> dishes 
                            are a true homage to traditional Italian cuisine, made with love and the finest ingredients. 
                            From rich, creamy Alfredo to tangy Marinara, our sauces are crafted to perfection, 
                            enhancing the taste of our freshly cooked pasta. Choose from a variety of pasta types, 
                            including spaghetti, fettuccine, penne, and more. Our menu features a range of classic and contemporary dishes, 
                            such as Spaghetti Carbonara, Penne Arrabbiata, and Lasagna Bolognese. Each plate is a journey through 
                            the heart of Italy, promising an unforgettable dining experience.
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='grid grid-cols-1
                sm:grid-cols-2 gap-4 py-10'>
                    <div></div>
                    <div>
                        <p data-aos="fade-up">
                            {" "}
                            <span className='text-primary'>Our burgers
                            </span>  are a celebration of quality and taste. 
                            We use only the juiciest, premium beef patties, seasoned and grilled to perfection. 
                            Our burgers are served on freshly baked buns, with a choice of classic or gourmet toppings. 
                            Enjoy the rich flavors of melted cheese, crispy lettuce, ripe tomatoes, and tangy pickles, 
                            all complemented by our signature sauces. Our pizzas are crafted with passion and precision, 
                            featuring a perfect blend of traditional Italian flavors and modern culinary techniques. 
                            <span className='text-primary'> Each pizza
                            </span> starts with our hand-tossed dough, made fresh daily and baked to crispy perfection in our stone oven. 
                            We top our pizzas with the finest ingredients, from zesty tomato sauce and creamy mozzarella to a variety 
                            of fresh vegetables, savory meats, and aromatic herbs.
                        </p>
                    </div>
                </div>
            </div>
            {/* Button section*/}
            <div data-aos="fade" className='flex justify-center items-center group mt-10
            sm:mt-14'>
                <button className='bg-primary h-[40px] text-white px-3 py-2'>Order now</button>
                <FaArrowAltCircleRight className='inline-block p-2 text-base h-[40px] w-[40px]
                bg-primaryDark text-white' />
            </div>
            {/* Images section*/}
            <div data-aos="fade-right" className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50
            sm:opacity-100 -z-30'>
                <img src={pic2} alt="" className='max-w-[180px]'/>
            </div>
            <div data-aos="fade-left" className='absolute top-24 -right-16 sm:bottom-0 sm:right-20 opacity-50
            sm:opacity-100 -z-30'>
                <img src={pic3} alt="" className='max-w-[160px]'/>
            </div>
            <div data-aos="fade" className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50
            sm:opacity-100 -z-30'>
                <img src={pic4} alt="" className='max-w-[120px]'/>
            </div>
        </div>
    </div>
  );
};

export default Banner;