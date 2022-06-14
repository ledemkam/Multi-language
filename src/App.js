import "./App.css";
import Content from "./Components/Contenu/Content";
import ToggleLangs from "./Components/ToggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <ToggleLangs />
        <Content />
      </ContextProvider>
    </div>
  );
}

export default App;
