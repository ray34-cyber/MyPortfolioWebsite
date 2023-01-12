import React from "react";
import portfolio1 from "./../../assets/portfolio1.png";
import portfolio2 from "./../../assets/portfolio2.png";
import portfolio3 from "./../../assets/portfolio3.png";
import portfolio4 from "./../../assets/portfolio4.png";

const Portfolio = () => {
  return (
    <>
      <section id="portfolio" className="pt-36 pb-16 bg-slate-100">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-lg text-primary mb-2">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
              <p className="font-medium text-md text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, iste qui possimus iure corporis amet itaque labore voluptatibus a soluta?</p>
            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://ray-movie.vercel.app" target="_blank" rel="noreferrer">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={portfolio1} alt="Ray Movie" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">Ray Movie</h3>
              </a>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae autem fugit.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://todo-app-project-puce.vercel.app" target="_blank" rel="noreferrer">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={portfolio2} alt="Todo App" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">Todo App</h3>
              </a>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae autem fugit.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://my-portfolio-website-mu-three.vercel.app/">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={portfolio3} alt="My Portfolio" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">My Portfolio</h3>
              </a>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae autem fugit.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
              <a href="https://advice-project-phi.vercel.app">
                <div className="rounded-md shadow-md overflow-hidden">
                  <img src={portfolio4} alt="Advice Project" />
                </div>
                <h3 className="font-semibold text-dark text-xl mt-5 mb-3 ">Advice Project</h3>
              </a>
              <p className="font-medium text-base text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus recusandae autem fugit.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
