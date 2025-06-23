'use client'

import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0E141B] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* SVG en lugar de texto */}
        <div className="w-8 h-8">
          <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="40" height="40" rx="20" fill="#7B6BA7"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M26.0002 16.5C26.0002 19.8137 23.314 22.5 20.0002 22.5C16.6865 22.5 14.0002 19.8137 14.0002 16.5C14.0002 13.1863 16.6865 10.5 20.0002 10.5C23.314 10.5 26.0002 13.1863 26.0002 16.5ZM24.0002 16.5C24.0002 18.7091 22.2094 20.5 20.0002 20.5C17.7911 20.5 16.0002 18.7091 16.0002 16.5C16.0002 14.2909 17.7911 12.5 20.0002 12.5C22.2094 12.5 24.0002 14.2909 24.0002 16.5Z" fill="#CED3DC"/>
          <path d="M20.0002 25.5C13.5259 25.5 8.00952 29.3284 5.9082 34.692C6.4201 35.2004 6.95934 35.6812 7.52353 36.1321C9.08827 31.2077 13.997 27.5 20.0002 27.5C26.0035 27.5 30.9122 31.2077 32.477 36.1321C33.0412 35.6812 33.5804 35.2004 34.0923 34.6921C31.991 29.3284 26.4746 25.5 20.0002 25.5Z" fill="#CED3DC"/>


            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
            />
          </svg>
        </div>

        {/* Menú de navegación */}
        <ul className="flex space-x-6 text-sm sm:text-base">
          <li>
            <a href="#projects" className="hover:text-blue-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-blue-400 transition duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#hero" className="hover:text-blue-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
