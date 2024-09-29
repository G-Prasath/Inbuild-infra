import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { careerValSchema } from "../Schema";
import { CareerFormData } from "../../hooks/DataPass";

const CareerForm = () => {
  const list = [
    "Sales Executive",
    "Digital Marketing",
    "Web Developer",
    "Finance",
    "Sales Manager",
  ];
  const [loading, setLoading] = useState(false);

  return (
    <div className="bg-gray-800">
      <div className="pt-10">
        <div className="p-4 md:p-8">
          <h1 className="text-white text-center pb-8 font-light text-4xl md:text-5xl lg:text-6xl">
            Contact Me
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
              select: "",
              resume: "",
            }}
            validationSchema={careerValSchema}
            onSubmit={async (values, {resetForm}) => {
              setLoading(true);
              try {
                setTimeout(() => {
                  setLoading(false);
                  resetForm();
              }, 1000);
                const { data, error } = await CareerFormData(values);
                resetForm();
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {() => (
              <Form className="flex flex-col items-center">
                <div className=" max-sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 w-full">
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                        className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:mr-2 outline-none"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="form-error"
                      />
                    </div>

                    <div className="md:w-1/2 w-full">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full md:ml-2 outline-none"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="form-error"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-5">
                    <div className="md:w-1/2 w-full">
                      <Field
                        id="phone"
                        name="phone"
                        type="text"
                        autoComplete="off"
                        placeholder="Phone Number"
                        className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="form-error"
                      />
                    </div>

                    <div className="w-full md:w-1/2">
                      <Field
                        id="select"
                        as="select"
                        name="select"
                        className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none"
                      >
                        <option value="">Select Role</option>
                        {list.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="select"
                        component="div"
                        className="form-error"
                      />
                    </div>
                  </div>

                  <Field name="resume">
                    {({ field, form }) => (
                      <div>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          autoComplete="off"
                          className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none"
                          onChange={(event) => {
                            form.setFieldValue("resume", event.currentTarget.files[0]);
                          }}
                        // Do not spread field props here, as file inputs should not be controlled via value
                        />
                      </div>
                    )}
                  </Field>
                  <ErrorMessage
                    name="resume"
                    component="div"
                    className="form-error"
                  />

                  <Field
                    id="message"
                    as="textarea"
                    rows="5"
                    name="message"
                    placeholder="Message"
                    className="my-2 py-2 px-4 rounded-md bg-gray-900 text-gray-300 w-full outline-none focus:ring-2 focus:ring-blue-600"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="form-error"
                  />
                </div>
                <button
                type="submit"
                  disabled={loading}
                  className="border-2 text-md mt-5 rounded-md py-2 px-4 bg-blue-600 hover:bg-blue-700 text-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {loading ? "Submitting..." : "Send Message"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CareerForm;
