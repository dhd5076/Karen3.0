import Layout from "@/components/Layout"
import {useRouter} from 'next/navigation';
import {useState} from 'react'

import { HiCheck, HiPlusCircle } from 'react-icons/hi'

const Tasks = ({ tasks }) => {

    const [taskName, setTaskName] = useState('');

    const router = useRouter();

    const deleteTask = async (id) => {
        const req = await fetch('http://localhost:3000/api/task/' + id,
        {
            method: 'DELETE'
        });
        router.push('/tasks')
    }

    const createTask = async (event) => {
        event.preventDefault();
        const req = await fetch('http://localhost:3000/api/task', {
            method: 'POST',
            body: JSON.stringify({
                name: event.target.name.value,
                completed: false
            }),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        router.push('/tasks');
        setTaskName('');
    }

    return (
        <Layout>
            <div className="flex bg-emerald-200 p-2">
                <form onSubmit={createTask} className="w-full inline-flex items-center">
                        <input autoComplete="off" type="text" onChange={event => setTaskName(event.target.value)} value={taskName} name="name" className="p-1 w-3/4 bg-emerald-100 border-emerald-800 rounded"></input>
                        <button className="ml-2 text-2xl rounded text-emerald-800"> 
                            <HiPlusCircle/>
                        </button>
                        <h1 className="ml-auto mr-2 font-bold text-green-800">{tasks.length} Tasks</h1>
                </form>
            </div>
            <ul className="">
                {tasks.map((task) => {
                    return (
                    <li key={task._id} className="border-b border-emerald-800 bg-emerald-400 flex p-2 justify-between font-semibold text-green-900"> 
                        <div>
                            <h1> {task.name} </h1>
                        </div>
                        <div>
                        <button onClick={() => deleteTask(task._id)} className="mr-4 rounded px-2 py-1 bg-emerald-800 text-emerald-200 hover:bg-emerald-200 hover:text-emerald-800"> 
                            <HiCheck/>
                        </button>
                        </div>
                     </li>
                )})}
            </ul>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/task')
    const { data } = await res.json();

    return { props: {tasks: data}}
}

export default Tasks;