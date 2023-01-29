import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
    return (
    <div className="bg-emerald-900 h-screen sm:p-0">
        <Component {...pageProps} />
    </div>
    )
}