import React, {Component} from 'react';

class Home2 extends Component {
	render() {
	    const {slider} = this.props;
	    return (
	    	<div className="carousel-item">
	    		<img className="d-block w-100 tinggi" src={slider} />
			</div>
	    );
	}
}

export default Home2;



