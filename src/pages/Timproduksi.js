import React,{Component,Fragment} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import team1 from '../images/TEAM PADAR/krisna.jpg';
// import team2 from '../images/TEAM PADAR/afwan.jpg';
// import team3 from '../images/TEAM PADAR/ridwan.jpg';
// import team4 from '../images/TEAM PADAR/magel.jpg';
// import team5 from '../images/TEAM PADAR/yass.jpg';
// import team6 from '../images/TEAM PADAR/syahrul.jpg';
// import team7 from  '../images/TEAM PADAR/eko.jpg';
// import team8 from '../images/TEAM PADAR/kevin.jpg';
// import team9 from '../images/TEAM PADAR/rofiq.jpg';
// import team10 from '../images/TEAM PADAR/yayan.jpg';
// import team11 from '../images/TEAM PADAR/kibul.jpg';
// import team12 from '../images/TEAM PADAR/gilang.jpg';
// import team13 from '../images/TEAM PADAR/mega.jpg';
// import team14 from '../images/TEAM PADAR/rena.jpg';
// import team15 from '../images/TEAM PADAR/amin.jpg';
// import team16 from  '../images/TEAM PADAR/mayang.jpg';
// import team17 from '../images/TEAM PADAR/septian.jpg';
// import team18 from '../images/TEAM PADAR/ari.jpg';
// import team19 from '../images/TEAM PADAR/nanda.jpg';
// import team20 from '../images/TEAM PADAR/agus.jpg';
// import team21 from '../images/TEAM PADAR/rangga.jpg';
// import team22 from '../images/TEAM PADAR/cahyo.jpg';
// import team23 from '../images/TEAM PADAR/apiet.jpg';
// import team24 from '../images/TEAM PADAR/ricky.jpg';

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
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243894/images/krisna_hkjg0u.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Krisna</h5>
                                            <li className="p-0 m-0">Produser</li>
                                            <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">StoryBoard And Concept Artist</p>
                                            <p className="p-0 m-0">Environment</p>
                                            {/* <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">StoryBoard And Concept Artist</p>
                                            <p className="p-0 m-0">Environment</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243894/images/ridwan_oydpsc.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Ridhwan</h5>
                                            <p className="p-0 m-0">Technical Director</p>
                                            <p className="p-0 m-0">3d Assets Character</p>
                                            {/* <p className="p-0 m-0">3d Assets Team Character</p>
                                            <p className="p-0 m-0">Technical Director</p> */}
                                            <p className="p-0 m-0">Rigger,vfx 3d</p> 
                                            <p>Lighting,Rende</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243889/images/yass_blioru.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Hendryas</h5>
                                            <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">Story Board And Concept Artist</p>
                                            {/* <p className="p-0 m-0">Produser</p>
                                            <p className="p-0 m-0">Story BoardAnd ConceptArtist</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                    <div>
                                        <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243890/images/nanda_co2fil.jpg'} className="fototeam"/>
                                    </div>
                                    <div className="detail-team">
                                        <h5 className="p-0 m-0">Nanda</h5>
                                        <p className="p-0 m-0">3D Assets Character</p>
                                
                                        {/* <p className="p-0 m-0">Produser</p>
                                        <p className="p-0 m-0">Story BoardAnd ConceptArtist</p> */}
                                    </div>
                                </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243889/images/eko_grc2no.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Eko</h5>
                                            <p className="p-0 m-0">Layout</p>
                                            <p className="p-0 m-0">Environment</p>
                                            {/* <p className="p-0 m-0">Layout</p>
                                            <p className="p-0 m-0">Environment</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243896/images/rofiq_krnata.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Rofiq</h5>
                                            <p className="p-0 m-0">Lead Animator</p>
                                            <p className="p-0 m-0">Animation Team</p>
                                            {/* <p className="p-0 m-0">Lead Animator</p>
                                            <p className="p-0 m-0">Animation Team</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243893/images/kibul_vquuky.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Kibul</h5>
                                            <p className="p-0 m-0">Music Director</p>
                                            {/* <p className="p-0 m-0">Music Composer</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243892/images/rena_tvn0cu.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Rena</h5>
                                            <p className="p-0 m-0">Environment</p>
                                            {/* <p className="p-0 m-0">Environment</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243892/images/mayang_h2l4wz.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Mayang</h5>
                                            <p className="p-0 m-0">Environment</p>
                                            {/* <p className="p-0 m-0">Environment</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243887/images/septian_lffo2v.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Septian</h5>
                                            <p className="p-0 m-0">Environment</p>
                                            <p className="p-0 m-0">SFX</p>
                                            {/* <p className="p-0 m-0">Environment</p>
                                            <p className="p-0 m-0">SFX</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243892/images/cahyo_refrsg.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Cahyo</h5>
                                            {/* <li className="p-0 m-0">Supporting Team</li> */}
                                            <p className="p-0 m-0">Programmer</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                    <div>
                                        <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243886/images/apiet_qkr62j.jpg'} className="fototeam"/>
                                    </div>
                                    <div className="detail-team">
                                        <h5 className="p-0 m-0">Apiet</h5>
                                        {/* <li className="p-0 m-0">Supporting Team</li> */}
                                        <p className="p-0 m-0">Programmer</p>
                                    </div>
                                </div>
                            </div>    
                        </div>
                        <div className="d-flex col-6">
                            <div className="wrapper-team">
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243891/images/afwan_y2jly0.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Afwan</h5>
                                            <p className="p-0 m-0">Director</p>
                                            <p className="p-0 m-0">Animation Team</p>
                                            <p className="p-0 m-0">Render</p>
                                            <p className="p-0 m-0">Layout</p>
                                            {/* <p className="p-0 m-0">Director</p>
                                            <p className="p-0 m-0">Animation Team</p>
                                            <p className="p-0 m-0">Render</p>
                                            <p className="p-0 m-0">Layout</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243889/images/magel_n3tr1f.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Magel</h5>
                                            {/* <li className="p-0 m-0">Layout</li>
                                            <li className="p-0 m-0">Animation Team</li>
                                            <li className="p-0 m-0">Render</li>
                                            <li className="p-0 m-0">Layout</li> */}
                                            <p className="p-0 m-0">Layout</p>
                                            <p className="p-0 m-0">Render</p>
                                            <p className="p-0 m-0">vfx 3d</p>
                                            <p className="p-0 m-0">Environment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243888/images/syahrul_tl0o4y.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Syahrul</h5>
                                            {/* <li className="p-0 m-0">Lead Modeling</li>
                                            <li className="p-0 m-0">Layout</li>
                                            <li className="p-0 m-0">Environment</li> */}
                                            <p className="p-0 m-0">Lead Modeling</p>
                                            <p className="p-0 m-0"> Layout</p>
                                            <p className="p-0 m-0">Environment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243889/images/kevin_uh4t0g.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Kevin</h5>
                                            <p className="p-0 m-0">Animation Team</p>
                                            <p className="p-0 m-0">Render</p>
                                            {/* <p className="p-0 m-0">Animation Team</p>
                                            <p>Render</p> */}
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583245546/yayan_kqxaml.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Yayan</h5>
                                            {/* <li className="p-0 m-0">Animation Team</li> */}
                                            <p className="p-0 m-0">Animation Team</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243890/images/gilang_wswham.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Gilang</h5>
                                            {/* <li className="p-0 m-0">Animation Team</li> */}
                                            <p className="p-0 m-0">Animation Team</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243891/images/mega_b5udjy.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Egha</h5>
                                            {/* <li className="p-0 m-0">Environment</li>
                                            <li className="p-0 m-0">SFX</li> */}
                                            <p className="p-0 m-0">Environment</p>
                                            <p className="p-0 m-0">SFX</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243897/images/amin_n6nza4.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Amin</h5>
                                            {/* <li className="p-0 m-0">Environment</li> */}
                                            <p className="p-0 m-0">Environment</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243887/images/ari_ju3tfx.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Ari</h5>
                                            {/* <li className="p-0 m-0">Supporting Team</li> */}
                                            <p className="p-0 m-0">Supporting Team</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243891/images/agus_ev6d6z.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Agus</h5>
                                            {/* <li className="p-0 m-0">Supporting Team</li> */}
                                            <p className="p-0 m-0">Programmer</p>
                                        </div>
                                    </div>
                                    <div className="d-flex frame">
                                        <div>
                                            <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243893/images/rangga_mi7loj.jpg'} className="fototeam"/>
                                        </div>
                                        <div className="detail-team">
                                            <h5 className="p-0 m-0">Rangga</h5>
                                            {/* <li className="p-0 m-0">Supporting Team</li> */}
                                            <p className="p-0 m-0">Programmer</p>
                                        </div>
                                    </div>
                                    
                                  
                                    <div className="d-flex frame">
                                    <div>
                                        <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243893/images/ricky_vespno.jpg'} className="fototeam"/>
                                    </div>
                                    <div className="detail-team">
                                        <h5 className="p-0 m-0">Ricky</h5>
                                        {/* <li className="p-0 m-0">Supporting Team</li> */}
                                        <p className="p-0 m-0">Programmer</p>
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