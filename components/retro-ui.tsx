'use client'

import React, { ReactNode } from 'react'

interface DialogueBoxProps {
  children: ReactNode
  color?: 'cyan' | 'magenta' | 'lime' | 'yellow'
}

export function DialogueBox({ children, color = 'cyan' }: DialogueBoxProps) {
  return (
    <div
      className={`bg-card dark:bg-slate-800 border-2 border-primary dark:border-secondary p-4 relative text-foreground dark:text-foreground font-mono text-sm leading-relaxed`}
      style={{
        boxShadow: 'var(--shadow-primary)',
      }}
    >
      {children}
      
      {/* Pointer arrow */}
      <div
        className={`absolute -bottom-2 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-primary dark:border-t-secondary`}
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
  
  return (
    <div className={`border-2 border-primary dark:border-secondary bg-background dark:bg-card p-4 min-w-[200px]`}
      style={{
        boxShadow: 'var(--shadow-primary)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-xs text-foreground dark:text-foreground font-mono font-bold">{title.toUpperCase()}</span>
      </div>
      
      {max && percentage ? (
        <>
          <div className="flex justify-between mb-1">
            <span className={`text-xs font-mono text-primary dark:text-primary`}>{value}</span>
            <span className="text-xs text-muted-foreground font-mono">{percentage}%</span>
          </div>
          <div className={`w-full bg-gray-200 dark:bg-slate-700 border border-border h-3`}>
            <div
              className={`h-full bg-primary dark:bg-primary`}
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </>
      ) : (
        <div className={`text-2xl font-bold text-primary dark:text-primary`}>{value}</div>
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
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 font-mono text-xs font-bold transition-all duration-200 active:translate-y-0.5 bg-primary dark:bg-secondary text-primary-foreground dark:text-foreground border-primary dark:border-secondary hover:opacity-80 ${className}`}
      style={{
        boxShadow: 'var(--shadow-primary)',
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
  return (
    <div
      className={`bg-card dark:bg-card border-2 border-primary dark:border-secondary p-4`}
      style={{
        boxShadow: 'var(--shadow-primary)',
      }}
    >
      {title && (
        <h3 className={`text-xs font-bold text-primary dark:text-secondary font-mono mb-3 pb-2 border-b border-primary dark:border-secondary uppercase`}>
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
