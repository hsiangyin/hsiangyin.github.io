import { Link } from 'react-router-dom'

export function Navbar() {
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
            href="https://drive.google.com/file/d/1FL4cDvUg6A9np4cpuegMdaYlxh1dLDbh/view?usp=sharing"
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

        {/* Mobile — show only download button */}
        <a
          href="https://drive.google.com/file/d/1FL4cDvUg6A9np4cpuegMdaYlxh1dLDbh/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden rounded-[50px] bg-[#1e1e1e] px-[14px] py-[7px] font-noto-tc text-[13px] text-white no-underline"
        >
          下載履歷
        </a>
      </nav>
    </header>
  )
}
