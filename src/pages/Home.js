import React,{Component} from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';
import img1 from '../images/BACKGROUND/BG01.png';
import img2 from '../images/BACKGROUND/BG02.png';
import img3 from '../images/BACKGROUND/BG03.png';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const proprieties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Home = () => {
    return (
        <div className="countainerSlide">
            
            <Sidebar />
            <Slide {...proprieties}>
                <div className="each-slide">
                    <div>
                        <img src={img1} alt="img1" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img2} alt="img2" />
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                        <img src={img3} alt="img3" />
                    </div>
                </div>
            </Slide>
            <Footer/>
        </div>
    )
}

export default Home ;