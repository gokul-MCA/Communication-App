import React from "react";
import { Link } from "react-router-dom";

const navigation = {
  "About Us": [
    { name: "About", href: "/about" },
    { name: "Company History", href: "/companyhistory" },
  ],
  Social: [
    { name: "GitHub", href: "/faqs" },
    { name: "Instagram", href: "/instagram" },
    { name: "Twitter", href: "/twitter" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl  px-4 sm:px-6 lg:px-8  py-10 lg:py-16 ">
        {/* box */}
        <div className="flex flex-col items-center gap-4 rounded-lg bg-teal-600 px-4 py-4 md:px-10 md:py-6 sm:flex-row sm:justify-between">
          <strong className="text-white text-lg lg:text-xl ">
            Subscribe for Newletter!
          </strong>
          <form className="flex flex-col gap-0 md:flex-row md:gap-6">
            <input
              type="email"
              placeholder="example@domain.com"
              className="px-4 py-2 lg:px-8 lg:py-3 text-center bg-white rounded-lg mt-4 text-neutral-700 font-medium hover:cursor-pointer outline-none "
            />
            <button
              type="submit"
              className="px-4 py-2 lg:px-8 lg:py-3 text-center bg-neutral-700 rounded-lg mt-4 text-white font-medium hover:cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* site map */}
        <div className="mt-8 lg:mt-16 flex justify-around md:grid-cols-5 lg:grid-cols-5  px-4 md:p-0  md:justify-items-center">
          {Object.entries(navigation).map(([category, links]) => (
            <div className="text-left" key={category}>
              <p className="text-sm md:text-base text-black font-bold md:font-semibold lg:font-extrabold inline-block group transition hover:text-secondary">
                {category}
              </p>
              <ul className="mt-2 md:mt-4 lg:mt-6 space-y-2 md:space-y-3 text-sm font-base lg:font-medium">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      className="text-black transition hover:text-secondary text-xs lg:text-sm"
                      to={href}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* social media   */}
        <div className="mt-2 md:mt-3 lg:mt-6 justify-between flex flex-col items-center gap-4 p-6 sm:flex-row">
          <Link className="hidden md:block" to="/">
            <span className="sr-only">Home</span>
            <div
              className="bg-dominant rounded w-10 h-10"
              style={{
                backgroundImage: "url(/vite.svg)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                loading: "lazy",
              }}
            />
          </Link>
          <p className="text-black text-center  mt-2 md:mt-3  text-xs ">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
