import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import '../styles/Merch.css';
// import tshirt1 from '../images/MERCH/SHIRT/1.jpg';
// import tshirt2 from '../images/MERCH/SHIRT/2.jpg'
import Slider from 'react-slick';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Footer from '../components/Footer';
// import boxset1 from '../images/MERCH/1233.png';
// import boxset2 from '../images/MERCH/1 (3).png';
// import boxset3 from '../images/MERCH/2 (1).png';
// import boxset4 from '../images/MERCH/2 (2).png';
// import boxset5 from '../images/MERCH/2 (3).png';
// import boxset6 from '../images/MERCH/2.png';

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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243896/images/2_yj8i9u.jpg'}
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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243899/images/1_l3ftra.jpg'}
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
                                    <hr className="batas11"/>
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
                                        <button type="button" className="tambah"><a target="blank" href="http://wa.wizard.id/a4a372" className="text-light">Pesan</a></button>
                                    </div>             
                            </div>
                        </div>
                    </div>
                </div>


                <div className="text-light container boxsetboxset">
                    <div className="d-flex row content">
                        <div className="kontentkontent">
                            <div className="boxset">        
                            <Slider {...settings}>
                                <div className="img1">
                                    <Zoom>
                                        <img
                                        alt="that wanaka tree"
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583272801/1_3_-min_2_hcwfwm.png'}
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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583272997/1-min_pffwqr.png'}
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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583273037/2_1_-min_d1gvwb.png'}
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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583273082/2_3_-min_fyvmok.png'}
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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583273126/2-min_zsfgor.png'}
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
                                        src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583273139/1233-min_bvkgwv.png'}
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
                                    src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583273239/2_2_-min_aplzl4.png'}
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
                                    <h3 className="texttext">Boxset Padar</h3>
                                    <hr className="batas11"/>
                                    <p className="texttext">Our gift box for donors</p>
                                    <hr className="batas"/>                                                     
                                    <label htmlFor="catatan" className="texttext">Keterangan :</label>
                                    <div className="">
                                        <div className="keterangan">
                                            <p className="text-left m-3 texttext">-Boxset ini adalah bentuk apresiasi team padar kepada para donatur</p>
                                            <p className="text-left m-3 texttext">-Terima kasih telah mendukung dan membantu mewujudkan impian kita.</p>
                                            {/* <p className="text-left m-3 texttext">- Print On Gildan Hammer (Black)</p>
                                            <p className="text-left m-3 texttext">- Embroidered Purple Tangerine Sleeve</p>
                                            <p className="text-left m-3 texttext">- 100% Cotton</p> */}
                                        </div>
                                    </div>
                                    <div className="btn-shop">
                                        <button type="button" className="tambah"><a target="blank" href="http://wa.wizard.id/a4a372" className="text-light">Pesan</a></button>
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