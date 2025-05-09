'use client'

import React from 'react'

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
}

export default function PhoneInput({ value, onChange }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.replace(/[^0-9]/g, '')
    onChange(newValue)
  }

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="Enter phone number"
      className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
} 