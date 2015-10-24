/** @flow */
'use strict';

require('./landing-styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';

var Home = React.createClass({

	render () {
		return (
		<div className="column-landing">
		  <div className="container">
		    <div className="vertical-align-wrap">
		      <div className="vertical-align vertical-align--middle">
		        <h1 data-sr>Poviz.io</h1>
		            <h4>Poverty is hard and oftens leads to homelessness.</h4>
		            <h4>See the tough choices made every day by people living in poverty.</h4>
		            <h4>What will you sacrifice?</h4>
		            <bold>
		              <a href="/app" className="btn btn-dark btn-lg">Get Started</a>
		            </bold>
		            <p className="padding-cus"><b><small>Partnered with:</small></b></p>
		            <img src="https://preview.c9.io/alfonso_cabrera/html-poviz/landing-page/startbootstrap-stylish-portfolio-1.0.3/img/uwcc.png"></img>
		            <p className="padding1"><small>United Way of Central Carolinas</small></p>
		      </div>
		    </div>
		  </div>
		</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
