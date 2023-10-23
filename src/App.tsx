import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Test from "./pages/Test";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Forgot from "./pages/Forgot";
import ResetLinkSent from "./pages/Forgot/ResetLinkSent";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="sent-link" element={<ResetLinkSent />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
