import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import bgLight from "./images/bg-desktop-light.jpg";
import bgDark from "./images/bg-desktop-dark.jpg";
import bgLightMobile from "./images/bg-mobile-light.jpg";
import bgLightDark from "./images/bg-mobile-dark.jpg";


function App() {
  const [newItem,setNewItem]=useState("");
  const [completed,setCompleted] = useState("");
  const [all,setAll] = useState("");
  const [OPTIONS,setOptions] = useState([]);
  
  const [remaining,setRemaining]=useState(OPTIONS.length);
  function fetchValue(event){
    setNewItem(event.target.value);
  } 
  function addToList(event){
        if(event.key ==="Enter" && newItem!==""){
         
          let newArr = [...OPTIONS,{value:newItem,completed:false}];
          setOptions(newArr);
          setRemaining(remaining+1);
          console.log(newArr);
          event.target.value="";
        }
        
      
  }
  function checkHandler(event){
    // if(OPTIONS[OPTIONS.filter(s=>s.name).findIndex(event.target.value)].completed ===false){
    //   return false;
    // }
    // else{
    //   return true;
    // }
    if(OPTIONS===completed){
      return true;
    }
    else{
      // if(event.target.value.completed === false){
      //   return false;
      // }
      // else{
      //   return true;
      // }
      return "";

    }
   
  }
 function checkBoxHandler(event){
    // event.target.checked =!event.target.checked;
    if(OPTIONS===completed){

      // event.target.checked =true;
      console.log(event);
      console.log("in completed");
    }
    else{
      console.log(event.target.checked);
      if(event.target.checked ===true){
        console.log(event.target.value);
        OPTIONS.forEach(s=> {
          if(s.value === event.target.value){
            s.completed=true;
          }
        });
        
      }
      else{
        OPTIONS.forEach(s=> {
          if(s.value === event.target.value){
            s.completed=false;
          }
        });
      }
      console.log(OPTIONS);

    }
   
    
    
    
 }
 function completedHandler(){
  setAll(OPTIONS);
   let completed = OPTIONS.filter(s=>s.completed===true);
   setCompleted(completed);
   
   setOptions(completed);
 }
 function allHandler(){
   setOptions(all);
   setCompleted(completed);

 }
  
  return (
   
    <div className="App">
      
      <div className="header-background">
      <img src={bgLight} ALT="hello" className="bg-header"/>
      </div>
      <div className="container">
      
          <h1 className="head">TODO</h1>
           
        <div><input type="text" className="list" placeholder="Create a new todo" onKeyPress={addToList} onChange={fetchValue} ></input></div>
        <div className="useroutput" >
        
        {OPTIONS.map((value, index) => {
          return (
            <div key={index} id="output" className="output-list">
              <input type="checkbox" className="checkbox" 
              onClick={checkBoxHandler} value={value.value} defaultChecked={value.completed}></input> {value.value}
              <br/> 
            </div>

          );
        })}
        <div className="span-bar">
          <div id="items=left" className="span-items">{remaining} items left</div>
          <div className="span-items" id="all" onClick={allHandler}> All</div>
          <div className="span-items" id="active"> Active</div>
          <div className="span-items" id="completed" onClick={completedHandler} > Completed</div>
          <div id="clear" className="span-items">Clear Completed
</div></div>
        
      </div>
         

         


          
          Drag and drop to reorder list
     
            </div>
            </div>
      );
}

export default App;
