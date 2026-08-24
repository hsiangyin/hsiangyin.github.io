import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const RESUME_URL = 'https://drive.google.com/file/d/1FL4cDvUg6A9np4cpuegMdaYlxh1dLDbh/view?usp=sharing'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  // Close the mobile menu on route change so it never lingers over the next page
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0px_2px_5px_rgba(0,0,0,0.08)]">
      <nav className="section-px flex items-center justify-between py-[12px]">
        {/* Logo */}
        <Link
          to="/"
          className="font-noto font-semibold tracking-[-0.84px] text-[#1e1e1e] no-underline
                     text-[18px] md:text-[22px] 3xl:text-[28px]"
        >
          SHARLENE TANG
        </Link>

        {/* Desktop nav — hidden on mobile */}
        <div className="hidden items-center md:flex
                        gap-[24px] 3xl:gap-[50px]">
          <Link
            to="/works"
            className="font-noto-tc text-[#1e1e1e] no-underline transition-opacity hover:opacity-60
                       text-[16px] 3xl:text-[24px]"
          >
            精選作品
          </Link>
          <Link
            to="/about"
            className="font-noto-tc text-[#1e1e1e] no-underline transition-opacity hover:opacity-60
                       text-[16px] 3xl:text-[24px]"
          >
            關於我
          </Link>
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[50px] bg-[#1e1e1e] text-white no-underline transition-opacity hover:opacity-80
                       px-[16px] py-[8px] text-[14px]
                       md:px-[20px] md:py-[10px] md:text-[16px]
                       3xl:px-[24px] 3xl:py-[12px] 3xl:text-[24px]"
          >
            下載履歷
          </a>
        </div>

        {/* Mobile — hamburger toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMenuOpen ? '關閉選單' : '開啟選單'}
          className="flex size-[44px] items-center justify-center text-[#1e1e1e] md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-t border-[#e2e5eb] bg-white md:hidden"
          >
            <div className="section-px flex flex-col gap-[4px] py-[16px]">
              <Link
                to="/works"
                className="rounded-[8px] px-[8px] py-[12px] font-noto-tc text-[16px] text-[#1e1e1e] no-underline active:bg-[#f7f7f7]"
              >
                精選作品
              </Link>
              <Link
                to="/about"
                className="rounded-[8px] px-[8px] py-[12px] font-noto-tc text-[16px] text-[#1e1e1e] no-underline active:bg-[#f7f7f7]"
              >
                關於我
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[8px] rounded-[50px] bg-[#1e1e1e] px-[16px] py-[10px] text-center font-noto-tc text-[14px] text-white no-underline"
              >
                下載履歷
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
