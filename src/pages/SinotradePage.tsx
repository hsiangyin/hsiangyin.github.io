import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import heroTablet   from '@/assets/images/sinopac/hero-tablet.jpg'
import photoCounter from '@/assets/images/sinopac/img-sinopac-01.png'
import imgForm       from '@/assets/images/sinopac/img-sinopac-02.png'
import imgDocuments  from '@/assets/images/sinopac/img-sinopac-03.png'
import imgStatus     from '@/assets/images/sinopac/img-sinopac-04.png'

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const ACCENT = '#7118d6'

/* ── data ────────────────────────────────────────────── */

const goals = [
  { title: '推動臨櫃數位轉型',   desc: '以 iPad 取代紙本開戶，建立數位化服務流程。' },
  { title: '提升開戶效率',       desc: '整合資料填寫、證件拍攝、電子簽名與送件流程，減少人工處理時間。' },
  { title: '降低服務中斷',       desc: '避免櫃員於不同設備、紙本與系統間反覆切換，提供更流暢的服務體驗。' },
  { title: '提升客戶體驗',       desc: '讓客戶能在櫃員引導下，以簡單、清楚的方式完成開戶流程。' },
  { title: '建立可追蹤的送件流程', desc: '提供案件送審狀態查詢，提升櫃員對流程進度的掌握度。' },
]

const problems = [
  { title: '紙本欄位過多',       desc: '許多欄位是為紙本審核設計，不是每個都需要出現在數位流程中，需要重新篩選。' },
  { title: '拍照、簽名是獨立流程', desc: '櫃員需要來回切換作業。' },
  { title: '送件後沒有狀態回饋', desc: '無法確認案件是否完成' },
]

const principles = [
  { title: '只留下流程真正需要的欄位', desc: '欄位是否保留，取決於它對客戶或櫃員是否還有實際用途，而不是它在紙本上是否存在過。' },
  { title: '把實體流程整合到數位流程',   desc: '拍照 → 簽名 → 送件 應該是一段流程。' },
  { title: '降低流程的不確定性',         desc: '使用者需要知道目前做到哪？下一步是什麼？送件成功了嗎？' },
]

const decisions = [
  {
    title: '重新篩選表單欄位，只留下數位流程真正需要的資訊',
    desc:  '盤點原始紙本表單後，移除只是為了紙本審核存在、對客戶與櫃員沒有實際用途的欄位，讓填寫流程更精簡，也降低客戶重複填寫相同資料的負擔。',
    image: imgForm,
    alt:   '開戶申請基本資料表單截圖',
  },
  {
    title: '把拍照、簽名整合進同一段流程',
    desc:  '拍照跟簽名原本是紙本流程外的獨立動作，我把它們內嵌到 iPad 開戶流程裡，讓櫃員不需要切換工具或重新確認客戶身分，就能接續完成下一步。',
    image: imgDocuments,
    alt:   '開戶文件執行功能截圖',
  },
  {
    title: '加入送件狀態查詢，讓流程進度可被追蹤',
    desc:  '送出後不再是黑盒子，櫃員可以直接在系統查看案件目前卡在哪個審核階段，不需要再另外用電話或紙本詢問後台，也能主動回應客戶的進度詢問。',
    image: imgStatus,
    alt:   '案件審核進度查詢畫面截圖',
  },
]

const outcomes = [
  { role: '營業員',   desc: '不需要在紙本、拍照 App、系統之間來回切換，能更順暢地引導客戶完成開戶。' },
  { role: '客戶',   desc: '減少重複填寫相同資料的負擔，開戶流程更清楚。' },
  { role: '對作業流程', desc: '降低紙本錯誤，讓資料、附件與簽名更容易整合。' },
]

/* ── helpers ─────────────────────────────────────────── */

function NumberBadge({ n }: { n: number }) {
  return (
    <div className="relative shrink-0 size-[32px] md:size-[38px] 3xl:size-[50px]">
      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: ACCENT }} />
      <span className="absolute inset-0 flex items-center justify-center font-bold text-white
                       text-[15px] md:text-[18px] 3xl:text-[26px]">
        {n}
      </span>
    </div>
  )
}

