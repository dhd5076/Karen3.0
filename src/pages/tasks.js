import Layout from "@/components/Layout"

const deleteItem = async (id) => {
    const req = await fetch('http://localhost:3000/api/task/' + id, {method: 'DELETE'})
}

const createTask = async (event) => {
    event.preventDefault();
    const req = await fetch('http://localhost:3000/api/task', {
        method: 'POST',
        body: JSON.stringify({
            name: "New Task",
            completed: false
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
    })
    console.log(req.data);
}

const Tasks = ({ tasks }) => {
    return (
        <Layout>
            <div className="flex bg-emerald-200 p-2">
                <form onSubmit={createTask} className="w-full flex-1">
                        <input className="p-1 w-1/2 bg-emerald-100 border-emerald-800 rounded"></input>
                        <button className="ml-2 bg-emerald-800 py-1 px-2 rounded text-emerald-200"> Create </button>
                </form>
                <div className="flex font-bold text-emerald-800">
                    <h1>{tasks.length} Tasks</h1>
                </div>
            </div>
            <ul className="">
                {tasks.map((task) => {
                    return (
                    <li className="bg-emerald-400 flex p-2 justify-between font-semibold text-green-900"> 
                        <div>
                            <h1> {task.name} </h1>
                        </div>
                        <div>
                        <button className="mr-4 rounded px-2 py-1 bg-emerald-800 text-emerald-200 hover:bg-emerald-200 hover:text-emerald-800"> Complete </button>
                        </div>
                     </li>
                )})}
            </ul>
        </Layout>
    )
}

Tasks.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/task')
    const { data } = await res.json();

    return { tasks: data}
}

export default Tasks;