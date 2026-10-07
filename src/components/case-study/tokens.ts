import type { Variants } from 'framer-motion'

// 案例頁共用的設計 token：三個案例都從這裡取，避免色碼打錯或各頁不一致
export const ACCENT = '#7718D6'

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

// 捲動進場動畫的共用設定
export const reveal = {
  variants: fadeUp,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
} as const

// 卡片內的小字說明
export const smallText = 'font-noto-tc text-black leading-[1.7] text-[13px] md:text-[15px] 3xl:text-[20px]'
