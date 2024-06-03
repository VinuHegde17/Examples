import { React, Suspense, lazy, useRef } from "react";
import MaterialUi from "./Components/MaterialUi";
import MuiBtn from "./Components/MuiBtn";
import MuiGrid from "./MuiGrid";
import MuiStack from "./MuiStack";
import Usereducer from "./Components/UseCallback";
import { Route, Routes } from "react-router-dom";
import User from "./Components/User";
import Counter from "./Components/Reducer";
import Uid from "./Components/Uid";
import InputFocus from "./Components/InputFocus";
import Memo from "./Components/Memo";
import Greeting from "./Components/Greeting";
import Effect from "./Components/Effect";
import Callback from "./Components/callback";
import Iife from "./Components/Iife";
import Time from "./Components/Time";
const Lazy = lazy(() => import("./Components/Lazy"));

function App() {
  let inputval = useRef(null);
  function updateInput() {
    inputval.current.value = "1000";
  }
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={""} />
      <Route path="/muigrid" element={<MuiGrid />} />
      <Route path="/muibtn" element={<MuiBtn />} />
      </Routes>
      <Suspense fallback={<h1> Data is Loading</h1>}>
      <Lazy />
      </Suspense>
      <h2>Forward ref</h2>
      <User ref={inputval} />
      <button onClick={updateInput}>Update InputBox</button>
      <br></br>
      <Counter />
      <br></br>
      <Usereducer />
      <Uid />
      <InputFocus />
      <br></br>
      <Memo />
      <Greeting />
      <Effect />
      <hr></hr>
      <Callback/>
      <Iife/>
      <Time/>
    </div>
  );
}

export default App;
