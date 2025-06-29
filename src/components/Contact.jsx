import React, { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', subject: '', message: '' })
    
    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000)
  }

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'sdada004@fiu.edu',
      link: 'mailto:sdada004@fiu.edu'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+1 786-784-9890',
      link: 'tel:+17867849890'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Miami, Florida',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new data engineering opportunities, 
            interesting projects, or just want to discuss data infrastructure and pipelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Whether you have a question about data engineering, want to discuss potential 
                collaborations, or just want to say hello, I'd love to hear from you. 
                I'm particularly interested in opportunities involving:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Building scalable data pipelines and ETL processes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Data warehouse and data lake architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Real-time streaming data processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Data quality and governance frameworks
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                  Machine learning infrastructure and MLOps
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-full">
                    <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-dark-700 rounded-full text-gray-600 dark:text-gray-300 transition-all duration-200 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-dark-700 text-gray-900 dark:text-white resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-700 rounded-lg">
                <p className="text-green-800 dark:text-green-200">
                  Thank you! Your message has been sent successfully. I'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 