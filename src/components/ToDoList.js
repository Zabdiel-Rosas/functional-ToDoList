import ToDo from "./ToDo";

const ToDoList = ({ todoList }) => {
  return (
    <div className='todo-list'>
      {
        todoList.map(todo => {
          return (
            <ToDo
              id={todo.id}
              key={todo.id + todo.task}
              todo={todo}
            />
          )
        })
      }
    </div>
  );
};

export default ToDoList;