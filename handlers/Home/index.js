import React from 'react';
import {Resolver} from 'react-resolver';

const RaisedButton = require('material-ui/lib/raised-button');

const MyAwesomeReactComponent = React.createClass({
  render() {
    return (
        <RaisedButton label="Default" />
    );
  },
});

module.exports = MyAwesomeReactComponent;

var Home = React.createClass({
	handleClick () {
		alert('We\'re up and running, Dude!');
	},

	render () {
		return (
			<div>
        <RaisedButton label="Default" primary={true} />
				<p><a href='#' onClick={this.handleClick}>Are we up and running?</a></p>
				<h2>Check out the <a href="/app">Povizio engine.</a></h2>
				<p>Just added interspersed setbacks. Can you spot it? Still need work to keep people from skipping ahead, require $ selections, etc.</p>
			</div>
		);
	}
});

Home.displayName = 'Home';

export default Home;
