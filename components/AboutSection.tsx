'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="about" ref={ref} className="relative w-full bg-[#050816] py-24 lg:py-40 px-4 lg:px-8">
      <motion.div style={{ opacity }} className="max-w-7xl mx-auto">
        {/* Section Label - Minimal and intentional */}
        <motion.p
          className="text-xs uppercase tracking-[0.15em] text-[#4f8cff] font-semibold mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          About
        </motion.p>

        {/* Editorial grid layout - Breaking the conventional grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Large statement - Left side, spans 5 columns */}
          <motion.div
            className="lg:col-span-5 space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            <h2 className="font-display text-6xl lg:text-7xl font-bold leading-[1.05] text-[#f8fafc]">
              Building
              <br />
              <span style={{ color: '#4f8cff' }}>Digital Products</span>
              <br />
              That Solve Real
              <br />
              Business Problems
            </h2>

            <p className="text-lg text-[#94a3b8] leading-relaxed">
              I specialize in creating beautiful, performant digital experiences that drive measurable business results. Every project I work on combines stunning design with robust architecture.
            </p>
          </motion.div>

          {/* Statistics - Center, floating */}
          <motion.div
            className="lg:col-span-3 space-y-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: false }}
          >
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '6+', label: 'Years Experience' },
              { number: '30+', label: 'Satisfied Clients' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <p className="text-5xl lg:text-6xl font-display font-bold text-[#f8fafc]">{stat.number}</p>
                <p className="text-sm uppercase tracking-widest text-[#94a3b8] font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise areas - Right side, alternating layout */}
          <motion.div
            className="lg:col-span-4 space-y-12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: false }}
          >
            <div className="space-y-6">
              {[
                {
                  title: 'Full-Stack Excellence',
                  description: 'From frontend interactions to backend infrastructure, I architect solutions that perform seamlessly at every layer.',
                },
                {
                  title: 'Performance-First',
                  description: 'Every site I build achieves 95+ Lighthouse scores with sub-2-second load times, ensuring optimal user engagement.',
                },
                {
                  title: 'AI & Automation',
                  description: 'Leveraging modern AI platforms to automate workflows, analyze data, and deliver intelligent features.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  viewport={{ once: false }}
                  className="space-y-2"
                >
                  <h4 className="text-lg font-display font-bold text-[#f8fafc]">{item.title}</h4>
                  <p className="text-sm text-[#94a3b8] leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider - Elegant line */}
        <motion.div
          className="h-px w-full mt-20"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(79, 140, 255, 0.2), transparent)',
          }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: false }}
        />

        {/* Bottom section - Why I do this */}
        <motion.div
          className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold">Why I Build</p>
            <p className="text-[#f8fafc] leading-relaxed">
              I believe technology should be beautiful, intuitive, and solve real problems. I\'m passionate about creating digital experiences that users love and businesses depend on.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold">My Approach</p>
            <p className="text-[#f8fafc] leading-relaxed">
              Every project starts with deep understanding of business goals and user needs. I combine strategic thinking with meticulous execution to deliver results that exceed expectations.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
