import React from "react";
import HeroImage from "./../../assets/heroimage.png";

const Home = () => {
  return (
    <>
      <section id="home" className="pt-36">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-primary md:text-xl">
                Hello everyone 👋,I'm <span className="block text-dark text-4xl lg:text-5xl">Rancha Adzany</span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-2xl">Frontend Engineer</h2>
              <p className="font-medium text-slate-400 mb-10 leading-relaxed">
                Currently, i love to work on web application using technologies like <spa className="text-dark font-bold">React, Tailwind, Next JS</spa>
              </p>

              <a href="Rancha_Adzany_compressed.pdf" download={true} className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                My resume
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:mt-5 lg:right-0">
                <img src={HeroImage} alt="Rancha Adzany" className="max-w-full mx-auto" />
                <span className="absolute bottom-20 lg:bottom-32 left-1/2 -translate-x-1/2 -z-10 md:scale-125">
                  <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill="#14b8a6"
                      d="M27.7,-45.4C38.2,-41.9,50.7,-39.2,60.3,-31.7C69.8,-24.3,76.5,-12.2,76.8,0.2C77,12.5,70.9,24.9,59.3,28.9C47.8,32.9,30.8,28.4,20,38.6C9.2,48.7,4.6,73.5,-3.8,80.1C-12.3,86.8,-24.6,75.3,-35.7,65.3C-46.9,55.4,-56.9,47,-59.4,36.4C-61.9,25.7,-57,12.9,-57.5,-0.3C-57.9,-13.4,-63.8,-26.8,-61,-37C-58.2,-47.2,-46.8,-54.1,-35.1,-56.9C-23.5,-59.8,-11.8,-58.4,-1.6,-55.7C8.6,-52.9,17.2,-48.8,27.7,-45.4Z"
                      transform="translate(100 100) scale(1.1)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
