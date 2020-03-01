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
                    <div className="text-light container  wrapper-content">
                        <h2 className="text-center">Tentang</h2>
                        <hr className="pembatas"/>
                        <div className="content-synopsis"> 
                        <p>
                        Dalam rangka menyelesaikan tahap akhir pembelajaran di Does University. Siswa Does University Generasi ke-6 mempersembahkan Project Akhir berupa Short Movie 3D  Animation dengan durasi berkisar 6 menit. Seluruh perancangan karya mulai dari Pre Production, Production, Post Production, merupakan karya orisinil dari siswa Does University generasi ke 6 dan bisa dipertanggungjawabkan keasliannya. Berikut detail final project Short Movie 3D Animation Does University Generasi ke-6.
                        </p>
                            <table align="center" className="tabel">
                                <tr>
                                    <td>Title</td>
                                    <td>: Padar</td>
                                </tr>
                                <tr>
                                    <td>Genre</td>
                                    <td>: Adventure, Fantasy, Fiction</td>
                                </tr>
                                <tr>
                                    <td>Project Type</td>
                                    <td>: 3D Animation Short Movie</td>
                                </tr>
                                <tr>
                                    <td>Duration</td>
                                    <td>: 06:06</td>
                                </tr>
                            </table>
                    
                        <p>Padar adalah kisah tentang seorang pemuda desa dan dua kawan nya, yang merupakan seekor komodo dan seekor tupai terbang. Mereka menghadapi kekeringan ekstrim di pulau tempat mereka tinggal dan secara tidak disengaja mereka menemukan jalan bagaimana pulau mereka dapat kembali seperti sediakala.</p>
                        <p>Padar merupakan film animasi pendek tanpa dialog, dan dapat dinikmati oleh segala kalangan usia. Dalam proses pengerjaan projek ini melibatkan seluruh siswa Does University Generasi 6 sebagai Tim Padar, meliputi 4 jurusan yaitu 3D Animasi, 3D Model, Kompositor dan Programer yang berjumlah keseluruhan adalah 23 siswa. </p>
                        <p>Tim Padar menggunakan software Blender versi 2.81 untuk seluruh keperluan produksinya, dan dikerjakan menggunakan computer windows intel® Core i5-7400T CPU @ 2.40GHz 2.40GHz, dengan RAM 8,00 GB. Dan Graphic card intel® HD Graphics 630 dengan RAM 4GB.</p>
                        <p>Dalam proses projek akhir ini membutuhkan waktu pengerjaan kurang lebih selama 46 hari atau satu setengah bulan efektif pengerjaan. Dalam proses produksi film pendek berdurasi 6 menit ini tentunya bukan tanpa menemui kendala, sering kali kami menemui kendala mulai dari kendala teknis hingga non teknis, salah satunya seperti kendala rendering film yang hingga saat ini masih belum terselesaikan. </p>
                        <p>Mengingat spesifikasi computer kami standard pabrikan, yang artinya hanya mumpuni untuk menggarap saat proses produksi saja, kami pun mencari alternatif lain untuk merender projek ini. Karna tidak mungkin jika kami merender dengan device kami mengingat spesifikasi nya yang terbatas untuk rendering.</p>
                        <p>Namun kami pun mencoba melakukan penghitungan bagaimana jika kami merender dengan device yang kami miliki ini. Jika animasi ini menggunakan 25fps yang jumlah total frame dalam animasi ini sekitar 5.799 frame, sedangkan setiap 1 frame nya membutuhkan waktu rata-rata 30 menit, maka waktu yang kami butuhkan untuk merender projek ini adalah sekitar 120 hari atau kurang lebih 3,1 bulan, yang artinya device kami harus selalu dalam kondisi menyala selama 120 x 24jam hanya untuk rendering saja. Dari penghitungan tersebut maka kami menyimpulkan kondisi ini tidak memungkinkan untuk kami jalani karna kurang efisien nya waktu dan tenaga yang harus kami keluarkan.</p>
                        <p> Kami pun memutuskan untuk mencari alternative lain untuk rendering projek ini, sampai akhirnya kami mencoba bekerjasama dengan pihak LIPI (Lembaga Ilmu Pengetahuan Indonesia). Kami mencoba menawarkan proposal rendering kami melalui layanan jasa rendering gratis untuk pelajar dan mahasiswa. Proposal  kamipun di setujui oleh pihak LIPI dan akhirnya kami mengutus perwakilan untuk berangkat kesana. Namun sayang sekali sesampainya disana pihak LIPI tidak sanggup untuk melanjutkan render projek kami karena produksi kami yang cukup kompleks dan keterbatasan device untuk layanan rendering gratis</p>
                        <p>Pada akhirnya kondisi ini pun mentut kami untuk mencari renderfarm yang lain, dan akhirnya kami menemukan pilihan renderfarm online berbayar yang mungkin cocok untuk kami yaitu Fox Renderfarm yang berada di Cina dan Rebusfarm yang berada di Jerman.</p>
                        <p>Mengingat keterbatasan kami terkait biaya rendering, dengan ini kami membuka donasi dan memohon bantuan bagi siapa pun yang ingin berbaik hati untuk membantu menyelesaikan proses dari projek film pendek kami ini.</p>
                            <hr className="pembatas2"/>
                        <div className="tabel2">
                            <p className="text-center">Ayo Kita bisa bantu untuk mengambangkan Intelectual Property mereka di :</p>                                
                            <table align="center">

                                    <tr>
                                        <td>BANK BCA</td>
                                    </tr>
                                        <td>No. Rekening</td>
                                        <td>: 8020413205</td>
                                    <tr>
                                    </tr>
                                    <tr>
                                        <td>A/n</td>
                                        <td>: Viola Puspa Rani</td>
                                    </tr>
                                </table>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </Fragment>
        )
    } 
}
export default About;