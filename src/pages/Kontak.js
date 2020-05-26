
import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/kontak.css';
import $ from 'jquery';


class Kontak extends Component{

    render(){
        return(
            <Fragment>
            <div className="wrapper-synopsis">
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container  wrapper-content">
                    <h3 className="text-center judul">Kontak</h3>
                    <hr className="pembatas"/>
                    <div className="content-synopsis">
                    <div className="emailemail">
                        <form  action="https://formspree.io/mvowkqpy" method="POST">
                            <div>
                                <label>Nama :</label>
                                <div> 
                                    <input type="text" id="name" name="name" className="namename"/>
                                </div>
                            </div>
                            <div>
                                <label>Alamat Email :</label>
                                <div>
                                    <input type="email" id="email" name="_replyto" className="namename"/>
                                </div>
                            </div>
                            <div>
                                <label>Pesan :</label>
                                <div>
                                    <textarea name="text" id="text" name="text" className="namename"></textarea>
                                </div>
                            </div>
                            <div className="d-flex buttonsend">
                                <input type="submit" value="send"  className="send-email" onClick={()=> this.sendeMail()} />
                                <button className="cancel-email">Batal</button>
                            </div>
                            <div className="teks-kontak">
                                <p className="text-right">**for New Business,Media Relations,Partnerships**</p>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                <Footer/>
            </div>
            </Fragment>
        )
    };
};
export default Kontak;