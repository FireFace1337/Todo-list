import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random(),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }

  };

  const deleteTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const performTask = (id) => {
    setTodos([
      ...todos.map((todo) => 
      todo.id === id ? {...todo, complete: !todo.complete } : {...todo})
    ]);
  };
  return (
    <div className="App">
      <header>
        <h1>Количество задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id} 
            performTask={performTask}
            deleteTask={deleteTask}
            />
        )
      })}
    </div>
  );
}

export default App;
