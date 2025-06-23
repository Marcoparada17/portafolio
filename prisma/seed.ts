import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const projects = [
    {
      title: "Chat bot With IA(Chatgpt)",
      description: "A sophisticated WhatsApp chatbot system designed to handle medical consultation bookings for Dr. Ana Castiblanco's otoplasty practice. The chatbot, named 'Luna', provides automated customer service, appointment scheduling, and information about otoplasty procedures.",
      imageUrl: "https://i.postimg.cc/RZPDS24M/chatgpt12.png",
      githubUrl: "https://github.com/Marcoparada17/chatbot_ia_llc",
      liveUrl: "backend",
      techStack: ["PostgreSQL", "Redis", "Docker & Docker Compose", "JavaScript"],
    },
    {
      title: "Riatty LLC",
      description:
        "Riatty LLC is a web-based automotive platform designed to streamline car listings, customer engagement, and real-time tracking. As the lead full-stack developer, I was responsible for architecting both the frontend and backend systems, including CRM integration, chatbot workflows, and Google Cloud API services.",
      imageUrl: "https://i.postimg.cc/8cZVtW9b/riatty-portada.png",
      githubUrl: "https://github.com/tuusuario/api-node",
      liveUrl: "https://Riatty.com",
      techStack: ["Nodejs", "Express", "API", "React", "GoogleCloud", "CRM"],
    },
    {
      title: "Central Dispatch Scrapping",
      description: "An automated web scraper for the “Central Dispatch” platform, built using Node.js and TypeScript. The project leverages Puppeteer or a remotely controlled Chrome browser to handle authentication, including two-factor verification, and ensures the session remains active over time. This solution streamlines the data extraction process from Central Dispatch, enabling efficient, continuous access to the platform’s resources.",
      imageUrl: "https://i.postimg.cc/cH77H8wQ/Central-Dispatch.jpg",
      githubUrl: "https://github.com/Marcoparada17/CentralDispatchScrap",
      liveUrl: "Backend",
      techStack: ["Nodejs", "GoogleCloud", "PostgreSQL", "Puppeteer" , "PM2"],
    },
    {
      title: "Proyecto 4",
      description: "Otra API construida con Express y PostgreSQL usando Prisma.",
      imageUrl: "/telegram.svg",
      githubUrl: "https://github.com/tuusuario/api-node",
      liveUrl: "https://api.tusitio.com",
      techStack: ["Nodejs", "Express", "PostgreSQL"],
    },
  ]

  for (const project of projects) {
    await prisma.project.upsert({
      where: { title: project.title },
      update: { ...project },
      create: { ...project },
    })
  }

  console.log("🚀 ¡Proyectos insertados o actualizados correctamente!")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
