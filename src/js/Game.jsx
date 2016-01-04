import Tile from './Tile.jsx';
import Operator from './Operator.jsx';
import EqualsSign from './EqualsSign.jsx';
import Result from './Result.jsx';
import React from 'react';
import Event from './event.js';

var Game = React.createClass({
  // Every game is required to have a puzzle array of four numbers.
  propTypes: {
    puzzle: React.PropTypes.array.isRequired,
  },

  getInitialState: function() {
    // Using this function like a constructor ... hope that's okay
    window.addEventListener('24.operator.changed', (newOperator) => {
        this.forceUpdate();
    });
    return null;
  },

  getValue: function() {
      let tile0Value = 0;
      let operator0Value =  '?';
      let tile1Value =0;
      let operator1Value = '?';
      let tile2Value = 0;
      let operator2Value = '?';
      let tile3Value = 0;

      if (this.refs.tile0) {
          tile0Value = this.refs.tile0.props.value;
          operator0Value = this.refs.operator0.state.operator || '?';
          tile1Value = this.refs.tile1.props.value || 0;
          operator1Value = this.refs.operator1.state.operator || '?';
          tile2Value = this.refs.tile2.props.value || 0;
          operator2Value = this.refs.operator2.state.operator || '?';
          tile3Value = this.refs.tile3.props.value || 0;
      }

      return `${tile0Value}${operator0Value}${tile1Value}${operator1Value}${tile2Value}${operator2Value}${tile3Value}`;
  },

  render: function() {
    return (
      <section className="flexible rows horizontally-centered vertically-centered game">
        <Tile value={this.props.puzzle[0]} ref="tile0" />
        <Operator ref="operator0" />
        <Tile value={this.props.puzzle[1]} ref="tile1" />
        <Operator ref="operator1" />
        <Tile value={this.props.puzzle[2]} ref="tile2" />
        <Operator ref="operator2" />
        <Tile value={this.props.puzzle[3]} ref="tile3" />
        <EqualsSign />
        <Result value={this.getValue()} />
      </section>
    );
  }
});

export default Game;
