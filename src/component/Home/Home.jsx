import React, {Component} from 'react';
import Home2 from './Home2';
import Home3 from './Home3';

function GambarPojok(props) {
	return (
		<img className="img-fluid rounded slide" src={props.pojok} alt="Responsive image" />
    );
}

class Home extends Component{
constructor(props){
super(props);
this.state={
simple: "A simple success alert-check it out!"
};
}
render(){
return(
<div className="slider">
    <Home3 gambar={require('../../gambar/desktop.jpg')} />
    <div className="notive">
        <div className="row">
            <div className="col-md-12">
                <div className="alert alert-danger danger" role="alert">
                    <p className="text-white text-center">{this.state.simple}</p>
                </div>
            </div>
        </div>
    </div>

    <div className="slide">
        <div className="row">
            <div className="col-md-9">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100 tinggi" src={require('../../gambar/slide1.jpg')} alt="First slide" />
                        </div>
                        <Home2 slider={require('../../gambar/slide2.jpeg')} />
                        <Home2 slider={require('../../gambar/slide3.jpg')} />
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div className="col-md-3">
            	<GambarPojok pojok={require('../../gambar/mini-banner-1-raw.png')} />
            	<GambarPojok pojok={require('../../gambar/mini-banner-2-raw.png')} />
            </div>
        </div>
    </div>
</div>
)
}
}

export default Home;