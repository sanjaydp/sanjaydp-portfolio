import React from 'react'
import { FiCode, FiDatabase, FiGlobe, FiSmartphone } from 'react-icons/fi'

const About = () => {
  const skills = {
    languages: ['Python', 'SQL', 'Scala', 'Java', 'JavaScript', 'Bash'],
    bigData: ['Apache Spark', 'Apache Kafka', 'Apache Airflow', 'Hadoop', 'Hive', 'Presto'],
    cloud: ['AWS', 'Azure', 'GCP', 'Snowflake', 'Databricks', 'Redshift'],
    tools: ['Git', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Jupyter']
  }

  const experiences = [
    {
      title: 'Senior Data Engineer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Building scalable data pipelines using Apache Spark, Airflow, and cloud technologies. Implementing data governance and quality frameworks.'
    },
    {
      title: 'Data Engineer',
      company: 'Data Analytics Firm',
      period: '2021 - 2022',
      description: 'Developed ETL pipelines and data warehouses. Optimized query performance and implemented data quality checks.'
    },
    {
      title: 'Junior Data Engineer',
      company: 'E-commerce Platform',
      period: '2020 - 2021',
      description: 'Built data pipelines for customer analytics and business intelligence. Worked with real-time streaming data.'
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
            Data engineer passionate about building robust data infrastructure and pipelines
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
                I'm a passionate Data Engineer with over 3 years of experience building scalable data infrastructure 
                and ETL pipelines. I specialize in transforming complex data challenges into efficient, reliable solutions.
              </p>
              <p>
                My expertise lies in designing and implementing data pipelines that process millions of records daily, 
                ensuring data quality, and building robust data warehouses that enable data-driven decision making.
              </p>
              <p>
                I believe in writing clean, maintainable code and creating data solutions that scale with business growth. 
                Every data pipeline is an opportunity to optimize performance and improve data accessibility.
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
                  <h4 className="font-semibold text-gray-900 dark:text-white">Programming Languages</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
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
                  <h4 className="font-semibold text-gray-900 dark:text-white">Big Data & Processing</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.bigData.map((skill, index) => (
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
                  <h4 className="font-semibold text-gray-900 dark:text-white">Cloud & Platforms</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill, index) => (
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
                  <h4 className="font-semibold text-gray-900 dark:text-white">Tools & DevOps</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, index) => (
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