import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Test from "./pages/Test";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPage from "./pages/ForgotPage";
import ResetLinkSentPage from "./pages/ResetLinkSentPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Board from "./pages/BoardListView";

function App() {
  return (
    <>
         <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="sent-link" element={<ResetLinkSentPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/board-list-view" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
 
  );
}

export default App;
