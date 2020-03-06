
import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/kontak.css';
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
                        <form>
                        <div>
                            <label>Nama :</label>
                            <div> 
                                <input name="favorite-animal" className="namename"/>
                            </div>
                        </div>
                        <div>
                            <label>Alamat Email :</label>
                            <div>
                                <input name="favorite-animal" id="favorite-animal" className="namename"/>
                            </div>
                        </div>
                        <div>
                            <label>Pesan :</label>
                            <div>
                                <textarea className="namename"></textarea>
                            </div>
                        </div>
                        <div className="d-flex buttonsend">
                            <button className="send-email">Kirim Pesan</button>
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
    }
}
export default Kontak;