import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="max-w-3xl mx-auto shadow-2xl">
        <nav className="bg-emerald-600 justify-between flex flex-wrap">
            <div className="flex">
                <h1 className="font-bold text-2xl text-emerald-900 p-2">
                    <a href="/">
                        Karen
                    </a>
                </h1>
            </div>
            <div className="flex text-emerald-300 p-2">
                <ul className="pr-2">
                    <li className="bg-emerald-800 px-2 rounded hover:bg-emerald-200 hover:text-emerald-900">
                        <a href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>
                <ul className="pr-2">
                    <li className="bg-emerald-800 px-2 rounded hover:bg-emerald-200 hover:text-emerald-900">
                        <Link href="/tasks">
                            Tasks
                        </Link>
                    </li>
                </ul>
                <ul className="pr-2">
                    <li className="bg-emerald-800 px-2 rounded hover:bg-emerald-200 hover:text-emerald-900">
                        <a href="/recipes">
                            Recipes
                        </a>
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