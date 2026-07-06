'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PremiumButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  href?: string
  onClick?: () => void
  className?: string
}

export function PremiumButton({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}: PremiumButtonProps) {
  const baseClasses = 'relative px-8 py-4 rounded-lg font-semibold text-sm overflow-hidden transition-all duration-300'

  const variantClasses = {
    primary:
      'bg-[#4f8cff] text-[#050816] hover:shadow-lg hover:shadow-[#4f8cff]/30 border border-[#4f8cff]',
    ghost:
      'text-[#f8fafc] border border-[#f8fafc]/20 hover:border-[#4f8cff] hover:text-[#4f8cff] hover:shadow-lg hover:shadow-[#4f8cff]/10',
  }

  const Component = href ? 'a' : 'button'

  const buttonProps = {
    className: `${baseClasses} ${variantClasses[variant]} ${className}`,
    ...(href && { href }),
    ...(onClick && { onClick }),
  }

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <Component {...buttonProps}>
        {/* Background shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          }}
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Content */}
        <span className="relative z-10">{children}</span>
      </Component>
    </motion.div>
  )
}
