import React from 'react';
import './catalog.css';

class Catalog extends React.Component {
	

	updateView = function() {
		var catalogContent = document.getElementById("catalog-content");
		var catalogContentWrapper = document.getElementById("catalog-content-wrapper");

		if (catalogContent.scrollHeight < window.innerHeight - 110)
			catalogContentWrapper.style.height = window.innerHeight - 110 + 'px';
		else catalogContentWrapper.style.height = 'initial';
  }

	componentDidMount () {

		window.addEventListener("resize", this.updateView);
		this.updateView();
  }

  componentWillUnmount() {
	  window.removeEventListener('resize', this.updateView);
	}

  render() {
    return (
    	<div id="catalog-content-wrapper">
				<div className="container catalog-content" id="catalog-content">
					
					<div className="row">
						

					</div>

				</div> 
			</div>     
    );
  }
}

export default Catalog;