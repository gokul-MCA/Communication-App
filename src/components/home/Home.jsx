import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const goToService = () => {
    navigate("/events-listing");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold lg:text-6xl">Connect Communities</h1>
        <p className="mt-4 text-lg font-medium text-gray-400">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start mt-14 lg:mt-28">
        <div className="lg:basis-1/2 w-full lg:w-auto px-4">
          <span className="flex flex-col lg:flex-row items-center gap-2">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Unite, Innovate,
            </h2>
            <img
              src="/guy.jpg"
              alt="guy"
              className="h-15 w-20 rounded-3xl hidden lg:block"
              />
          </span>
          <span className="flex flex-col lg:flex-row items-center gap-2 mt-4">
            <img
              src="/hindu-priest.jpg"
              alt="priest"
              className="h-15 w-auto rounded-full hidden lg:block"
              />
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Connect, Inspires
            </h2>
          </span>
          <span className="flex flex-col lg:flex-row items-center gap-2 mt-4">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
              Together
            </h2>
            <img
              src="/8-people.png"
              alt="8-people"
              className="h-15 w-auto rounded-full"
              />
          </span>
          <p className="text-wrap lg:w-md text-center mt-8 text-md">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
          <button
            className="px-4 py-2 lg:px-8 lg:py-3 text-center bg-neutral-700 rounded-lg mt-4 text-white font-medium hover:cursor-pointer"
            onClick={goToService}
            >
            Explore Events →
          </button>
        </div>
        <div className="basis-1/2 flex gap-8 mt-10 lg:mt-0">
          <img
            src="/books.jpg"
            alt="reading-books"
            className="h-32 w-20 md:h-64 md:w-48 lg:h-80 lg:w-48 rounded-full mt-14 transition ease-in-out duration-150 hover:-translate-y-2"
            />
          <img
            src="/community-speech.jpg"
            alt="community-speech"
            className="h-32 w-20 md:h-64 md:w-48 lg:h-80 lg:w-48 rounded-full transition ease-in-out duration-150 hover:-translate-y-2"
            />
          <img
            src="/new-audience.jpg"
            alt="audience-listening"
            className="h-32 w-20 md:h-64 md:w-48 lg:h-80 lg:w-48 rounded-full -mt-14 transition ease-in-out duration-150 hover:-translate-y-2"
            />
        </div>
      </div>
    </div>
  );
};

export default Home;
