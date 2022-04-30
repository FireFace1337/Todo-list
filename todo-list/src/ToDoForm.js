import { useState } from 'react';

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const performSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('');
    };

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    return (
        <form onSubmit={performSubmit}>
            <input
            value={userInput}
            type="text"
            onChange={handleChange}
            placeholder="Введите задачу..."
            />
            <button>Сохранить</button>
        </form>
    )
}

export default ToDoForm;