'use client'

import React, { ReactNode } from 'react'

interface DialogueBoxProps {
  children: ReactNode
  color?: 'cyan' | 'magenta' | 'lime' | 'yellow'
}

export function DialogueBox({ children, color = 'cyan' }: DialogueBoxProps) {
  const borderColor = {
    cyan: 'border-cyan-400',
    magenta: 'border-magenta-400',
    lime: 'border-lime-400',
    yellow: 'border-yellow-400',
  }[color]
  
  const glowColor = {
    cyan: 'rgba(0, 255, 255, 0.3)',
    magenta: 'rgba(255, 0, 255, 0.3)',
    lime: 'rgba(0, 255, 0, 0.3)',
    yellow: 'rgba(255, 255, 0, 0.3)',
  }[color]
  
  return (
    <div
      className={`bg-slate-900 border-2 ${borderColor} p-4 relative text-white font-mono text-sm leading-relaxed`}
      style={{
        boxShadow: `0 0 8px ${glowColor}`,
      }}
    >
      {children}
      
      {/* Pointer arrow */}
      <div
        className={`absolute -bottom-2 left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent ${
          color === 'cyan' ? 'border-t-cyan-400' :
          color === 'magenta' ? 'border-t-magenta-400' :
          color === 'lime' ? 'border-t-lime-400' :
          'border-t-yellow-400'
        }`}
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
    cyan: { border: 'border-cyan-500', bg: 'bg-cyan-900', bar: 'bg-cyan-400', text: 'text-cyan-400' },
    magenta: { border: 'border-magenta-500', bg: 'bg-magenta-900', bar: 'bg-magenta-400', text: 'text-magenta-400' },
    lime: { border: 'border-lime-500', bg: 'bg-lime-900', bar: 'bg-lime-400', text: 'text-lime-400' },
  }[color]
  
  return (
    <div className={`border-2 ${colors.border} bg-slate-950 p-4 min-w-[200px]`}
      style={{
        boxShadow: `0 0 8px rgba(0, 255, 255, 0.3)`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        {icon && <span className="text-lg">{icon}</span>}
        <span className="text-xs text-white font-mono font-bold">{title.toUpperCase()}</span>
      </div>
      
      {max && percentage ? (
        <>
          <div className="flex justify-between mb-1">
            <span className={`text-xs font-mono ${colors.text}`}>{value}</span>
            <span className="text-xs text-gray-400 font-mono">{percentage}%</span>
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
    cyan: 'bg-cyan-500 text-black border-cyan-300 hover:bg-cyan-400 shadow-cyan',
    magenta: 'bg-magenta-500 text-white border-magenta-300 hover:bg-magenta-400 shadow-magenta',
    lime: 'bg-lime-500 text-black border-lime-300 hover:bg-lime-400 shadow-lime',
    yellow: 'bg-yellow-500 text-black border-yellow-300 hover:bg-yellow-400 shadow-yellow',
  }[color]
  
  const shadowColor = {
    cyan: 'rgba(0, 255, 255, 0.5)',
    magenta: 'rgba(255, 0, 255, 0.5)',
    lime: 'rgba(0, 255, 0, 0.5)',
    yellow: 'rgba(255, 255, 0, 0.5)',
  }[color]
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 font-mono text-xs font-bold transition-all duration-200 active:translate-y-0.5 ${colors} ${className}`}
      style={{
        boxShadow: `0 0 12px ${shadowColor}`,
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
    cyan: 'border-cyan-500 shadow-cyan',
    magenta: 'border-magenta-500 shadow-magenta',
    lime: 'border-lime-500 shadow-lime',
  }[color]
  
  const shadowColor = {
    cyan: 'rgba(0, 255, 255, 0.3)',
    magenta: 'rgba(255, 0, 255, 0.3)',
    lime: 'rgba(0, 255, 0, 0.3)',
  }[color]
  
  return (
    <div
      className={`bg-slate-900 border-2 ${colors} p-4`}
      style={{
        boxShadow: `0 0 12px ${shadowColor}`,
      }}
    >
      {title && (
        <h3 className="text-xs font-bold text-white font-mono mb-3 pb-2 border-b border-current uppercase">
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
