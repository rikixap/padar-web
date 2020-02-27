import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import '../styles/about.css';

class About extends Component{
    render(){ 
        return( 
            <Fragment>
                <div className="wrapper-about"> 
                    <div className="wrapper-header">
                        <Navbar/>
                    </div>
                    <div className="text-light container wrapper-content">
                        <h2 className="text-center">About</h2>
                        <hr className="pembatas"/>
                        <p>
                            Padar adalah sebuah animasi 3d yang merupakan project tugas akhir sebagai ajang praktik,
                            yang di produksi oleh murid generasi 6 Does University.
                        </p>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    } 
}
export default About;