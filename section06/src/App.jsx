import './App.css'
import Editor from './components/Editor'
import Header from './components/Header'
import List from './components/List'
import {useState, useRef} from 'react';

const mokData = [
  {
    id :0,
    isDone : false,
    content : "React 공부하기",
    date : new Date().getTime(),
  },
  {
    id :1,
    isDone : false,
    content : "빨레하기",
    date : new Date().getTime(),
  },
  {
    id :2,
    isDone : false,
    content : "설겆이하기",
    date : new Date().getTime(),
  },
]
function App() {
  const [todos,setTodos] = useState(mokData);
  const idRef = useRef(3);
  const onCreate = (content) => {
    const newTodos = {
      id : idRef.current++,
      isDone : false,
      content : content,
      date : new Date().getTime(),
    }
    setTodos([newTodos,...todos]);
  }
  return (
    <div className='app'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  )
}

export default App
