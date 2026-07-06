'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'

export function ContactSection() {
  const ref = useRef(null)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  return (
    <section id="contact" ref={ref} className="relative w-full bg-[#050816] py-24 lg:py-40 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
        >
          <p className="text-xs uppercase tracking-[0.15em] text-[#4f8cff] font-semibold mb-8">Contact</p>
          <h2 className="font-display text-6xl lg:text-7xl font-bold leading-[1.05] text-[#f8fafc] max-w-3xl">
            Let&apos;s Build
            <br />
            <span style={{ color: '#4f8cff' }}>Something Remarkable</span>
          </h2>
        </motion.div>

        {/* Content Grid - Editorial layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column - Info & Methods */}
          <motion.div
            className="lg:col-span-5 space-y-16"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: false }}
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: false }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#4f8cff] animate-pulse" />
                <p className="text-sm text-[#f8fafc] font-semibold">Available for New Projects</p>
              </div>
              <p className="text-[#94a3b8] leading-relaxed">
                I&apos;m actively looking for exciting projects where I can make a meaningful impact. Whether it&apos;s a startup MVP or enterprise scale application, let&apos;s talk.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: false }}
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-4">Email</p>
                <p className="text-lg text-[#f8fafc] font-semibold break-all hover:text-[#4f8cff] transition-colors">
                  <a href="mailto:maliha.shakir2003@gmail.com">maliha.shakir2003@gmail.com</a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-4">Phone</p>
                <p className="text-[#f8fafc]">
                  <a href="tel:+923204520047" className="hover:text-[#4f8cff] transition-colors">+92 320 4520047</a>
                </p>
              </div>

              <div>
                <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-4">Connect With Me</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/maliha-shakir', icon: 'in' },
                    { name: 'GitHub', url: 'https://github.com/MalihaShakir', icon: 'gh' },
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.url}
                      className="px-5 py-3 rounded-lg border border-[#f8fafc]/20 text-[#f8fafc] text-sm font-semibold hover:border-[#4f8cff] hover:text-[#4f8cff] transition-all duration-300"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Timezone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: false }}
              className="p-6 rounded-lg border border-[#94a3b8]/20"
            >
              <p className="text-xs uppercase tracking-widest text-[#94a3b8] font-semibold mb-2">Based in</p>
              <p className="text-[#f8fafc] font-semibold">Pakistan (PKT UTC+5)</p>
              <p className="text-sm text-[#94a3b8] mt-2">Available for remote projects worldwide</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Direct CTA */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: false }}
          >
            {/* Large CTA section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: false }}
            >
              <div className="space-y-6">
                <p className="text-lg text-[#94a3b8] leading-relaxed max-w-lg">
                  Ready to discuss your project? I&apos;d love to hear about your vision and how I can help bring it to life.
                </p>

                {/* Main CTA Button */}
                <motion.a
                  href="mailto:maliha.shakir2003@gmail.com"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-[#4f8cff] text-[#050816] font-semibold text-base hover:shadow-2xl hover:shadow-[#4f8cff]/40 active:scale-95 transition-all duration-300"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Send Me An Email</span>
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                    →
                  </motion.span>
                </motion.a>

                {/* Secondary Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    className="px-6 py-3 rounded-lg border border-[#f8fafc]/20 text-[#f8fafc] font-semibold text-sm hover:border-[#4f8cff] hover:bg-[#4f8cff]/5 transition-all duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Call
                  </motion.button>
                  <motion.button
                    className="px-6 py-3 rounded-lg border border-[#f8fafc]/20 text-[#f8fafc] font-semibold text-sm hover:border-[#4f8cff] hover:bg-[#4f8cff]/5 transition-all duration-300"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Resume
                  </motion.button>
                </div>
              </div>

              {/* Divider */}
              <motion.div
                className="h-px w-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(79, 140, 255, 0.2), transparent)',
                }}
              />

              {/* Bottom info */}
              <motion.div
                className="space-y-3 text-sm text-[#94a3b8]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: false }}
              >
                <p>✓ Quick response times</p>
                <p>✓ Free initial consultation</p>
                <p>✓ Transparent communication throughout project</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Divider */}
        <motion.div
          className="mt-24 pt-12 border-t border-[rgba(255,255,255,0.08)]"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-[#94a3b8]">
            <p>© 2024 Maliha Shakir. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#4f8cff] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#4f8cff] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
