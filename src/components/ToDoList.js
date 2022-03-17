import ToDo from "./ToDo";

const ToDoList = ({ todoList, toggle }) => {
  return (
    <div className='todo-list'>
      {
        todoList.map(todo => {
          return (
            <ToDo
              id={todo.id}
              key={todo.id + todo.task}
              todo={todo}
              toggle={toggle}
            />
          )
        })
      }
    </div>
  );
};

export default ToDoList;