import React, { useState } from 'react'
import ImgLightBox from './ImgLightBox';


const Gallery = () => {

    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const handleImageClick = (src) => {
        setCurrentImage(src);
        setIsLightboxOpen(true);
    };

    const handleClose = () => {
        setIsLightboxOpen(false);
    };

    return (
        <>
            <section className="bg-white mb-10">
                <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
                    <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-5">Our Teams</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="/Banners/homeBanner_1.avif" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" onClick={() => handleImageClick("/Banners/homeBanner_1.avif")} />
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                                <img src="/Banners/homeBanner_2.avif" alt="Grop-1" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" onClick={() => handleImageClick("/Banners/homeBanner_2.avif")} />
                            </div>
                            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="/Banners/homeBanner_3.avif" alt="Grop-2" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" onClick={() => handleImageClick("/Banners/homeBanner_3.avif")} />
                                </div>
                                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                                    <img src="Banners/homeBanner_1.avif" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" onClick={() => handleImageClick("/Banners/homeBanner_1.avif")} />
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                            <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                                <img src="/Banners/homeBanner_4.avif" alt="" className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" onClick={() => handleImageClick("/Banners/homeBanner_4.avif")} />
                            </div>
                        </div>
                    </div>
                </div>
                <ImgLightBox src={currentImage} alt="Lightbox Image" onClose={handleClose} isOpen={isLightboxOpen} />

            </section>
        </>
    )
}

export default Gallery
