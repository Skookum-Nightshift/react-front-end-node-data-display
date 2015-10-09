import React from 'react';
import {Resolver} from 'react-resolver';

var Home = React.createClass({
	handleClick () {
		alert('clicked');
	},
	
	render () {
		return (
			<div>
				<p><a href='#' onClick={this.handleClick}>Click Me, Dude!</a></p>
				<a className="btn btn-primary" href="#" role="button">Bootstrap</a>
			</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
