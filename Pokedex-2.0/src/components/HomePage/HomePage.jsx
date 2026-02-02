import { useRef, useEffect, useState } from "react";
import "./HomePage.css";
import HomeVideo from "../../assets/images/home-main.mp4";
import HomePoster from "../../assets/images/home-poster.png";
import DownArrow from "../../assets/images/go-down-arrow.png";
import Navbar from "../Navbar/Navbar";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HomePage() {
  const videoRef = useRef(null);
  const {scrollY} = useScroll();
  const [isMobile, setIsMobile] = useState(false);

  const scaleImg = useTransform(scrollY, [0, 500, 800], [1, 1.5, 2]);
  const opacityImg = useTransform(scrollY, [500, 600, 800], [1, 0.5, 0]);

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (videoRef.current && !isMobile) {
      videoRef.current.playbackRate = 0.6;
    }
  }, [isMobile]);

  return (
    <>
      <section id="home-container">
        <Navbar />
        {isMobile ? (
          <motion.div
            className="bgVideo"
            style={{
              backgroundImage: `url(${HomePoster})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              scale: scaleImg,
              opacity: opacityImg
            }}
          />
        ) : (
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            src={HomeVideo}
            className="bgVideo"
            ref={videoRef}
            style={{scale: scaleImg, opacity: opacityImg}}
          />
        )}
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