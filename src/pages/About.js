import React,{Component} from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../components/Footer';
import team1 from '../images/TEAM PADAR/krisna.jpg';
import team2 from '../images/TEAM PADAR/afwan.jpg';
import team3 from '../images/TEAM PADAR/ridwan.jpg';
import team4 from '../images/TEAM PADAR/magel.jpg';
import team5 from '../images/TEAM PADAR/yass.jpg';
import team6 from '../images/TEAM PADAR/syahrul.jpg';
import team7 from  '../images/TEAM PADAR/eko.jpg';
import team8 from '../images/TEAM PADAR/kevin.jpg';
import team9 from '../images/TEAM PADAR/rofiq.jpg';
import team10 from '../images/TEAM PADAR/yayan.jpg';
import team11 from '../images/TEAM PADAR/kibul.jpg';
import team12 from '../images/TEAM PADAR/gilang.jpg';
import team13 from '../images/TEAM PADAR/mega.jpg';
import team14 from '../images/TEAM PADAR/rena.jpg';
import team15 from '../images/TEAM PADAR/amin.jpg';
import team16 from  '../images/TEAM PADAR/mayang.jpg';
import team17 from '../images/TEAM PADAR/septian.jpg';
import team18 from '../images/TEAM PADAR/ari.jpg';
import '../styles/about.css';



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
                    <p>
                        Padar adalah sebuah animasi 3d yang merupakan project tugas akhir sebagai ajang praktik,
                        yang di produksi oleh murid generasi 6 Does University.
                    </p>
                    <p>Gen6 Team Produksi Padar :</p>
                    <div className="d-flex container-team">
                        <div className="d-flex col-6">
                            <div className="wrapper-team">
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team1} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Krisna</p>
                                            <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">Story BoardAnd ConceptArtis</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team3} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Ridwan</p>
                                            <p className="p-0 m-0">3dAssets Team Character</p>
                                            <p className="p-0 m-0">Technical Director</p>
                                            <p className="p-0 m-0">Rigger</p>
                                            <p className="p-0 m-0">vfx 3d</p>
                                            <p className="p-0 m-0">Lighting</p>
                                            <p>Render</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team5} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Hendryas</p>
                                            <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">Story BoardAnd ConceptArtist</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team7} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Eko</p>
                                            <p className="p-0 m-0">Layout</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team9} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Rofiq</p>
                                            <p className="p-0 m-0">LeadAnimator</p>
                                            <p className="p-0 m-0">AnimationTeam</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team11} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Kibul</p>
                                            <p className="p-0 m-0">Music Composer</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team14} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Rena</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team16} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Mayang</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team17} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Septian</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                            <p className="p-0 m-0">SFX</p>
                                        </div>
                                    </div>
                            </div>    
                        </div>
                        <div className="d-flex col-6">
                            <div className="wrapper-team">
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team2} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <p className="p-0 m-0">Afwan</p>
                                        <p className="p-0 m-0">Director</p>
                                        <p className="p-0 m-0">AnimationTeam</p>
                                        <p className="p-0 m-0">Render</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team4} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <p className="p-0 m-0">Magel</p>
                                        <p className="p-0 m-0">Layout</p>
                                        <p className="p-0 m-0">Render</p>
                                        <p className="p-0 m-0">vfx 3d</p>
                                        <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team6} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <p>Syahrul</p>
                                        <p className="p-0 m-0">Lead Modeling</p>
                                        <p className="p-0 m-0"> Layout</p>
                                        <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team8} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <p className="p-0 m-0">Kevin</p>
                                            <p className="p-0 m-0">Animation Team</p>
                                            <p>Render</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team10} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <p className="p-0 m-0">Yayan</p>
                                            <p className="p-0 m-0">Animation Team</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team12} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Gilang</p>
                                            <p className="p-0 m-0">AnimationTeam</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team13} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">egha</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                            <p className="p-0 m-0">SFX</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team15} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Amin</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team18} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <p className="p-0 m-0">Ari</p>
                                            <p className="p-0 m-0">Suporting Team</p>
                                        </div>
                                    </div>
                            </div>    
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    } 
}
export default About;