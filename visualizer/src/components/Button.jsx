import React from 'react';

// Defining the Button component
const Button = (props) => {

  

  return (
    <button className={props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
