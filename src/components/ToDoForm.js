import { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  return (
    <form type='submit' className='todo-form'>
      <input
        type='text'
        name='todo-input'
        placeholder='Add a Task...'
        value={userInput}
        onChange={handleChange}
      />
      <button
        type='submit'
        className='todo-btn'
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default ToDoForm;