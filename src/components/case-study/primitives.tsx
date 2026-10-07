import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ACCENT, reveal } from './tokens'

// 編號卡片：紫色 01～03 + 粗體標題 + 說明（Achievement、Challenge、Insights 共用）
export function NumberedCard({ n, title, desc }: { n: number; title: string; desc: string }) {
  return (
    <div className="bg-[#fafafa] flex flex-col gap-[8px]
                    rounded-[12px] md:rounded-[20px]
                    p-[20px] md:p-[24px] 3xl:p-[30px]">
      <div className="flex items-center gap-[10px]">
        <span className="font-poppins font-bold text-[24px]" style={{ color: ACCENT }}>
          {String(n).padStart(2, '0')}
        </span>
        <p className="font-noto-tc font-bold text-black text-[24px]">
          {title}
        </p>
      </div>
      <p className="font-noto-tc text-black leading-[1.7]
                    text-[13px] md:text-[15px] 3xl:text-[20px]">
        {desc}
      </p>
    </div>
  )
}

// 問句泡泡：紫底白字、左下角小圓角
export function QuestionBubble({ children }: { children: ReactNode }) {
  return (
    <motion.p {...reveal}
      className="inline-block self-start
                 font-noto-tc font-semibold text-white text-[18px] leading-[1.6]
                 px-[18px] py-[12px] rounded-[28px_28px_28px_4px]"
      style={{ backgroundColor: ACCENT }}>
      {children}
    </motion.p>
  )
}

// 段落小標（灰色英文 label，前面加紫色 ✦）
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.p {...reveal}
      className="font-noto text-[#767676]
                 text-[13px] md:text-[16px] 3xl:text-[20px]">
      <span aria-hidden="true" style={{ color: ACCENT }}>✦</span> {children}
    </motion.p>
  )
}

// 段落主標
export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <motion.h2 {...reveal}
      className="font-noto-tc font-bold text-black
                 text-[18px] leading-[1.5]
                 md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
      {children}
    </motion.h2>
  )
}

// 內文段落
export function Body({ children }: { children: ReactNode }) {
  return (
    <motion.p {...reveal}
      className="font-noto-tc text-black leading-[1.9] max-w-[1100px]
                 text-[14px] md:text-[17px] 3xl:text-[22px]">
      {children}
    </motion.p>
  )
}

// 每個段落的外框（統一左右留白與上下間距）
// 所有段落下方 padding 統一 80px
export function Section({ children }: { children: ReactNode }) {
  return (
    <section className="section-px flex flex-col
                        gap-[16px] md:gap-[20px] 3xl:gap-[24px] pb-[80px]">
      {children}
    </section>
  )
}
