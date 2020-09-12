import React, {useState, useEffect} from "react";
import "./App.css";
import Forms from "./Components/Forms";
import Items from "./Components/Items";

function App() {
  // states
  const [inputText, setInputText] = useState("")
  const [status, setStatus] = useState("all")
  const [textArea, setTextArea] = useState("")
  const [list, setList] = useState([])
  const [filtered, setFiltered] = useState([])

  // functions
  useEffect(() => {
    filterHandler()
  }, [list, status])

  const filterHandler = () => {
    switch(status){
      case "completed": 
        setFiltered(list.filter((listie) => listie.completed === true))
        break
      case "uncompleted": 
        setFiltered(list.filter((listie) => listie.completed === false))
        break
      default: 
        setFiltered(list)
        break
    }
  }

  return (
    <div className="App">
      <center>
            <h1>Hello there! welcome to my taskForce</h1>
            <Forms  textArea={textArea} setTextArea={setTextArea} 
                    inputText={inputText} setInputText={setInputText} 
                    list={list} setList={setList} status={status} setStatus={setStatus}/>
              <br />
            <Items filtered={filtered} list={list} setList = {setList} />
      </center>
    </div>
  );
}

export default App;
