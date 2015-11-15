/** @flow */

require('./styles.css');

import React from 'react';
import Isvg from 'react-inlinesvg';
var {PropTypes} = React;

class MenuItems extends React.Component {

  constructor () {
    super();

    this.handleItemClick = this.handleItemClick.bind(this);
    this.setButtonState - this.setButtonState.bind(this);
    this.getListItem = this.getListItem.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
  }

  handleItemClick (activeItemIndex) {
     /* pass the index of the clicked LI to the parent Component's
     onActivate prop, which happens to be the handleItem method */
    this.props.onActivate(activeItemIndex);
    this.props.setOwnerState({navOpen: false}, "Close modal menu");
  }

  // If an option isn't selected, load the first or second as default
  // depending on how many options
  renderImg (item) {
    if (item.set !== null) {
      let imgIndex = item.options.indexOf(item.set);
      return <Isvg src={item.sectionImage[imgIndex]} />;
    } else if (item.sectionImage.length < 2) {
      return <Isvg src={item.sectionImage[0]} />;
    } else {
      return <Isvg src={item.sectionImage[1]} />;
    }
  }

  setButtonState (cost, item) {
    if (cost > (this.props.balance + item.set) || (item.type === "setback" && item.visited === true && (this.props.page - 1) > this.props.activeItemIndex)) {
      return "navdisabled menuOptionListItem";
    } else if (item.set === cost) {
      return "navselected menuOptionListItem";
    } else {
      return "navunselected menuOptionListItem";
    }
  }

  getListItem (item, lastVisitedItem) {
    // We must get the index of the item from the unfiltered list to make the links 
    // in the filtered list activate the appropriate item when clicked.
    let unfilteredItemIndex = this.props.menuItems.indexOf(item);

    let setItems = item.options.map((option) => {
      return (
        <li className={this.setButtonState(option, item)}>${option}</li>
      );
     });
    
    if (item.visited && item !== lastVisitedItem) {
      return (
        <a href="#" onClick={this.handleItemClick.bind(this, unfilteredItemIndex)}>
          <div className="menu-item">
            <div className="menuIcon">{this.renderImg(item)}</div>
            <ul className="menuOptionList">
              <li className="navselected menuOptionListItem">{item.optionShort[item.options.indexOf(item.set)]}</li>
            </ul>
          </div>
        </a>
      );
    } else {
      return (
        <div className="menu-item">
          <div className="menuIcon">{this.renderImg(item)}</div>
          <ul className="menuOptionList">
            <li className="navdisabled menuOptionListItem">{item.name}</li>
          </ul>
        </div>
      );
    }
  }

  renderMenuItems () {
    let activeItemIndex = this.props.activeItemIndex;

    let items = this.props.menuItems.filter(item => 
      (item.type === "normal" || (item.type === "setback" && item.visited === true))
    );

    // Get the last item that was visited.
    // We'll prevent it from being clickable in the nav modal. 
    let visitedItems = this.props.menuItems.filter(item => 
      (item.visited === true)
    );
    let lastVisitedItem = visitedItems[visitedItems.length - 1];

    return (
      items.map((item) =>
        <div key={item.name} className={this.props.menuItems.indexOf(item) === activeItemIndex ? "navactive" : null}>
          {this.getListItem(item, lastVisitedItem)}
        </div>
      )
    );
  }

  render () {
    return (
      <div id="animatedModal" className="animated modalDiv">
        <div id="closebt-container" className="close-animatedModal">
          <img className="closebt" src="public/animatedModal/closebt.svg" onClick={this.props.setOwnerState.bind(null, {navOpen: false}, "Close modal menu")} />
        </div>
        <div className="modal-container">
          <div className="modal-body">
            <ul>{this.renderMenuItems()}</ul>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

MenuItems.propTypes = {
  id: PropTypes.any.isRequired,
};

export default MenuItems;
