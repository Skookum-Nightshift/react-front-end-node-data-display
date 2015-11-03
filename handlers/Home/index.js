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
		      	<div className="text-block">
			        <h1 data-sr>Paycheck to Paycheck</h1>
			        <h3>Brought to you by United Way of Central Carolinas</h3>
	            <h4>See the tough choices made by those in poverty. What would you choose?</h4>
		      	</div>
		      		<br />
	            <bold>
	              <a href="/app" className="btn btn-dark btn-lg">Get Started</a>
	            </bold>
	            <p className="padding-cus"><b><small>Partnered with:</small></b></p>
	            <img src="public/img/uwcc.jpg" />
	            <br />
	            <div className="fb-share-button" data-href="https://povsim-staging.herokuapp.com/" data-layout="button_count"/>
              </div>
		    </div>
		  </div>
		</div>
                      );	}
});

Home.displayName = 'Home';

export default Home;
