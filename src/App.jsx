import './App.scss';
import chairData from './chair_images.json';
import shoeData from './shoe_images.json';
import ItemContainer from './component/ItemContainer';
import {NavBar} from './component/NavBar';

function App() {
  console.log(shoeData.results)
  console.log(chairData.results);
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer/>
    </div>
  );
}

export default App;
