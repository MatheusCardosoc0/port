import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Mukta } from 'next/font/google'

const playfair = Mukta({
  subsets: ["latin"],
  variable: "--playfair",
  weight: ['400', '500','600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${playfair.variable} font-wdc`}>
      <Component {...pageProps} />
    </main>
  )
}
