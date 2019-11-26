import React, {Component,Fragment} from 'react';
import {BrowserRouter as Router, swicth, Route, Link} from "react-router-dom";
import '../style/style2.css';
import Utama from './Home/Home';
import Grid from './Grid';
import Home from './content/Home/Home';
import SimpleEvent from './content/event/SimpleEvent';
import Form from './content/event/event';
import Props from './content/Props/Props';
import Test from './content/Form/Test';
import '../style/style.css';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;


class App extends Component{
	render(){
		return(
			<Router>
				<div className="header">
			        <div className="container warna">
			            <nav className="navbar navbar-expand-lg navbar-light warna">
			                <a className="navbar-brand" to=""><img src={require('../logo/logo.png')} alt="" width="180" /></a>
			                <button className="navbar-toggler" type="button" data-toggle="collapse"
			                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
			                    aria-label="Toggle navigation">
			                    <span className="navbar-toggler-icon"></span>
			                </button>

			                <div className="collapse navbar-collapse" id="navbarSupportedContent">
			                    <ul className="navbar-nav ml-auto">
			                    	<li className="nav-item">
			                            <Link to="/" className="nav-link text-white li">Halaman Utama</Link>
			                        </li>
			                        <li className="nav-item">
			                            <Link to="/Home" className="nav-link text-white li">Home</Link>
			                        </li>
			                        <li className="nav-item">
			                            <Link to="/blogs" className="nav-link text-white li">Blogs</Link>
			                        </li>
			                        <li className="nav-item">
			                            <Link to="/" className="nav-link text-white li">Galery</Link>
			                        </li>
			                        <li className="nav-item">
			                            <Link to="/form" className="nav-link text-white li">Kontak</Link>
			                        </li>
			                        <li className="nav-item">
			                            <Link to="/event" className="nav-link text-white li">Simple event</Link>
			                        </li>
			                        <li className="nav-item">
			                            <Link to="/Test" className="nav-link text-white li">Form UI</Link>
			                        </li>
			                    </ul>
			                </div>
			            </nav>
			        </div>
						
					<Fragment>
						<div className="container disini"><Route path="/" exact component={Utama}/></div>
						<Route path="/Home" exact component={Home}/>
                        <Route path="/blogs"  component={Props}/>
                        <Route path="/form"  component={Form}/>
                        <Route path="/event"  component={SimpleEvent}/>
                        <Route path="/Test"  component={Test}/>
					</Fragment>
				</div>
			</Router>
		)
	}
}

export default App;