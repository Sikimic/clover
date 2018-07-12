import React from 'react';
import Routes from '../routes/routes.js';
import Header from '../components/header/header.js';
import Footer from '../components/footer/footer.js';
import { Player } from 'video-react';
import video from '../assets/vid/foxes_rap.mp4';

import './App.css';
import "../../node_modules/video-react/dist/video-react.css";

const keyword = 'FOXES';
var keypressed = '';

class App extends React.Component {

	_handleKeyDown = function (event) {

		if (event.keyCode == 70) keypressed = String.fromCharCode(event.keyCode);
		else keypressed += String.fromCharCode(event.keyCode);

		if (keyword === keypressed) {
			var videoDiv = document.getElementById('video');
			var videos = document.getElementsByClassName('video-react-video');
			videoDiv.classList.add("show-video");
			videos[0].play();
			videos[0].onended = function() {
				videoDiv.classList.remove("show-video");
				videos[0].pause();
			};
		}

	}

 	componentDidMount () {
 		document.addEventListener("keydown", this._handleKeyDown, false);
 		// this.videoElement.addEventListener("ended", this._videoEnded);
  }

  componentWillUnmount() {
  	document.removeEventListener("keydown", this._handleKeyDown, false);
	}

  render() {

    return (
    	<div>
	    	<Header/>
	      <Routes/>

	      <div id="video">
		      <Player
			      playsInline
			      ref={el => this.videoElement = el}
			      src={video}
			      id="video"
			    >
			    </Player>
		    </div>
	      <Footer/>
      </div>
    );
  }
}

export default App;
