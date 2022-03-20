import './App.scss';
import chairData from './chair_images.json';
import shoeData from './shoe_images.json';
import ItemContainer from './component/ItemContainer';
import { NavBar } from './component/NavBar';
import { SingleItem } from './component/SingleItem';
import { useState } from 'react';

function App() {

  const [itemIndex, updateIndex] = useState(0);
  const [singleItemActive, isActive] = useState(true);


  const getIndex = (e) => {
    updateIndex(e.target.getAttribute("index"))
    isActive(true)
  }

  const closeSinglePage = (e) => isActive(false)

  console.log(singleItemActive)

  return (
    <>
      <NavBar/>
    <div className="App">
      <ItemContainer getIndex={getIndex} chairData={chairData} shoeData={shoeData}/>
      <SingleItem closePage={closeSinglePage} openPage={singleItemActive} i={itemIndex} singleData={chairData}/>
    </div>
    </>
  );
}

export default App;
