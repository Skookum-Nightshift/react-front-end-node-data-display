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
		        <h1 data-sr>Paycheck<br />to<br />Paycheck</h1>
		            <h4>See the tough choices made by those in poverty.</h4>
		            <h4>What would you choose?</h4>
		            <bold>
		              <a href="/app" className="btn btn-dark btn-lg">Get Started</a>
		            </bold>
		            <p className="padding-cus"><b><small>Partnered with:</small></b></p>
		            <img src="public/img/uwcc.jpg" />
		      </div>
		    </div>
		  </div>
		</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
