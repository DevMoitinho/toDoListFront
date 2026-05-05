import { useState, useEffect } from "react";
import "./Home.css"
import AddTasks from "../components/AddTasks";
import Tasks from "../components/Tasks";

export default function Home(){


    const [tasks, setTasks] = useState([])
    function fetchTasks() {
        fetch("http://localhost:8080/tasks")
            .then(res => {
                const contentType = res.headers.get("content-type")
                if (contentType && contentType.includes("application/json")) {
                    return res.json()
                }
                return []
            })
            .then(data => setTasks(data))
    }
    useEffect(() => {
        fetchTasks() 
    }, [])


    function remove(id){
        fetch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
            method: "DELETE"
        })
            .then(() => props.onTaskDeleted())
    }

    return(
        <div className="main-home">
            <h1>ToDo List</h1>
            <AddTasks add={fetchTasks()} />
            <Tasks tasks={tasks} remove={remove}/>

        </div>

    );
}
