import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font bg-zinc-100">
      <div className="container px-5 py-24 mx-auto max-sm:py-5 ">
        <div className="bg-white dark:bg-gray-800 h-full py-6 sm:py-8 lg:py-12">
          <div className="w-full px-4 md:px-8">
            <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
              <div className="flex items-center gap-12">
                <p className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                  Gallery
                </p>
              </div>

              <Link
                to="/"
                className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
              >
                More
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
              {/* <!-- image - start --> */}
              <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <LazyLoadImage
                  src="/Home/Gallery/Reactable_roofings.avif"
                  loading="lazy"
                  alt="Reactable Roofings"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Retractable roofing
                </span>
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <LazyLoadImage
                  src="/Home/Gallery/swming_pool.avif"
                  loading="lazy"
                  alt="Swimming Pool"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Swimming Pool
                </span>
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <LazyLoadImage
                  src="/Home/Gallery/gym.avif"
                  loading="lazy"
                  alt="Gym"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                  Gym
                </span>
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <LazyLoadImage
                  src="/Home/Gallery/Sit_out.avif"
                  loading="lazy"
                  alt="Sit Out"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Sit Out
                </span>
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <LazyLoadImage
                  src="/Home/Gallery/Tensile_walkway.avif"
                  loading="lazy"
                  alt="Tensile Walkway"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Tensile Walkway
                </span>
              </div>
              {/* <!-- image - end --> */}

              {/* <!-- image - start --> */}
              <div
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
              >
                <LazyLoadImage
                  src="/Home/Gallery/puff.avif"
                  loading="lazy"
                  alt="Photo by Magicle"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                PUFF sheet roofing
                </span>
              </div>
              {/* <!-- image - end --> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
