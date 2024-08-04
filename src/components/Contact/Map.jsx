import React from 'react'

const Map = () => {
    return (
        <div>
            <div className="relative w-full h-96">
                <iframe className="absolute top-0 left-0 w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.073152896412!2d80.21082387621404!3d13.031013480826513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52671c2be4d445%3A0x8ca67ca50b1e39a2!2s7th%20Ave%2C%20Mettuppalayam%2C%20Ashok%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu%20600083!5e0!3m2!1sen!2sin!4v1721924295060!5m2!1sen!2sin"
                    frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0">
                </iframe>
            </div>
        </div>
    )
}

export default Map
