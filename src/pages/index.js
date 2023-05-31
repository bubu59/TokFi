import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ContentArea, Navbar, Sidebar } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white h-screen'>
      <Navbar/>
      <div className='grid grid-cols-5 gap-2'>
        <Sidebar/>
        <ContentArea/>
      </div>
    </main>
  )
}
