import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/CoverImage/wallpaperflare.com_wallpaper.jpg";
import img2 from "../assets/CoverImage/wallpaperflare.com_wallpaper (1).jpg";
import img3 from "../assets/CoverImage/wallpaperflare.com_wallpaper (2).jpg";
import img4 from "../assets/CoverImage/wallpaperflare.com_wallpaper (3).jpg";
import { TypeAnimation } from "react-type-animation";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setProgressKey(prevIndex);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const imageVariants = {
    // *** KEY CHANGE: Define imageVariants ***
    enter: (direction) => {
      return {
        opacity: 0,
        x: direction > 0 ? 100 : -100, // Slide from right/left
        scale: 1.05,
      };
    },
    center: {
      zIndex: 1,
      opacity: 1,
      x: 0,
      scale: 1,
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        opacity: 0,
        x: direction > 0 ? -100 : 100, // Slide out to left/right
        scale: 0.95,
      };
    },
  };

  const textData = [
    "🏡 Find Your Dream Home – Comfort, Style & Elegance Await!",
    "🌆 Discover Prime Locations & Stunning Properties.",
    "🔑 Unlock Exclusive Deals on Luxury & Budget-Friendly Homes.",
    "🏠 Smart, Modern & Future-Ready Homes Designed for You.",
  ];

  const centerText = [
    "Find Your Dream Home with Land Next",
    "Find Your Dream Home with Land Next",
    "Find Your Dream Home with Land Next",
    "Find Your Dream Home with Land Next",
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute top-0 left-0 w-full h-full"
          variants={imageVariants} // Use the defined variants
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.img
            src={images[currentIndex]}
            className="object-cover w-full h-full"
          />
          <motion.div
            className="absolute top-10 left-1/2 -translate-x-1/2 text-[#f8f414] text-xl md:text-5xl md:p-4 p-1 rounded-lg font-semibold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {/* //test  */}
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
                height: "195px",
                display: "block",
              }}
              sequence={[`${textData[currentIndex]} `]}
              speed={1} // Typing speed
              repeat={0} // Repeat animation
            />
          </motion.div>
          <motion.div
            className="absolute top-2/5 bg-[#3d3b3bad] md:w-auto w-4/5 left-1/2 shadow-2xl -translate-x-1/2 text-[#71fc55] text-3xl md:text-7xl md:p-4 p-3 rounded-lg font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {centerText[currentIndex]}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={progressKey}
        className="z-10 absolute top-0 left-0 h-[2px] bg-red-500"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 10, ease: "linear" }}
      />
    </div>
  );
};

export default ImageSlider;
