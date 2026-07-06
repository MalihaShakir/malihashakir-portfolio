'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const skills = {
  Frontend: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'REST APIs'],
  Mobile: ['React Native', 'Expo', 'Flutter', 'iOS', 'Android'],
  AI: ['OpenAI APIs', 'Automation', 'Prompt Engineering', 'ML Integration', 'LLMs'],
  Deployment: ['Vercel', 'GitHub', 'Render', 'Firebase Hosting', 'Docker'],
}

interface FloatingSkill {
  id: string
  text: string
  category: string
  x: number
  y: number
  vx: number
  vy: number
  color: string
}

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [floatingSkills, setFloatingSkills] = useState<FloatingSkill[]>([])

  useEffect(() => {
    const allSkills: FloatingSkill[] = []
    let id = 0

    Object.entries(skills).forEach(([category, items]) => {
      items.forEach((skill) => {
        allSkills.push({
          id: `skill-${id}`,
          text: skill,
          category,
          x: Math.random() * 300,
          y: Math.random() * 300,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          color: category === 'Frontend' ? '#4f8cff' : category === 'Backend' ? '#7c5cfc' : '#f8fafc',
        })
        id++
      })
    })

    setFloatingSkills(allSkills)
  }, [])

  const categoryOrder = ['Frontend', 'Backend', 'Mobile', 'AI', 'Deployment']

  return (
    <section className="relative min-h-screen w-full bg-[#050816] py-20 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          style={{
            background: 'radial-gradient(circle, rgba(79, 140, 255, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          style={{
            background: 'radial-gradient(circle, rgba(124, 92, 252, 0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <span className="text-xs uppercase tracking-widest text-[#4f8cff] font-semibold">Skills & Technologies</span>
          <h2 className="font-display text-5xl lg:text-6xl font-bold leading-tight text-[#f8fafc] mt-4">
            Crafted with Modern Tools
          </h2>
        </motion.div>

        {/* Skills Grid by Category */}
        <div className="space-y-16">
          {categoryOrder.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: false }}
            >
              <h3 className="text-lg uppercase tracking-widest text-[#94a3b8] font-semibold mb-6">
                {category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills[category as keyof typeof skills].map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      type: 'spring',
                    }}
                    viewport={{ once: false }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    {/* Floating background glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          category === 'Frontend'
                            ? 'radial-gradient(circle, rgba(79, 140, 255, 0.15), transparent)'
                            : category === 'Backend'
                              ? 'radial-gradient(circle, rgba(124, 92, 252, 0.15), transparent)'
                              : 'radial-gradient(circle, rgba(148, 163, 184, 0.15), transparent)',
                      }}
                    />

                    {/* Card content */}
                    <div className="relative glass rounded-xl p-4 lg:p-6 text-center backdrop-blur-md border border-[rgba(255,255,255,0.1)] group-hover:border-[rgba(255,255,255,0.2)] transition-all duration-300">
                      <motion.p
                        className={`text-sm lg:text-base font-semibold ${
                          category === 'Frontend'
                            ? 'text-[#4f8cff]'
                            : category === 'Backend'
                              ? 'text-[#7c5cfc]'
                              : 'text-[#f8fafc]'
                        }`}
                      >
                        {skill}
                      </motion.p>

                      {/* Animated underline */}
                      <motion.div
                        className={`h-0.5 mt-3 rounded-full mx-auto ${
                          category === 'Frontend'
                            ? 'bg-[#4f8cff]'
                            : category === 'Backend'
                              ? 'bg-[#7c5cfc]'
                              : 'bg-[#f8fafc]'
                        }`}
                        initial={{ width: 0 }}
                        whileHover={{ width: '60%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* Floating particles on hover */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full"
                        style={{
                          background:
                            category === 'Frontend'
                              ? '#4f8cff'
                              : category === 'Backend'
                                ? '#7c5cfc'
                                : '#f8fafc',
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        whileHover={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          y: [-20, -40],
                        }}
                        transition={{
                          duration: 0.6,
                          delay: i * 0.1,
                        }}
                      />
                    ))}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-20 pt-20 border-t border-[rgba(255,255,255,0.08)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Technologies Mastered', value: '20+' },
              { label: 'Full-Stack Proficiency', value: '100%' },
              { label: 'Years of Experience', value: '6+' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                viewport={{ once: false }}
              >
                <motion.p className="font-display text-4xl lg:text-5xl font-bold text-[#4f8cff] mb-2">
                  {stat.value}
                </motion.p>
                <p className="text-sm uppercase tracking-widest text-[#94a3b8] font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
