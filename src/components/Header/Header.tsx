import React from 'react'
import { ModeToggle } from '@/components/mode-toggle'
const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-around p-4">
      <h1 className="text-2xl font-bold">HashVault</h1>
      <ModeToggle />
    </header>
  )
}

export default Header