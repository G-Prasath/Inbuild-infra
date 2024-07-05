import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
import { Reveal } from "../../hooks/Reveal";

const Applications = () => {
  return (
    <div className="relative overflow-hidden bg-gray-10 pt-5 pb-32 space-y-24">

      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-full lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-10 lg:px-20">

          <div className="mt-12 sm:mt-16 lg:mt-0 ">
            <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-50 lg:h-full lg:px-0">
              <img
                alt="Inbox user interface"
                loading="lazy"
                width="647"
                height="486"
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: "transparent" }}
                src="https://images.unsplash.com/photo-1599134842279-fe807d23316e"
              />
            </div>
          </div>

          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
            <div>
              <div className="mt-6">
                <Reveal>
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-600">
                    Sentiment Analysis:
                  </h2>
                </Reveal>

                <Reveal>
                  <p className="mt-4 text-lg text-zinc-600 text-justify">
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative, or
                    neutral) expressed in text or customer feedback.
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative, or
                    neutral) expressed in text or customer feedback.
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative, or
                    neutral) expressed in text or customer feedback.
                    The product has built-in sentiment analysis capabilities,
                    allowing it to determine the sentiment (positive, negative, or
                    neutral) expressed in text or customer feedback.
                  </p>
                </Reveal>
                <div className="mt-6">
                  <Link to="/">
                    <PrimaryBtn fText="Get it" sText="Via Quote" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>



      <div className="relative">
        <div className="lg:mx-auto lg:grid lg:max-w-full lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-10 lg:pl-8 max-md:flex max-md:flex-col-reverse max-sm:flex max-sm:flex-col-reverse">

          <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
            <div>
              <div className="mt-6">
                <Reveal>
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-600">Natural Language Generation (NLG):</h2>
                </Reveal>
                <Reveal>
                  <p className="mt-4 text-lg text-zinc-600 text-justify">
                    The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback. The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or nefutral) expressed in text or customer feedback. The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback. The product has built-in sentiment analysis capabilities, allowing it to determine the sentiment (positive, negative, or neutral) expressed in text or customer feedback.
                  </p>
                </Reveal>
                <div className="mt-6">
                  <Link to="/">
                    <PrimaryBtn fText="Get it" sText="Via Quote" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
              <img
                loading="lazy"
                width="646"
                height="485"
                className="w-full rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                style={{ color: 'transparent' }}
                src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e"
                alt="Natural Language Generation"
              />
            </div>
          </div>
        </div>
      </div>



    </div>
  );
};

export default Applications;
