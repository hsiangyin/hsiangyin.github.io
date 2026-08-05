import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

const ORB_TRANSITION = (duration: number) => ({
  duration,
  repeat: Infinity,
  repeatType: 'mirror' as const,
  ease: 'easeInOut',
})

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col bg-white">

      {/* ── Animated gradient orbs ─────────────────────────────
          Negative margin centering keeps Framer's x/y as pure
          pixel offsets — no calc() in keyframes, so it works
          across all browsers. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        {/* Pink / magenta — viewport centre */}
        <motion.div
          style={{
            position: 'absolute',
            width: 560,
            height: 560,
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            marginTop: -380,
            marginLeft: -280,
            background:
              'radial-gradient(circle, rgba(255,94,219,0.30) 0%, rgba(255,94,219,0.14) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 50, -20, 30, 0], y: [0, -38, 20, -12, 0] }}
          transition={ORB_TRANSITION(9)}
        />

        {/* Purple / lavender — upper-right */}
        <motion.div
          style={{
            position: 'absolute',
            width: 440,
            height: 440,
            borderRadius: '50%',
            top: '42%',
            left: '60%',
            marginTop: -320,
            marginLeft: -220,
            background:
              'radial-gradient(circle, rgba(164,145,255,0.28) 0%, rgba(164,145,255,0.12) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, -44, 25, -18, 0], y: [0, 32, -20, 14, 0] }}
          transition={ORB_TRANSITION(11)}
        />

        {/* Amber / orange — lower-left */}
        <motion.div
          style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            top: '60%',
            left: '38%',
            marginTop: -290,
            marginLeft: -190,
            background:
              'radial-gradient(circle, rgba(255,185,79,0.24) 0%, rgba(255,185,79,0.09) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          animate={{ x: [0, 32, -16, 20, 0], y: [0, -44, 28, -18, 0] }}
          transition={ORB_TRANSITION(13)}
        />
      </div>

      {/* ── Page content ───────────────────────────────────── */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>

    </div>
  )
}
