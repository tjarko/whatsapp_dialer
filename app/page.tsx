'use client'

import React, { useState, useEffect } from 'react'
import PhoneInput from '@/components/PhoneInput'
import Keypad from '@/components/Keypad'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isKeypadVisible, setIsKeypadVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is the md breakpoint in Tailwind
      if (window.innerWidth >= 768) {
        setIsKeypadVisible(true)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleKeypadPress = (digit: string) => {
    setPhoneNumber(prev => prev + digit)
  }

  const handleDelete = () => {
    setPhoneNumber(prev => prev.slice(0, -1))
  }

  const toggleKeypad = () => {
    setIsKeypadVisible(prev => !prev)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-2xl font-bold text-center mb-8">WhatsApp Dialer</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        <PhoneInput
          value={phoneNumber}
          onChange={setPhoneNumber}
        />
        
        {isKeypadVisible ? (
          <Keypad
            onKeyPress={handleKeypadPress}
            onDelete={handleDelete}
            isVisible={isKeypadVisible}
            onToggle={toggleKeypad}
          />
        ) : isMobile && (
          <button
            type="button"
            onClick={toggleKeypad}
            className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium flex items-center justify-center gap-2"
          >
            Show Keypad
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}

        <WhatsAppButton
          phoneNumber={phoneNumber}
        />
      </div>
    </div>
  )
} 