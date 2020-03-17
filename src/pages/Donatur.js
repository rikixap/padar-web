import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/donatur.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgdonation from '../imagess/donation.jpg';
import axios from 'axios';


class Donatur extends Component{
    constructor() {
        super() 
        this.state = {
            data_donatur: []
        }
    }

    componentDidMount() {
        // var donatur = []
        axios.get("http://localhost:5000/v1/donors").then(response => {
            console.log('ini response',response.data)
            this.setState({data_donatur: response.data.donors})
        })

    }
    render(){
        return(
            <Fragment>
            <div className="wrapper-synopsis">
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container  wrapper-content">
                    <h3 className="text-center judul">Donasi</h3>
                    <hr className="pembatas"/>
                    <div className="content-synopsis d-flex content-donatur">
                        <div className="col-lg-8 col-sm-12 col-md-6 img-donation">
                            <div className="wrapperimgdn">
                            <img src={imgdonation}/>
                            </div>
                            
                            
                            <div className="donasi-teks">
                                <p> Karena dalam pengerjaan padar ini juga terkendala pada biaya.
                                Akhirnya di putuskan membuka donasi dan memohon bantuan bagi siapa pun yang ingin berbaik hati untuk membantu
                                menyelesaikan projek film PADAR ini.</p>
                            </div>

                            
                            </div>
                            <div className="col-lg-4 col-sm-12 col-md-6">
                            <p className="text-center text-title-donatur" style={{paddingTop:'10px'}}><b>Donatur</b></p> 
                            <div className="donatur-detail">
                            
                            {this.state.data_donatur.map((donatur,i) => {
                                return(
                                    <div key={i} className="wrapper-donatur">
                                    <div className="d-flex donatur">
                                    <div className="rounded-circle avatar" style={{borderColor:'#000'}}>
                                    <img  src={donatur.avatar} style={{width:'80%'}}/>
                                    </div>
                                    <div className="name-donatur">
                                    <p><b>{donatur.fullname}</b></p>
                                    <p className="rupiah">Rp{donatur.nominal}</p>
                                    </div>
                                    </div>   
                                    </div>
                                    )
                                })}
                                
                            </div>
                                
                            <div className="jumlah-donasi">
                                <p> Jumlah Donasi : Rp. 1.200.000,00</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            </Fragment>
        )
    }
}
export default Donatur;