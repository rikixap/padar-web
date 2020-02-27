import React,{Component, Fragment} from 'react';
import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";

class Navbar extends Component {
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
        close.style.left = '-500px'
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
        }
    }
    home(){
        this.props.history.push('/')
    }

    render(){
        return(
            <Fragment>
                    <div className="menu-logo" style={{ position:"absolute"}}>
                        <div className="burgerbar">
                        <FontAwesomeIcon icon="bars" className="fas fa-2x text-light icon"  onClick={() => this.openSidebar()}/>
                        </div>
                    </div>
                    <div className="sidebar" ref="close">
                            <div className="wrapper-sidebar">
                                <div className="wrapper-nav">
                                    <div className="text-nav"  onClick={() => this.linkPage('synopsis')}>
                                        <Link to="/about" style={{textDecoration: 'none'}}><p className="text-menu">Synopsis</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('karakter')}>
                                        <Link to="/synopsis" className="text-light" ><p className="text-menu">Karakter</p></Link>
                                    </div>
                                    <div className="text-nav"  onClick={() => this.linkPage('film')}>
                                        <Link to="/merch" className="text-light"><p className="text-menu">Film</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('merch')}>
                                        <Link to="/streaming" className="text-light" ><p className="text-menu">Merch</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('about')}>
                                        <Link to="/streaming" className="text-light" ><p className="text-menu">About</p></Link>
                                    </div>
                                    <div className="text-nav" onClick={() => this.linkPage('timproduksi')}>
                                        <Link to="/timproduksi" className="text-light" ><p className="text-menu">Tim Produksi</p></Link>
                                    </div>
                                    <div className="p-0 exit">
                                        <FontAwesomeIcon icon="times-circle" className="text-light fas fa-2x close" onClick={() => this.closeSidebar()} />
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="sidebar_bg" ref="sidebarBg" onClick={() => this.closeSidebar()}>
                    </div>

                
            </Fragment>
        )
    }
}
export default withRouter(Navbar); 