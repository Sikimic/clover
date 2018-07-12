import React from 'react';
import logo from '../../assets/img/logo.png';
// import catalog from '../../assets/pdf/clover.PDF';

import './header.css';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Header extends React.Component {

	componentDidMount () {

    this._bindScroll()
  }

  componentWillUnmount () {

    this._unbindScroll()

  }

  _bindScroll = () => {

    // Use passive event listener if available
    let supportsPassive = false
    try {

      const opts = Object.defineProperty({}, 'passive', {
        get: () => {

          supportsPassive = true

        },
      })
      window.addEventListener('test', null, opts)

    }
    catch (e) {} // eslint-disable-line no-empty

    window.addEventListener(
      'scroll',
      this._handleScroll,
      supportsPassive ? { passive: true } : false
    )

  }

  _unbindScroll = () => {

    window.removeEventListener('scroll', this._handleScroll)

  }

  _handleScroll = () => {

    // Ugly cross-browser compatibility
    const top = document.documentElement.scrollTop
      || document.body.parentNode.scrollTop
      || document.body.scrollTop

    // Test < 1 since Safari's rebound effect scrolls past the top
 		if (window.innerWidth > 767) {
 			if (top < 1) {
 				document.getElementById("image-brand").style.height = '50px';
 				document.getElementById("image-brand").style.marginBottom = '-5px';
	    }
	    else {
	    	document.getElementById("image-brand").style.height = '40px';
	    	document.getElementById("image-brand").style.marginBottom = '-10px';
	    }	
 		}

  }

  render() {

    console.log(this.context);

    return (
    	<Navbar collapseOnSelect fixedTop>
			  <Navbar.Header>
			  	<Navbar.Toggle />
			    <Navbar.Brand>
			    	<a className="link-brand" href="/home">
							<img className="image-brand" id="image-brand" src={logo} alt={logo} />
						</a>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Navbar.Collapse>
			    <Nav id="navbar-nav">

			      <NavItem eventKey={1} href="/about-us">
			        O NAMA
			      </NavItem>
			      <NavItem eventKey={2} href="/gallery">
			      	GALERIJA
			      </NavItem>
			      <NavItem eventKey={3} href="/catalog">
			        KATALOG
			      </NavItem>
			      <NavItem eventKey={4} href="/contact">
			        KONTAKT
			      </NavItem>
			   
          </Nav>
			  </Navbar.Collapse>
			</Navbar>
    );
  }
}

export default Header;