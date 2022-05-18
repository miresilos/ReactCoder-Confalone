import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="lorem" />
    </>
  );
}

export default App;
