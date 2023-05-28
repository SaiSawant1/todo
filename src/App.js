import { ThemeContextProvider } from "./context/ThemeContext";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { AuthProvider } from "./context/AuthContext";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
function App() {
  return (
    <ThemeContextProvider>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          
            <Route path="/" element={<ProtectedRoute><MainPage /></ProtectedRoute>} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<ProtectedRoute><LoginPage /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </ThemeContextProvider>
  );
}

export default App;
