// import a CSS module
import classes from './main.css';
import React from 'react';

const HelloJavaScript = ({name}) => {
  return (
    <div>
      <p>Hello to {name} from JavaScript</p>
    </div>
  )
}

export default HelloJavaScript
