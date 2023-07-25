import '@/styles/tailwind.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'

import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState(false)

  useEffect(()=>{
    setIsShown(true)
  }, [])

  return (
    <div className={`${isShown ? "opacity-100" : "opacity-0"} duration-1000`}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </div>
  )
}
