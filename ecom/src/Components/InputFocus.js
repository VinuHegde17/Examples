import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef(null);

  const handleClick = () => {
      inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default InputFocus;
