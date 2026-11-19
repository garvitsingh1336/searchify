import '../styles/globals.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const storedTheme = window.localStorage.getItem('searchify-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.classList.toggle('dark', storedTheme ? storedTheme === 'dark' : prefersDark)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
