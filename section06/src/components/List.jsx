import './List.css'
import TodoItem from './TodoItem';
import {useState} from 'react';

const List = ({todos}) => {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  }
  const getFilterData = () => {
    if(search === ""){
      return todos;
    }
    return todos.filter((todo) => 
      todo.content.toLowerCase().includes(search.toLowerCase())
    )
  }
  const filterTodos = getFilterData();

  return(
    <div className="List">
      <h4>To do List 🌍</h4>
      <input value={search} onChange={onSearch} placeholder="검색어를 입력하세요" />
      <div className="todowrap">
        {filterTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  )
}

export default List;