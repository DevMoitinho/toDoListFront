import "./Tasks.css";
export default function Tasks(props){
    return (
        <ul className="task-box">
            {props.tasks.map((task) => (
                <li key={task.id} className="task">
                    <h3>{task.name}</h3>
                    <h4>{task.date}</h4>
                    <button className="task-button" onClick={function e(){
                        props.remove(task.id);
                    }}>X</button>
                </li>
            ))}
        </ul>
        
    );
}
