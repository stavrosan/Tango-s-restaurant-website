import React from 'react';
import bgImg from "../../assets/mesh.webp";
import { GrAddCircle } from "react-icons/gr";

const bagImg = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%",
    position: "relative",
  };

const About = () => {
  return (
    <div style={bagImg} className="py-14">
        <div className="container min-h-[500px] relative z-10">
            <h1 className="text-center mb-20 max-w-[400px]
            mx-auto bg-clip-text text-black text-3xl font-bold">
                About us
            </h1>
            {/* Card section*/}
            <div data-aos="fade" className="bg-white/60 p-10 my-10">
            At Tango's restaurant, we bring the vibrant flavors of Italy and the world to your table in a warm and welcoming atmosphere.
             Located in the heart of Vienna, our restaurant is a haven for food lovers who appreciate the 
             artistry of traditional Italian cuisine. Whether you're in the mood for a perfectly baked pizza, 
             a mouthwatering burger, or a comforting plate of pasta, our diverse menu has something to delight every palate. 
             Our chefs use only the freshest ingredients, ensuring that each dish is a true celebration of taste and quality. 
             Join us for a memorable dining experience where every meal is crafted with passion and served with a smile. 
             Buon appetito!
                {/* Button section*/}
            <div data-aos="fade" className='flex justify-center items-center group mt-10
            sm:mt-14'>
                <button className='bg-primary h-[40px] text-white px-3 py-2'>Learn more</button>
                <GrAddCircle className='inline-block p-2 text-base h-[40px] w-[40px]
                bg-primaryDark text-white' />
            </div>
            </div>
        </div>
    </div>
  );
};

export default About;