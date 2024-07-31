import React, { useContext } from "react";
import { Reveal } from "../../hooks/Reveal";
import { Link } from "react-router-dom";
import { ScrollContext } from "../../hooks/ScrollContext";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../Schema";
import { selectBtnDatas } from "../../data/Navbar";


const HomeForm = () => {
const {formElement} = useContext(ScrollContext);
  return (
    <section className="text-gray-600 body-font relative" ref={formElement}>
      <div className="text-center">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
          Get in Touch
        </p>
        <p className="text-2xl sm:text-4xl leading-normal font-[600] tracking-tight text-gray-900">
          Contact Us
        </p>
      </div>

      <div className="container px-5 py-20 max-sm:py-5 mx-auto flex sm:flex-nowrap flex-wrap icon">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.073152896412!2d80.21082387621404!3d13.031013480826513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671c2be4d445%3A0x8ca67ca50b1e39a2!2s7th%20Ave%2C%20Mettuppalayam%2C%20Ashok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600083!5e0!3m2!1sen!2sin!4v1721924295060!5m2!1sen!2sin"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.7)" }}
          ></iframe>

          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <Reveal>
                <p className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </p>
                <p className="mt-1">
                First Floor, ZUBII Manor bearion O No.27E/N 57E at 7th Avenue, Ashok Nagar, Chennai-600083.
                </p>
              </Reveal>
            </div>

            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <Reveal>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <Link
                  to="mailto:inbuiltinfra@gmail.com"
                  className="text-indigo-500 leading-relaxed"
                >
                  inbuiltinfra@gmail.com
                </Link>
              </Reveal>
              <Reveal>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <Link to="tel:+917823967391" className="leading-relaxed">
                  +91 782-396-7391
                </Link>
              </Reveal>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            message: "",
            select: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ touched, errors }) => (
            <Form className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" id="homeForm">

              {/* Username */}
              <div className="relative mb-4">
                <Reveal>
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                </Reveal>

                <Field
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${touched.name && errors.name ? 'form-input-error' : ''} `}
                />

                <ErrorMessage name="name" component="div" className="form-error" />
              </div>

              {/* Email */}
              <div className="relative mb-4">
                <Reveal>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                </Reveal>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${touched.email && errors.email ? 'form-input-error' : ''}`}
                />
                <ErrorMessage name="email" component="div" className="form-error" />
              </div>

              {/* Phone */}
              <div className="relative mb-4">
                <Reveal>
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                </Reveal>
                <Field
                  type="text"
                  id="phone"
                  name="phone"
                  autoComplete="off"
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${touched.phone && errors.phone ? 'form-input-error' : ''}`}
                />
                <ErrorMessage name="phone" component="div" className="form-error" />
              </div>

              {/* Select */}
              <div className="relative mb-4">
                <label htmlFor="select" className="leading-7 text-sm text-gray-600">Select</label>
                <Field
                  as="select"
                  id="select"
                  name="select"
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out ${touched.select && errors.select ? 'form-input-error' : ''}`}
                >
                  <option value="">Please select an Service</option>
                  {selectBtnDatas.map((item, index) => (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="select" component="div" className="form-error" />
              </div>

              {/* Message */}
              <div className="relative mb-4">
                <Reveal>
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                </Reveal>
                <Field
                  id="message"
                  name="message"
                  as="textarea"
                  autoComplete="off"
                  className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-28 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${touched.message && errors.message ? 'form-input-error' : ''}`}
                ></Field>
                <ErrorMessage name="message" component="div" className="form-error" />
              </div>

              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default HomeForm;
