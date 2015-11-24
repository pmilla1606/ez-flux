var React = require('react');
var ReactDOM = require('react-dom');

function init() {
  console.log('ready to rock steady')
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(init);
