import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import projectSinotrade from '@/assets/images/project-sinotrade.png'
import projectDaiso     from '@/assets/images/project-daiso.png'
import projectWdopa     from '@/assets/images/project-wdopa.png'

interface Project {
  id: string
  slug: string
  title: string[]
  tags: string[]
  image: string
  bgStyle: CSSProperties
  imgStyle?: CSSProperties
}

const projects: Project[] = [
  {
    id: 'sinotrade',
    slug: 'sinotrade',
    title: [
      '證券開戶從「紙本填寫」轉為「專業且快速的',
      '數位服務體驗」， 同時優化客戶安心感與櫃台',
      '作業效率',
    ],
    tags: ['金融科技', '數位轉型', '流程設計'],
    image: projectSinotrade,
    bgStyle: { backgroundColor: '#edeef2' },
    imgStyle: { top: '10px' },
  },
  {
    id: 'daiso',
    slug: 'expense-approval',
    title: ['複雜的費用核銷規則轉化為可被理解的', '申請流程，降低跨部門協作成本'],
    tags: ['企業內部系統', '流程設計', '簽核流程'],
    image: projectDaiso,
    bgStyle: { backgroundColor: '#edeef2' },
  },
  {
    id: 'wdopa',
    slug: 'counter-service',
    title: ['分散的櫃台服務流程', '整合為一段可被執行的服務體驗'],
    tags: ['服務設計', '政府服務', '資訊架構'],
    image: projectWdopa,
    bgStyle: { backgroundColor: '#edeef2' },
  },
]

export function FeaturedWorks() {
  return (
    <section
      id="featured-works"
      className="section-px flex w-full flex-col
                 gap-[20px] pb-[48px] scroll-mt-[80px]
                 md:gap-[40px] md:pb-[60px] md:scroll-mt-[100px]
                 3xl:gap-[60px] 3xl:pb-[80px]"
    >
      <div
        className="flex flex-wrap items-center gap-[8px]
                   text-[26px]
                   md:text-[36px]
                   xl:text-[48px]
                   3xl:text-[60px]"
      >
        <span className="font-poppins font-medium text-[#444]">Featured</span>
        <span className="font-baskerville font-bold italic text-[#444]">Works</span>
      </div>

      <div className="flex flex-col gap-[40px]">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: 'easeOut' }}
          >
            <Link
              to={`/works/${project.slug}`}
              className="group relative flex w-full overflow-hidden rounded-[20px]
                         shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)] no-underline
                         3xl:rounded-[24px]
                         h-[380px]
                         3xl:h-[500px]"
              style={project.bgStyle}
            >
              {/* Background image */}
              <img
                src={project.image}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover
                           transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                style={project.imgStyle}
              />

              {/* Text overlay */}
              <div
                className="relative z-10 flex flex-col justify-center
                           gap-[30px] py-[50px] px-[60px]
                           3xl:gap-[30px] 3xl:px-[60px] 3xl:py-[50px]"
              >
                <div>
                  {project.title.map((line, j) => (
                    <p
                      key={j}
                      className="font-noto-tc font-medium text-black
                                 text-[16px] leading-[1.5]
                                 md:text-[22px] md:leading-[1.5]
                                 xl:text-[26px]
                                 3xl:text-[36px] 3xl:leading-[54px]"
                    >
                      {line}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-[8px] md:gap-[12px]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[6px] border border-[#e2e5eb] bg-[#f7f7f7]/90
                                 font-noto-tc text-[#7718D6]
                                 px-[8px] py-[5px] text-[11px]
                                 md:px-[12px] md:py-[8px] md:text-[14px]
                                 3xl:rounded-[8px] 3xl:px-[12px] 3xl:py-[10px] 3xl:text-[18px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
