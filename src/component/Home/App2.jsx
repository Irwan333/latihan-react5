import React, {Component,Fragment} from 'react';
import '../../style/style2.css';
import Home from '../content/Home/Home';
import SimpleEvent from '../content/event/SimpleEvent';
import Form from '../content/event/event';
import Props from '../content/Props/Props';

import {BrowserRouter as Router, swicth, Route, Link} from "react-router-dom";

class App extends Component{
	render(){
		return(
			<Router>
				<div className="header">
			            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			                <a className="navbar-brand" to=""><img src={require('../../logo/babastudio-logo.png')} alt="" width="180" /></a>
			                <button className="navbar-toggler" type="button" data-toggle="collapse"
			                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
			                    aria-label="Toggle navigation">
			                    <span className="navbar-toggler-icon"></span>
			                </button>

			                <div className="collapse navbar-collapse" id="navbarSupportedContent">
			                    <ul className="navbar-nav ml-auto">
			                        <li className="nav-item">
			                            <Link to="/" className="nav-link text-white li">Home</Link>
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
			                    </ul>
			                </div>
			            </nav>
						
					<Fragment>
						<Route path="/" exact component={Home}/>
                        <Route path="/blogs"  component={Props}/>
                        <Route path="/form"  component={Form}/>
                        <Route path="/event"  component={SimpleEvent}/>
					</Fragment>
				</div>
			</Router>
		)
	}
}

export default App;