'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export function AnimatedCursor() {
  const [hovering, setHovering] = useState(false)
  const [clicking, setClicking] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  const fastX = useSpring(rawX, { stiffness: 700, damping: 30, mass: 0.3 })
  const fastY = useSpring(rawY, { stiffness: 700, damping: 30, mass: 0.3 })
  const slowX = useSpring(rawX, { stiffness: 200, damping: 28, mass: 0.5 })
  const slowY = useSpring(rawY, { stiffness: 200, damping: 28, mass: 0.5 })

  const dotX = useTransform(fastX, (v) => v - 5)
  const dotY = useTransform(fastY, (v) => v - 5)
  const ringX = useTransform(slowX, (v) => v - 18)
  const ringY = useTransform(slowY, (v) => v - 18)

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }
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
  }, [rawX, rawY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: clicking ? 0.6 : hovering ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 700, damping: 30, mass: 0.3 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-9 h-9 rounded-full border border-primary/40 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: clicking ? 0.7 : hovering ? 1.6 : 1,
          opacity: hovering ? 0.8 : 0.4,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 28, mass: 0.5 }}
      />
    </>
  )
}
