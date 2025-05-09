'use client'

import React from 'react'

interface PhoneInputProps {
  value: string
  onChange: (value: string) => void
}

export default function PhoneInput({ value, onChange }: PhoneInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    // Remove all non-numeric characters except the plus sign at the start
    const newValue = inputValue.replace(/[^0-9+]/g, '')
    onChange(newValue)
  }

  return (
    <input
      type="tel"
      value={value}
      onChange={handleChange}
      placeholder="Enter phone number with country code (e.g. +1234567890)"
      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  )
} 