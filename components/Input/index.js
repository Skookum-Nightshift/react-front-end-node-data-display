/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onInputChange = this.onInputChange.bind(this);
    this.onInputKeyDown = this.onInputKeyDown.bind(this);
  }

  onInputKeyDown(e) {
    var node = this.refs.inputField.getDOMNode();
    var value = node.value;

    var re = new RegExp(' ', 'g');
    value = value.replace(re, '').replace('/', '');

    if (e.key === 'Backspace' && node.selectionStart === 4) {
      value = value.substring(0, value.length - 1);
    }

    if (isNaN(value)) {
      value = value.substring(0, value.length - 1);
    }

    if (value.length === 2) {
      value = value[0]+value[1]+' / ';
    } else if (value.length === 3) {
      value = value[0]+value[1]+' / '+value[2];
    } else if (value.length >= 4) {
      value = value[0]+value[1]+' / '+value[2]+value[3];
    }

    node.value = value;
  }

  onInputChange() {
    var value = this.refs.inputField.getDOMNode().value;
    if(this.props.type === 'monthYear') {
      value = value.replace('_', '');
      if (value.length === 3) {
        value = value.replace('/', '');
      }
    }

    this.props.onInputChange(this.props.name, value);
  }

  render(): ?ReactElement {
    var requiredClass = this.props.isRequired ? 'Input--required' : '';

    if (this.props.type === 'monthYear') {
      return (
        <input style={this.props.style} type="text" ref="inputField"
          className={'Input ' + requiredClass}
          placeholder={this.props.placeholder}
          onChange={this.onInputChange}
          onKeyUp={this.onInputKeyDown}
          autoFocus={this.props.autoFocus} />
      );
    }

    return (
      <input defaultValue={this.props.defaultValue} style={this.props.style}
        type={this.props.type} ref="inputField"
        className={'Input ' + requiredClass}
        placeholder={this.props.placeholder}
        onChange={this.onInputChange}
        autoFocus={this.props.autoFocus} />
    );
  }
}

Input.defaultPropTypes = {
  type: 'text',
  autoFocus: false,
};

export default Input;
