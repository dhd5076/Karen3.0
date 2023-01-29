import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="bg-emerald-300">
        <nav className="bg-emerald-600 justify-between flex flex-wrap">
            <div className="flex">
                <h1 className="font-bold text-3xl text-emerald-900 p-2">
                    <a href="/">
                        Karen
                    </a>
                </h1>
            </div>
            <div className="flex text-emerald-300 p-2">
                <ul className="flex pr-6">
                    <li className="bg-emerald-900 p-2 rounded">
                        <a href="/dashboard">
                            Dashboard
                        </a>
                    </li>
                </ul>
                <ul className="pr-6">
                    <li className="bg-emerald-900 p-2 rounded">
                        <Link href="/tasks">
                            Tasks
                        </Link>
                    </li>
                </ul>
                <ul className="pr-6">
                    <li className="bg-emerald-900 p-2 rounded">
                        <a href="/recipes">
                            Recipes
                        </a>
                    </li>
                </ul>
                <ul className="pr-6">
                    <li className="bg-emerald-900 p-2 rounded">
                        <a href="/recipes">
                            Recipes
                        </a>
                    </li>
                </ul>
                <ul className="pr-6">
                    <li className="bg-emerald-900 p-2 rounded">
                        <a href="/recipes">
                            Recipes
                        </a>
                    </li>
                </ul>
                <ul className="pr-6">
                    <li className="bg-emerald-900 p-2 rounded">
                        <a href="/recipes">
                            Recipes
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="p-3 h-screen bg-emerald-100">
            {children}
        </div>
    </div>
  )
}