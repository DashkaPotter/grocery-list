
import './App.css';
import img from './shopping.webp';
import imgTwo from './man.webp';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className='app'>
      <div className='container'>
      <img src={ img } width="250px" alt="shopping"/>
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <img src={ imgTwo } width="200px" alt="man" />
    </div>
  );
}

export default App;
