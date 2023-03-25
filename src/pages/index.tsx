import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from '@/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
    <Head>
      <title>Matheus | Portfolio</title>
      <link rel='icon' type='image/svg+xml' href='/logo.svg' />
    </Head>

      <main className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
        </div>
      </main>
    </>
  )
}
