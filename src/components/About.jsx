import React from 'react'

const skills = {
  languages: ['Python', 'SQL'],
  bigData: ['Apache Spark', 'Hadoop', 'MapReduce', 'Kafka'],
  cloud: ['AWS', 'Azure'],
  tools: ['PostgreSQL', 'MySQL', 'NoSQL', 'Docker', 'Kubernetes', 'Terraform', 'Git', 'Power BI', 'Microsoft Excel', 'Microsoft Office', 'Unix/Linux', 'Windows', 'OOP', 'Agile (Scrum)', 'SDLC']
}

const experiences = [
  {
    title: 'Data Engineer (GRA)',
    company: 'Florida International University',
    period: 'Sep 2024 – Present',
    description: 'Developed and deployed end-to-end data pipelines using AWS Glue, Lambda, S3, EMR, supporting sensor telemetry processing  from ESP32/MPU6050 devices, improving real-time analytics availability by 40%. Automated ingestion, cleansing, and transformation of thermal imaging and environmental datasets using Python and SQL, reducing manual preprocessing time by 60%. Integrated PostgreSQL with dashboard tools for live research reporting, enhancing anomaly detection workflows in power electronics and energy systems.'
  },
  {
    title: 'Senior Data Engineer',
    company: 'Brillio Technologies Pvt Ltd',
    period: 'Nov 2021 – Jul 2024',
    description: 'Built a scalable global royalty platform serving 1M+ artists, increasing data pipeline availability by 30% using AWS Glue, Step Functions, Lambda, SQL stored procedures, and Airflow Achieved 75% faster statement generation by creating event-driven ingestion workflows using S3 triggers and serverless orchestration. Engineered a microservice with Great Expectations for data validation, reducing cluster memory usage by 40% and improving data quality metrics. Led the sync pipeline between Amazon Aurora and Redshift, improving query responsiveness by 50% for downstream analytics teams. Supported stakeholders across finance/legal departments via interactive Power BI dashboards, increasing revenue insight efficiency by 20%.'
  },
  {
    title: 'Associate Professional Software Engineer',
    company: 'DXC Technologies Pvt Ltd',
    period: 'Jun 2021 – Nov 2021',
    description: 'Built and supported ETL pipelines using AWS Glue, Lambda, and Step Functions, ingesting 2M+ daily records from APIs, S3, and PostgreSQL. Automated job scheduling, transformation logic, and pipeline failure alerting using Airflow and CloudWatch, reducing data downtime by 35%.'
  }
]

const About = () => (
  <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
    <div className="container-custom">
      <div className="flex justify-center mb-8">
        <img
          src="/photosanjay.jpeg"
          alt="Sanjay's Profile"
          className="w-56 h-56 rounded-full object-cover border-4 border-primary-500 shadow-lg"
        />
      </div>
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
              I'm a passionate Data Engineer and Research Assistant with experience building scalable data infrastructure and ETL pipelines. I specialize in transforming complex data challenges into efficient, reliable solutions.
            </p>
            <p>
              My expertise lies in designing and implementing data pipelines that process millions of records daily, ensuring data quality, and building robust data warehouses that enable data-driven decision making.
            </p>
            <p>
              I believe in writing clean, maintainable code and creating data solutions that scale with business growth. Every data pipeline is an opportunity to optimize performance and improve data accessibility.
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

          {/* Certifications */}
          <div className="mt-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Certifications
            </h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>AWS Certified: Cloud Practitioner</li>
              <li>Microsoft Certified: Azure Data Fundamentals</li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h3>
          <div className="space-y-6">
            <div className="card p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Programming Languages</h4>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Big Data & Processing</h4>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud & Platforms</h4>
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
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tools & DevOps</h4>
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

export default About 