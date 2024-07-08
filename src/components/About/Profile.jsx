import React from "react";
import { Link } from "react-router-dom";
import PrimaryBtn from "../common/PrimaryBtn";
import { Reveal } from "../../hooks/Reveal";

const Profile = () => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12">
          <div className="max-w-full">
            <Reveal>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Inbuilt Infra
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-600 text-md text-justify">
                Inbuilt Infra have 15+ years experience in the roofing industry.
                We are the No.1 roofing contractor in Chennai. As a licensed
                roofing company, we can do both residential roofing and
                commercial roofing according to our customer’s requirements.
                Inbuilt Infra specializes in innovative architectural based
                roofing especially in Tensile roofing
              </p>
            </Reveal>
            <Reveal>
              <p className="mt-4 text-zinc-600 text-md text-justify">
                In India, Inbuilt Infra is the only company to introduce architectural designs into the roofing industry. Our roof installation process is unique and compared to other local roofers. We have successfully completed a variety of complicated roofing projects and we continue to do so. Inbuilt Infra has a biggest team of 100+ professionals and architects. We have the capability to install 3 lakh square feet of roofing per month, demonstrating our ability to manage large projects efficiently. As specialists in tensile structures, we are capable of constructing up to 1 lakh square feet per month. These qualities make us a leading roofing contractor.
              </p>
            </Reveal>
            <div className="mt-8">
              <Link to="/">
                <PrimaryBtn fText="Viste" sText="Our Projects" />
              </Link>
            </div>
          </div>
          <div className="mt-5 md:mt-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md hover:scale-[1.1] hover:duration-1 transition-all"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
