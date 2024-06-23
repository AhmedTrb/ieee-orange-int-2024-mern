import './App.css'
import taskItem from "./components/taskItem/taskItem";
import {AppContext} from "./context/appContext";
import {useContext, useState} from "react";
function App() {
  const [menu,setMenu] = useState("Tasks");
  const {tasks,notes} = useContext(AppContext);
  return (
    <div>
      <div className='navbar'>
        <li>Tasks</li>
        <li>Notes</li>
      </div>
      
    </div>
  )
}

export default App
