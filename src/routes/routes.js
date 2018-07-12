import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../components/home/home.js';
import Gallery from '../components/gallery/gallery.js';
import AboutUs from '../components/about/about.js';
import Catalog from '../components/catalog/catalog.js';
import Contact from '../components/contact/contact.js';

export default() => (
	<BrowserRouter>
		<Switch>
			<Route path='/' exact render = { props => <Home {...props} /> } />
			<Route path='/home' exact render = { props => <Home {...props} /> } />
			<Route path='/gallery' exact render = { props => <Gallery {...props} /> } />
			<Route path='/about-us' exact render = { props => <AboutUs {...props} /> } />
			<Route path='/catalog' exact render = { props => <Catalog {...props} /> } />
			<Route path='/contact' exact render = { props => <Contact {...props} /> } />
		</Switch>
	</BrowserRouter>
);