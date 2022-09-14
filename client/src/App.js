import './App.css';
import AddButton from './components/AddButton';
import Page from './components/Page';

function App() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col">
      {/*Navbar*/}
      <AddButton />
      {/*Body A:4*/}
      <Page />
      {/**/}
    </div>
  );
}

export default App;
