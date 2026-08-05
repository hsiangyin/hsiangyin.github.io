import { motion } from 'framer-motion'
import iconWorkflow   from '@/assets/images/icon-workflow.svg'
import iconEnterprise from '@/assets/images/icon-enterprise.svg'
import iconService    from '@/assets/images/icon-service.svg'
import iconDigital    from '@/assets/images/icon-digital.svg'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/* ── design values data ─────────────────────────────────── */

const designValues = [
  {
    id: 'workflow',
    icon: iconWorkflow,
    title: '流程設計',
    description: '規劃符合使用者與企業需求的工作流程，降低操作成本並提升效率。',
  },
  {
    id: 'enterprise',
    icon: iconEnterprise,
    title: '企業產品體驗',
    description: '設計企業內部系統與管理平台，兼顧業務邏輯、使用效率與產品一致性。',
  },
  {
    id: 'service',
    icon: iconService,
    title: '服務設計',
    description: '整合不同角色與服務接觸點，打造完整且流暢的服務體驗。',
  },
  {
    id: 'digital',
    icon: iconDigital,
    title: '數位轉型',
    description: '協助企業將紙本流程、人工作業與複雜規範轉化為可落地的數位流程。',
  },
]

/* ── work experience data ───────────────────────────────── */

interface Bullet {
  label: string
  detail?: string
}

interface Job {
  id: string
  title: string
  company: string
  summary: string
  bullets: Bullet[]
}

const jobs: Job[] = [
  {
    id: 'weshine',
    title: 'Product Designer',
    company: '偉迅科技股份有限公司｜2018.09 ～ present',
    summary: '負責叫取號機、櫃檯作業系統之後台軟硬體體驗與系統邏輯規劃。',
    bullets: [
      {
        label: '軟硬體協同與系統架構設計',
        detail: '主導叫取號硬體機台與櫃檯軟體後台之互動流程，優化取號、出票、現場叫號與即時分流邏輯。',
      },
      {
        label: '產品設計全流程',
        detail: '從零開始負責網頁前台與管理後台設計，涵蓋需求釐清、User Flow、Wireframe、Prototype、高保真 UI 與設計交付。',
      },
      {
        label: '設計系統 (Design System) 與元件規範',
        detail: '建置並維護跨硬體螢幕(取號機)與軟體後台之元件庫與狀態規範，提升前後台介面一致性。',
      },
      {
        label: '跨部門溝通與協作',
        detail: '與 PM、工程師協作，透過 Wireframe、設計提案對齊需求。',
      },
    ],
  },
  {
    id: 'wonderful-digital',
    title: 'UI / UX 設計師｜Web Designer',
    company: '漂亮數位股份有限公司｜2017.03 ～ 2018.05',
    summary: '參與網站設計專案，以食品產業為主，協助 UI/UX 設計、RWD 切版與工程交付。',
    bullets: [
      {
        label: '資訊架構',
        detail: '與 PM 共同釐清使用者目標、業務流程與系統限制，提出網站架構與介面設計建議。',
      },
      {
        label: 'Wireframe 到高保真 UI',
        detail: '依據需求文件與 Wireframe 製作 Mockup、Prototype 與高保真 UI，協助客戶與團隊快速確認產品方向。',
      },
    ],
  },
  {
    id: 'jerly',
    title: 'UI / UX 設計師｜Web Designer',
    company: '傑立資訊事業有限公司｜2015.10 ～ 2016.10',
    summary: '參與 10+ 個網站設計專案，涵蓋醫美診所、不動產估價師公會、社會福利基金會，協助 UI/UX 設計、RWD 切版與工程交付。',
    bullets: [
      { label: '與 PM 共同釐清使用者目標，了解網站製作目的' },
      { label: '將資料歸納分層，定義網站架構與流程' },
      { label: '風格發想、定義主色調，完成視覺設計' },
      { label: '使用 html5、css3 製作成靜態網站' },
    ],
  },
]

