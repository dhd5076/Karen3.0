import Link from 'next/link'
import { 
    HiPhoto,
    HiListBullet,
    HiCake,
    HiUserGroup
} from 'react-icons/hi2'

export default function Layout({ children }) {
  return (
    <div className=" shadow-2xl w-full xl:w-1/2 m-auto">
        <nav className="bg-emerald-600 flex sticky top-0 justify-between shadow-lg">
            <div>
                <h1 className="font-bold text-2xl text-emerald-900 p-2 mr-4">
                    <Link href="/">
                        Karen
                    </Link>
                </h1>
            </div>
            <div className="flex text-emerald-900">
                <ul className="flex m-auto">
                    <li className="mr-2 px-2 rounded  hover:text-emerald-300">
                        <Link href="/dashboard">
                            Dashboard
                        </Link>
                    </li>
                    <li className="mr-2 px-2 rounded  hover:text-emerald-300">
                        <Link href="/tasks" className="text-2xl">
                            <HiListBullet/>
                        </Link>
                    </li>
                    <li className="mr-2 px-2 rounded hover:text-emerald-300">
                        <Link href="/recipes" className="text-2xl">
                            <HiCake/>
                        </Link>
                    </li>
                    <li className="mr-2 px-2 rounded hover:text-emerald-300">
                        <Link href="/recipes" className="text-2xl">
                            <HiPhoto/>
                        </Link>
                    </li>
                    <li className="mr-2 px-2 rounded hover:text-emerald-300">
                        <Link href="/recipes" className="text-2xl">
                            <HiUserGroup/>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="bg-emerald-100">
            <div>
                {children}
            </div>
        </div>
    </div>
  )
}