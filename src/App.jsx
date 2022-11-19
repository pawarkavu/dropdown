import { useState } from 'react';
import './App.css';
// Importing images form assests
import Apple from "./assets/apple.jpg"
import Banana from "./assets/banana.jpg"
import Orange from "./assets/orange.jpg"
import Basket from "./assets/basket.jpg"
import Dropdown from './components/dropdown';


function App() {
  let [selection, setselection] = useState("Fruits");    
  let imageArray = {                             // Array of drop down elements
    "Fruits":Basket,
    "Apple":Apple,
    "Banana":Banana,
    "Orange":Orange
  }
  let imgSrc = imageArray[selection];
  return (                                                 
    <div><center>
      <table >      
      <div className="app container">
        <th><b>Select a fruit from the basket</b></th>
        <tr>
                                                                   {/* Dropdown Menu elements from array */}
          <td style={{"width":"300px", "vertical-align":"top"}}>        
          <Dropdown name={selection} options={["Apple", "Banana", "Orange"]} setselection={setselection}></Dropdown>
          
          </td>
         <td style={{"width": "50px"}}></td> 
      <td>
        <center><img src={imgSrc}></img></center>
      </td>
      <td>                  
                                                                                  {/* Reset Button */}
      <a href="#" className="float"  onClick={()=>{setselection("Fruits")}}>      
          <div className="my-float">Reset</div>
          </a>
      </td>
        </tr>
      </div>  
      </table>
      </center>
    </div>
  );
}

export default App;
