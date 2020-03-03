import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css'
// import love from '../images/LOGO/love.png'

class Footer extends Component{
    render(){ 
        return(   
            <div className="footer">
                <div className="wrapper-footer">
                    <div className="text-light text-center">
                        <p className="text-center">Made with <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243881/images/love_jkho8v.png'}className="love"/> in DOES UNIVERSITY</p>
                    </div>
                    <div className="media text-center                                                                               ">
                        <a target="blank" href="https://www.instagram.com/doesofficial/?hl=id">
                            <i className="fab fa-instagram fa-2x text-light"></i>
                        </a>
                        <a target="blank" href="https://www.youtube.com/channel/UCLAlGn0fvx92nQkF_v4Yq1w">
                            <i className="fab fa-youtube fa-2x ml-2 text-light"></i>
                        </a>
                    </div>
                </div>
            </div>
        
        )
    } 
}
export default Footer;