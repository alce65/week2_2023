import { liveCycle } from '../helpers.js';
import { randomBoard } from '../shell.js';

const app = () => {
  console.log('App Loaded');

  const form = document.querySelector('form');
  const button = form.querySelector('button');
  const inputs = form.querySelectorAll('input');

  const status = {
    lines: 10,
    columns: 10,
    speed: 1000,
    isWorking: false,
    handleInterval: null,
  };

  const setStatus = () => {
    status.lines = inputs[0].value;
    status.columns = inputs[1].value;
    status.speed = inputs[2].value;
  };

  const renderGrid = (fil = 10, col = 10) => {
    const board = liveCycle(randomBoard(fil, col));
    console.table(board);
    let html = '<div class="grid">';
    for (let i = 0; i < fil; i += 1) {
      html += '<div class="fil">';
      for (let j = 0; j < col; j += 1) {
        html += `<div class="cell ${board[i][j] && 'live'}"></div>`;
      }

      html += '</div>';
    }

    document.querySelector('.grid').outerHTML = html;
  };

  const handleInput = (ev) => {
    const element = ev.target;
    console.log('Input on', element.name);
    if (element.name === 'rows' || element.name === 'cols') {
      setStatus();
      renderGrid(status.lines, status.columns);
    }
  };

  const handleClick = () => {
    if (status.isWorking) {
      clearInterval(status.handleInterval);
      button.textContent = 'Start';
    } else {
      button.textContent = 'Stop';
      status.handleInterval = setInterval(() => {
        renderGrid(status.lines, status.columns);
      }, status);
    }

    status.isWorking = !status.isWorking;
  };

  button.addEventListener('click', handleClick);
  inputs.forEach((item) => item.addEventListener('input', handleInput));
  inputs[0].value = status.lines;
  inputs[1].value = status.columns;
  inputs[2].value = status.speed;
  renderGrid();
};

(() => {
  document.addEventListener('DOMContentLoaded', app);
})();
