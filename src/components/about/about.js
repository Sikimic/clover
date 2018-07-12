import React from 'react';
import './about.css';

class Gallery extends React.Component {
	

	updateView = function() {
		var aboutContent = document.getElementById("about-content");
		var aboutContentWrapper = document.getElementById("about-content-wrapper");

		if (aboutContent.scrollHeight < window.innerHeight - 110)
			aboutContentWrapper.style.height = window.innerHeight - 110 + 'px';
		else aboutContentWrapper.style.height = 'initial';
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
    	<div id="about-content-wrapper">
				<div className="container about-content" id="about-content">
					
					<div className="row">
						
						<div className="col-sm-12">
							<div className="text-wrapper">
									<h2 className="title">  Dobrodošli na sajt <span className="color-green"> Clover</span> trikotaže  </h2>
							</div>
						</div>

					</div>

					<div className="row text-justify">
						<div className="col-sm-4">
							<span className="color-green">„Clover“</span> trikotaža u okviru preduzeća Wooltex d.o.o. ,prvi put se pojavljuje na našem tržištu 2005.god. Bavimo se proizvodnjom muških odevnih predmeta i to prvenstveno trikotažom-džemperi,šalovi,kape, rukavice kao i košuljama visokog kvaliteta. 
								Pored standarnih artikala našu kolekciju osvežavamo dva puta godišnje i to kolekcijama jesen-zima I proleće-leto.
						</div>
						<div className="col-sm-4">
							Od samog početka rada insistiramo na tome da imamo konstantno dostupan lager tj. nismo se oslanjali niti radili klasičan vid prezentacije,tako da kod nas uvek možete izabrati široki asortiman proizvoda  za vašu maloprodaju. 	
							Naš osnovni cilj je zadovoljan potrošač,a to je jedino moguće uz veliku posvećenost svakom detalju kao i istrajnost na kvalitetu proizvoda.
						</div>
						<div className="col-sm-4">
							U našoj proizvodnji koristimo visokokvalitetna prediva i materijale,i to isključivo prirodnog sastava 100% pamuk,i vunu,kao i posebnu obradu i doradu.Pored klasičnih modela i boja trudimo se da ispratimo I aktuelne modne trendove.
							Priključite se našem timu i ugrabite sreću koju će vam doneti naš zaštitni znak,detelina sa četiri lista.
						</div>
					</div>

				</div> 
			</div>     
    );
  }
}

export default Gallery;