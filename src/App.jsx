import './App.scss';
import chairData from './chair_images.json';
import shoeData from './shoe_images.json';
import ItemContainer from './component/ItemContainer';
import { NavBar } from './component/NavBar';
import { SingleItem } from './component/SingleItem';
import { useState } from 'react';

function App() {

  const [itemIndex, updateIndex] = useState(0);
  const [singleItemActive, isActive] = useState(false);
  const [cart, updateCart] = useState([
    {productName: 'The Molina',
    price: 78
    },
    {productName: 'The Molina',
    price: 78
    }
  ])

  const addToCart = (e) => {
    const newItem = e.target.getAttribute("index")
    updateCart({
                productName: chairData.results[newItem].productName,
                price: chairData.results[newItem].price
              })
    console.log(cart);
  }

  const getIndex = (e) => {
    updateIndex(e.target.getAttribute("index"))
    isActive(true)
  }

  const closeSinglePage = (e) => isActive(false)

  return (
    <>
      <NavBar cart={cart}/>
    <div className="App">
      <ItemContainer className='test' getIndex={getIndex} chairData={chairData} shoeData={shoeData}/>
      <SingleItem addToCart={addToCart} closePage={closeSinglePage} openPage={singleItemActive} i={itemIndex} singleData={chairData}/>
    </div>
    </>
  );
}

export default App;
