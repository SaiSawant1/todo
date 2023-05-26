import { ThemeContextProvider } from "./context/ThemeContext";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <ThemeContextProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<MainPage />} />
            <Route path="signup" element={<SignupPage />} />
          
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
