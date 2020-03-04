import React,{Component, Fragment} from 'react';
import { Slide } from 'react-slideshow-image';
import '../styles/Home.css';
// import img1 from '../images/bg Padar/BG01.png';
// import padar from '../images/KARAKTER/KARAKTER 3D/PADAR_CROPED.png';
// import img2 from '../images/bg Padar/BG02.png';
// import sugar from '../images/KARAKTER/KARAKTER 3D/SUGAR.png';
// import img3 from '../images/bg Padar/BG03.png';
// import grapy from '../images/KARAKTER/KARAKTER 3D/GRAPY.png';
// import img4 from '../images/bg Padar/456.png';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
// import Logo from '../images/LOGO/padarlogo.png';
// import namepadar from '../images/LOGO/padar.png';
import { Link } from 'react-router-dom';


const proprieties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
}

const Home = () => {
    return (
        <Fragment>
         <div className="wrappper-home">
            {/* <div className="countainerSlide"> */}
                    <Sidebar />  
                        <div className="logo">
                                <img className="logo-img" src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243885/images/padarlogo_yvy4dt.png'}/>
                        </div>
                    <Slide {...proprieties}>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243908/images/PADAR_CROPED_ullbnm.png'}/>
                                {/* <p className="teks-trailer">PADAR</p>  */}
                            </div>
                    
                            <div>
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243868/images/BG01_uhf0y3.png'} alt="img1" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243917/images/SUGAR_pddmtc.png'}/>
                                {/* <p className="teks-trailer">SUGAR</p>  */}
                            </div>
                            <div>
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243854/images/BG02_hlpk3c.png'} alt="img2" />
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="padar">
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243912/images/GRAPY_vga95s.png'}/>
                                {/* <p className="teks-trailer">GRAPY</p>  */}
                            </div>
                            <div>
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243878/images/BG03_b568gi.png'} alt="img3" />
                            </div>
                        </div>
                        <div className="each-slide">
                          
                            <div>
                                <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243851/images/456_n87wio.png'} alt="img3" className="burung"/>
                            </div>
                        </div>
                    </Slide>
            {/* </div> */}
                <Footer/>
         </div>
        </Fragment>
    )
}

export default Home ;