import React from 'react'
import { Link } from 'react-router-dom'
import PrimaryBtn from '../common/PrimaryBtn'
import { Reveal } from "../../hooks/Reveal";


const Profile = () => {
    return (
        <section className="bg-gray-100">
            <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12">
                    <div className="max-w-full">
                        <Reveal>
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Company</h2>
                        </Reveal>
                        <Reveal>
                            <p className="mt-4 text-zinc-600 text-md text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat.
                                Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla
                                malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
                        </Reveal>
                        <Reveal>
                            <p className="mt-4 text-zinc-600 text-md text-justify"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus laudantium numquam commodi facere ducimus cum architecto voluptate ratione deserunt, voluptas quidem magni, non nam odio quam in vitae quod itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, excepturi.</p>
                        </Reveal>
                        <div className="mt-8">
                            <Link to="/">
                                <PrimaryBtn fText="Viste to" sText="Our Projects" />
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md hover:scale-[1.1] hover:duration-1 transition-all" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
