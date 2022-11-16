import { HomePage} from "./routes/HomePage";
import { TestPage} from "./routes/TestPage";
import { NotFoundPage} from "./routes/NotFoundPage";


import { } from "./routes/TestPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/test/*" element={<TestPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
