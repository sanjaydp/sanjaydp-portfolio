import React, { useState } from 'react'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      live: 'https://ecommerce-platform.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current weather and forecasts using OpenWeatherMap API with beautiful visualizations.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      technologies: ['React', 'JavaScript', 'CSS3', 'Chart.js'],
      github: 'https://github.com/yourusername/weather-app',
      live: 'https://weather-dashboard.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'Blog API',
      description: 'A RESTful API for a blogging platform with user authentication, CRUD operations, and file upload functionality.',
      image: '/api/placeholder/600/400',
      category: 'backend',
      technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Multer'],
      github: 'https://github.com/yourusername/blog-api',
      live: 'https://blog-api.herokuapp.com',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.',
      image: '/api/placeholder/600/400',
      category: 'frontend',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Icons'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://portfolio.vercel.app',
      featured: false
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with user authentication, private messaging, and file sharing capabilities.',
      image: '/api/placeholder/600/400',
      category: 'fullstack',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://chat-app.vercel.app',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'fullstack', name: 'Full Stack' }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card group overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900 dark:to-blue-900 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <FiFolder className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white dark:bg-dark-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                    aria-label="View live demo"
                  >
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <FiGithub className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <FiGithub className="w-4 h-4" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects 