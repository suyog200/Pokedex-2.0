import { useRef, useEffect } from "react";
import "./HomePage.css";
import HomeVideo from "../../assets/images/home-main.mp4";
import DownArrow from "../../assets/images/go-down-arrow.png";
import Navbar from "../Navbar/Navbar";
import PokdexHeadImg from "../../assets/images/pokedex-font.png";
import PokedexLogo from "../../assets/images/logo2.png";
import Card from "../card/Card";


export default function HomePage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <>
      {/* home page */}
      <section id="home-container">
        <Navbar />
        <video
          autoPlay
          loop
           muted
          src={HomeVideo}
          className="bgVideo"
          ref={videoRef}
        ></video>
        <div className="home-content--left">
          <div className="main-heading">
            <p className="heading1">Welcome to Pokemon World</p>
            <p className="heading2">where you can catch them all</p>
          </div>
          <button className="btn-grab">Grab your Pokemons</button>
        </div>
        <img src={DownArrow} alt="" className="down-arrow" />
      </section>
      {/* pokedex */}
      <section id="pokedex-container">
        <div className="pokedex-header">
          <img src={PokdexHeadImg} alt="" className="title-img" />
          <img src={PokedexLogo} alt="" className="bottom-img" />
        </div>
        <div className="searchBar--container">
          <div className="searchBar-left">
            <input
              type="text"
              placeholder="Search Pokemon"
              className="searchBar-input"
            />
            <button className="btn">Search</button>
          </div>
          <div className="searchBar-right">
            <button className="btn">Favroite</button>
            <button className="btn">Limit</button>
          </div>
        </div>
        {/* CardComponent */}
        <div className="card-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
