import React from "react";

const FormAdd = () => {
  return (
    <div>
      <div>
        <section className="mb-32">
          <div
            id="map"
            className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="container px-6 md:px-12">
            <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300">
              <div className="flex flex-wrap">
                <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
                  <form>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleInput90"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        htmlFor="exampleInput90"
                      >
                        Name
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <input
                        type="email"
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleInput91"
                      />
                      <label
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                        htmlFor="exampleInput91"
                      >
                        Email address
                      </label>
                    </div>
                    <div className="relative mb-6" data-te-input-wrapper-init>
                      <textarea
                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none"
                      >
                        Message
                      </label>
                    </div>
                    <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                      <input
                        className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] defaultChecked:border-primary defaultChecked:bg-primary defaultChecked:before:opacity-[0.16] defaultChecked:after:absolute defaultChecked:after:ml-[0.25rem] defaultChecked:after:-mt-px defaultChecked:after:block defaultChecked:after:h-[0.8125rem] defaultChecked:after:w-[0.375rem] defaultChecked:after:rotate-45 defaultChecked:after:border-[0.125rem] defaultChecked:after:border-t-0 defaultChecked:after:border-l-0 defaultChecked:after:border-solid defaultChecked:after:border-white defaultChecked:after:bg-transparent defaultChecked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] defaultChecked:focus:before:scale-100 defaultChecked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] defaultChecked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] defaultChecked:focus:after:ml-[0.25rem] defaultChecked:focus:after:-mt-px defaultChecked:focus:after:h-[0.8125rem] defaultChecked:focus:after:w-[0.375rem] defaultChecked:focus:after:rotate-45 defaultChecked:focus:after:rounded-none defaultChecked:focus:after:border-[0.125rem] defaultChecked:focus:after:border-t-0 defaultChecked:focus:after:border-l-0 defaultChecked:focus:after:border-solid defaultChecked:focus:after:border-white defaultChecked:focus:after:bg-transparent"
                        type="checkbox"
                        value=""
                        id="exampleCheck96"
                        defaultChecked
                      />
                      <label
                        className="inline-block pl-[0.15rem] hover:cursor-pointer"
                        htmlFor="exampleCheck96"
                      >
                        Send me a copy of this message
                      </label>
                    </div>
                    <button
                      type="button"
                      className="mb-6 w-full rounded bg-sky-500 text-white px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal lg:mb-0"
                    >
                      Send
                    </button>
                  </form>
                </div>
                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 11c1.933 0 3.5-1.567 3.5-3.5S13.933 4 12 4 8.5 5.567 8.5 7.5 10.067 11 12 11zm0 0c2.684 0 4.882 1.267 6.315 3.226C19.79 15.542 20.33 17.372 20.46 19.5M12 11c-2.684 0-4.882 1.267-6.315 3.226C4.21 15.542 3.67 17.372 3.54 19.5M14.25 19.5h-4.5m4.5 0h-4.5M14.25 19.5a1.5 1.5 0 01-1.5 1.5m0 0a1.5 1.5 0 01-1.5-1.5m1.5 1.5v1.5m-1.5-1.5v1.5"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Address
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            123 Main Street, Anytown, CA 12345, USA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 2.25l19.5 19.5M2.25 12.75h9M9.75 3.75h4.5M2.25 21.75l8.19-8.19m1.809-1.811l1.5 1.5M9.75 9.75l10.5 10.5m-4.5 0H21a2.25 2.25 0 002.25-2.25V5.25A2.25 2.25 0 0021 3H5.25A2.25 2.25 0 003 5.25v11.25a2.25 2.25 0 002.25 2.25H9.75"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Phone
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +1 234 567 8900
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21v-7m-3 7v-4.5m-9-12v6m0-6h2.25m4.5 0h1.5m-9 0H6a3 3 0 00-3 3v2.25m0 0H21M5.25 9V5.25m0 0V3a3 3 0 013-3h6a3 3 0 013 3v2.25m0 0H5.25m0 0V9m0 12v3a3 3 0 003 3h6a3 3 0 003-3v-3m-3 3v-9.75m-6 9.75v-6m0 6v3m0-3v-9m0 9v-6"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">
                            Email
                          </p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            contact@example.com
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="inline-block rounded-md bg-sky-200 p-4 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 9l-9 9-4.5-4.5m0 0L4.5 14.25m0 0L3 12.75m0-7.5L3.75 8.25m4.5-4.5L10.5 4.5m-6.75 6.75H6m6 0h6.75M12 9v6.75M3.75 10.5L4.5 14.25"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-2 font-bold dark:text-white">Fax</p>
                          <p className="text-neutral-500 dark:text-neutral-200">
                            +1 234 567 8901
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormAdd;
