import React,{Component, Fragment} from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';
import img1 from '../images/bg Padar/BG01.png';
import padar from '../images/KARAKTER/KARAKTER 3D/PADAR_CROPED.png';
import img2 from '../images/bg Padar/BG02.png';
import sugar from '../images/KARAKTER/KARAKTER 3D/SUGAR.png';
import img3 from '../images/bg Padar/BG03.png';
import grapy from '../images/KARAKTER/KARAKTER 3D/GRAPY.png';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Logo from '../images/LOGO/icon.png';


const proprieties = {
    duration: 10000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const Home = () => {
    return (
        <div>
            <div className="countainerSlide">
                    <Sidebar />  
                        <div className="logo">
                                <img className="logo-img" src={Logo}/>
                        </div>
                    <Slide {...proprieties}>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={padar}/>
                            </div>
                            <div>
                                <img src={img1} alt="img1" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={sugar}/>
                            </div>
                            <div>
                                <img src={img2} alt="img2" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={grapy}/>
                            </div>
                            <div>
                                <img src={img3} alt="img3" />
                            </div>
                        </div>
                    </Slide>
                </div>
                <Footer/>
        </div>
    )
}

export default Home ;