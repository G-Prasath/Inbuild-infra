import React, { useState } from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '80vh',
    maxWidth: 'max-content',
    overflow: 'hidden',
    padding: '0',
    position: 'relative',
    border: '3px solid white',
    borderRadius: '10px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
};

const Gallery = ({ title, images }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <div className="w-full my-5">
      <p className="text-center sm:text-4xl text-xl font-bold text-zinc-800 mt-8 cursor-default">{title}</p>
      <div className="p-5 sm:p-8">
        <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 ">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Image ${index + 1}`}
              onClick={() => openModal(index)}
              className="cursor-pointer hover:scale-[1.1] transition-all duration-[1]"
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Image Lightbox"
      >
        <button
          onClick={closeModal}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#fff',
          }}
        >
          ×
        </button>
        <button
          onClick={prevImage}
          style={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#fff',
            transform: 'translateY(-50%)',
          }}
        >
          ‹
        </button>
        <button
          onClick={nextImage}
          style={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: '#fff',
            transform: 'translateY(-50%)',
          }}
        >
          ›
        </button>
        <img
          src={images[currentImageIndex]}
          alt="Current"
          style={{
            width: 'auto',
            height: 'auto',
            maxHeight: '70vh',
            maxWidth: '90vw',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          className="max-sm:w-full max-sm:h-auto"
        />
      </Modal>
    </div>
  );
};

export default Gallery;
