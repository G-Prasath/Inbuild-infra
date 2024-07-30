import React from "react";
import { Reveal } from "../../hooks/Reveal";

const OurBranches = () => {
  return (
    <>
      <div className="w-full flex justify-center">
        <p className="sm:text-4xl text-2xl font-bold">Our Branches</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-4 md:p-8">
        {/* Step 1 */}
        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-50">
              <span className="font-bold text-xl text-green-600">1</span>
            </div>
            <div className="space-y-4">
              <Reveal>
                <p className="text-xl font-semibold text-gray-800 transition mb-3">
                Inbuilt Infra - Ashok Nagar
                </p>
                <p className="text-gray-600">
                First Floor, ZUBII Manor bearion O No.27E/N 57E at 7th Avenue, Ashok Nagar, Chennai-600083.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
              <span className="font-bold text-xl text-orange-600">2</span>
            </div>
            <div className="space-y-4">
              <Reveal>
                <p className="text-xl font-semibold text-gray-800 transition mb-3">
                Inbuilt Infra - Little Mount
                </p>
                <p className="text-gray-600">
                No.19/35, V191, First Floor, Mount Road, Little Mount, Chennai-600015.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div className="space-y-12">
            <div className="m-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-50">
              <span className="font-bold text-xl text-purple-600">3</span>
            </div>
            <div className="space-y-4">
              <Reveal>
                <p className="text-xl font-semibold text-gray-800 transition mb-3">
                Inbuilt Infra - Bangalore
                </p>
                <p className="text-gray-600">
                No.154/20, situated on the third floor of the building Name Royal Space, 5th Main, HSR Layout 7th Sector Madina Nagar, Bommanahalli, Bangalore-Karnataka-560102.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBranches;
