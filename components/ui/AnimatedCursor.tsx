'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function AnimatedCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      setHovering(
        el.tagName === 'A' ||
          el.tagName === 'BUTTON' ||
          !!el.closest('a') ||
          !!el.closest('button') ||
          el.dataset.cursor === 'hover'
      )
    }
    const onDown = () => setClicking(true)
    const onUp = () => setClicking(false)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-accent pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: pos.x - 5,
          y: pos.y - 5,
          scale: clicking ? 0.6 : hovering ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 700, damping: 30, mass: 0.3 }}
      />
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-accent/40 pointer-events-none z-[9998]"
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: clicking ? 0.7 : hovering ? 1.6 : 1,
          opacity: hovering ? 0.8 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 0.5 }}
      />
    </>
  )
}
