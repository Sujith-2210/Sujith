'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface RetroNavProps {
  activeSection?: string
}

export default function RetroNav({ activeSection = 'home' }: RetroNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = [
    { label: 'HOME', href: '/', id: 'home' },
    { label: 'ABOUT', href: '/about', id: 'about' },
    { label: 'SKILLS', href: '/skills', id: 'skills' },
    { label: 'PROJECTS', href: '/projects', id: 'projects' },
    { label: 'RESUME', href: '/resume', id: 'resume' },
    { label: 'CONTACT', href: '/contact', id: 'contact' },
  ]
  
  const isActive = (id: string) => activeSection === id
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b-4 border-cyan-500"
      style={{
        boxShadow: '0 4px 12px rgba(0, 255, 255, 0.4), inset 0 0 12px rgba(0, 255, 255, 0.1)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-cyan-400 text-sm font-mono animate-neon-glow">
          {'[ AI_ENG ]'}
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`px-3 py-2 text-xs font-mono font-bold transition-all duration-200 border-2 ${
                isActive(item.id)
                  ? 'bg-cyan-500 text-black border-cyan-300'
                  : 'bg-transparent text-cyan-400 border-cyan-600 hover:border-cyan-400'
              }`}
              style={{
                boxShadow: isActive(item.id) 
                  ? '0 0 12px rgba(0, 255, 255, 0.6)' 
                  : '0 0 6px rgba(0, 255, 255, 0.3)',
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all"
          style={{
            boxShadow: '0 0 8px rgba(0, 255, 255, 0.4)',
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t-2 border-cyan-500 divide-y-2 divide-cyan-600">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-xs font-mono font-bold transition-all ${
                isActive(item.id)
                  ? 'bg-cyan-500 text-black'
                  : 'text-cyan-400 hover:bg-cyan-600/20'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
