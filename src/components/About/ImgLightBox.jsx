import React from 'react'

const ImgLightBox = ({ src, alt, onClose, isOpen }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex justify-center items-center z-[999999]" onClick={onClose}>
        <div className="relative max-w-[50%] max-h-[50%] flex justify-center items-center">
          <img src={src} alt={alt} className="w-full h-full rounded-lg" />
        </div>
      </div>
    );
}

export default ImgLightBox