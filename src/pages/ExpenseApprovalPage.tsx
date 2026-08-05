import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import heroTablet  from '@/assets/images/dasio/hero-tablet.jpg'
import photoDasio  from '@/assets/images/dasio/photo-dasio.png'
import imgDasio01  from '@/assets/images/dasio/img-dasio-01.png'
import imgDasio02  from '@/assets/images/dasio/img-dasio-02.png'
import imgDasio03  from '@/assets/images/dasio/img-dasio-03.png'
import imgDasio04  from '@/assets/images/dasio/img-dasio-04.png'
import imgDasio05  from '@/assets/images/dasio/img-dasio-05.png'

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const ACCENT = '#E91E8C'

const designSections = [
  {
    title: '引導式填寫',
    desc:  '員工不熟悉會計流程，因此先完成必要資訊，再逐步填寫，降低認知負擔。',
    image: imgDasio02,
    alt:   '引導式填寫介面截圖',
    naturalSize: true,
  },
  {
    title: '系統自動帶入資料',
    desc:  '系統直接帶入基本資料，讓員工只需要填寫必要資料，減少重複輸入。',
    image: imgDasio03,
    alt:   '系統自動帶入資料介面截圖',
  },
  {
    title: '附件集中管理',
    desc:  '附件上傳置到申請書中，讓資料送件不易遺失，減少補件情況發生。',
    image: imgDasio04,
    alt:   '附件集中管理介面截圖',
  },
  {
    title: '申請書審核進度',
    desc:  '主管能夠清楚看到申請書的審核狀況，以利追蹤。',
    image: imgDasio05,
    alt:   '申請書審核進度介面截圖',
  },
]

const outcomeRoles = [
  { role: '員工', benefits: ['降低理解成本', '提升填寫效率'] },
  { role: '主管', benefits: ['快速掌握申請內容', '減少來回確認'] },
  { role: '會計', benefits: ['降低核銷成本', '減少人工核對'] },
]

