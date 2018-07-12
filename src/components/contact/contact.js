import React from 'react';
import pin from '../../assets/img/marker.png';

import './contact.css';

class Contact extends React.Component {
	
	updateView = function() {
		var contactContent = document.getElementById("contact-content");
		var contactContentWrapper = document.getElementById("contact-content-wrapper");

		if (contactContent.scrollHeight < window.innerHeight - 110)
			contactContentWrapper.style.height = window.innerHeight - 110 + 'px';
		else contactContentWrapper.style.height = 'initial';
  }

	componentDidMount () {
		window.addEventListener("resize", this.updateView);
		this.updateView();

		var timer = setInterval(function() {
			if (window.google) {
				let map = new window.google.maps.Map(document.getElementById('map'), {
		      center: {lat: 44.797534, lng: 20.375860},
		      zoom: 16,
		      mapTypeId: 'roadmap',
		      scrollwheel:  false,
		    });

		    let marker = new window.google.maps.Marker({
		      position: {lat: 44.797534, lng: 20.375860},
		      map: map,
		      icon: pin,
		      title: 'Clover',
		      animation: window.google.maps.Animation.DROP,
		    });

		    clearInterval(timer);
			}
		}, 500);
		
  } 

  componentWillUnmount() {
	  window.removeEventListener('resize', this.updateView);
	}

  render() {
    return (
    	<div id="contact-content-wrapper">
				<div className="container contact-content" id="contact-content">
					
					<div className="row location-row">
						
						<div className="col-sm-8 location-map">
							<div id="map"></div>
						</div>

						<div className="col-sm-4 location-details">

							<table>
								<tbody>
									<tr> 
										<td> Adresa: </td>
										<td className="align-right"> Wooltex d.o.o Novi Beograd ul.Jurija Gagarina 239 </td>
									</tr>
									<tr> 
										<td> Fiksni: </td>
										<td className="align-right"> 
											<a href="tel:0117184791" className="link-cel">011/7184791</a> 
										</td>
									</tr>
									<tr> 
										<td> Mobilni: </td>
										<td className="align-right"> 
											<a href="tel:0638004329" className="link-cel"> 063/8004329 </a>  
											<a href="tel:0641431302" className="link-cel"> 064/1431302 </a> 
										</td>
									</tr>
									<tr> 
										<td> E-mail: </td>
										<td className="align-right"> 
											<a href="mailto:clover@open.telekom.rs" className="link-cel link-email">clover@open.telekom.rs</a> 
											<a href="mailto:clover@open.telekom.rs" className="link-cel link-email-hidden">clover@open</a>  
										</td>
									</tr>
								</tbody>
							</table>

						</div>

					</div>

				</div> 
			</div>     
    );
  }
}

export default Contact;