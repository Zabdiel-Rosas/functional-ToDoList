import { FaTimesCircle } from "react-icons/fa";

const ToDo = ({ todo, toggle }) => {

  const handleToggle = (e) => {
    e.preventDefault();
    toggle(todo.id);
  };

  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      className='todo-card'
    >
      <div
        className={todo.complete ? 'todo-task strike' : 'todo-task'}
        onClick={handleToggle}
      >
        {todo.task}
      </div>
      <div className='todo-icons'>
        {
          todo.complete
          ? (
            <FaTimesCircle className='delete-todo'/>
          ) : (null)
        }
      </div>
    </div>
  );
};

export default ToDo;