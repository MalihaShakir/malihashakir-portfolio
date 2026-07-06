'use client'

import { motion } from 'framer-motion'

export function ServicesSection() {
  const services = [
    {
      title: 'Web Development',
      description: 'Premium websites and web applications built with Next.js, React, and modern web technologies. Performance-optimized for maximum speed and SEO.',
      color: '#4f8cff',
    },
    {
      title: 'Mobile Apps',
      description: 'Cross-platform mobile applications using React Native and Flutter. Native performance with shared codebase for iOS and Android.',
      color: '#7c5cfc',
    },
    {
      title: 'eCommerce Solutions',
      description: 'High-converting online stores integrated with Shopify, payment processing, and analytics. Designed to maximize revenue.',
      color: '#4f8cff',
    },
    {
      title: 'Backend Systems',
      description: 'Scalable server architecture with Node.js, Python, and PostgreSQL. APIs, databases, and infrastructure that grow with your business.',
      color: '#7c5cfc',
    },
    {
      title: 'AI Integration',
      description: 'Leverage AI and machine learning through integrations with OpenAI, automation systems, and intelligent workflows.',
      color: '#4f8cff',
    },
    {
      title: 'Performance Optimization',
      description: 'Audit and optimize existing applications. Reduce load times, improve Core Web Vitals, and enhance user experience.',
      color: '#7c5cfc',
    },
  ]

  return (
    <section className="relative w-full bg-[#050816] py-24 lg:py-40 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className="text-xs uppercase tracking-[0.15em] text-[#4f8cff] font-semibold mb-8">Services</p>
          <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-[#f8fafc]">
            What I Can Build For You
          </h2>
        </motion.div>

        {/* Services Grid - 3 columns alternating layout */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              viewport={{ once: false }}
            >
              {/* Card Container */}
              <motion.div
                className="relative p-8 lg:p-10 rounded-2xl overflow-hidden h-full flex flex-col justify-between transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.03)',
                  border: `1px solid rgba(255, 255, 255, 0.08)`,
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{
                  backgroundColor: `${service.color}15`,
                  borderColor: `${service.color}40`,
                }}
              >
                {/* Background gradient accent - moves on hover */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${service.color}20 0%, transparent 70%)`,
                  }}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#f8fafc] mb-2">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm lg:text-base text-[#94a3b8] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: service.color }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className="text-[#94a3b8] text-lg mb-6 max-w-xl mx-auto">
            Have a specific project in mind? I&apos;m available for freelance, contract, and full-time opportunities.
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 rounded-lg border border-[#4f8cff] text-[#4f8cff] font-semibold text-sm hover:bg-[#4f8cff]/10 transition-all duration-300"
            whileHover={{ y: -2, boxShadow: '0 20px 40px rgba(79, 140, 255, 0.2)' }}
            whileTap={{ scale: 0.98 }}
          >
            Start A Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
