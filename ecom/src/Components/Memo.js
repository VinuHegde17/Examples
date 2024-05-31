import React, { useMemo, useState } from "react";

function Memo() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  function addition() {
    setAdd(add + 1);
  }
  function subract() {
    setSub(sub - 1);
  }

  const multiply = useMemo(function multi() {
    return add * 10;
  });
  return (
    <div>
      {add}
      <button onClick={addition}>Add</button>
      {sub}
      <button onClick={subract}>Sub</button>
      {multiply}
    </div>
  );
}

export default Memo;
