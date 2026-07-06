'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return
      const { clientX, clientY } = e
      cursorRef.current.style.left = `${clientX}px`
      cursorRef.current.style.top = `${clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed w-6 h-6 -translate-x-1/2 -translate-y-1/2 z-50"
      style={{
        background: 'radial-gradient(circle, rgba(79, 140, 255, 0.4) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(8px)',
        transition: 'all 0.05s ease-out',
      }}
    />
  )
}
