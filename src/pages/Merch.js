import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import '../styles/Merch.css';
import tshirt1 from '../images/MERCH/SHIRT/1.jpg';
import tshirt2 from '../images/MERCH/SHIRT/2.jpg'
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
            <Fragment>
            <div className="wrapper-merch">
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container wrapper-content">
                    <h2 className="text-center">Merch</h2>
                    <hr className="pembatas"/>
                    <div className="d-flex row content">
                        <div className="boxset">        
                        <Slider {...settings}>
                            <div className="img1">
                                <Zoom>
                                    <img
                                    alt="that wanaka tree"
                                    src={tshirt1}
                                    width="200"
                                    style={{top:'40px'}}
                                    className="img-merch"
                                    />
                                </Zoom>
                            </div>
                            <div className="img1">
                                <Zoom>
                                    <img
                                    alt="that wanaka tree"
                                    src={tshirt2}
                                    width="200"
                                    style={{top:'40px'}}
                                    className="img-merch"
                                    />
                                </Zoom>
                            </div>
                        </Slider>   
                        </div>
                        <div className="detail">
                            <div>
                                <h3>T-shirt Padar</h3>
                                <p>Rp.150.000</p>                                                     
                                <label htmlFor="catatan" className="col-form-label">Keterangan :</label>
                                <div className="keterangan">
                                    <p className="text-left m-3">color: black</p>
                                    <p className="text-left m-3">Size: S,M,XL</p>
                                </div>
                                <div className=" btn-shop">
                                    <button type="button" className=" tambah">Pesan</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
        )
    } 
}
export default Merch;