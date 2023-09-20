import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test from "../pages/Test";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Login</h1>} />
          <Route path="/test" element={<Test />} />
          <Route path="/register" element={<h1>register</h1>} />
          <Route path="/forgot" element={<h1>forgot</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
