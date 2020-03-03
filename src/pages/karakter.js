import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
// import karakter1 from '../images/KARAKTER/KARAKTER 3D/PADAR_CROPED.png';
// import karakter2 from '../images/KARAKTER/KARAKTER 3D/GRAPY_CROPED.png';
// import karakter3 from '../images/KARAKTER/KARAKTER 3D/SUGAR_CROPED.png';
import '../styles/karakter.css'
import Footer from '../components/Footer';
class Karakter extends Component{
    render(){
        return(
            <Fragment>
                <div className="wrapper-karakter">
                    <div className="wrapper-header">
                        <Navbar/>
                    </div>
                    <div className="text-light container wrapper-content">
                        <h2 className="text-center">Karakter</h2>
                        <hr className="pembatas"/>
                        <div className="content-karakter">
                            <div className="d-flex row padarpadar">
                                <div className="img-karakter col-5 text-center">
                                    <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243908/images/PADAR_CROPED_ullbnm.png'} className="karakter"/> 
                                </div>
                                <div className="col-sm-7 detaildetail">
                                    <h1 className="text-center juduljudul">Padar</h1>
                                    <div className="detail-content">
                                        <p>Padar adalah seorang pemuda pemberani dan selalu optimis,
                                        Dia berasal dari desa tepatnya dari daerah pesisir yang  masih terbilang tradisional dan menjujung tinggi unggah unggah atau tata krama
                                        ,itu sebabnya dia sangat menghargai orang lain.Dia memiliki senjata berupa cambuk peninggalan dari kakenya,
                                        cambuk tersebut sangat hebat,namun dia tidak tau bagaimana cara menggunakan hingga sekarang.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-karakter">
                            <div className="d-flex row  padarpadar">
                                <div className="img-karakter grappy22 col-5 text-center">
                                    <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243909/images/GRAPY_CROPED_k8bpxl.png'} className="karakter"/> 
                                </div>
                                <div className="col-sm-7 detaildetail">
                                    <h4 className="text-center juduljudul">Grappy</h4>
                                    <div className="detail-content">
                                        <p>
                                            Grappy adalah seekor Komodo muda yang tangguh, dan sangat setia, tingkahnya kadang lucu dan ceroboh.
                                            Dia memiliki sahabat bernama Padar, mereka bertemu ketika pada menolongnya dari perangkap Komodo. Greppy memiliki panjang tubuh kurang lebih 4m.
                                            Dia pemakan daging,namun dia juga sangat suka buah berwarna ungu terutama buah Plumpie Plums, itu mengapa dia disebut Grappy.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content-karakter">
                            <div className="d-flex row  padarpadar">
                                <div className="img-karakter col-5 text-center">
                                    <img src={'https://res.cloudinary.com/divsysf5b/image/upload/v1583243907/images/SUGAR_CROPED_xwudl1.png'} className="karakter"/> 
                                </div>
                                <div className="col-sm-7 detaildetail">
                                    <h4 className="text-center juduljudul">Sugar</h4>
                                    <div className="detail-content">
                                        <p>
                                            Sugar adalah binatang Sugar Glaider ata seekor Tupai terbang.
                                            Dia pemikir yang cerdik,selalu memiliki ide yang jenius walau terkadang tidak dihiraukan oleh kedua sahabatnya
                                            yaitu padar dan Greppy. walaupun dia pemikir yang ulung.
                                        </p>
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
export default Karakter;