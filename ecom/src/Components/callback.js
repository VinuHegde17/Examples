import React from 'react';

function Subcomp() {
    console.log('Sub function');
}

function Callback() {
  const handleClick = () => {
    Subcomp();
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <h3>Please click the button</h3>
    </div>
  );
}

export default Callback;
