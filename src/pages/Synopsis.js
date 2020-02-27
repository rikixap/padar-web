import React,{Component, Fragment} from 'react';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Synopsis.css';
import Footer from '../components/Footer';

class Synopsis extends Component{
    render(){
        return(
            <Fragment>
            <div className="wrapper-synopsis">
                <div className="wrapper-header">
                    <Navbar/>
                </div>
                <div className="text-light container  wrapper-content">
                    <h2 className="text-center">Synopsis</h2>
                    <hr className="pembatas"/>
                    <div className="content-synopsis text-center">
                        <p>Padar</p>
                        <p>  
                            Pada suatu pagi di sebuah Pulau yang terik dan gersang, terdapat tiga sekawan yang sedang berjalan di tengah padang rumput yang menguning karena sebuah kekeringan hebat. Mereka mencari
                            buah-buahan yang masih dapat bertahan dalam kondisi gersang tersebut, hanya sekedar untuk
                            menghilangkan rasa dahaga mereka.</p>
                        <p>Tiga sekawan itu adalah Padar, Sugar dan Grappy. Padar merupakan seorang pemuda yang
                            tangguh, di temani dengan seekor tupai terbanga bernama Sugar dan satu ekor komodo bernama
                            Grappy. Mereka tinggal di sebuah pulau yang pada jaman dahulu di pulau tersebut terdapat ekosistem
                            alam yang seimbang, dimana keserasian kehidupan manusia dengan alam sekitar terjaga dengan baik. Di
                            pulau tersebut terdapat banyak binatang buas yang memiliki racun sangat mematikan yaitu Komodo,
                            binatang yang diyakini telah hidup sejak waktu yang sangat lama.</p>
                        <p>
                            Meskipun Komodo memiliki racun yang sangat mematikan bagi manusia, akan tetapi hubungan
                            antara manusia dan komodo di pulau tersebut sangatlah dekat, karena masyarakat pulau mempercayai
                            bahwa komodo adalah saudara sedarah mereka, yang hanya saja mereka terlahir dengan tempat yang
                            berbeda dan dalam bentuk yang juga berbeda.
                        </p>
                        <p>
                            Singkat cerita, seiring berjalannya waktu pulau tersebut berangsur-angsur menjadi pulau yang
                            hampir mati karena gersang dan tidak lagi subur seperti saat ini, hal itu dikarenakan musim kering yang
                            hebat dan tak kunjung usai. Dari peristiwa tersebut banyak komodo dan manusia yang mati karena
                            kondisi alam yang semakin hari semakin mengering. Hal tersebut terjadi karena tidak ada lagi
                            keseimbangan antara manusia dengan alam sekitar.
                            Namun di pulau tersebut terdapat sebuah kuil yang di yakini sejak jaman dahulu menyimpan
                            sebuah benda yang dapat merubah keadaan pulau menjadi hidup subur seperti sediakala jika di tangan
                            orang yang tepat. Hanya sepasang manusia dengan komodo yang terlahir satu darah dan telah dipilih
                            oleh alam pulau tersebutlah yang dapat mengambil benda dalam kuil itu, dan kemudian mengembalikan
                            keadaan alam pulau menjadi seperti sediakala.
                        </p>
                        <p>
                            Apakah Padar merupakan manusia yang telah ditunjuk untuk mengendalikan alam pulau tersebut ?
                            Apakah Grappy merupakan saudara satu darah dengan Padar ?
                            Lalu bagaiana petualangan mereka di Pulau gersang tersebut ?
                            Apakah mereka orang yang dapat merubah kondisi alam pulau tersebut ? 
                        </p>

                    </div>
                </div>
                <Footer/>
            </div>
            </Fragment>
        )
    }
}
export default Synopsis;