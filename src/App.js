import { ThemeContextProvider } from "./context/ThemeContext";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
  <ThemeContextProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  </BrowserRouter>
  </ThemeContextProvider>
  );
}

export default App;
