/** @flow */
'use strict';

require('./landing-styles.css');
require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';


var Home = React.createClass({

  componentDidMount() {
    document.getElementsByTagName('body')[0].className='homeBody';
  },

  componentWillUnmount() {
    document.getElementsByTagName('body')[0].className='';
  },

	render () {

		return (
		<div className="column-landing">
		  <div className="container">
		    <div className="vertical-align-wrap">
		      <div className="vertical-align vertical-align--middle">
		      	
		      	<div className="text-block">
			        <h1 data-sr>Paycheck<br />to<br />Paycheck</h1>
	            	<h3>Learn the tough choices made by those in poverty. What would you choose?</h3>
			        {/* <h4>Brought to you by United Way of Central Carolinas</h4> */}
		      	</div>
		      	
		      	<br />
	            
	            <a href="/app" className="btn btn-dark btn-lg">Get Started</a>
	            <p className="padding-cus"><b><small>Partnered with:</small></b></p>
	            <img src="public/img/uwcc.jpg" />
	            
	            <br />
	            
	            {/* <div className="fb-share-button" data-href="https://povsim-staging.herokuapp.com/" data-layout="button_count"/> 
				*/}
	            <br />

							<div className="weloveclt">
								<img src="public/img/weloveclt.png" />
							</div>

              </div>
		    </div>
		  </div>
		</div>
        );	
	}

});

Home.displayName = 'Home';

export default Home;