export function ExpenseApprovalPage() {
  return (
    <div className="w-full bg-white">

      {/* ── 1. Intro ──────────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pt-[40px] pb-[20px]
                           md:gap-[20px] md:pt-[50px]
                           3xl:pt-[50px]">
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="font-noto text-[#878787]
                     text-[14px] md:text-[18px] 3xl:text-[24px]">
          Enterprise System
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.08 }}
          className="font-noto-tc font-bold text-black
                     text-[22px] leading-[1.5]
                     md:text-[32px]
                     xl:text-[38px]
                     3xl:text-[48px]">
          將複雜的費用核銷規則轉化為可被理解的申請流程，降低跨部門協作成本
        </motion.h1>

        <motion.hr
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.12 }}
          className="border-t border-[#d9d9d9] w-full" />

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.16 }}
          className="flex flex-wrap gap-[24px] md:gap-[48px]">
          {[
            { label: '專案時程', value: '2024.07 – 2024.12', font: 'font-noto' },
            { label: '專案角色', value: 'Product Designer',   font: 'font-noto' },
            { label: '負責項目', value: '流程定義、UX規劃、UI設計與交付', font: 'font-noto-tc' },
          ].map(({ label, value, font }) => (
            <div key={label} className="flex flex-col gap-[4px]">
              <p className="font-noto text-[#878787]
                            text-[12px] md:text-[14px] 3xl:text-[18px]">
                {label}
              </p>
              <p className={`${font} font-medium text-black
                            text-[14px] md:text-[18px] 3xl:text-[22px]`}>
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 2. Hero Image ─────────────────────────────── */}
      <section className="w-full mt-[20px] md:mt-[28px]">
        <img
          src={heroTablet}
          alt="費用核銷系統 UI"
          className="w-full object-cover
                     h-[240px] md:h-[400px] xl:h-[480px] 3xl:h-[550px]"
        />
      </section>

      {/* ── 3. Background ─────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[12px] py-[40px]
                           md:gap-[16px] md:py-[50px]
                           3xl:gap-[20px] 3xl:py-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          專案背景
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-bold text-black
                     text-[18px] leading-[1.5]
                     md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
          費用申請看似是填表單，本質上是一段跨角色協作流程
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]
                     max-w-[900px]">
          大創百貨的費用申請涉及員工、主管與會計三種角色。員工需要提出申請，主管負責審核，會計則進行核銷與入帳。過去申請流程仰賴紙本、Excel 與人工核對，不僅容易發生資料缺漏，也增加跨部門溝通成本。
        </motion.p>
      </section>

      {/* ── 4. Research Photo ─────────────────────────── */}
      <section className="section-px w-full pb-[40px] md:pb-[50px]">
        <motion.img
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          src={photoDasio}
          alt="田野調查照片"
          className="block w-full object-cover
                     rounded-[16px] md:rounded-[24px]"
        />
      </section>

      {/* ── 5. Research Process ───────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          釐清需求
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-bold text-black
                     text-[18px] leading-[1.5]
                     md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
          在設計之前，我先理解費用申請是如何被完成的
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]
                     max-w-[900px]">
          透過使用者訪談：訪談員工、主管與會計，理解申請、審核與核銷流程。流程盤點：盤點紙本流程與申請欄位。我與會計釐清哪些欄位由系統帶入、哪些需要人工輸入。
        </motion.p>

        {/* Flow diagram image */}
        <motion.img
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          src={imgDasio01}
          alt="費用申請流程圖"
          className="block w-full"
        />
      </section>

      {/* ── 6–9. Design Sections ─────────────────────── */}
      {designSections.map((sec, i) => (
        <section
          key={i}
          className="section-px flex flex-col gap-[20px] pb-[48px]
                     md:gap-[28px] md:pb-[64px]
                     3xl:gap-[36px] 3xl:pb-[80px]">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-noto-tc font-bold text-black
                           text-[18px] md:text-[24px] xl:text-[28px] 3xl:text-[36px]
                           mb-[8px] md:mb-[10px]">
              {sec.title}
            </h2>
            <p className="font-noto-tc text-[#555] leading-[1.9] max-w-[880px]
                          text-[14px] md:text-[17px] 3xl:text-[22px]">
              {sec.desc}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-[#fafafa] rounded-[16px] md:rounded-[24px]
                       p-[20px] md:p-[30px] xl:p-[40px]">
            <img
              src={sec.image}
              alt={sec.alt}
              className={`block rounded-[12px] mix-blend-multiply ${'naturalSize' in sec && sec.naturalSize ? 'max-w-full mx-auto' : 'w-full'}`}
            />
          </motion.div>
        </section>
      ))}

      {/* ── 10. Outcomes ─────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[20px] pb-[48px]
                           md:gap-[28px] md:pb-[64px]
                           3xl:gap-[36px] 3xl:pb-[80px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-bold text-black
                     text-[18px] leading-[1.5]
                     md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
          整合後的服務流程，對三個角色都帶來改善
        </motion.h2>

        {/* Outcome banner */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="rounded-[16px] md:rounded-[20px]
                     px-[24px] py-[20px]
                     md:px-[40px] md:py-[28px]
                     3xl:px-[56px] 3xl:py-[36px]"
          style={{ backgroundColor: ACCENT }}>
          <p className="font-noto-tc font-bold text-white mb-[10px]
                        text-[14px] md:text-[18px] 3xl:text-[24px]">
            預期效益
          </p>
          <ul className="flex flex-col gap-[6px]">
            {['降低人工處理時間', '減少重複確認', '降低補件情況'].map((item) => (
              <li key={item}
                  className="font-noto-tc text-white
                             text-[13px] md:text-[16px] 3xl:text-[20px]">
                · {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Role outcome cards */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 gap-[16px]
                     md:grid-cols-3 md:gap-[20px]
                     3xl:gap-[28px]">
          {outcomeRoles.map(({ role, benefits }) => (
            <div key={role}
                 className="flex flex-col gap-[12px] rounded-[16px] border border-[#e2e5eb]
                            p-[24px] md:p-[28px] 3xl:p-[36px]">
              <span className="font-noto-tc font-bold
                               text-[18px] md:text-[22px] 3xl:text-[28px]"
                    style={{ color: ACCENT }}>
                {role}
              </span>
              <ul className="flex flex-col gap-[6px]">
                {benefits.map((b) => (
                  <li key={b}
                      className="font-noto-tc text-[#555] leading-[1.7]
                                 text-[13px] md:text-[15px] 3xl:text-[19px]">
                    · {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 11. Reflection ───────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[80px]
                           md:gap-[20px] md:pb-[100px]
                           3xl:gap-[24px] 3xl:pb-[120px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-bold leading-[1.7]
                     text-[16px] md:text-[22px] xl:text-[26px] 3xl:text-[36px]"
          style={{ color: ACCENT }}>
          企業內部系統的價值，不只在於提升效率，更在於讓跨部門協作建立共同語言。
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9] max-w-[880px]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          這個專案讓我理解，需求來源不一定是最終使用者。設計師需要同時理解員工的操作需求、主管的決策需求，以及會計的規則需求，才能建立真正可被執行的服務流程。
        </motion.p>
      </section>

    </div>
  )
}
