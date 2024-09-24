import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even';
import {useState, useEffect, useRef} from 'react';

function App() {
  const [count,setCount] = useState(0);
  const [input,setInput] = useState("");
  const isMount = useRef(false);
  useEffect(()=>{
    console.log("mount");
  },[])
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log("update");
  })
  const onClickButton = (value) => {
    setCount(count + value)
  }
  return (    
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <input value={input} onChange={(e) => {
          setInput(e.target.value);
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
