import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Toaster } from "@/components/ui/sonner"

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className='min-h-screen'>
      <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  )
}

export default Layout