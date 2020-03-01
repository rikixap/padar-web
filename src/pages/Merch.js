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
import { Link } from 'react-router-dom';


var settings = {
    dots: true,
    infinite: true,
    // slide: 'li',
    slidesToShow: 1,
    slideToScroll: 3
};

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
                        <div className="kontentkontent">
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
                        </div>
                        <div className="kontentkontentkontent">
                            <div className="detail"> 
                                    <h3 className="texttext">T-shirt Padar</h3>
                                    <hr className="batas"/>
                                    <p className="texttext">Rp.150.000</p>
                                    <hr className="batas"/>                                                     
                                    <label htmlFor="catatan" className="texttext">Keterangan :</label>
                                    <div className="">
                                        <div className="keterangan">
                                            <p className="text-left m-3 texttext">Exclusive Padar t-shirt</p>
                                            <p className="text-left m-3 texttext">- Print On Gildan Hammer (Black)</p>
                                            <p className="text-left m-3 texttext">- Embroidered Purple Tangerine Sleeve</p>
                                            <p className="text-left m-3 texttext">- 100% Cotton</p>
                                        </div>
                                    </div>
                                   
                                    <div className="btn-shop">
                                        <button type="button" className="tambah"><a target="blank" href="https://api.whatsapp.com/send?phone=6281933357030&text=Saya%20tertarik%20untuk%20beli%20Padar" className="text-light">Pesan</a></button>
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