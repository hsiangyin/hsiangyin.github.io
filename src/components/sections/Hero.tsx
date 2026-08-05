import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      className="section-px flex w-full flex-col text-center
                 gap-[30px] pt-[80px] pb-[40px]"
    >
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="font-baskerville font-normal leading-tight text-black
                   text-[2rem]"
      >
        Hello, I&apos;m Sharlene.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        <p className="font-noto-tc text-black leading-[1.6]
                      text-[15px]
                      md:text-[18px]
                      xl:text-[22px]
                      3xl:text-[32px] 3xl:leading-[48px]">
          我是⼀名專注於企業流程數位轉型的產品設計師，
        </p>
        <p className="font-noto-tc text-black leading-[1.6]
                      text-[15px]
                      md:text-[18px]
                      xl:text-[22px]
                      3xl:text-[32px] 3xl:leading-[48px]">
          擅長將複雜的業務流程轉化為易用的數位服務。
        </p>
      </motion.div>

      <div className="mt-[50px] h-px w-full bg-[#d9d9d9]" />
    </section>
  )
}
