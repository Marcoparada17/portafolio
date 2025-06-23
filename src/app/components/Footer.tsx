import React from 'react'
import { FaGithub, FaEnvelope } from 'react-icons/fa'

const skills = [
  'Next.js',
  'React',
  'Tailwind CSS',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'Supabase',
  'HTML',
  'CSS',
  'Git',
]

const Footer = () => {
  return (
    <footer className="bg-[#0E141B] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* Columna izquierda: Skills y herramientas */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Skills & Tools</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#323953] text-white px-4 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Columna derecha: Contacto o redes */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Contact</h3>
          <p className="text-gray-300 mb-4">
            Let&apos;s talk! I&apos;m available for opportunities, collaborations, or just to chat about code.
          </p>
          <div className="flex gap-6 text-2xl">
            <a href="mailto:marcoparada17@gmail.com.com" className="hover:text-blue-400">
              <FaEnvelope />
            </a>
            <a
              href="https://github.com/Marcoparada17"
              target="_blank"
              className="hover:text-blue-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Marco Parada. 
All rights reserved
      </div>
    </footer>
  )
}

export default Footer
