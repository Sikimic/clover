import React, { Component, createContext } from 'react';
import CustomCarousel from '../carousel/carousel.js';

import './home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ApplicationContext = createContext();

const { Provider, Consumer } = ApplicationContext;

const initialState = {
  users: ['Jon', 'Bon', 'Jovi']
};

class Home extends Component {

  render() {

    return (
      <Provider value={initialState}>
      	<div>
					<CustomCarousel />
					<div className="container-fluid container-content">
						<div className="row">

							<a href="/gallery">
								<div className="col-sm-12 thumbnail-box lizard">
									<div className="description">
										<h3>GALERIJA</h3>
										{/* <span> Lorem ipsum dorot sit amet</span> */}
									</div>
								</div>
							</a>

							<a href="/catalog">
							<div className="col-sm-12 thumbnail-box another" style={{marginBottom: '0px'}}>
								<div className="description">
									<h3>KATALOG</h3>
									{/*<span> Lorem ipsum dorot sit amet</span> */}
								</div>
							</div>
							</a>

						</div>
					</div>
				</div>
      </Provider>
    );
  }
}

const withConsumer = BaseComponent => {
	return class extends Component {
		static displayName = `withConsumer${BaseComponent.displayName}`;

		render() {
			return (
				<Consumer>
					{context =>{
						return (
							<BaseComponent {...context} {...this.props} {...this.state} />
						)
					}}
				</Consumer>
			)
		}
	}
}

export default Home;