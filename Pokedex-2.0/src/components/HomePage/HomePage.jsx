import { useRef, useEffect, useState } from "react";
import "./HomePage.css";
import HomeVideo from "../../assets/images/home-main.mp4";
import DownArrow from "../../assets/images/go-down-arrow.png";
import Navbar from "../Navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const videoRef = useRef(null);
  const {scrollY} = useScroll();

  const scaleImg = useTransform(scrollY, [0, 500, 800], [1, 1.5, 2]);
  const opacityImg = useTransform(scrollY, [500, 600, 800], [1, 0.5, 0]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
      
      // Force play on iOS - sometimes needed
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Video autoplay failed:", error);
          // Attempt to play again on user interaction
          document.addEventListener('touchstart', () => {
            videoRef.current?.play();
          }, { once: true });
        });
      }
    }
  }, []);

  return (
    <>
      {/* home page */}
      <section id="home-container">
        <Navbar />
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"  // Add this
          webkit-playsinline="true"  // Add this for older iOS
          src={HomeVideo}
          className="bgVideo"
          ref={videoRef}
          style={{scale: scaleImg, opacity: opacityImg}}
        >
          {/* Add source tag as fallback */}
          <source src={HomeVideo} type="video/mp4" />
        </motion.video>
        <div className="home-content--left">
          <div className="main-heading">
            <p className="heading1">Welcome to Pokemon World</p>
            <p className="heading2">where you can catch them all</p>
          </div>
          <motion.button 
            whileHover={{scale: 1.1, backgroundColor: '#BF0606'}}
            transition={{type:"spring", stiffness: 500, mass: 0.5}}
            className="btn-grab"
          >
            Grab your Pokemons
          </motion.button>
        </div>
        <img src={DownArrow} alt="" className="down-arrow" />
      </section>
    </>
  );
}