export function AboutPage() {
  return (
    <div className="w-full bg-white">

      {/* ── Intro ──────────────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[30px] pt-[40px] pb-[40px]
                           md:pt-[50px] md:pb-[50px]
                           3xl:pt-[60px] 3xl:pb-[80px]">
        <div className="flex flex-col gap-[24px]
                        md:flex-row md:items-center md:justify-between md:gap-[24px]
                        3xl:gap-[30px]">
          <div className="flex flex-col gap-[20px] md:max-w-[55%] 3xl:max-w-[940px] 3xl:gap-[30px]">
            <motion.div
              variants={fadeUp} initial="hidden" animate="visible"
              className="flex flex-nowrap items-center gap-[6px] whitespace-nowrap
                         text-[13px]
                         md:gap-[8px] md:text-[18px]
                         xl:text-[28px]
                         3xl:text-[48px]"
            >
              <span className="font-baskerville font-bold italic text-black">Product</span>
              <span className="font-poppins font-medium text-black">Designer ･</span>
              <span className="font-baskerville font-bold italic text-black">UI/UX</span>
              <span className="font-poppins font-medium text-black">Designer</span>
            </motion.div>

            <motion.div
              variants={fadeUp} initial="hidden" animate="visible"
              transition={{ delay: 0.1 }}
            >
              <p className="font-noto-tc text-black leading-[1.6]
                            text-[14px]
                            md:text-[16px]
                            xl:text-[18px]
                            3xl:text-[20px] 3xl:leading-[30px]">
                專注於企業流程數位轉型與產品體驗設計。
              </p>
              <p className="font-noto-tc text-black leading-[1.6]
                            text-[14px]
                            md:text-[16px]
                            xl:text-[18px]
                            3xl:text-[20px] 3xl:leading-[30px]">
                過去 10 年，我參與金融、零售、交通、政府及企業內部系統等大型數位轉型專案，協助團隊將複雜的業務流程、紙本作業與商業規則，轉化為使用者容易理解且容易完成的數位產品。
              </p>
              <p className="font-noto-tc text-black leading-[1.6]
                            text-[14px]
                            md:text-[16px]
                            xl:text-[18px]
                            3xl:text-[20px] 3xl:leading-[30px]">
                我相信，好的設計不是讓畫面更漂亮，而是讓複雜的事情變得更簡單。
              </p>
            </motion.div>
          </div>

          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="hidden shrink-0 self-center rounded-full md:block
                       md:size-[200px]
                       xl:size-[300px]
                       3xl:size-[414px]"
            style={{ background: 'linear-gradient(to bottom, #e6e9ec 8%, #c4c8c9 85%)' }}
          />
        </div>

        <div className="h-px w-full bg-[#d9d9d9]" />
      </section>

      {/* ── Design Values ──────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[24px] pb-[48px]
                           md:gap-[28px] md:pb-[60px]
                           3xl:gap-[30px] 3xl:pb-[80px]">
        <div className="flex flex-wrap items-center gap-[8px]
                        text-[26px]
                        md:text-[36px]
                        xl:text-[48px]
                        3xl:text-[60px]">
          <span className="font-poppins font-medium text-[#444]">Design</span>
          <span className="font-baskerville font-bold italic text-[#444]">Values</span>
        </div>

        <div className="grid gap-[16px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 3xl:gap-[20px]">
          {designValues.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              className="flex flex-col items-start rounded-[20px] shadow-[0px_2px_5px_rgba(0,0,0,0.15)]
                         p-[28px]
                         md:p-[36px]
                         3xl:rounded-[24px] 3xl:p-[50px]"
              style={{ background: 'linear-gradient(155deg, #ffffff 0%, #EEF1F6 100%)' }}
            >
              <div className="flex w-full items-center justify-center
                              h-[100px]
                              md:h-[130px]
                              3xl:h-[190px]">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>

              <p className="mt-[16px] w-full text-center font-poppins font-bold text-black
                            text-[18px] leading-[1.4]
                            md:text-[22px]
                            3xl:text-[32px] 3xl:leading-[48px] 3xl:mt-[20px]">
                {item.title}
              </p>

              <p className="mt-[8px] w-full font-noto-tc text-black leading-relaxed
                            text-[13px]
                            md:text-[15px]
                            3xl:text-[18px] 3xl:mt-[4px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="h-px w-full bg-[#d9d9d9]" />
      </section>

      {/* ── Work Experience ────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[28px] pb-[64px]
                           md:gap-[32px] md:pb-[80px]
                           3xl:gap-[40px] 3xl:pb-[80px]">
        <div className="flex flex-wrap items-center gap-[8px]
                        text-[26px]
                        md:text-[36px]
                        xl:text-[48px]
                        3xl:text-[60px]">
          <span className="font-poppins font-medium text-[#444]">Work</span>
          <span className="font-baskerville font-bold italic text-[#444]">Experience</span>
        </div>

        <div className="flex flex-col gap-[40px] md:gap-[48px] 3xl:gap-[60px]">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
              className="flex flex-col gap-[16px]
                         md:flex-row md:gap-[100px]"
            >
              <div className="flex flex-col gap-[4px] shrink-0
                              md:w-[300px] md:gap-[6px]
                              xl:w-[380px]
                              3xl:w-[550px]">
                <p className="font-poppins font-semibold text-black leading-[1.3] whitespace-nowrap
                              text-[18px]
                              md:text-[22px]
                              xl:text-[28px]
                              3xl:text-[36px] 3xl:leading-[48px]">
                  {job.title}
                </p>
                <p className="font-noto-tc font-medium text-black whitespace-nowrap
                              text-[13px]
                              md:text-[15px]
                              xl:text-[18px]
                              3xl:text-[24px]">
                  {job.company}
                </p>
              </div>

              <div className="flex flex-1 flex-col gap-[12px] md:gap-[16px] 3xl:gap-[20px]">
                <p className="font-noto-tc font-medium text-[#444] leading-[1.5]
                              text-[14px]
                              md:text-[18px]
                              xl:text-[20px]
                              3xl:text-[28px] 3xl:leading-[42px]">
                  {job.summary}
                </p>

                <div className="flex flex-col gap-[8px] md:gap-[10px]">
                  {job.bullets.map((bullet) => (
                    <div key={bullet.label}>
                      <p className="font-noto-tc font-medium text-[#888] leading-[1.6]
                                    text-[13px]
                                    md:text-[16px]
                                    xl:text-[18px]
                                    3xl:text-[20px] 3xl:leading-[30px]">
                        ‧{bullet.label}
                      </p>
                      {bullet.detail && (
                        <p className="font-noto-tc text-[#888] leading-[1.6]
                                      pl-[16px] text-[12px]
                                      md:pl-[20px] md:text-[14px]
                                      xl:text-[16px]
                                      3xl:pl-[24px] 3xl:text-[18px] 3xl:leading-[30px]">
                          {bullet.detail}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
