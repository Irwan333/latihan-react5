import React, {Component} from 'react';

class Home3 extends Component {
	render() {
	    const {gambar} = this.props;
	    return (
	    	<div className="sliderimage">
		        <div className="row  justify-content-center flex-row">
		            <img className="rounded" src={gambar} alt="Responsive image" />
		        </div>
		    </div>
	    );
	}
}

export default Home3;



