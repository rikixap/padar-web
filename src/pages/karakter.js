import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import karakter1 from '../images/KARAKTER/1.PADAR.jpg';
import karakter2 from '../images/KARAKTER/2.SUGAR.jpg';
import karakter3 from '../images/KARAKTER/3.GRAPPY.jpg';
import '../styles/karakter.css'
import Footer from '../components/Footer';
class Karakter extends Component{
    render(){
        return(
            <div>
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container wrapper-content">
                    <p className="text-center">Karakter</p>
                    <hr className="pembatas"/>
                    <div className="text-center">
                        <div className="img-karakter">
                            <img src={karakter1} className="karakter"/>
                        </div>
                        <div className="img-karakter">
                            <img src={karakter2} className="karakter"/>
                        </div>
                        <div className="img-karakter">
                            <img src={karakter3} className="karakter"/>            
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Karakter;