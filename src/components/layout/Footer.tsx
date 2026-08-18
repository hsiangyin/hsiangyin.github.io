import iconGmail    from '@/assets/images/icon-gmail.svg'
import iconLinkedin from '@/assets/images/icon-linkedin.svg'

export function Footer() {
  return (
    <footer className="w-full">
      <div className="section-px">
        <div className="h-px w-full bg-[#d9d9d9]" />
      </div>
      <div
        className="section-px flex items-center justify-between
                   py-[48px]
                   md:py-[64px]
                   3xl:py-[100px]"
      >
        <div>
          <p
            className="font-baskerville font-normal leading-tight text-[#585c5f]
                       text-[24px]
                       md:text-[32px]
                       xl:text-[38px]
                       3xl:text-[48px]"
          >
            Contact Me
          </p>
          <p
            className="font-noto-tc text-[#585c5f]
                       mt-[4px] text-[14px] leading-[1.8]
                       md:text-[18px]
                       3xl:text-[24px] 3xl:leading-[48px]"
          >
            歡迎隨時與我聊聊
          </p>
        </div>

        <div className="flex items-center gap-[12px] md:gap-[16px] 3xl:gap-[20px]">
          <a
            href="mailto:tang790106@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity hover:opacity-70
                       h-[44px] w-[44px]
                       md:h-[56px] md:w-[56px]
                       3xl:h-[70px] 3xl:w-[70px]"
            aria-label="Gmail"
          >
            <img src={iconGmail} alt="Gmail" className="h-full w-full" />
          </a>
          <a
            href="https://www.linkedin.com/in/sharlene-tang"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition-opacity hover:opacity-70
                       h-[44px] w-[44px]
                       md:h-[56px] md:w-[56px]
                       3xl:h-[70px] 3xl:w-[70px]"
            aria-label="LinkedIn"
          >
            <img src={iconLinkedin} alt="LinkedIn" className="h-full w-full" />
          </a>
        </div>
      </div>
    </footer>
  )
}
