import "./App.css";
import HomePage from "./components/HomePage";
import DataProvider from "./context/contentProvider";

function App() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}

export default App;
