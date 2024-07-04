import React from "react";
import pic2 from "../../assets/pasta2.webp";
import pic3 from "../../assets/pizza.webp";
import pic4 from "../../assets/burger.png";

const ServicesData = [
  {
    id: 1,
    img: pic2,
    name: "Pasta",
    description:
      "Our pasta dishes are a true homage to traditional Italian cuisine, made with love and the finest ingredients.",
  },
  {
    id: 2,
    img: pic3,
    name: "Pizza",
    description:
      "Our pizzas are crafted with passion and precision, featuring a perfect blend of traditional Italian flavors.",
  },
  {
    id: 3,
    img: pic4,
    name: "Burger",
    description:
      " Our burgers are served on freshly baked buns, with a choice of classic or gourmet toppings.",
  },
];

const Services = () => {
  return (
  <>
    <div className="py-14">
      <div className="container p-2">
        {/* Header */}
        <div className="text-center mb-20 max-w-[400px]
        mx-auto">
          <h1 className="text-3xl font-bold p-2">Specialties</h1>
          <p className="text-black-400">
          Savor the rich, authentic flavors of our signature pizzas, 
          each one crafted with hand-tossed dough and premium toppings. Indulge in our gourmet burgers, 
          made with juicy, high-quality patties and fresh ingredients. 
          Don't miss our exquisite pasta creations, featuring homemade sauces and perfectly cooked pasta.
          </p>
        </div>
        {/* Cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-1 
          md:grid-cols-3 gap-16 md:gap-4 place-items-center">
            {ServicesData.map(({ id, img, name, description}) => {
              return (
                <div data-aos="fade-up"
                key={id}
                className="max-w-[300px] group rounded-2xl bg-white
                hover:bg-primaryDark/40 hover:text-white duration-300
                p-4 shadow-xl">
                  <div className="h-[100px]">
                    <img src={img} alt="" 
                    className="max-w-[200px] h-[150px] mx-auto
                    transform -translate-y-14
                  group-hover:scale-105 object-cover group-hover:rotate-6 duration-300"/>
                  </div>
                  <div className="p-4 text-center">
                    <h1 className="text-xl font-bold">{name}</h1>
                    <p className="text-gray-500 group-hover:text-white 
                     duration-300 text-sm">{description}</p>
                  </div>
                </div>
              )}
             )}
          </div>
        </div>
       </div>
    </div>
  </>
  );
};

export default Services;
