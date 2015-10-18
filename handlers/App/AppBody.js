import React from 'react';
import {Resolver} from 'react-resolver';

const RaisedButton = require('material-ui/lib/raised-button');

let Options = require('./Options');


let AppBody = React.createClass({

  nextButton (min, item) {
    console.log("Your balance is: " + this.props.balance);
    console.log("Your min is: " + min);
    if (this.props.balance >= min && item.set === null) {
      return <p>Please make a selection</p>;
    } else if (this.props.balance >= min || item.set != null || item.type ==="fact") {
      return <RaisedButton label='next' onClick={this.props.setPage}/>;
    } else {
      return <p>You are out of money! You need to go back and adjust your monthly budget.</p>;
    }
  },

  cyclePage (item) {
    console.log("Page: " + this.props.page); // For debugging
    console.log("ActiveItemIndex: " + this.props.activeItemIndex); // For debugging
    console.log("Diverged: " + this.props.diverged); // For debugging
    
    /**
     * By default, the item displayed is what you click on in the drawer.
     * But if you're clicking Next (state is not diverged from order), then
     * override that and set the item to the next page.
     */
    if (!this.props.diverged) {
      item = this.props.menuItems[this.props.page-1];
      /**
       * if you visit the item via Next (linear, non-diverged), then set the 
       * item's visted flag to true so as to enable users to access that item 
       * again later from the drawer.
       */
      item['visited'] = true;
    };

    let min = Math.min.apply(null, item.options);
    
    return (
        <div>
          <h3>{item.name}</h3>

          <Options 
            handleBalance={this.props.handleBalance}
            balance={this.props.balance} 
            selectedItem={item} />
          {this.nextButton(min, item)}
        </div>
    );
  },

  beginOrEnd (selectedItem) {
    if (this.props.activeItemIndex === null) {
      return (
        <div>
          <h1>How to Play...</h1>
          <p>Povizio, fo-shiz-io. We will get some text all up in here.</p>
          <RaisedButton label='Begin' onClick={this.props.showFirstQuestion} />
        </div>
        );
    } else {
      return <div>{selectedItem ? <div>{this.cyclePage(selectedItem)}</div> : null}</div>;
    }
  },

  render () {
    let selectedItem = this.props.selectedItem;

    return (
      <div>{this.beginOrEnd(selectedItem)}</div>
    )
  }
})


AppBody.displayName = 'AppBody';

export default AppBody;
