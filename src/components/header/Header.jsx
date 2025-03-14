import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-100 fixed w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
          <a className="" href="/">
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
          </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 text-lg transition hover:text-teal-600"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 text-lg transition hover:text-teal-600"
                    href="/about"
                  >
                    About
                  </a>
                </li>

                <div className="relative">
                  <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer text-gray-900 transition">
                      <p className="flex items-baseline gap-1 text-gray-500 text-lg transition hover:text-teal-600">
                        Communities
                        <span className="transition group-open:rotate-90">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="size-3 -rotate-90 hover:text-teal-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>
                      </p>
                    </summary>

                    <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2 group-open:shadow-xl group-open:p-4 w-60">
                      <ul className="flex flex-col justify-center items-center gap-6 text-sm">
                        <li>
                          <a
                            className="text-gray-500 text-lg transition hover:text-teal-600"
                            href=""
                          >
                            Discover Communities
                          </a>
                        </li>
                        <li>
                          <a
                            className="text-gray-500 text-lg transition hover:text-teal-600"
                            href="#"
                          >
                            Create a Community
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </div>

                <li>
                  <a
                    className="text-gray-500 text-lg transition hover:text-teal-600"
                    href="/events-listing"
                  >
                    Events
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm active:text-teal-600 active:bg-white"
                href="#"
              >
                Login
              </a>

              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-teal-600 active:bg-teal-600 active:text-white"
                  href="#"
                >
                  Register
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
