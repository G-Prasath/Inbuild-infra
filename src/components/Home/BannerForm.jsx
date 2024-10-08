import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../Schema";
import { selectBtnDatas } from "../../data/Navbar";
import { QueryForm } from "../../hooks/DataPass";

const BannerForm = () => {
    const [loading, setLoading] = useState(false);
    return (
        <div className="lg:p-10 p-5 w-full bg-white/30 backdrop-blur-xl border border-white/20 rounded-lg shadow-lg">
            <h5 className="text-center text-xl font-bold text-gray-800">Get Free Quote</h5>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    select: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm }) => {
                    setLoading(true);
                    try {
                        setTimeout(() => {
                            setLoading(false);
                            resetForm();
                        }, 1000);
                        const { data, error } = await QueryForm(values);
                        resetForm()
                    } catch (error) {
                        console.log(error);
                    }

                }}
            >
                {({ touched, errors }) => (
                    <Form className="grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-bold text-gray-800 dark:text-slate-400"
                            >
                                Name
                            </label>
                            <div className="">
                                <Field
                                    name="name"
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 text-slate-700"
                                />
                                <ErrorMessage
                                    name="name"
                                    component="div"
                                    className="form-error"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold text-gray-800 dark:text-slate-400"
                            >
                                Email
                            </label>
                            <div className="">
                                <Field
                                    name="email"
                                    id="email"
                                    type="email"
                                    autoComplete="off"
                                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 text-slate-700"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="form-error"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-bold text-gray-800 dark:text-slate-400"
                            >
                                Phone
                            </label>
                            <div className="mt-1">
                                <Field
                                    name="phone"
                                    id="phone"
                                    type="text"
                                    autoComplete="off"
                                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 text-slate-700"
                                />
                                <ErrorMessage
                                    name="phone"
                                    component="div"
                                    className="form-error"
                                />
                            </div>
                        </div>
                        {/* Select */}
                        <div className="sm:col-span-2">
                            <label
                                htmlFor="select"
                                className="leading-7 text-sm text-gray-800 font-bold"
                            >
                                Services
                            </label>
                            <Field
                                as="select"
                                id="select"
                                name="select"
                                className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-800 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                            >
                                <option value="">Please select an Service</option>
                                {selectBtnDatas.map((item, index) => (
                                    <option value={item} key={index}>
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
                        <div className="sm:col-span-2 mb-2">
                            <label
                                htmlFor="message"
                                className="block text-sm font-bold text-gray-800 dark:text-slate-400"
                            >
                                Message
                            </label>
                            <div className="mt-1">
                                <Field
                                    name="message"
                                    id="message"
                                    autoComplete="off"
                                    rows="2"
                                    as="textarea"
                                    className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 text-slate-700"
                                ></Field>
                                <ErrorMessage
                                    name="message"
                                    component="div"
                                    className="form-error"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end sm:col-span-2">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center rounded-md px-4 py-2 font-bold focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-gray-800 border border-white hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed"
                            >
                                {loading ? "Submiting..." : "Send Message"}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default BannerForm
