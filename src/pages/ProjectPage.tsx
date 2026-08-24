import { Link, useParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <section className="section-px flex min-h-[60vh] flex-col items-center justify-center gap-[16px] py-[80px] text-center">
      <p className="font-noto text-[13px] uppercase tracking-wider text-[#767676]">
        {slug}
      </p>
      <h1 className="font-baskerville text-[28px] font-bold italic text-black md:text-[36px]">
        這個案例還在整理中
      </h1>
      <p className="max-w-[420px] font-noto-tc text-[15px] leading-[1.7] text-[#767676]">
        這個作品頁面目前還沒有上線內容，歡迎先看看其他案例，或直接跟我聊聊這個專案。
      </p>
      <Link
        to="/works"
        className="mt-[8px] flex items-center gap-[6px] rounded-[50px] bg-[#1e1e1e] px-[20px] py-[10px]
                   font-noto-tc text-[14px] text-white no-underline transition-opacity hover:opacity-80"
      >
        回精選作品
        <ArrowRight size={16} />
      </Link>
    </section>
  )
}
