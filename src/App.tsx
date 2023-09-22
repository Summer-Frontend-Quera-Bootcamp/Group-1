import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Test from "../pages/Test";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Login</h1>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
