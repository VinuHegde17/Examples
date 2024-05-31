import React, { useEffect, useState } from "react";

function Effect() {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const timmerid = setTimeout(() => {
      setTime((time) => time + 1);
      console.log(time);
    }, 1000);
    return () => clearTimeout(timmerid);
  }, []);
  return (
    <div>
      <div>Value is {time}</div>
    </div>
  );
}

export default Effect;
