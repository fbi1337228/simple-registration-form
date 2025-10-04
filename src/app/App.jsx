import SignInPage from "../pages/SignInPage";
import { BrowserRouter, Route, Routes } from "react-router";
import SignUpPage from "../pages/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
