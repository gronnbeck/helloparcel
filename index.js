// import another component
import React from 'react';
import ReactDOM from 'react-dom';
import HelloJavaScript from './main';
import {PrintHello} from './tslib'
import {HelloTypeScript} from './tscomp'

PrintHello("world")

ReactDOM.render(
  <div>
    <HelloJavaScript name="world" />
    <HelloTypeScript name="world"/>
  </div>,
  document.getElementById('app')
);
