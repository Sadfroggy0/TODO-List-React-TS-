import { Route, Routes } from "react-router-dom";
import {Bullshit1} from "./Bullshit1"
import {Bullshit2} from "./Bullshit2"



export const TestPage = () => {
  return (
    <>
      <div>
        <h1>THIS IS TEST PAGE</h1>
      </div>
      <Routes>
        <Route path="/bullshit1" element={<Bullshit1 />}></Route>
        <Route path="/bullshit2" element={<Bullshit2 />}></Route>
      </Routes>
    </>
  );
};
