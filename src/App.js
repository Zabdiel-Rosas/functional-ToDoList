import { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import data from './data.json'
import './App.css';

function App() {
  const [todoList, setTodoList] = useState(data);

  const addTask = (userInput) => {
    setTodoList([
      ...todoList,
      {
        id: todoList.length + 1,
        task: userInput,
        complete: false
      }
    ]);
  };

  const toggle = (id) => {
    const toggledList = todoList.map(todo => {
      return (
        todo.id == id
        ? {...todo, complete: !todo.complete}
        : todo
      )
    });
    setTodoList(toggledList);
  }

  return (
    <div className='todo-app'>
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        todoList={todoList}
        toggle={toggle}
      />
    </div>
  );
}

export default App;
