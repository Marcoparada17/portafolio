import Navbar from '@/app/components/Navbar'
import Hero from '@/app/components/Hero'
import Experience from '@/app/components/Experience'
import { PrismaClient } from '@prisma/client'
import Projects from '@/app/components/Projects'
import Footer from '@/app/components/Footer'
import PortfolioChatbot from '@/app/components/PortfolioChatbot'

const prisma = new PrismaClient()
export default async function Home() {
  const projects = (await prisma.project.findMany()).map((p) => ({
    ...p,
    liveUrl: p.liveUrl ?? undefined,
  }));

  return (
      <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects projects={projects} />
      <Footer/>
      <PortfolioChatbot />
    </>
  )
}
