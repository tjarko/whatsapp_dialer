'use client'

import React from 'react'

interface KeypadProps {
  onKeyPress: (digit: string) => void
  onDelete: () => void
  isVisible?: boolean
  onToggle?: () => void
}

export default function Keypad({ onKeyPress, onDelete, isVisible = true, onToggle }: KeypadProps) {
  const digits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#', '+', '←']

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={onToggle}
        className="md:hidden w-full py-1.5 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2"
      >
        {isVisible ? 'Hide Keypad' : 'Show Keypad'}
        <svg
          className={`w-5 h-5 transition-transform ${isVisible ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div className={`grid grid-cols-3 gap-2 ${!isVisible ? 'hidden md:grid' : ''}`}>
        {digits.map((digit) => (
          <button
            key={digit}
            type="button"
            onClick={() => digit === '←' ? onDelete() : onKeyPress(digit)}
            className="aspect-square flex items-center justify-center text-xl font-medium bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {digit}
          </button>
        ))}
      </div>
    </div>
  )
} 