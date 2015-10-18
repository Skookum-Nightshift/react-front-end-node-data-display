import React from 'react';
import {Resolver} from 'react-resolver';

const RaisedButton = require('material-ui/lib/raised-button');

const ThemeManager = require('material-ui/lib/styles/theme-manager');
const MyRawTheme = require('../../theme/rawTheme');


let Options = React.createClass({

  childContextTypes : {
    muiTheme: React.PropTypes.object,
  },

  getChildContext() {
    return {
        muiTheme: ThemeManager.getMuiTheme(MyRawTheme),
    };
  },

  setBalance (item, cost, choice) {
    let bal = this.props.balance;

    /**
     * If the budget for the item has not been set, set it to the cost of
     * the item clicked and deduct that from the budget. If it HAS been set
     * and you're changing your choice, add the originally set amount back into
     * the budget, update the item's 'set' key, and deduct the newly selected
     * amount from the budget.
     */
    if (item['set'] === null) {
      item['set'] = cost;
      bal -= cost;
    } else {
      bal += item['set'];
      item['set'] = cost;
      bal -= cost;
    }

    this.props.handleBalance(bal);
  },

  // If an option isn't selected, load the first or second as default
  // depending on how many options
  renderImg (item, index) {
    if (index === -1) {
      if (item.sectionImage.length < 2) {
        return <img src={item.sectionImage[0]} className="sectionIcon" />;
      } else {
        return <img src={item.sectionImage[1]} className="sectionIcon" />;
      }
    } else {
      return <img src={item.sectionImage[index]} className="sectionIcon" />;
    }
  },

  renderOptionsDescAndImg () {
    let item = this.props.selectedItem;
    let index = item.options.indexOf(item.set);

    return (
      <div>
        {this.renderImg(item, index)}
        <p>{this.props.selectedItem.desc}</p>
        <p>{item.optionDesc[index]}</p>
      </div>
    );
  },

  renderOptions () {
    let item = this.props.selectedItem;

    return (
      item.options.map((cost, index) =>

        /**
         * When a selection is made, update the balance, set the class
         * (to make the selection red), and then determine whether the selection
         * should be disabled or not. If a selection has been made and the button's
         * cost is less than the selection, it should always be enabled. You always
         * want to allow people to decrease their budget. If no selection has been
         * made, then disable whatever doesn't fit within their budget.
         */
        <span>
        <RaisedButton
                primary={true}
                onClick={this.setBalance.bind(this, item, cost, index)}
                className={cost === item.set ? "activeOption" : null}
                disabled={(item.set !== null && cost < item.set) ? false : (cost > (this.props.balance + item.set) ? true : false)}
                label={"$ " + cost}
                style={{
                  margin: '10px'
                }}/>
        </span>
      )
    );
  },

  render () {
    return (
      <div>
        {this.renderOptionsDescAndImg()}
        <div className="btn-group" role="group">{this.renderOptions()}</div>
      </div>
    );
  }
});



Options.displayName = 'Options';

export default Options;
