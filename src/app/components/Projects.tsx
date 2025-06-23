'use client'
import React from 'react'
import {
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiTailwindcss,
  SiPrisma,
  SiTypescript,
  SiSupabase,
  SiJavascript,
  SiNodedotjs,
  SiExpress, 
  SiGooglecloud, 
  SiApollographql,
} from 'react-icons/si'

type Project = {
  id: string
  title: string
  description: string
  imageUrl: string
  githubUrl: string
  liveUrl: string
  techStack: string[]
}

type Props = {
  projects: Project[]
}

// 🔧 Iconos para tecnologías conocidas
const techIcons: Record<string, React.ReactNode> = {
    Nextjs: <SiNextdotjs className="inline-block mr-1" />,
    React: <SiReact className="inline-block mr-1 text-blue-400" />,
    PostgreSQL: <SiPostgresql className="inline-block mr-1 text-blue-500" />,
    Tailwind: <SiTailwindcss className="inline-block mr-1 text-sky-400" />,
    Prisma: <SiPrisma className="inline-block mr-1 text-white" />,
    TypeScript: <SiTypescript className="inline-block mr-1 text-blue-600" />,
    Supabase: <SiSupabase className="inline-block mr-1 text-green-500" />,
    JavaScript: <SiJavascript className="inline-block mr-1 text-yellow-400" />,
    Nodejs: <SiNodedotjs className="inline-block mr-1 text-green-500" />,
    Express: <SiExpress className="inline-block mr-1 text-gray-200" />,
    GoogleCloud: <SiGooglecloud className="inline-block mr-1 text-orange-500" />,
    API: <SiApollographql className="inline-block mr-1 text-pink-500" />,
}

const Projects: React.FC<Props> = ({ projects }) => {
  return (
    <section id="projects" className="bg-[#0E141B] px-6 snap-start">
      <h2 className="text-5xl font-bold mb-8 text-white text-center ">Feature Projects</h2>
      <div className="space-y-20 ">
        {projects.map((project) => (
          <div
  key={project.id}
  className="bg-[#323953] rounded-2xl p-6 md:p-10 shadow-lg transition duration-300 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 items-center gap-6"
>
            {/* Info izquierda */}
            <div className=''>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 rounded-full text-xl font-medium bg-blue-700 hover:bg-blue-600 text-white flex items-center gap-1"
                  >
                    {techIcons[tech] || null}
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  className="text-blue-400 hover:underline"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="text-green-400 hover:underline"
                  target="_blank"
                >
                  Ver online
                </a>
              </div>
            </div>

            {/* Imagen derecha */}
            <div>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
