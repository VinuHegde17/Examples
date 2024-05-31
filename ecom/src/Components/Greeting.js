import React, { useState } from "react";

function Greeting() {
  const [isloggedin, setIsloggedin] = useState(false);
  return (
    <div>
      <h1>{isloggedin ? "SignOut" : "Welcome"}</h1>
      <button onClick={() => setIsloggedin(!isloggedin)}>
        {isloggedin ? "Login" : "Logout"}
      </button>
    </div>
  );
}

export default Greeting;
