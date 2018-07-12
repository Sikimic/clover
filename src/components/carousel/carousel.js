import React from 'react';
import { Carousel } from "react-responsive-carousel";
import cover1 from '../../assets/img/coverImage1.jpg';
import cover2 from '../../assets/img/coverImage2.jpg';
import cover3 from '../../assets/img/coverImage3.jpg';

import './carousel.css';

class CustomCarousel extends React.Component {
  render() {
    return (
    	<Carousel autoPlay showThumbs={false} infiniteLoop={true} stopOnHover={false} emulateTouch={true} showArrows={false}>
		    <div>
		      <img src={cover1} alt={cover1} />
		      {/*<h3 className="legend black">LOREM IPSUM</h3>*/}
		    </div>
		    <div>
		      <img src={cover2} alt={cover2} />
		      {/*<h3 className="legend">Legend 2</h3>*/}
		    </div>
		    <div>
		      <img src={cover3} alt={cover3} />
		    </div>
		  </Carousel>
    );
  }
}

export default CustomCarousel;