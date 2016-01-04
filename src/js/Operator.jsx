import React from 'react';
import Event from './event.js';

var Operator = React.createClass({

  // Sets initial state to be a random operator.
  getInitialState: function() {
    var randomIndex = Math.floor(Math.random() * 4);
    return {
      operator: (this.getPossibleOperators())[randomIndex]
    };
  },

  // Cycles through the operators in succession.
  cycleOperator: function() {
    var currentOperatorIndex = this.getCurrentOperatorIndex(this.state.operator);
    var nextOperatorIndex = (currentOperatorIndex + 1) % (this.getPossibleOperators().length);
    var newOperator = (this.getPossibleOperators())[nextOperatorIndex];
    this.setState({
      operator: newOperator
    });
    Event.trigger('24.operator.changed', newOperator);
  },

  // Returns a list of possible operators.
  getPossibleOperators: function() {
    var possibleOperators = ['+', '−', '×', '÷'];
    return possibleOperators;
  },

  // Returns the index of the current operator.
  getCurrentOperatorIndex: function(currentOperator) {
    return this.getPossibleOperators().indexOf(currentOperator);
  },

  render: function() {
    return (
      <div className="operator-tile" onClick={this.cycleOperator}>
        <span className="unselectable operator" >{this.state.operator}</span>
      </div>
    )
  }
});

export default Operator;
