import React from 'react';
import {Resolver} from 'react-resolver';

const RaisedButton = require('material-ui/lib/raised-button');

const main_button = React.createClass({
  render() {
    return (
        <RaisedButton label="Get Started" />
    );
  },
});

module.exports = main_button;

var Home = React.createClass({
	handleClick () {
		alert('We\'re up and running, Dude!');
	},

	render () {
		return (
			<div>
			  <RaisedButton label="Get Started" primary={true}/>
				<p><a href='#' onClick={this.handleClick}>Are we up and running?</a></p>
				<h2>Check out the <a href="/app">Povizio engine.</a></h2>
				<p>Just added interspersed setbacks. Can you spot it? Still need work to keep people from skipping ahead, require $ selections, etc.</p>
			</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
