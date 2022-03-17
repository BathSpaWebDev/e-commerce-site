import './App.scss';
import chairData from './chair_images.json';
import shoeData from './shoe_images.json';
import ItemContainer from './component/ItemContainer';
import { NavBar } from './component/NavBar';
import { SingleItem } from './component/SingleItem';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemContainer chairData={chairData} shoeData={shoeData}/>
      <SingleItem singleData={chairData}/>
    </div>
  );
}

export default App;
