import React from 'react'
import { FiCode, FiDatabase, FiGlobe, FiSmartphone } from 'react-icons/fi'

const About = () => {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Postman'],
    other: ['REST APIs', 'GraphQL', 'Testing', 'CI/CD', 'Agile', 'Scrum']
  }

  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Building scalable web applications using React, Node.js, and cloud technologies.'
    },
    {
      title: 'Frontend Developer',
      company: 'Startup',
      period: '2021 - 2022',
      description: 'Developed responsive user interfaces and improved user experience.'
    },
    {
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: '2020 - 2021',
      description: 'Worked on various client projects using modern web technologies.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a passionate Full Stack Developer with over 3 years of experience building 
                modern web applications. I love turning complex problems into simple, beautiful solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating user experiences that 
                make a difference. Every project is an opportunity to learn and grow.
              </p>
            </div>

            {/* Experience */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Experience
              </h4>
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <div key={index} className="card p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h5>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>

            {/* Skill Categories */}
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <FiCode className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Frontend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <FiDatabase className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Backend</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <FiGlobe className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tools & Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <FiSmartphone className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-3" />
                  <h4 className="font-semibold text-gray-900 dark:text-white">Other Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 