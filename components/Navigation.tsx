'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollY } = useScroll()

  const opacity = useTransform(scrollY, [0, 100], [0, 1])
  const backdropFilter = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)'],
  )

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (latest) => {
      setIsVisible(latest > 100)
    })
    return () => unsubscribe()
  }, [scrollY])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'about', 'contact']
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < 200 && rect.bottom > 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      style={{ opacity }}
      className="fixed top-0 left-0 right-0 z-50 pointer-events-none"
    >
      {isVisible && (
        <motion.div
          className="glass mx-4 mt-4 rounded-xl p-4 flex items-center justify-between pointer-events-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            href="#"
            className="text-sm font-semibold text-[#f8fafc] hover:text-[#4f8cff] transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            MS
          </motion.a>

          <div className="flex gap-1">
            {[
              { label: 'Work', href: '#work', id: 'work' },
              { label: 'About', href: '#about', id: 'about' },
              { label: 'Contact', href: '#contact', id: 'contact' },
            ].map((link, i) => {
              const isActive = activeSection === link.id
              return (
                <motion.a
                  key={i}
                  href={link.href}
                  className={`px-4 py-2 text-sm transition-all rounded-lg relative ${
                    isActive
                      ? 'text-[#4f8cff] bg-[rgba(79,140,255,0.15)]'
                      : 'text-[#94a3b8] hover:text-[#4f8cff] hover:bg-[rgba(79,140,255,0.1)]'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#4f8cff] rounded-full"
                      layoutId="nav-indicator"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.a>
              )
            })}
          </div>

          <motion.a
            href="#contact"
            className="px-6 py-2 text-sm font-semibold bg-[#4f8cff] text-[#050816] rounded-lg hover:shadow-lg hover:shadow-[#4f8cff]/30 transition-shadow inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      )}
    </motion.nav>
  )
}
