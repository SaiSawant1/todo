import { ThemeContextProvider } from "./context/ThemeContext";
import MainPage from "./pages/MainPage";


function App() {
  return (
  <ThemeContextProvider>
  <MainPage/>
  </ThemeContextProvider>
  );
}

export default App;
