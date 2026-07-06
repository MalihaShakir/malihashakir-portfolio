'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MacbookScene } from './MacbookScene'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export function HeroSection() {
  const [activeProject, setActiveProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % 3)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050816]">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0">
        <MacbookScene activeProject={activeProject} />
      </div>

      {/* Content Overlay */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.p
          className="text-xs uppercase tracking-[0.15em] text-[#94a3b8] font-semibold mb-12"
          variants={itemVariants}
        >
          Available for Remote Opportunities
        </motion.p>

        {/* Hero headline - breaking the grid with interesting line breaks */}
        <motion.h1
          className="font-display text-7xl sm:text-8xl lg:text-9xl font-bold leading-[0.95] max-w-5xl mb-8"
          variants={itemVariants}
        >
          <span className="block text-[#f8fafc]">Maliha</span>
          <span className="block text-[#f8fafc]">Shakir</span>
        </motion.h1>

        {/* Roles - positioned with editorial spacing */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-16 max-w-4xl"
          variants={itemVariants}
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-[#4f8cff] font-semibold mb-2">01</p>
            <p className="text-xl lg:text-2xl text-[#f8fafc] font-display font-bold">Full Stack Web Developer</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-[#7c5cfc] font-semibold mb-2">02</p>
            <p className="text-xl lg:text-2xl text-[#f8fafc] font-display font-bold">Mobile App Developer</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-[#4f8cff] font-semibold mb-2">03</p>
            <p className="text-xl lg:text-2xl text-[#f8fafc] font-display font-bold">AI Automation Developer</p>
          </div>
        </motion.div>

        {/* CTA - simplified and elegant */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-16"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-8 py-4 bg-[#4f8cff] text-[#050816] rounded-lg font-semibold text-sm hover:shadow-xl hover:shadow-[#4f8cff]/30 active:scale-95 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#work"
            className="px-8 py-4 border border-[#f8fafc]/20 text-[#f8fafc] rounded-lg font-semibold text-sm hover:border-[#4f8cff] hover:text-[#4f8cff] active:scale-95 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View Selected Work
          </motion.a>
        </motion.div>

        {/* Project indicator */}
        <motion.div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20" variants={itemVariants}>
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === activeProject % 3 ? 'w-8 bg-[#4f8cff]' : 'w-2 bg-[#94a3b8]'
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
            isScrolling ? 'opacity-0' : 'opacity-100'
          }`}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs uppercase tracking-widest text-[#94a3b8]">Scroll to explore</p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#4f8cff]"
            >
              <path d="M10 4v8M6 14l4 4 4-4" />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(79, 140, 255, 0.1) 0%, transparent 70%)',
        }}
      />
    </section>
  )
}
