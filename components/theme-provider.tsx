'use client'

import { useEffect, useState } from 'react'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('pixel-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    
    setIsDark(shouldBeDark)
    applyTheme(shouldBeDark)

    // Listen to system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('pixel-theme')) {
        setIsDark(e.matches)
        applyTheme(e.matches)
      }
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const applyTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    applyTheme(newIsDark)
    localStorage.setItem('pixel-theme', newIsDark ? 'dark' : 'light')
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <>
      {children}
      <button
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 z-50 px-3 py-2 rounded-none border-2 bg-card text-foreground font-mono text-xs font-bold hover:scale-105 transition-transform duration-200 dark:border-cyan-500 dark:box-shadow-cyan border-blue-600"
        style={{
          borderColor: isDark ? '#00ffff' : '#0066cc',
          boxShadow: isDark ? '0 0 8px rgba(0, 255, 255, 0.3)' : '0 0 8px rgba(0, 102, 204, 0.2)',
        }}
        title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      >
        {isDark ? '☀️ LIGHT' : '🌙 DARK'}
      </button>
    </>
  )
}
