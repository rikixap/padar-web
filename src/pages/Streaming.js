import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import '../styles/Synopsis.css';
import { Player } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css';
import '../styles/Streaming.css'
import Footer from '../components/Footer';

class Streaming extends Component{
   
    render(){
        return(
            <div>
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container wrapper-content">
                    <p className="text-center">Streaming</p>
                    <hr className="pembatas"/>
                    <Player >
                        <source src=".http://res.cloudinary.com/damaxkeot/video/upload/v1565057231/kekxrmbmdysbhm7bz34u.mp4" />
                    </Player>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Streaming;   