/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Button extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `Button is-${type}`;

    return (
      <button {...props} className={className}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['black', 'grey', 'pink', 'white']),
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  type: 'black',
};

export default Button;
