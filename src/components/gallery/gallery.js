import React from 'react';
import './gallery.css';

import paja_1 from '../../assets/img/paja_1.jpg';
import paja_2 from '../../assets/img/paja_2.jpg';
import banduka_1 from '../../assets/img/banduka_1.jpg';
import banduka_2 from '../../assets/img/banduka_2.jpg';

import cope_1 from '../../assets/img/cope_1.jpg';
import cope_2 from '../../assets/img/cope_2.jpg';
import djole_1 from '../../assets/img/djole_1.jpg';
import djole_2 from '../../assets/img/djole_2.jpg';

import laza_1 from '../../assets/img/laza_1.jpg';
import laza_2 from '../../assets/img/laza_2.jpg';
import miha_1 from '../../assets/img/miha_1.jpg';
import miha_2 from '../../assets/img/miha_2.jpg';

import laza_11 from '../../assets/img/laza_11.jpg';
import laza_22 from '../../assets/img/laza_22.jpg';
import lijak_1 from '../../assets/img/lijak_1.jpg';
import lijak_2 from '../../assets/img/lijak_2.jpg';



class Gallery extends React.Component {
	
  render() {
    return (
			<div className="container content">
				
				<div className="row between">
					
					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={paja_1} alt={paja_1} className="img-box box-1" />
							<img src={paja_2} alt={paja_2} className="img-box" />
							<img src={paja_1} alt={paja_1} className="img-background"/>
						</div>
					</div>

					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={banduka_1} alt={banduka_1} className="img-box box-1" />
							<img src={banduka_2} alt={banduka_2} className="img-box" />
							<img src={banduka_1} alt={banduka_1} className="img-background"/>
						</div>
					</div>

				</div>

				<div className="row between">
					
					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={cope_1} alt={cope_1} className="img-box box-1" />
							<img src={cope_2} alt={laza_2} className="img-box" />
							<img src={cope_1} alt={cope_1} className="img-background"/>
						</div>
					</div>

					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={djole_1} alt={djole_1} className="img-box box-1" />
							<img src={djole_2} alt={djole_2} className="img-box" />
							<img src={djole_1} alt={djole_1} className="img-background"/>
						</div>
					</div>

				</div>

				<div className="row between">
					
					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={laza_1} alt={laza_1} className="img-box box-1" />
							<img src={laza_2} alt={laza_2} className="img-box" />
							<img src={laza_1} alt={laza_1} className="img-background"/>
						</div>
					</div>

					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={miha_1} alt={miha_1} className="img-box box-1" />
							<img src={miha_2} alt={miha_2} className="img-box" />
							<img src={miha_1} alt={miha_1} className="img-background"/>
						</div>
					</div>

				</div>

				<div className="row between">
					
					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={laza_11} alt={laza_11} className="img-box box-1" />
							<img src={laza_22} alt={laza_22} className="img-box" />
							<img src={laza_11} alt={laza_11} className="img-background"/>
						</div>
					</div>

					<div className="col-sm-6 relative">
						<div className="img-wrapper">
							<img src={lijak_1} alt={lijak_1} className="img-box box-1" />
							<img src={lijak_2} alt={lijak_2} className="img-box" />
							<img src={lijak_1} alt={lijak_1} className="img-background"/>
						</div>
					</div>

				</div>

			</div>      
    );
  }
}

export default Gallery;