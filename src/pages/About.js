import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class About extends Component{
   
    render(){ 
        return(   
            <div>
                  <div className="wrapper-header">
                    <Navbar/>
                   
                </div>
                <div className="text-light container wrapper-content">
                    <p className="text-center">About</p>
                    <hr className="pembatas"/>
                
                </div>
          
            </div>
        
        )
    } 
}
export default About;