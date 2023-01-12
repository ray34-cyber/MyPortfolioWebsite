import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const links = [
    {
      id: 1,
      href: "#home",
      text: "Home",
    },
    {
      id: 2,
      href: "#about",
      text: "About",
    },
    {
      id: 3,
      href: "#portfolio",
      text: "Portfolio",
    },
  ];

  window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  };

  function handleButtonNav() {
    const button = document.getElementById("button");
    button.classList.toggle("hamburger-active");
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("hidden");
  }

  return (
    <>
      <header className="w-full">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-4xl font-signature font-bold text-primary">
            <a href="#home">Rancha Adzany</a>
          </h1>

          <div className="relative">
            <div id="button" className="lg:hidden">
              <input type="checkbox" className="absolute z-[1] w-[38px] h-[30px] top-[5.5px] -left-1 opacity-0 cursor-pointer" onClick={() => handleButtonNav()} />
              <span className="hamburger-line origin-top-left translate-x-[-1px] translate-y-[-1px] transition duration-300 ease-in-out"></span>
              <span className="hamburger-line translate-x-[-1px] transition duration-300 ease-in-out"></span>
              <span className="hamburger-line origin-bottom-left translate-x-[-1px] translate-y-0 transition duration-300 ease-in-out"></span>
            </div>

            <nav id="nav-menu" className="hidden absolute top-10 right-4 w-[200px] bg-white shadow-lg rounded-lg lg:block lg:static lg:w-[650px] lg:bg-transparent lg:shadow-none lg:rounded-none">
              <ul className="lg:flex lg:justify-evenly">
                {links.map(({ id, href, text }) => (
                  <li key={id} className="group my-4">
                    <a href={href} className="group-hover:text-primary mx-4 lg:text-xl">
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
