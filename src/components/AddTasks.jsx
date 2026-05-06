import { useState } from "react"
import "./AddTasks.css"

function AddTasks() {
    const [name, setName] = useState("")
    const [deadline, setDeadline] = useState("")

    function handleAdd() {
        if (name === "" || deadline === "") return

        fetch(`${import.meta.env.VITE_API_URL}/tasks`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, date: deadline })
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .then(()=> add())

        setName("")
        setDeadline("")
    }

    return (
        <div className="add-main">
            <div>
                <p>Task Name:</p>
                <input value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <p>Task Deadline:</p>
                <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
            </div>
            <button className="add" onClick={handleAdd}>Add Task</button>
        </div>
    )
}export default AddTasks
