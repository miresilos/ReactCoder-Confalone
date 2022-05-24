import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import React from 'react'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Con cambios" />
    </>
  );
}

export default App;
