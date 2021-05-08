export default function Filters({clearTask,searchFilter,todoList}) {
    return (
        <>
            {/* <div className="btn">all</div>
            <div className="btn">incompleted</div>
            <div className="btn">completed</div> */}
             <div className="card-action">
             <h5 htmlFor="task-title">Tasks ({todoList ? todoList.length : "0"})</h5>
            <div className="input-field col s12">
              <input type="text" onChange={searchFilter} id="filter"/>
              <label htmlFor="filter">Filter Tasks</label>
            </div>
            <ul className="collection"></ul>
            <button onClick={clearTask} className="clear-tasks btn black">Clear Tasks</button>  </div>
        </>
    );
}
