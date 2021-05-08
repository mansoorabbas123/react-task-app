export default function Input({addTask,getValue,clearTask}) {

    return (
        <div className="card-content">
            <span className="card-title">Task List</span>
            <div className="row">
                <form htmlFor="task-form">
                    <div className="input-field col s12">
                        <input onChange={getValue} type="text" name="task" id="task" required />
                        <label htmlFor="task">New Task</label>
                        <button onClick={addTask} className="btn">Add Task</button>
                    </div>      
                </form>
            </div>
        </div>
    );
}