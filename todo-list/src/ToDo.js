function ToDo({ todo, performTask, deleteTask}) {
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item-text strike" : "item-text"}
            onClick={() => {
                performTask(todo.id)
            }}>
                {todo.task}
            </div>
            <div className="item-delete" onClick={() => {
                deleteTask(todo.id)
            }}>
                Удалить
            </div>
        </div>
    )
}

export default ToDo;