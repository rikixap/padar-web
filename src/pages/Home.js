import React,{Component, Fragment} from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';
import img1 from '../images/bg Padar/BG01.png';
import padar from '../images/KARAKTER/KARAKTER 3D/PADAR_CROPED.png';
import img2 from '../images/bg Padar/BG02.png';
import sugar from '../images/KARAKTER/KARAKTER 3D/SUGAR.png';
import img3 from '../images/bg Padar/BG03.png';
import grapy from '../images/KARAKTER/KARAKTER 3D/GRAPY.png';
import img4 from '../images/bg Padar/456.png';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Logo from '../images/LOGO/padarlogo.png';
import namepadar from '../images/LOGO/padar.png';
import { Link } from 'react-router-dom';


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
                                {/* <p className="teks-trailer">PADAR</p>  */}
                            </div>
                    
                            <div>
                                <img src={img1} alt="img1" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={sugar}/>
                                {/* <p className="teks-trailer">SUGAR</p>  */}
                            </div>
                            <div>
                                <img src={img2} alt="img2" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={grapy}/>
                                {/* <p className="teks-trailer">GRAPY</p>  */}
                            </div>
                            <div>
                                <img src={img3} alt="img3" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="sugar" >
                                {/* <div className="teks-padar"> */}
                                    <p className="tekstrailer">Trailer !!!</p> 
                                {/* </div> */}
                                {/* <div className="padar-trailer"> */}
                                    <Link className="btn-trailer text-center">WATCH NOW</Link>
                                {/* </div> */}
                            </div>
                            <div>
                                <img src={img4} alt="img3" className="burung"/>
                            </div>
                        </div>
                    </Slide>
                </div>
                <Footer/>
        </div>
    )
}

export default Home ;