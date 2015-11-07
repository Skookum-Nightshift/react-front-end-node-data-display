/** @flow */

require('./styles.css');

import React from 'react';
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
    this.props.closeModalMenu();
  }

  // If an option isn't selected, load the first or second as default
  // depending on how many options
  renderImg (item) {
    if (item.set !== null) {
      let imgIndex = item.options.indexOf(item.set);
      return <img src={item.sectionImage[imgIndex]} className="menuIcon" />;
    } else if (item.sectionImage.length < 2) {
      return <img src={item.sectionImage[0]} className="menuIcon" />;
    } else {
      return <img src={item.sectionImage[1]} className="menuIcon" />;
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

  getListItem (item) {
    // We must get the index of the item from the unfiltered list to make the links 
    // in the filtered list activate the appropriate item when clicked.
    let unfilteredItemIndex = this.props.menuItems.indexOf(item);

    let setItems = item.options.map((option) => {
      return (
        <li className={this.setButtonState(option, item)}>${option}</li>
      );
     });
    
    if (item.visited && item.set !== null) {
      return (
        <a href="#" onClick={this.handleItemClick.bind(this, unfilteredItemIndex)}>
          <div className="menu-item">
            {this.renderImg(item)}
            <ul className="menuOptionList">
              <li className="navselected menuOptionListItem">{item.optionShort[item.options.indexOf(item.set)]}</li>
            </ul>
          </div>
        </a>
      );
    } else {
      return (
        <div className="menu-item">
          {this.renderImg(item)}
          <ul className="menuOptionList">
            <li className="navdisabled menuOptionListItem">{item.name}</li>
          </ul>
        </div>
      );
    }
  }

  // TODO: (bugfix) The bold/test index class application has a bug. It doesn't apply to the 
  // first item (House) initially, and it doesn't apply when facts are selected either.
  renderMenuItems () {
    let activeItemIndex = this.props.activeItemIndex;

    let items = this.props.menuItems.filter(item => 
      (item.type === "normal" || (item.type === "setback" && item.visited === true))
    );

    return (
      items.map((item) =>
        <div key={item.name} className={this.props.menuItems.indexOf(item) === activeItemIndex ? "bold testIndex" : null}>
          {this.getListItem(item)}
        </div>
      )
    );
  }

  render () {
    return (
      <div id="animatedModal" className="animated modalDiv">
        <div id="closebt-container" className="close-animatedModal">
          <img className="closebt" src="public/animatedModal/closebt.svg" onClick={this.props.closeModalMenu} />
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
