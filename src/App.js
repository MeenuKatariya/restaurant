
import './App.css';
import data from "./data.json"
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  return (
    <div className="App">
      <RestaurantDetails data={data}/>
    </div>
  );
}

export default App;
