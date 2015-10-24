/** @flow */

require('./styles.css');

import React from 'react';
import MenuItems from 'MenuItems';
var {PropTypes} = React;

class LeftNav extends React.Component {

  constructor() {
    super();
  }

  render(): ?ReactElement {
    var className = "LeftNav";
    if (this.props.open) {
      className += " is-open";
    }
    return (
      <div className={className}>
        <MenuItems {...this.props} />
      </div>
    );
  }
}

LeftNav.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default LeftNav;
