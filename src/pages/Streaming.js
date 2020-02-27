import React,{Component, Fragment} from 'react';
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
            <Fragment>
                <div className="wrapper-film">
                    <div className="wrapper-header">
                        <Navbar/>
                    </div>
                    <div className="text-light container wrapper-content">
                        <h2 className="text-center">Streaming</h2>
                        <hr className="pembatas"/>
                        <Player >
                            <source src=".http://res.cloudinary.com/damaxkeot/video/upload/v1565057231/kekxrmbmdysbhm7bz34u.mp4" />
                        </Player>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    }
}
export default Streaming;   