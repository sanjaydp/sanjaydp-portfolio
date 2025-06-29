import React, { useState } from 'react'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Real-time Data Pipeline',
      description: 'Built a real-time data processing pipeline using Apache Kafka, Spark Streaming, and Apache Airflow. Processes 10M+ events daily with sub-second latency for real-time analytics dashboard.',
      image: '/api/placeholder/600/400',
      category: 'streaming',
      technologies: ['Apache Kafka', 'Apache Spark', 'Apache Airflow', 'Python', 'AWS'],
      github: 'https://github.com/yourusername/realtime-pipeline',
      live: 'https://pipeline-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'Data Warehouse Migration',
      description: 'Migrated legacy data warehouse to Snowflake with automated ETL pipelines. Improved query performance by 300% and reduced data processing time by 60%.',
      image: '/api/placeholder/600/400',
      category: 'etl',
      technologies: ['Snowflake', 'Apache Airflow', 'Python', 'dbt', 'Terraform'],
      github: 'https://github.com/yourusername/warehouse-migration',
      live: 'https://migration-demo.vercel.app',
      featured: true
    },
    {
      id: 3,
      title: 'Customer Analytics Platform',
      description: 'Developed a comprehensive customer analytics platform that processes customer behavior data from multiple sources and provides actionable insights through interactive dashboards.',
      image: '/api/placeholder/600/400',
      category: 'analytics',
      technologies: ['Apache Spark', 'PostgreSQL', 'Python', 'Tableau', 'Docker'],
      github: 'https://github.com/yourusername/customer-analytics',
      live: 'https://analytics-demo.vercel.app',
      featured: false
    },
    {
      id: 4,
      title: 'Data Quality Framework',
      description: 'Implemented a comprehensive data quality framework with automated testing, monitoring, and alerting. Ensures 99.9% data accuracy across all pipelines.',
      image: '/api/placeholder/600/400',
      category: 'quality',
      technologies: ['Great Expectations', 'Apache Airflow', 'Python', 'Grafana', 'Slack'],
      github: 'https://github.com/yourusername/data-quality',
      live: 'https://quality-demo.vercel.app',
      featured: false
    },
    {
      id: 5,
      title: 'ML Feature Store',
      description: 'Built a feature store for machine learning models using Redis and PostgreSQL. Enables real-time feature serving and offline feature engineering for ML pipelines.',
      image: '/api/placeholder/600/400',
      category: 'ml',
      technologies: ['Redis', 'PostgreSQL', 'Python', 'FastAPI', 'Docker'],
      github: 'https://github.com/yourusername/feature-store',
      live: 'https://featurestore-demo.vercel.app',
      featured: false
    },
    {
      id: 6,
      title: 'Data Lake Architecture',
      description: 'Designed and implemented a data lake architecture on AWS S3 with Apache Hudi for ACID transactions. Supports both batch and streaming data processing.',
      image: '/api/placeholder/600/400',
      category: 'infrastructure',
      technologies: ['AWS S3', 'Apache Hudi', 'Apache Spark', 'Terraform', 'Python'],
      github: 'https://github.com/yourusername/data-lake',
      live: 'https://datalake-demo.vercel.app',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'streaming', name: 'Streaming' },
    { id: 'etl', name: 'ETL' },
    { id: 'analytics', name: 'Analytics' },
    { id: 'quality', name: 'Data Quality' },
    { id: 'ml', name: 'ML/MLOps' },
    { id: 'infrastructure', name: 'Infrastructure' }
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
            Here are some of the data engineering projects I've worked on. Each one represents a unique challenge in data processing and infrastructure.
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
                    <span>Demo</span>
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