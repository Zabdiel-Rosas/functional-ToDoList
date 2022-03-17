import { FaTimesCircle } from "react-icons/fa";

const ToDo = ({ todo }) => {
  return (
    <div
      id={todo.id}
      key={todo.id + todo.task}
      className='todo-card'
    >
      <div className='todo-task'>
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