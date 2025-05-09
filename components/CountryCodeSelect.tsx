'use client'

import React, { useState } from 'react'

interface CountryCode {
  code: string
  name: string
}

const countryCodes: CountryCode[] = [
  { code: '+1', name: 'USA/Canada' },
  { code: '+44', name: 'UK' },
  { code: '+91', name: 'India' },
  { code: '+86', name: 'China' },
  { code: '+81', name: 'Japan' },
  { code: '+49', name: 'Germany' },
  { code: '+33', name: 'France' },
  { code: '+61', name: 'Australia' },
  { code: '+55', name: 'Brazil' },
  { code: '+52', name: 'Mexico' },
]

interface CountryCodeSelectProps {
  value: string
  onChange: (value: string) => void
}

export default function CountryCodeSelect({ value, onChange }: CountryCodeSelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-24 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {value}
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-48 bg-white rounded-md shadow-lg max-h-60 overflow-auto">
          {countryCodes.map((country) => (
            <button
              key={country.code}
              type="button"
              className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              onClick={() => {
                onChange(country.code)
                setIsOpen(false)
              }}
            >
              <span className="font-medium">{country.code}</span>
              <span className="ml-2 text-gray-500">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 