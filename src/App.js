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

  return (
    <div className="todo-app">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList todoList={todoList}/>
    </div>
  );
}

export default App;
