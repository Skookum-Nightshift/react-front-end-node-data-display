import React from 'react';
import {Resolver} from 'react-resolver';


let MenuItems = React.createClass({
  
  handleItemClick (activeItemIndex) {
     /* pass the index of the clicked LI to the parent Component's 
     onActivate prop, which happens to be the handleItem method */
    this.props.onActivate(activeItemIndex);
  },
  
  disableUnvisited (item, index) {
    if (item.visited === true) {
      return (<a href="#" onClick={this.handleItemClick.bind(this, index)}>{item.name}</a>);      
    } else {
      return (item.name);
    }
  },

  renderMenuItems () {
    let activeItemIndex = this.props.activeItemIndex;
    // console.log(this.props.menuItems[activeItemIndex]);
    
    return (
      this.props.menuItems.map((item, index) => // pass in each item in the array along with its index
        <li className={item.type != "normal" ? "hidden" : (index === activeItemIndex ? "bold" : null)}>
          {this.disableUnvisited(item, index)}
        </li>
      )
    );
  },
  
  render () {
    return (
      <div>
        <ul>{this.renderMenuItems()}</ul>
        {this.props.children}
      </div>
    );
  }
});


MenuItems.displayName = 'MenuItems';

export default MenuItems;
