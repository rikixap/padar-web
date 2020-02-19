import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import '../styles/Merch.css';
import boxset1 from '../images/MERCH/1 .png';
import boxset2 from '../images/MERCH/2 (3).png'
import Slider from 'react-slick';
var settings = {
    dots: true,
    infinite: true,
    // slide: 'li',
    slidesToShow: 1,
    slideToScroll: 3
}
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
                            <div className="img1"><img src={boxset1}/></div>
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
            </div>
        
        )
    } 
}
export default Merch;