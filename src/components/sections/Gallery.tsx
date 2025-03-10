import React, { useState } from 'react';
import './Gallery.css'; // Assuming you convert the CSS into a CSS module
import { motion } from 'framer-motion';

const Gallery: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const images: string[] = [
    "/images/g-2.jpg",
    "/images/g-1.png",
    "/images/g-3.jpg",
    "/images/g-4.jpg",
    "/images/g-5.jpg"
  ];

  const openLightbox = (src: string): void => {
    setSelectedImage(src);
    setIsOpen(true);
  };

  const closeLightbox = (): void => {
    setIsOpen(false);
  };

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* <div className="grid gap-2.5 lg:pb-16 pb-10">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">Our Gallery</h2>
          <div className="w-full text-center text-gray-600 text-lg font-normal leading-8">Step into a realm where art comes to life.</div>
        </div> */}
        <div className="gallery">
          <div className="flex flex-col mb-10">
            <div className="grid md:grid-cols-12 gap-8 lg:mb-11 mb-7">
              <div className="md:col-span-4 md:h-[404px] h-[277px] w-full rounded-3xl">
                <img
                  src={images[0]}
                  alt="Gallery"
                  onClick={() => openLightbox(images[0])}
                  className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-4 md:col-span-6 w-full h-full"
                />
              </div>
              <div className="md:col-span-8 md:h-[404px] h-[277px] w-full rounded-3xl">
              <motion.img
                  src={images[1]}
                  alt="Gallery"
                  onClick={() => openLightbox(images[1])}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto lg:col-span-8 md:col-span-6 w-full h-full"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
              {images.slice(2).map((img, index) => (
                <div key={index} className="h-[277px] w-full rounded-3xl">
                  <img
                    src={img}
                    alt="Gallery"
                    onClick={() => openLightbox(img)}
                    className="gallery-image object-cover rounded-3xl hover:grayscale transition-all duration-700 ease-in-out mx-auto w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {isOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <span className="close" onClick={closeLightbox}>&times;</span>
            <img src={selectedImage} alt="" className="lightbox-image" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;