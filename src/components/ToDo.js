import { FaTimesCircle } from "react-icons/fa";

const ToDo = ({ todo, toggle, delTask }) => {

  const handleToggle = (e) => {
    e.preventDefault();
    toggle(todo.id);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    delTask(todo.id);
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
        {
          todo.complete
          ? (
            <div className='todo-icons'>
              <FaTimesCircle
                className='delete-todo'
                onClick={handleDelete}
              />
            </div>
          ) : (null)
        }
    </div>
  );
};

export default ToDo;