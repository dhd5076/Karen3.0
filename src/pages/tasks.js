
const Tasks = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => {
                return <li> {task.name} </li>
            })}
        </ul>
    )
}

Tasks.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/task')
    const { data } = await res.json();

    return { tasks: data}
}

export default Tasks