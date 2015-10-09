import React from 'react';
import {Resolver} from 'react-resolver';

var Home = React.createClass({
	handleClick () {
		alert('We\'re up and running, Dude!');
	},
	
	render () {
		return (
			<div>
				<p><a href='#' onClick={this.handleClick}>Are we up and running?</a></p>
				<h2>Check out the <a href="/app">Povizio engine.</a></h2>
				<p>Just added interspersed setbacks. Can you spot it? Still need work to keep people from skipping ahead, require $ selections, etc.</p>
			</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
