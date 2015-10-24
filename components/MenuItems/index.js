/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class MenuItems extends React.Component {

  constructor () {
    super();

    this.handleItemClick = this.handleItemClick.bind(this);
    this.disableUnvisited = this.disableUnvisited.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  handleItemClick (activeItemIndex) {
     /* pass the index of the clicked LI to the parent Component's
     onActivate prop, which happens to be the handleItem method */
    this.props.onActivate(activeItemIndex);
  }

  disableUnvisited (item, index) {
    if (item.visited === true) {
      let setItems = item.options.map((option) => {
        return (
          <li className={item.set === option ? "selected" : ''} >{option}</li>
        );
       });
      return (
        <div className="menu-item">
          <a href="#" onClick={this.handleItemClick.bind(this, index)}>{item.name}</a>
          {item.set !== null ?
            <ul>
              {setItems}
            </ul>
          : ''}
        </div>
      );
    } else {
      return (item.name);
    }
  }

  renderMenuItems () {
    let activeItemIndex = this.props.activeItemIndex;
    // console.log(this.props.menuItems[activeItemIndex]);

    return (
      this.props.menuItems.map((item, index) => // pass in each item in the array along with its index
        <li className={item.type !== "normal" ? "hidden" : (index === activeItemIndex ? "bold" : null)}>
          {this.disableUnvisited(item, index)}
        </li>
      )
    );
  }

  render () {
    return (
      <div>
        <ul>{this.renderMenuItems()}</ul>
        {this.props.children}
      </div>
    );
  }
}

MenuItems.propTypes = {
  id: PropTypes.any.isRequired,
};

export default MenuItems;
