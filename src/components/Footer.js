import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css'
class Footer extends Component{
    render(){ 
        return(   
            <div className="footer">
                <div className="text-light text-center">
                    <p>&copy; 2020 DOES UNIVERSITY All Rights Reserved</p>
                </div>
                <div className="media">
                    <a target="blank" href="https://www.instagram.com/doesofficial/?hl=id">
                        <i className="fab fa-instagram fa-2x text-light"></i>
                    </a>
                    <a target="blank" href="https://www.youtube.com/channel/UCLAlGn0fvx92nQkF_v4Yq1w">
                        <i className="fab fa-youtube fa-2x ml-2 text-light"></i>
                    </a>
                </div>
            </div>
        
        )
    } 
}
export default Footer;