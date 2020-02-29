import React,{Component,Fragment} from 'react';
import Navbar from '../components/Navbar';
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
import '../styles/TimProduksi.css';

class TimProduksi extends Component {
    render(){
        return(
        <Fragment>
        <div className="wrapper-tim">
               
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container wrapper-content">
                    <h2 className="text-center">Tim Produksi</h2>
                    <hr className="pembatas"/>
                    <div className="d-flex container-team">
                        <div className="d-flex col-6">
                            <div className="wrapper-team">
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team1} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Krisna</h3>
                                            <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">StoryBoard And ConceptArtis</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team3} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Ridwan</h3>
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
                                            <h3 className="p-0 m-0">Hendryas</h3>
                                            <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">Story BoardAnd ConceptArtist</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team7} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Eko</h3>
                                            <p className="p-0 m-0">Layout</p>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team9} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Rofiq</h3>
                                            <p className="p-0 m-0">LeadAnimator</p>
                                            <p className="p-0 m-0">AnimationTeam</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team11} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Kibul</h3>
                                            <p className="p-0 m-0">Music Composer</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team14} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Rena</h3>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team16} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Mayang</h3>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team17} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Septian</h3>
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
                                        <h3 className="p-0 m-0">Afwan</h3>
                                        <p className="p-0 m-0">Director</p>
                                        <p className="p-0 m-0">AnimationTeam</p>
                                        <p className="p-0 m-0">Render</p>
                                        <p className="p-0 m-0">Layout</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team4} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <h3 className="p-0 m-0">Magel</h3>
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
                                        <h3>Syahrul</h3>
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
                                        <h3 className="p-0 m-0">Kevin</h3>
                                            <p className="p-0 m-0">Animation Team</p>
                                            <p>Render</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team10} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                        <h3 className="p-0 m-0">Yayan</h3>
                                            <p className="p-0 m-0">AnimationTeam</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team12} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Gilang</h3>
                                            <p className="p-0 m-0">AnimationTeam</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team13} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">egha</h3>
                                            <p className="p-0 m-0">Envirotment</p>
                                            <p className="p-0 m-0">SFX</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team15} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Amin</h3>
                                            <p className="p-0 m-0">Envirotment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={team18} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h3 className="p-0 m-0">Ari</h3>
                                            <p className="p-0 m-0">Suporting Team</p>
                                        </div>
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
export default TimProduksi