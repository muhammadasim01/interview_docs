import "./App.css";
import AddButton from "./components/AddButton";
import Page from "./components/Page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" component={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
