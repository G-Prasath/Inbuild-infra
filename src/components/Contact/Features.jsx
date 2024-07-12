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
              <h3 className="text-sm font-medium text-gray-900">Free Shipping</h3>
              <p className="mt-2 text-sm text-gray-500">It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
            </div>
          </div>

          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img className="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg" alt="" />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-sm font-medium text-gray-900">24/7 Customer Support</h3>
              <p className="mt-2 text-sm text-gray-500">Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.</p>
            </div>
          </div>

          <div className="text-center sm:flex sm:text-left lg:block lg:text-center">
            <div className="sm:flex-shrink-0">
              <div className="flow-root">
                <img className="w-28 h-24 mx-auto" src="https://tailwindui.com/img/ecommerce/icons/icon-fast-checkout-light.svg" alt="" />
              </div>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3 lg:mt-3 lg:ml-0">
              <h3 className="text-sm font-medium text-gray-900">Fast Shopping Cart</h3>
              <p className="mt-2 text-sm text-gray-500">Look how fast that cart is going. What does this mean for the actual experience? I don't know.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Features
