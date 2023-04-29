import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Inter, Montserrat } from "next/font/google"
import About from './about'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})
export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} font-mont bg-light w-full min-h-screen dark:bg-dark`}>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
