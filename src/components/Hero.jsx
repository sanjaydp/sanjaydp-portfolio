import React from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container-custom section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Name */}
          <div className="animate-slide-up mb-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
              Sanjay Dadadahalalli Prasanna Kumar
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium">
              Data Engineer / Graduate Research Assistant
            </h2>
          </div>

          {/* Description */}
          <div className="animate-slide-up mb-8">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              With 3+ years of experience, I design and build scalable data pipelines, cloud data solutions, and analytics platforms. Passionate about transforming raw data into actionable insights and driving business value through automation, cloud, and machine learning.
            </p>
          </div>

          {/* Social Links */}
          <div className="animate-slide-up flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/sanjaydp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/SanjayDP"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:sdada004@fiu.edu"
              className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200"
              aria-label="Email"
            >
              <FiMail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 