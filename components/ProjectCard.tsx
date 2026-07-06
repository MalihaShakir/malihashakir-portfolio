'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

interface ProjectCardProps {
  number: number
  title: string
  year: string
  category: string
  technologies: string[]
  overview: string
  keyFeatures: string[]
  challenges: string
  result: string
  color: string
  backgroundColor?: string
  image?: string
  liveUrl?: string
  codeUrl?: string
}

export function ProjectCard({
  number,
  title,
  year,
  category,
  technologies,
  overview,
  keyFeatures,
  challenges,
  result,
  color,
  backgroundColor,
  image,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  const ref = useRef(null)
  const imageRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.85, 1, 1, 0.85])
  const y = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [120, 0, 0, -120])

  const isEvenProject = number % 2 === 0

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return
    const rect = imageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className="sticky top-0 min-h-screen w-full flex items-center justify-center py-20 lg:py-32 px-4 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        {/* Editorial layout - alternating left/right */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${isEvenProject ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* LEFT SIDE - Meta Information & Description */}
          <motion.div
            className={`lg:col-span-5 space-y-12 ${isEvenProject ? 'lg:col-start-8' : ''}`}
            initial={{ opacity: 0, x: isEvenProject ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false, margin: '-100px' }}
          >
            {/* Project Number - Large and bold */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <p className="text-sm uppercase tracking-widest text-[#94a3b8] font-semibold mb-1">Project</p>
              <p className="text-7xl lg:text-8xl font-display font-bold" style={{ color }}>
                {String(number).padStart(2, '0')}
              </p>
            </motion.div>

            {/* Title - Massive typography */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <h2 className="font-display text-5xl lg:text-6xl font-bold leading-[1.1] text-[#f8fafc]">
                {title}
              </h2>
            </motion.div>

            {/* Meta information - Floating grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-3">Year</p>
                <p className="text-xl text-[#f8fafc] font-semibold">{year}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-3">Category</p>
                <p className="text-xl text-[#f8fafc] font-semibold">{category}</p>
              </div>
            </motion.div>

            {/* Overview - Editorial paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <p className="text-[#94a3b8] leading-relaxed text-lg">
                {overview}
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-4">Key Features</p>
              <ul className="space-y-3">
                {keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#f8fafc]">
                    <span className="text-[#4f8cff] font-bold mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Challenges & Results */}
            <motion.div
              className="space-y-6 border-t border-[rgba(255,255,255,0.08)] pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-3">Challenges</p>
                <p className="text-[#f8fafc] leading-relaxed">{challenges}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-3">Result</p>
                <p className="text-[#f8fafc] leading-relaxed">{result}</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: false }}
            >
              {liveUrl && (
                <a 
                  href={liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-[#4f8cff] text-[#4f8cff] text-sm font-semibold hover:bg-[#4f8cff]/10 transition-all duration-300 hover:shadow-lg hover:shadow-[#4f8cff]/20"
                >
                  View Live
                </a>
              )}
              {codeUrl && (
                <a 
                  href={codeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg border border-[#f8fafc]/20 text-[#f8fafc] text-sm font-semibold hover:border-[#f8fafc]/40 transition-all duration-300"
                >
                  View Code
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Technologies & Visual Content */}
          <motion.div
            className={`lg:col-span-5 space-y-8 ${isEvenProject ? 'lg:col-start-1' : ''}`}
            initial={{ opacity: 0, x: isEvenProject ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: false, margin: '-100px' }}
          >
            {/* Technologies Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-full glass text-sm text-[#f8fafc] font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(79, 140, 255, 0.1)' }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Visual Placeholder - High contrast accent with parallax */}
            <motion.div
              ref={imageRef}
              className="relative overflow-hidden rounded-2xl aspect-[4/3] cursor-move project-image"
              style={{ backgroundColor: backgroundColor || `${color}15` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: false }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Project Image or Parallax layer */}
              {image ? (
                <motion.img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ) : (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ x: mousePos.x, y: mousePos.y }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <div className="text-center space-y-4">
                    <motion.div
                      className="w-24 h-24 rounded-full mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${color}40 0%, ${color}20 100%)`,
                      }}
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <p className="text-sm text-[#94a3b8] font-semibold uppercase tracking-wider">
                      Visual Showcase
                    </p>
                  </div>
                </motion.div>
              )}
              
              {/* Animated border accent */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: `1px solid ${color}30`,
                }}
              />
            </motion.div>

            {/* Divider line */}
            <motion.div
              className="h-px w-full"
              style={{ background: `linear-gradient(90deg, transparent, ${color}40, transparent)` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: false }}
            />

            {/* Additional Insights */}
            <motion.div
              className="space-y-4 text-sm text-[#94a3b8] leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <p>This project demonstrates deep expertise in combining user-centered design with scalable backend architecture.</p>
              <p>Every detail was carefully crafted to ensure optimal performance, beautiful aesthetics, and robust functionality.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
