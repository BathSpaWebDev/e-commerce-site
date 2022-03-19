import './App.scss';
import chairData from './chair_images.json';
import shoeData from './shoe_images.json';
import ItemContainer from './component/ItemContainer';
import { NavBar } from './component/NavBar';
import { SingleItem } from './component/SingleItem';
import { useState } from 'react';

function App() {

  const [itemIndex, updateIndex] = useState(0);


  const getIndex = (e) => {
    updateIndex(e.target.getAttribute("index"))
  }


  return (
    <>
      <NavBar/>
    <div className="App">
      <ItemContainer getIndex={getIndex} chairData={chairData} shoeData={shoeData}/>
      <SingleItem i={itemIndex} singleData={chairData}/>
    </div>
    </>
  );
}

export default App;
