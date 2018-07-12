import React from 'react';
import './footer.css';
import face from '../../assets/img/face.png';
import insta from '../../assets/img/insta.png';

import { Glyphicon } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    return (
    	<div className="footer container-fluid">
    		{/*<div className="top row">
    			<span>Follow us</span>
    			<div className="icon-wrapper">
    				<img className="icon" src={face} alt={face}/>
                    <img className="icon" src={insta} alt={insta}/>
    			</div>
    		</div>*/}

    		<div className="bottom row">
    			<span className="copyright">Copyright@Clover 2018</span>
                <img className="icon" src={insta} alt={insta}/>
                <img className="icon" src={face} alt={face}/>
            {/*<span style={{float: 'right', marginRight: '1em'}}>Follow us: </span>*/}
    		</div>
    	</div>
    );
  }
}

export default Footer;