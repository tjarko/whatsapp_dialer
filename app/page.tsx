'use client'

import React, { useState } from 'react'
import CountryCodeSelect from '@/components/CountryCodeSelect'
import PhoneInput from '@/components/PhoneInput'
import Keypad from '@/components/Keypad'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [countryCode, setCountryCode] = useState('+1')

  const handleKeypadPress = (digit: string) => {
    setPhoneNumber(prev => prev + digit)
  }

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1))
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-8">WhatsApp Dialer</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <div className="flex gap-2">
          <CountryCodeSelect
            value={countryCode}
            onChange={setCountryCode}
          />
          <PhoneInput
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
        </div>

        <Keypad
          onKeyPress={handleKeypadPress}
          onDelete={handleDelete}
        />

        <WhatsAppButton
          phoneNumber={phoneNumber}
          countryCode={countryCode}
        />
      </div>
    </div>
  )
} 