import Header from "./components/Header/header";
import { useTheme } from "./context/ThemeContext";
import Main from "./pages/Main/main";

function App() {
  const { isDark } = useTheme();
  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
