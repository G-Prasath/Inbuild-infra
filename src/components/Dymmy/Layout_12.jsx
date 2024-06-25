import React from 'react'
import { Link } from 'react-router-dom'

const Layout_12 = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                Enjoying my content?
            </h2>
            <p className="my-3 text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
                Consider buying me a coffee to support my work!
            </p>
            <Link to="/" className="my-5">
                <img className="mx-auto h-14" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" />
            </Link>
        </div>
    </div>
</div>
  )
}

export default Layout_12
