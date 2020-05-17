import React,{Component, Fragment} from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link , withRouter } from "react-router-dom";

class Sidebar extends Component {
    openSidebar () {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'block'
        close.style.width = '100%'
        close.style.left = '0'
        open.style.width = '100%'
	}

	closeSidebar () {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'none'
        close.style.width = '0px'
        close.style.left = '-600px'
        open.style.width = '0px' 
    }
    linkPage (value) {
        if(value === 'about') {
            this.props.history.push('/about')
        }else if(value === 'synopsis') {
            this.props.history.push('/synopsis')
        }else if(value === 'merch') {
            this.props.history.push('/merch')
        }else if(value === 'film') {
            this.props.history.push('/film')
        }else if(value === 'karakter'){
            this.props.history.push('/karakter')
        }else if(value === 'timproduksi'){
            this.props.history.push('/timproduksi')
        }else if(value === 'kontak'){
            this.props.history.push('/kontak')
        }else if(value === 'donasi'){
            this.props.history.push('/donasi')
        }
        
    } 
    home(){
        this.props.history.push('/')
    }

    

    render(){
        return(
            <div className="bungkus-nav">
                <div className="menu-logo" style={{ position:"absolute"}}>
                    <div className="burgerbar">
                        <FontAwesomeIcon icon="bars" className="fas fa-2x text-light"  onClick={() => this.openSidebar()}/>
                    </div>
                </div>
				
                    <div className="sidebar" ref="close">
                            <div className="wrapper-sidebar">
                                <div className="wrapper-nav">
                                    <div className="text-nav"  onClick={() => this.linkPage('synopsis')}>
                                        <Link to="/about" style={{textDecoration: 'none'}}><p className="text-menu">Sinopsis</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('karakter')}>
                                        <Link to="/synopsis" style={{textDecoration: 'none'}}><p className="text-menu">Karakter</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('film')}>
                                        <Link to="/merch" style={{textDecoration: 'none'}}><p className="text-menu">Film</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('merch')}>
                                        <Link to="/streaming" style={{textDecoration: 'none'}}><p className="text-menu">Merch</p></Link>
                                    </div>

                                    <div className="text-nav timpadar">

                                        <div class="text-left  dropdown-toggle"  id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            TimPadar
                                        </div>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <div onClick={() => this.linkPage('donasi')}>
                                                <Link class="dropdown-item">Donasi</Link>
                                            </div>
                                            <div onClick={() => this.linkPage('about')}>
                                                <Link class="dropdown-item">Tentang</Link>
                                            </div>
                                            <div onClick={() => this.linkPage('kontak')}>
                                                <Link class="dropdown-item">Kontak</Link>
                                            </div>
                                            <div onClick={() => this.linkPage('timproduksi')}>
                                                <Link class="dropdown-item">Tim Produksi</Link>
                                            </div>
                                        </div>
                                    </div>
                                   
                                    <div className="p-0 exit">
                                        <FontAwesomeIcon icon="times-circle" className="text-light fas fa-2x close" onClick={() => this.closeSidebar()} />
                                    </div>
                                </div>
                            </div>
                    </div>
                <div className="sidebar_bg" ref="sidebarBg" onClick={() => this.closeSidebar()}>
				</div>
            </div>
        )
    }
}
export default withRouter(Sidebar); 