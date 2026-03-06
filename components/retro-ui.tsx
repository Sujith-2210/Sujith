'use client'

import React, { ReactNode } from 'react'

interface DialogueBoxProps {
  children: ReactNode
  color?: 'cyan' | 'magenta' | 'lime' | 'yellow'
}

export function DialogueBox({ children, color = 'cyan' }: DialogueBoxProps) {
  const colorMap = {
    cyan: { border: 'border-primary', glow: 'rgba(0, 102, 204, 0.2)', darkGlow: 'rgba(0, 255, 255, 0.3)', text: 'text-primary' },
    magenta: { border: 'border-secondary', glow: 'rgba(255, 102, 0, 0.2)', darkGlow: 'rgba(255, 0, 255, 0.3)', text: 'text-secondary' },
    lime: { border: 'border-accent', glow: 'rgba(255, 51, 102, 0.2)', darkGlow: 'rgba(0, 255, 0, 0.3)', text: 'text-accent' },
    yellow: { border: 'border-yellow-500', glow: 'rgba(255, 204, 0, 0.2)', darkGlow: 'rgba(255, 255, 0, 0.3)', text: 'text-yellow-500' },
  }[color]
  
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  
  return (
    <div
      className={`bg-card dark:bg-slate-900 border-2 ${colorMap.border} p-4 relative text-foreground dark:text-white font-mono text-sm leading-relaxed`}
      style={{
        boxShadow: `0 0 8px ${isDark ? colorMap.darkGlow : colorMap.glow}`,
      }}
    >
      {children}
      
      {/* Pointer arrow */}
      <div
        className={`absolute -bottom-2 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${colorMap.text}`}
      ></div>
    </div>
  )
}

interface StatCardProps {
  title: string
  value: string | number
  max?: number
  color?: 'cyan' | 'magenta' | 'lime'
  icon?: ReactNode
}

export function StatCard({ title, value, max, color = 'cyan', icon }: StatCardProps) {
  const percentage = max ? ((Number(value) / max) * 100).toFixed(0) : null
  const colors = {
    cyan: { border: 'border-primary', bg: 'bg-blue-100 dark:bg-cyan-900', bar: 'bg-primary dark:bg-cyan-400', text: 'text-primary dark:text-cyan-400' },
    magenta: { border: 'border-secondary', bg: 'bg-orange-100 dark:bg-magenta-900', bar: 'bg-secondary dark:bg-magenta-400', text: 'text-secondary dark:text-magenta-400' },
    lime: { border: 'border-accent', bg: 'bg-pink-100 dark:bg-lime-900', bar: 'bg-accent dark:bg-lime-400', text: 'text-accent dark:text-lime-400' },
  }[color]
  
  return (
    <div className={`border-2 ${colors.border} bg-background dark:bg-slate-950 p-4 min-w-[200px]`}
      style={{
        boxShadow: 'var(--shadow-primary)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-xs text-foreground dark:text-white font-mono font-bold">{title.toUpperCase()}</span>
      </div>
      
      {max && percentage ? (
        <>
          <div className="flex justify-between mb-1">
            <span className={`text-xs font-mono ${colors.text}`}>{value}</span>
            <span className="text-xs text-muted-foreground font-mono">{percentage}%</span>
          </div>
          <div className={`w-full ${colors.bg} border border-current h-3`}>
            <div
              className={`h-full ${colors.bar}`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </>
      ) : (
        <div className={`text-2xl font-bold ${colors.text}`}>{value}</div>
      )}
    </div>
  )
}

interface PixelButtonProps {
  children: ReactNode
  onClick?: () => void
  color?: 'cyan' | 'magenta' | 'lime' | 'yellow'
  className?: string
}

export function PixelButton({ children, onClick, color = 'cyan', className = '' }: PixelButtonProps) {
  const colors = {
    cyan: 'bg-primary dark:bg-cyan-500 text-primary-foreground dark:text-black border-primary dark:border-cyan-300 hover:opacity-80 dark:hover:bg-cyan-400',
    magenta: 'bg-secondary dark:bg-magenta-500 text-secondary-foreground dark:text-white border-secondary dark:border-magenta-300 hover:opacity-80 dark:hover:bg-magenta-400',
    lime: 'bg-accent dark:bg-lime-500 text-accent-foreground dark:text-black border-accent dark:border-lime-300 hover:opacity-80 dark:hover:bg-lime-400',
    yellow: 'bg-yellow-600 dark:bg-yellow-500 text-white dark:text-black border-yellow-600 dark:border-yellow-300 hover:opacity-80 dark:hover:bg-yellow-400',
  }[color]
  
  const shadowColor = {
    cyan: { light: 'rgba(0, 102, 204, 0.3)', dark: 'rgba(0, 255, 255, 0.5)' },
    magenta: { light: 'rgba(255, 102, 0, 0.3)', dark: 'rgba(255, 0, 255, 0.5)' },
    lime: { light: 'rgba(255, 51, 102, 0.3)', dark: 'rgba(0, 255, 0, 0.5)' },
    yellow: { light: 'rgba(255, 204, 0, 0.3)', dark: 'rgba(255, 255, 0, 0.5)' },
  }[color]
  
  const isDark = typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 font-mono text-xs font-bold transition-all duration-200 active:translate-y-0.5 ${colors} ${className}`}
      style={{
        boxShadow: `0 0 12px ${isDark ? shadowColor.dark : shadowColor.light}`,
      }}
    >
      {children}
    </button>
  )
}

interface PixelPanelProps {
  children: ReactNode
  color?: 'cyan' | 'magenta' | 'lime'
  title?: string
}

export function PixelPanel({ children, color = 'cyan', title }: PixelPanelProps) {
  const colors = {
    cyan: 'border-primary dark:border-cyan-500',
    magenta: 'border-secondary dark:border-magenta-500',
    lime: 'border-accent dark:border-lime-500',
  }[color]
  
  const titleColors = {
    cyan: 'text-primary dark:text-cyan-400',
    magenta: 'text-secondary dark:text-magenta-400',
    lime: 'text-accent dark:text-lime-400',
  }[color]
  
  return (
    <div
      className={`bg-card dark:bg-slate-900 border-2 ${colors} p-4`}
      style={{
        boxShadow: 'var(--shadow-primary)',
      }}
    >
      {title && (
        <h3 className={`text-xs font-bold text-foreground dark:text-white font-mono mb-3 pb-2 border-b ${titleColors} uppercase`}>
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

export function ProgressBar({ 
  value, 
  max = 100, 
  label,
  color = 'cyan' 
}: { 
  value: number
  max?: number
  label?: string
  color?: 'cyan' | 'magenta' | 'lime'
}) {
  const percentage = (value / max) * 100
  const colors = {
    cyan: { border: 'border-cyan-500', bar: 'bg-cyan-400' },
    magenta: { border: 'border-magenta-500', bar: 'bg-magenta-400' },
    lime: { border: 'border-lime-500', bar: 'bg-lime-400' },
  }[color]
  
  return (
    <div className="w-full">
      {label && <div className="text-xs text-white font-mono mb-1">{label}</div>}
      <div className={`w-full bg-slate-800 border ${colors.border} h-4`}>
        <div
          className={`h-full ${colors.bar}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}
