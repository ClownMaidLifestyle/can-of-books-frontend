import './App.css';
import axios from "axios";

function App() {

  async function getServerResponse(){
    console.log("function running");
    const API = `http://localhost:8092`
    await axios.get(API);
    const res = await axios.get(API);
    console.log(res);
    }

  return (
    <div className="App">    
    <button onClick={()=>getServerResponse()}>The amazing server response button</button>
    </div>
  );
}

export default App;
