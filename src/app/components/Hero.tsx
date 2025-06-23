import ScrollDownArrow from './ScrollDownArrow'





const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen w-full bg-[#0E141B] text-white flex items-center justify-center px-4 relative snap-start"
    >
      <div className="max-w-3xl w-full flex flex-col items-start text-left">
        <h1 className="text-5xl sm:text-6xl font-bold">
          Marco Parada
        </h1>

        <h2 className="text-2xl sm:text-3xl font-semibold text-blue-500 mt-2">
          Full-Stack Developer | Node.js & API Specialist
        </h2>

        <p className="mt-4 text-sm sm:text-base text-gray-300">
          I&apos;m a software developer passionate about backend systems, APIs, and scalable web applications. I specialize in Node.js, Express, PostgreSQL, and TypeScript, and I have experience integrating OpenAI APIs, real-time systems with WebSockets, and tools like Docker and Google Cloud.
          My goal is to build clean, reliable, and scalable systems that bring value to both users and businesses.
        </p>

        <a
          href="malito:marcoparada17@gmail.com"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition"
        >
          Let’s Work Together
        </a>
        <ScrollDownArrow targetId="experience" />
      </div>
    </section>
  )
}

export default Hero
