/** @flow */

require('./styles.css');

import React from 'react/addons';
var {PropTypes} = React;

let {CSSTransitionGroup} = React.addons;


class Options extends React.Component {

  constructor () {
    super();

    this.setBalance = this.setBalance.bind(this);
    this.renderOptionsDescAndImg = this.renderOptionsDescAndImg.bind(this);
    this.renderOptions = this.renderOptions.bind(this);
  }

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
  }

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
  }

  renderOptionsDescAndImg () {
    let item = this.props.selectedItem;
    let index = item.options.indexOf(item.set);

    return (
      <div>
        <CSSTransitionGroup transitionName="appBodyImgTransition" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
          <div key={item.set} className="animated appBodyImg">{this.renderImg(item, index)}</div>
        </CSSTransitionGroup>
        <p className="options-desc">{this.props.selectedItem.desc}</p>
      </div>
    );
  }

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
          <button
            onClick={this.setBalance.bind(this, item, cost, index)}
            className={cost === item.set ? "button selected" : "button unselected"}
            disabled={(cost > (this.props.balance + item.set) || (item.type === "setback" && item.visited === true && (this.props.page - 1) > this.props.activeItemIndex)) ? true : false}
            >{item.optionShort[index]}</button>
            <br />
            {(item.set !== null && cost == item.set) ?
              <div className="accordionDesc">
                {item.optionDesc[index]} - <span className="cost">Cost: ${item.options[index]}</span>
              </div> : null
            }
        </span>
      )
    );
  }

  render () {
    return (
      <div>
        {this.renderOptionsDescAndImg()}
        <div className="btn-group" role="group">{this.renderOptions()}</div>
      </div>
    );
  }
}

Options.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Options;
