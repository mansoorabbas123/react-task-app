export default function Tasks({ todoList, deletTask ,searchTerm}) {

    return (
        <>
           
            <ul className="collection">          
                { 
                todoList.filter(task=>{
                    if(searchTerm==="")
                    {
                        return task;
                    }
                    else if(task.toLowerCase().includes(searchTerm.toLowerCase()))
                    {
                        return task;
                    }
                }).map((task, indx) =>
                        <li className="collection-item" key={indx}>
                            {task}
                            <div href="" className="delete-item secondary-content">
                                <i className="fa fa-remove" onClick={()=> {if(window.confirm('Are you sure you wish to delete this item?')) deletTask(task)}}></i>
                            </div>
                        </li>
                       )   
                }
            </ul>

        </>
    );
}
