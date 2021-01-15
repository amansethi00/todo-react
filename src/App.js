import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import bgLight from "./images/bg-desktop-light.jpg";
import bgDark from "./images/bg-desktop-dark.jpg";
import bgLightMobile from "./images/bg-mobile-light.jpg";
import bgLightDark from "./images/bg-mobile-dark.jpg";


function App() {
  const [newItem,setNewItem]=useState("");
  const [OPTIONS,setOptions] = useState(["One", "Two", "Three"]);
  function fetchValue(event){
    setNewItem(event.target.value);
  } 
  function addToList(event){
        if(event.key ==="Enter"){
         
          let newArr = [...OPTIONS,newItem];
          setOptions(newArr);
          console.log(newArr);
        }
        
      
  }
 
  
  return (
   
    <div className="App">
      
      <div className="header-background">
      <img src={bgLight} ALT="hello" className="bg-header"/>
      </div>
      <div className="container">
      
          <h1 className="head">TODO</h1>
           
        <div><input type="text" className="list" placeholder="Create a new todo" onKeyDown={addToList} onChange={fetchValue}></input></div>
        <div className="useroutput" >
        {OPTIONS.map((value, index) => {
          return (
            <div key={index} id="output" className="output-list">
              <input type="checkbox"></input> {value}
              <br/> 
            </div>

          );
        })}
      </div>
         items left

          All
          Active 
          Completed

          Clear Completed

          Drag and drop to reorder list
     
            </div>
            </div>
      );
}

export default App;
