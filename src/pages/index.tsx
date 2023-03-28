import Contact from '@/template/footer'
import Habilities from '@/template/habilities'
import Header from '@/template/header'
import Informations from '@/template/informations'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Matheus | Portfolio</title>
        <link rel='icon' type='image/svg+xml' href='/logo.svg' />
      </Head>

      <main className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Header />
        </div>

        <hr className='h-[12px] w-full bg-gradient-to-r from-[#02891d] via-[#013958] to-[#04b1b1]' />

        <div className='bg-about-pattern bg-cover bg-center bg-no-repeat py-12'>
          <Informations />
        </div>

        <hr className='h-[12px] w-full bg-gradient-to-r from-[#02891d] via-[#013958] to-[#04b1b1]' />

        <div className='bg-tecnology-pattern bg-cover bg-center bg-no-repeat '>
          <Habilities />
        </div>

        <hr className='h-[12px] w-full bg-gradient-to-r from-[#02891d] via-[#013958] to-[#04b1b1]' />

        <div className='relative z-0 bg-contact-pattern bg-cover bg-center bg-no-repeat'>
          <Contact />
        </div>
      </main>
    </>
  )
}
