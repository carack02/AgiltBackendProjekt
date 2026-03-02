import { appState } from './helperFunctions.js';

const quizSvgBox = document.querySelector('.svg-box');
quizSvgBox.innerHTML = appState.svg.globe;
