import React, { useState, useEffect } from 'react';
import Frame1 from "../assets/images/Frame1.png";
import Pessoas from "../assets/images/pessoas.png";

function ImageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [Pessoas, Frame1, Frame1, Frame1, Frame1]; // Using same image multiple times - to change 

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); 

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="carousel-slide"
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`,
                            transition: 'transform 0.5s ease-in-out',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            left: `${index * 100}%`
                        }}
                    >
                        <img 
                            src={image} 
                            alt={`Slide ${index + 1}`} 
                            className="carousel-image"
                        />
                    </div>
                ))}
            </div>
            <div className="carousel-indicators">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default ImageCarousel; 