export function SinotradePage() {
  return (
    <div className="w-full bg-white">

      {/* ── 1. Intro ────────────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pt-[40px] pb-[20px]
                           md:gap-[20px] md:pt-[50px]
                           3xl:pt-[50px]">
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="font-noto text-[#878787]
                     text-[14px] md:text-[18px] 3xl:text-[24px]">
          Process Redesign
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.08 }}
          className="font-noto-tc font-bold text-black
                     text-[22px] leading-[1.5]
                     md:text-[32px]
                     xl:text-[38px]
                     3xl:text-[48px]">
          證券開戶從「紙本填寫」轉為「專業且快速的數位服務體驗」，同時優化客戶安心感與櫃台作業效率
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
            { label: '專案時程', value: '2018.11 - 2019.01', font: 'font-noto' },
            { label: '專案角色', value: 'Product Designer',   font: 'font-noto' },
            { label: '負責項目', value: 'UX規劃、UI設計與交付、Html/CSS撰寫', font: 'font-noto-tc' },
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
          alt="數位開戶 iPad 產品示意圖"
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
          公司正在推動數位轉型，但開戶流程仍停留在紙本作業
        </motion.h2>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[16px] max-w-[1100px]">
          <p className="font-noto-tc text-black leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            傳統證券開戶流程高度仰賴紙本表單。客戶需要重複填寫相同資料，營業員也必須協助整理身分證件、附件、簽名與後續送件狀態。當資料分散在多份紙本與附件中，不只容易出錯，也讓案件進度難以追蹤。
          </p>
          <p className="font-noto-tc text-black leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            永豐金證券希望透過 iPad 開戶系統，讓營業員能協助客戶完成表單填寫、證件拍攝與電子簽名，並讓後續送件與審核流程更容易管理。
          </p>
          <p className="font-noto-tc text-black leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            把紙本表單搬到螢幕上很容易，真正困難的是先釐清複雜的欄位邏輯，再把它轉化為營業員能順利操作、客戶也能理解的數位流程。
          </p>
        </motion.div>
      </section>

      {/* ── 4. Counter Photo ───────────────────────────── */}
      <section className="section-px w-full pb-[40px] md:pb-[50px]">
        <motion.img
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          src={photoCounter}
          alt="營業員與客戶使用 iPad 進行開戶"
          className="block w-full object-cover
                     rounded-[16px] md:rounded-[24px]"
        />
      </section>

      {/* ── 5. Goals ───────────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[24px] md:pb-[50px]
                           3xl:gap-[30px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          專案目標
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-bold text-black
                     text-[18px] leading-[1.5]
                     md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
          將傳統紙本開戶流程轉化為一致且可執行的數位服務體驗
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9] max-w-[1100px]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          透過數位轉型，逐步取代紙本開戶流程，以 iPad 作為臨櫃開戶載體，提升開戶效率。紙本表單搬到數位介面只是最表面的改動，這個專案真正要做的是重新設計整體服務流程，讓客戶、櫃檯人員與後台審核都能在同一套流程中順利協作。
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#fafafa] flex flex-col gap-[12px] md:gap-[16px]
                     rounded-[16px] md:rounded-[24px]
                     p-[20px] md:p-[30px] xl:p-[40px]">
          {goals.map((goal) => (
            <div key={goal.title}
                 className="bg-white flex items-start gap-[8px]
                            rounded-[12px] md:rounded-[20px]
                            px-[16px] py-[14px] md:px-[24px] md:py-[18px] 3xl:px-[30px] 3xl:py-[20px]">
              <span className="shrink-0 text-black text-[14px] md:text-[18px] 3xl:text-[24px]">➤</span>
              <div className="flex flex-col gap-[2px] md:gap-[4px]">
                <p className="font-noto-tc font-bold text-black
                              text-[14px] md:text-[18px] 3xl:text-[24px]">
                  {goal.title}
                </p>
                <p className="font-noto-tc text-black leading-[1.6]
                              text-[13px] md:text-[15px] 3xl:text-[20px]">
                  {goal.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 6. Understanding Users ────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          了解使用者
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-bold text-black
                     text-[18px] leading-[1.5]
                     md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
          操作速度快不代表專業，真正決定專業感與快速感的，是流程節奏與角色分工。
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          我先與 PM 一起重新盤點整個開戶流程。
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          觀察營業員實際操作紙本流程後發現，「專業感」被打斷的關鍵時刻，多半發生在紙本、拍照與系統之間來回確認的當下，操作速度快慢反而不是重點——每一次切換，都是一次讓客戶感受到流程不順暢的機會。
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[8px]">
          <p className="font-noto-tc text-black leading-[1.8]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            <span className="font-semibold">① 研究紙本表單</span>：了解每份文件真正用途。
          </p>
          <p className="font-noto-tc text-black leading-[1.8]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            <span className="font-semibold">② 流程盤點</span>：把整個流程重新梳理過一次，不照搬紙本順序直接搬上 iPad。
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#fafafa] rounded-[16px] md:rounded-[24px]
                     px-[20px] py-[20px] md:px-[40px] md:py-[24px]">
          <p className="font-noto-tc text-black leading-[1.8] text-center
                        text-[13px] md:text-[16px] xl:text-[18px] 3xl:text-[24px]">
            客戶 → 確認身分 → 拍攝證件 → 填寫資料 → 電子簽名 → 送件 → 查詢送審
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[8px]">
          <p className="font-noto-tc text-black leading-[1.8]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            <span className="font-semibold">③ 定義角色</span>：我開始區分：客戶需要完成什麼？櫃員需要完成什麼？哪些事情可以由系統完成？
          </p>
          <p className="font-noto-tc text-black leading-[1.8]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            這讓後續流程有了重新設計的基礎。
          </p>
        </motion.div>
      </section>

      {/* ── 7. Problem Definition ─────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          問題定義
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-semibold text-black
                     text-[20px] leading-[1.5]
                     md:text-[28px] xl:text-[32px] 3xl:text-[44px]">
          真正的問題不是紙本，而是服務流程沒有被重新設計。
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          我整理出三個核心問題
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 gap-[12px]
                     md:grid-cols-3 md:gap-[16px]
                     3xl:gap-[20px]">
          {problems.map((p, i) => (
            <div key={p.title}
                 className="bg-[#fafafa] flex flex-col gap-[4px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              <div className="flex items-center gap-[8px]">
                <NumberBadge n={i + 1} />
                <p className="font-noto-tc font-medium text-black flex-1
                              text-[15px] md:text-[18px] 3xl:text-[28px]">
                  {p.title}
                </p>
              </div>
              <p className="font-noto-tc text-black leading-[1.6]
                            pl-[40px] text-[13px]
                            md:pl-[46px] md:text-[15px]
                            3xl:pl-[58px] 3xl:text-[20px]">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          因此，我將設計目標定義為：
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-semibold text-black
                     text-[16px] leading-[1.5]
                     md:text-[22px] xl:text-[26px] 3xl:text-[36px]">
          「重新設計的對象是開戶流程，不是表單本身。」
        </motion.p>
      </section>

      {/* ── 8. Design Principles ──────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          設計原則
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          根據上述問題，我建立了三個設計原則。
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[12px] md:gap-[16px]">
          {principles.map((p, i) => (
            <div key={p.title}
                 className="bg-[#fafafa] flex flex-col gap-[4px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              <div className="flex items-center gap-[8px]">
                <NumberBadge n={i + 1} />
                <p className="font-noto-tc font-medium text-black flex-1
                              text-[15px] md:text-[18px] 3xl:text-[28px]">
                  {p.title}
                </p>
              </div>
              <p className="font-noto-tc text-black leading-[1.6]
                            pl-[40px] text-[13px]
                            md:pl-[46px] md:text-[15px]
                            3xl:pl-[58px] 3xl:text-[20px]">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 9. Design Decisions ───────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          設計決策
        </motion.p>

        <div className="flex flex-col gap-[40px] md:gap-[50px]">
          {decisions.map((d) => (
            <div key={d.title} className="flex flex-col gap-[12px] md:gap-[16px]">
              <motion.p
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="font-noto-tc font-semibold text-black
                           text-[16px] leading-[1.5]
                           md:text-[22px] xl:text-[26px] 3xl:text-[36px]">
                {d.title}
              </motion.p>
              <motion.p
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="font-noto-tc text-black leading-[1.9]
                           text-[14px] md:text-[17px] 3xl:text-[22px]">
                {d.desc}
              </motion.p>
              {d.image && (
                <motion.div
                  variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-[#fafafa] flex items-center justify-center
                             rounded-[16px] md:rounded-[24px]
                             p-[16px] md:p-[24px] xl:p-[32px]">
                  <img
                    src={d.image}
                    alt={d.alt}
                    className="block w-full max-w-[900px] rounded-[8px] md:rounded-[12px]"
                  />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 10. Outcomes ───────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-semibold text-black
                     text-[18px] leading-[1.5]
                     md:text-[24px] xl:text-[28px] 3xl:text-[36px]">
          整合後的服務流程，對三個角色都帶來改善
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 gap-[12px]
                     md:grid-cols-3 md:gap-[16px]
                     3xl:gap-[20px]">
          {outcomes.map((o) => (
            <div key={o.role}
                 className="bg-[#fafafa] flex flex-col gap-[4px]
                            rounded-[12px] md:rounded-[20px]
                            px-[24px] py-[18px] md:px-[40px] md:py-[24px] 3xl:px-[50px] 3xl:py-[30px]">
              <p className="font-noto-tc font-medium text-black
                            text-[16px] md:text-[22px] 3xl:text-[32px]">
                {o.role}
              </p>
              <p className="font-noto-tc text-black leading-[1.6]
                            text-[13px] md:text-[16px] 3xl:text-[24px]">
                {o.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 11. Reflection ───────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[80px]
                           md:gap-[20px] md:pb-[100px]
                           3xl:gap-[24px] 3xl:pb-[120px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#878787]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          學習與反思
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          這個專案讓我更確定一件事：把紙本數位化，重新設計的核心是「人與流程」的關係，畫面從紙本換成螢幕只是表面。
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          如果重新設計一次，我會把送件狀態查詢提早納入第一版原型，不要等到後期才補上。對營業員來說，「知道案件進度」跟「完成填寫」一樣重要，兩者原本應該在同一輪研究裡一起被驗證。
        </motion.p>
      </section>

    </div>
  )
}
