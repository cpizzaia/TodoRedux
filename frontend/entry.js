import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root.jsx';

$(() => {
  var root = document.getElementById("root");
  if (root === null) return;
  ReactDOM.render(<Root />, root);
});
