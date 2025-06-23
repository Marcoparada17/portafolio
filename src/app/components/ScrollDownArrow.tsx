'use client'

import React from 'react'

const ScrollDownArrow = ({ targetId }: { targetId: string }) => {
  const scrollToTarget = () => {
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={scrollToTarget}
      className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white hover:text-blue-400 transition z-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
}

export default ScrollDownArrow
