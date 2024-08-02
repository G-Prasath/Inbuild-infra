import React from 'react'

const Features = () => {
  return (
    <div>
      <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="max-w-2xl mx-auto px-4 grid grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-3">
          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img className="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg" alt="" />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-sm font-medium text-gray-900">Connect with Us
              </h3>
              <p className="mt-2 text-sm text-gray-500">Follow our social media for the latest updates and roofing tips.</p>
            </div>
          </div>

          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img className="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg" alt="" />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-sm font-medium text-gray-900">24/7 Customer Assistance</h3>
              <p className="mt-2 text-sm text-gray-500">Our support team is available day and night for all your roofing needs.</p>
            </div>
          </div>

          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img className="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg" alt="" />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-sm font-medium text-gray-900">Give Us Your Feedback
              </h3>
              <p className="mt-2 text-sm text-gray-500">Share your thoughts and suggestions to help us improve our services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
