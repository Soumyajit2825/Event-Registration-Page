import QR60 from "../assets/Treasurer60.jpg";
import QR80 from "../assets/Treasurer80.jpg";
import QR100 from "../assets/Treasurer100.jpg";
import QR60_1 from "../assets/Treasurer60_1.jpg";
import QR80_1 from "../assets/Treasurer80_1.jpg";
import QR100_1 from "../assets/Treasurer100_1.jpg";
import React from "react";



import styled, { keyframes } from "styled-components";
import { flipInX } from "react-animations";

// const FadeInUp = styled.div`animation: 1s ${keyframes`${fadeInUp}`}`;
const FlipInXAnimation = styled.div`
  animation: 1s ${keyframes`${flipInX}`};
`;


// const images = [QR60, QR60_1, QR80, QR80_1, QR100, QR100_1]
let images = [];

const Carousel = ({ bank,  handlePay }) => {
    const [currentImage, setCurrentImage] = React.useState(0);

    if (bank === 60){
        images = [QR60, QR60_1]
    }else if (bank === 80){
        images = [QR80, QR80_1]
    }else if (bank === 100){
        images = [QR100, QR100_1]
    }
  
    const refs = images.reduce((acc, val, i) => {
      acc[i] = React.createRef();
      return acc;
    }, {});
  
    const scrollToImage = i => {

      setCurrentImage(i);

      refs[i].current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    };
  

    const totalImages = images.length;
  

    const nextImage = () => {
      if (currentImage >= totalImages - 1) {
        scrollToImage(0);
      } else {
        scrollToImage(currentImage + 1);
      }
    };
  
    const previousImage = () => {
      if (currentImage === 0) {
        scrollToImage(totalImages - 1);
      } else {
        scrollToImage(currentImage - 1);
      }
    };

    const arrowStyle =
      'absolute text-white text-xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center';

    const sliderControl = isLeft => (
      <button
        type="button"
        onClick={isLeft ? previousImage : nextImage}
        className={`${arrowStyle} ${isLeft ? 'left-2' : 'right-2'}`}
        style={{ top: '40%' }}
      >
        <span role="img" aria-label={`Arrow ${isLeft ? 'left' : 'right'}`}>
          {isLeft ? '◀' : '▶'}
        </span>
      </button>
    );
  
    return (
        <>
        <FlipInXAnimation>
        <div className="w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3">
            <div className="flex flex-col items-center justify-center p-1 bg-[#1f1f1f] w-full  rounded-xl">
                <div className="p-1 flex justify-center w-full md:w-full items-center">
                    <div className="relative w-full h-full">
                        {sliderControl(true)}
                    <div className="carousel w-full h-full">
                        {images.map((img, i) => (
                        <div className="w-full h-full flex-shrink-0" key={img} ref={refs[i]}>
                            <img src={img} className="w-full object-contain h-full" />
                        </div>
                        ))}
                    </div>
                        {sliderControl()}
                    </div>
                </div>
            </div>
        </div>
        </FlipInXAnimation>
        <a
                // href="https://docs.google.com/forms/d/1P8QWlZP9D_ZUixLyURtxqbyfEzK1jvcHCdMraMgYKJM"
                target="_blank"
                rel="noreferrer"
                className=" text-center text-md mt-3"
              >
                <button
                  className="w-full hover:scale-[1.05] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-3 rounded-xl mt-1"
                  onClick={() => handlePay("QR")}
                >
                  {" "}
                  Click here to Submit the Payment Screenshot
                </button>
              </a>

      </>
    );
  };

export default Carousel;