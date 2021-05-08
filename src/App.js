
import './App.css';
import { useState,useEffect } from 'react';
import Input from './components/input';
import Tasks from './components/tasks';
import Filters from './components/filters'

function App() {
const [todoList,setTodoList] = useState(["kjlskjfkls"]);
const [inputList, setInputList] = useState("");
const [searchTerm, setSearchTerm] = useState("");

const getData = async() => {
 try{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()
  const tasks = data.map( task => task.title);
 localStorage.setItem('tasks',JSON.stringify(tasks));
}
catch
{
  alert("there occurs an error")
}
 } 

useEffect(()=>{

if(localStorage.getItem('tasks')===null){
  getData();
}
  setTodoList(JSON.parse(localStorage.getItem('tasks')));

},[])

const getValue = (event) => setInputList(event.target.value);

const searchFilter = (e) => setSearchTerm(e.target.value);

const addTask = (e) => {
  e.preventDefault();
  if(inputList==="")
  {
     alert("enter your task first") 
  }
  else
  {
    const updatedTasks = [...todoList,inputList]
    setTodoList(updatedTasks);
    localStorage.setItem('tasks',JSON.stringify(updatedTasks));
  }
  
}

const deletTask = (todo) =>
{
  
    console.log(JSON.parse(localStorage.getItem('tasks')));
  
  const filteredTasks = todoList.filter(task => todo.toLowerCase()!==task.toLowerCase());
  setTodoList(filteredTasks)
  localStorage.setItem('tasks',JSON.stringify(filteredTasks))
  if(JSON.parse(localStorage.getItem('tasks')).length===0){
    getData();
  }
}

const clearTask = () =>{
  if(window.confirm('Are you sure you wish to delete all items?')){
    setTodoList([])
    localStorage.clear();
  }

}
 return (
   
    <div className="container">
      <div className="row">
        <div className="col s12">
          { todoList  ?  
          
          <div htmlFor="main" className="card">
          
          <Input addTask={addTask} getValue={getValue} />
          <Filters clearTask={clearTask} searchFilter={searchFilter} todoList={todoList} />
          <div className="card-action">
          <Tasks todoList={todoList} deletTask={deletTask} searchTerm={searchTerm}/>
          </div>
        </div>
        : "no data.....please refresh your browser"
}
      </div> 
        
      </div>
    </div>
  );
}

export default App;
