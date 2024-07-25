import React from 'react'
import { homeBlog } from '../../data/Home'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className="h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            <div className="container mx-auto px-4 py-8">
                <h3 className="text-4xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-8">
                    Recent Blog
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        homeBlog.map((item, index) => (
                            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden" key={index}>
                                <img
                                    src={item.image}
                                    alt="Headless UI"
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <h4 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300 mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4 two-lines">
                                        {item.para}
                                    </p>
                                    {/* <Link
                                        to="#/"
                                        className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full"
                                    >
                                        Learn More
                                    </Link> */}
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    )
}

export default Blog
