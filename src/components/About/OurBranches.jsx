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
                <h3 className="text-2xl font-semibold text-gray-800 transition">
                  Data Collection
                </h3>
                <p className="text-gray-600">
                  Upload diverse datasets containing various types of
                  information for analysis.
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
                <h3 className="text-2xl font-semibold text-gray-800 transition">
                  Model Training
                </h3>
                <p className="text-gray-600">
                  Allow the AI model to learn patterns and insights from the
                  provided data. This may take some time.
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
                <h3 className="text-2xl font-semibold text-gray-800 transition">
                  Insights Delivery
                </h3>
                <p className="text-gray-600">
                  Receive comprehensive insights and analysis results based on
                  the trained AI model.
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
