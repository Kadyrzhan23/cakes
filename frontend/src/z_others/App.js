import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null)
  const loader = async ()=>{
    const obj = {
      method:'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',},
      body:new URLSearchParams({"name":"Kadyrzhan", "password":"123456"})
    }
    let res = await fetch('/api',obj)
    let result = await res.json()
    console.log(result)
    // setData(result.message)    
  }
  useEffect(() => {
    // loader()
    // .then((response) => response.json())
    // .then((response) => setData(response))
  }, []);
  return (
    <div className="App">

    </div>
  );
}

export default App;
