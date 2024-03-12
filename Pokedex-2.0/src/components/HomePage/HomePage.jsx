import { useRef, useEffect } from 'react';
import './HomePage.css'
import HomeVideo from '../../assets/images/home-main.mp4'
import DownArrow from '../../assets/images/go-down-arrow.png'
import Navbar from '../Navbar/Navbar';

export default function HomePage() {
    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current) {
            videoRef.current.playbackRate = 0.6;
        }
    }, [])

  return (
    <div id='home-container'>
        <Navbar />
        <video 
        autoPlay 
        loop
        muted
        src={HomeVideo} 
        className='bgVideo'
        ref={videoRef}
        ></video>
        <div className='home-content--left'>
            <div className='main-heading'>
                <p className='heading1'>Welcome to Pokemon World</p>
                <p className='heading2'>where you can catch them all</p>
            </div>
                <button className='btn-grab'>Grab your Pokemons</button>
        </div>
        <img src={DownArrow} alt="" className='down-arrow'/>
    </div>
  );
}