import './App.scss';
import chairData from './chair_images.json';
import shoeData from './shoe_images.json';
import ItemContainer from './component/ItemContainer';

function App() {
  console.log(shoeData.results)
  console.log(chairData.results);
  return (
    <div className="App">
      <ItemContainer chairData={chairData} shoeData={shoeData}/>
    </div>
  );
}

export default App;
