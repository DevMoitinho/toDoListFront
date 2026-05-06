import "./Tasks.css";
export default function Tasks(props){
    let content;
    if(props.tasks.length ==0){
        content = <p>No tasks added</p>
    }else{
        content = props.tasks.map((task) => (
                <li key={task.id} className="task">
                    <h3>{task.name}</h3>
                    <h4>{task.date}</h4>
                    <button className="task-button" onClick={function e(){
                        props.remove(task.id);
                    }}>X</button>
                </li>
            ))
    }
    return (
        <ul className="task-box">
            <h3>Your Tasks:</h3>
            {content}
        </ul>
        
    );
}
