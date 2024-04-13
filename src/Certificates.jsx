import { useEffect } from "react";
import { useState } from "react";
import { Certificatedis } from "./Certificate";

export const Certificate = () => {
    const [certificateImages, setCertificateImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        setCertificateImages(Certificatedis.map((val) => val));
    }, []);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % certificateImages.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + certificateImages.length) % certificateImages.length);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % certificateImages.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [certificateImages.length]);

    return (
        <>

            <div className='certificateblock'  >
                <div className='certificateblockimg'>
                    <button onClick={handlePrev} >&lt;</button>
                    <img
                        src={certificateImages[currentImageIndex]?.src}
                        alt={certificateImages[currentImageIndex]?.title}
                    />
                    <button onClick={handleNext}>&gt;</button>
                </div>
            </div>
        </>
    );
};