import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/Merch.css';
import boxset1 from '../images/MERCH/1 .png';
import boxset2 from '../images/MERCH/2 (3).png'
import Slider from 'react-slick';
// import { ImageZoom } from 'react-simple-image-zoom';
 
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Footer from '../components/Footer';
// import {
//     Magnifier,
//     GlassMagnifier,
//     SideBySideMagnifier,
//     PictureInPictureMagnifier,
//     MOUSE_ACTIVATION,
//     TOUCH_ACTIVATION
//   } from "react-image-magnifiers";

var settings = {
    dots: true,
    infinite: true,
    // slide: 'li',
    slidesToShow: 1,
    slideToScroll: 3
};
// const imageProps = {
//     smallImage: {
//       alt: 'Phasellus laoreet',
//       isFluidWidth: true,
//       src: boxset1
//     },
//     largeImage: {
//       src: boxset1,
//       width: 1200,
//       height: 1800
//     },
//     enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
//   };
class Merch extends Component{

    render(){ 
        return(   
            <div> 
            <div>
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container wrapper-content">
                    <p className="text-center">Merch</p>
                    <hr className="pembatas"/>
                    <div className="d-flex row content">
                        <div className="boxset">        
                        <Slider {...settings}>
                            <div className="img1">
                                <Zoom>
                                    <img
                                    alt="that wanaka tree"
                                    src={boxset1}
                                    width="200"
                                    style={{top:'40px'}}
                                    className="img-merch"
                                    />
                                </Zoom>
                            </div>
                            <div className="img1"><img src={boxset2}/></div>
                        </Slider>   
                        </div>
                        <div>
                            <p>Boxset Padar</p>
                            <p>Rp.200.000</p>                                                     
                            <label htmlFor="catatan" className="col-form-label">Keterangan :</label>
                            <div className="keterangan">
                                <p className="text-left m-3"> 
                                    ini berisi susu kental FontAwesomeIcon
                                </p>
                            </div>
                            <div className=" btn-shop">
                                <button type="button" className=" tambah">Pesan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            </div>
        
        )
    } 
}
export default Merch;