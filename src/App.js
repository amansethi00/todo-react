import logo from './logo.svg';
import './App.css';
import bgLight from "./images/bg-desktop-light.jpg";
import bgDark from "./images/bg-desktop-dark.jpg";
import bgLightMobile from "./images/bg-mobile-light.jpg";
import bgLightDark from "./images/bg-mobile-dark.jpg";

const OPTIONS = ["One", "Two", "Three"];
function App() {
  return (
    <div className="App">
      <div className="header-background">
      <img src={bgLight} alt="background-image" className="bg-header"/>
      </div>
      <div className="container">
      
          <h1 className="head">TODO</h1>
           
        <div><input type="text" className="list" placeholder="Create a new todo"></input></div>
        <div className="list-container">


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
