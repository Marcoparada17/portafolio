import ScrollDownArrow from './ScrollDownArrow'

const Experience = () => {

    const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_56_605)">
<path d="M18.3334 9.23333V10C18.3324 11.797 17.7505 13.5456 16.6745 14.9849C15.5986 16.4241 14.0862 17.4771 
12.3629 17.9866C10.6396 18.4961 8.7978 18.4349 7.11214 17.8122C5.42648 17.1894 3.98729 16.0384 3.00922 
14.5309C2.03114 13.0234 1.56657 11.2401 1.68481 9.44693C1.80305 7.6538 2.49775 5.94694 3.66531 4.58089C4.83288
 3.21485 6.41074 2.26282 8.16357 1.86679C9.91641 1.47076 11.7503 1.65195 13.3918 2.38333M18.3334 3.33333L10.0001 
 11.675L7.50009 9.175" stroke="#15E854" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_56_605">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

)
  return (
    <section
      id="experience"
      className=" w-full bg-[#0E141B] text-white px-6  flex justify-center relative "
    >
      <div className="max-w-3xl w-full mb-22">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 border-b-2 border-blue-500 inline-block ">
          Work Experience
        </h2>
        <p className="text-sm text-white-400 mb-4">With over 4 years of experience in full-stack development, I focus on building robust backend architectures using modern JavaScript technologies. I’ve worked on real-time platforms, REST APIs, and AI-integrated solutions. I’m proactive, client-focused, and love transforming complex requirements into elegant solutions.</p>

        {/* Experiencia 1 */}
        <div className="mb-10">
          <p className="text-lg font-semibold">Riatty LLC</p>
          <h3 className="text-xl font-bold text-blue-500">Full-Stack Developer</h3>
          <p className="text-sm text-gray-400 mb-4">
            Enero 2024 - May 2025
          </p>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
                Developed a full-stack web application with React and Node.js connected to a custom CRM.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
                Integrated chatbot functionality and dynamic lead forms via REST APIs
              </p>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
               Connected Google Cloud APIs for location-based services and maps.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
                Built real-time features like vehicle tracking using Socket.IO and Firebase.
              </p>
            </li><li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
                Created backend APIs with Express and PostgreSQL and deployed with Docker.
              </p>
            </li>
          </ul>
        </div>

        {/* Experiencia 2 */}
        <div>
          <p className="text-lg font-semibold">Walo LLC</p>
          <h3 className="text-xl font-bold text-blue-500">Full Stack Developer</h3>
          <p className="text-sm text-gray-400 mb-4">
            February 2022 – December 2023
          </p>

          <ul className="space-y-3 pl-6">
            <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
              Developed and maintained web applications and backend services for automation, customer engagement, and data processing.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
                Built a WhatsApp chatbot for medical appointment bookings, an automotive web platform, and a Telegram webhook for automated trading signals.
               </p>
            </li>
                        <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
                Created robust scraping tools and implemented integrations with CRM and cloud APIs.
              </p>
            </li>
                        <li className="flex items-start gap-2">
              <CheckIcon />
              <p className="text-sm text-gray-300">
              Used technologies including Node.js, TypeScript, React, Express, PostgreSQL, Docker, and Google Cloud
              </p>
            </li>
          </ul>
        </div>
      </div>
            <ScrollDownArrow targetId="projects" />
    </section>
  )
}

export default Experience
