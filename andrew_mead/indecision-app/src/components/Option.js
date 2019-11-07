import React from 'react';

const Option = (props) => (
  <div>
    Option: {props.optionText}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      Delete this option
      </button>
  </div>
);


export default Option;