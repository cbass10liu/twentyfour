import '../styles/site.scss';
import Title from './Title.jsx';
import Game from './Game.jsx';
import HowToPlay from './HowToPlay.jsx';
import React from 'react';
import ReactDOM from 'react-dom';
import Utils from './utils.js';

var fullPuzzles = Utils.loadJson('./data/puzzles.json').puzzles;
var currentPuzzle = Utils.randomize(Utils.getNewPuzzle(fullPuzzles));
var operators = ['+', '−', '×', '÷'];

ReactDOM.render(<Title />, document.querySelector('header'));
ReactDOM.render(<Game puzzle={currentPuzzle} possibleOperators={operators} />, document.querySelector('#game'));
ReactDOM.render(<HowToPlay />, document.querySelector('footer'));