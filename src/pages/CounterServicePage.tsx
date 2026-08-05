import { motion } from 'framer-motion'
import heroTablet     from '@/assets/images/wdopa/hero-tablet.png'
import screenCall     from '@/assets/images/wdopa/screen-callnumber.png'
import photoResearch  from '@/assets/images/wdopa/photo-research.png'
import screenDoc      from '@/assets/images/wdopa/screen-document.png'
import screenSign     from '@/assets/images/wdopa/screen-signature.png'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

/* ── tiny helpers ───────────────────────────────────────── */

function StepNum({ n }: { n: number }) {
  return (
    <div className="relative shrink-0 size-[24px] md:size-[28px] 3xl:size-[42px]">
      <div className="absolute inset-0 rounded-full bg-[#12A296]" />
      <span className="absolute inset-0 flex items-center justify-center font-bold text-white
                       text-[15px] md:text-[18px] 3xl:text-[28px]">
        {n}
      </span>
    </div>
  )
}

function SwitchBadge() {
  return (
    <div className="absolute right-[57%] bottom-0 translate-y-1/2 z-10">
      <span className="bg-[#ffecec] text-[#b01b1b] rounded-full
                       px-[12px] py-[6px] text-[13px]
                       md:px-[16px] md:py-[8px] md:text-[16px]
                       3xl:px-[20px] 3xl:py-[10px] 3xl:text-[20px]">
        ↪ 切換系統
      </span>
    </div>
  )
}

/* ── current-state step data ────────────────────────────── */

const currentSteps = [
  { label: '預約查詢',       switchAfter: false },
  { label: '切換叫號系統',   switchAfter: true  },
  { label: '確認民眾資料',   switchAfter: true  },
  { label: '拍攝文件',       switchAfter: false },
  { label: '確認文件是否完成', switchAfter: true },
  { label: '開啟簽名流程',   switchAfter: true  },
  { label: '完成服務',       switchAfter: false },
]

/* ── main component ─────────────────────────────────────── */

export function CounterServicePage() {
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
                     text-[14px] md:text-[18px] 3xl:text-[24px]"
        >
          Operational System
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.08 }}
          className="font-noto-tc font-bold text-black
                     text-[22px] leading-[1.5]
                     md:text-[32px]
                     xl:text-[38px]
                     3xl:text-[48px]"
        >
          將分散的櫃台服務流程，整合為一段可被執行的服務體驗
        </motion.h1>

        <div className="h-px w-full bg-[#d9d9d9]" />

        {/* Meta row */}
        <div className="flex flex-col gap-[12px] md:flex-row md:gap-[60px] 3xl:gap-[100px]
                        font-noto text-[13px] md:text-[16px] 3xl:text-[20px]">
          {[
            { label: '專案時程', value: '2025.11 – 2026.01' },
            { label: '專案角色', value: 'Product Designer'  },
            { label: '負責項目', value: '流程定義、服務流程規劃、UI/UX 設計、設計交付' },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-[4px]">
              <span className="text-[#878787]">{label}</span>
              <span className="font-semibold text-black">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── 2. Hero Image ───────────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="w-full"
      >
        <img
          src={heroTablet}
          alt="系統介面總覽"
          className="w-full object-cover
                     h-[260px] md:h-[400px] xl:h-[480px] 3xl:h-[550px]"
        />
      </motion.section>

      {/* ── 3. Problem Statement ────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="section-px flex flex-col
                   gap-[16px] pt-[60px] pb-[30px]
                   md:gap-[20px] md:pt-[80px] md:pb-[40px]
                   3xl:pt-[100px] 3xl:pb-[50px]"
      >
        <h2 className="font-poppins font-semibold text-black
                       text-[18px] leading-[1.5]
                       md:text-[24px]
                       xl:text-[28px]
                       3xl:text-[36px]">
          如何讓櫃台人員在服務民眾時，不需要在多個系統之間來回切換？
        </h2>
        <p className="font-noto-tc text-black leading-[1.8]
                      text-[14px] md:text-[16px] xl:text-[18px] 3xl:text-[24px]
                      3xl:leading-[36px]">
          預約查詢、叫號管理、文件拍攝與電子簽名，雖然各自能正常運作，但彼此缺乏流程連結。
          系統提供的是功能，但櫃員真正需要的是流程。
        </p>
      </motion.section>

      {/* ── 4. Research Photo ───────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="section-px w-full"
      >
        <img
          src={photoResearch}
          alt="就業服務中心實地觀察"
          className="block w-full max-w-[1100px] mx-auto object-cover rounded-[24px]
                     h-[200px] md:h-[340px] xl:h-[420px] 3xl:h-[500px]"
        />
      </motion.section>

      {/* ── 5. Research Findings ────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pt-[40px] pb-[30px]
                           md:gap-[20px] md:pt-[50px]
                           3xl:pt-[50px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-semibold text-black
                     text-[18px] md:text-[24px] xl:text-[28px] 3xl:text-[36px]"
        >
          在設計之前，我想先理解櫃員如何完成一次服務
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.8]
                     text-[14px] md:text-[16px] xl:text-[18px] 3xl:text-[24px]
                     3xl:leading-[36px]"
        >
          訪談櫃台服務人員與主管，理解實際工作流程、常見問題與系統使用情況。
          觀察櫃員從報到到服務完成的過程，記錄系統切換、等待時間與重複操作。
        </motion.p>

        {/* 3 finding cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] 3xl:gap-[20px]">
          {[
            { n: 1, title: '櫃員的工作被系統切碎', desc: '服務流程跨越多套系統，必須依靠人工串接。' },
            { n: 2, title: '流程仰賴經驗記憶',     desc: '系統沒有引導下一步，新人學習成本高。' },
            { n: 3, title: '文件處理最容易中斷流程', desc: '文件拍攝與電子簽名經常造成流程跳轉。' },
          ].map(({ n, title, desc }, i) => (
            <motion.div
              key={n}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#fafafa] rounded-[16px] md:rounded-[20px]
                         p-[20px] md:p-[24px] 3xl:p-[30px]
                         flex flex-col gap-[4px]"
            >
              <div className="flex items-center gap-[10px]">
                <StepNum n={n} />
                <p className="font-poppins font-medium text-black
                               text-[15px] md:text-[18px] 3xl:text-[28px]">
                  {title}
                </p>
              </div>
              <p className="font-noto-tc text-black leading-[1.7]
                             text-[13px] md:text-[15px] 3xl:text-[24px]
                             3xl:leading-[36px]
                             pl-[34px] md:pl-[38px] 3xl:pl-[52px]">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 6. Current State Analysis ───────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] py-[40px]
                           md:gap-[20px] md:py-[50px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-semibold text-black
                     text-[18px] md:text-[24px] xl:text-[28px] 3xl:text-[36px]"
        >
          我先盤點的不是功能，而是現有的服務斷點
        </motion.h2>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#fafafa] rounded-[16px] md:rounded-[24px]
                     p-[20px] md:p-[30px] xl:p-[40px] 3xl:px-[60px] 3xl:py-[40px]
                     flex flex-col gap-[12px] md:gap-[16px]"
        >
          <p className="text-right font-poppins text-black
                         text-[13px] md:text-[16px] 3xl:text-[24px]">
            目前現況（<strong className="text-[16px] md:text-[20px] 3xl:text-[30px]">7</strong>
            {' 步驟 · '}
            <strong className="text-[16px] md:text-[20px] 3xl:text-[30px]">4</strong>
            {' 次切換）'}
          </p>

          <div className="flex flex-col gap-[8px] md:gap-[12px]">
            {currentSteps.map(({ label, switchAfter }, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-[12px] md:rounded-[16px] 3xl:rounded-[20px]
                                 flex items-center gap-[12px] md:gap-[16px]
                                 px-[16px] py-[12px] md:px-[24px] md:py-[16px]
                                 3xl:px-[30px] 3xl:py-[20px]">
                  <StepNum n={i + 1} />
                  <span className="font-noto-tc text-black
                                    text-[14px] md:text-[18px] 3xl:text-[24px]">
                    {label}
                  </span>
                </div>
                {switchAfter && <SwitchBadge />}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-bold text-[#12a296] leading-[1.6]
                     text-[16px] md:text-[22px] xl:text-[26px] 3xl:text-[36px]
                     3xl:leading-[36px]"
        >
          問題不在於功能不足，而在於服務流程被系統切碎
        </motion.p>
      </section>

      {/* ── 7. Design Direction ─────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-semibold text-black
                     text-[18px] md:text-[24px] xl:text-[28px] 3xl:text-[36px]"
        >
          我如何定義設計方向
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] 3xl:gap-[20px]">
          {['減少系統切換', '讓流程保持連續', '降低記憶負擔'].map((dir, i) => (
            <motion.div
              key={dir}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#fafafa] rounded-[16px] md:rounded-[20px]
                         p-[20px] md:p-[24px] 3xl:p-[30px]
                         flex items-center justify-center"
            >
              <p className="font-poppins font-medium text-black text-center
                             text-[16px] md:text-[20px] 3xl:text-[28px]">
                {dir}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 8. Solutions ────────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-semibold text-black
                     text-[18px] md:text-[24px] xl:text-[28px] 3xl:text-[36px]"
        >
          將功能整合成服務流程
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-black leading-[1.8]
                     text-[14px] md:text-[16px] xl:text-[18px] 3xl:text-[24px]"
        >
          本專案最重要的設計決策是：不再以功能模組設計系統，而是以櫃台服務流程設計系統。
        </motion.p>

        <div className="flex flex-col gap-[16px] md:gap-[20px]">
          {[
            {
              n: 1,
              title: '預約、報到與叫號流程整合',
              desc:  '直接由預約資訊啟動服務流程，降低跨系統切換成本。',
              img:   screenCall,
              alt:   '叫號整合系統介面',
            },
            {
              n: 2,
              title: '整合文件拍攝流程',
              desc:  '將文件拍攝嵌入主服務流程的視窗，櫃員無需切換至外接視窗，拍攝完成自動更新文件狀態。',
              img:   screenDoc,
              alt:   '文件拍攝介面',
            },
            {
              n: 3,
              title: '整合電子簽名流程',
              desc:  '整合電子簽名作為服務完成的自然結尾，簽名完成即服務完成，降低櫃員主動記憶下一步驟的負擔。',
              img:   screenSign,
              alt:   '電子簽名介面',
            },
          ].map(({ n, title, desc, img, alt }, i) => (
            <motion.div
              key={n}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="bg-[#fafafa] rounded-[16px] md:rounded-[20px]
                         p-[20px] md:p-[24px] xl:p-[30px]
                         flex flex-col gap-[16px] md:gap-[20px]"
            >
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-[10px]">
                  <StepNum n={n} />
                  <p className="font-poppins font-medium text-black
                                 text-[15px] md:text-[20px] 3xl:text-[28px]">
                    {title}
                  </p>
                </div>
                <p className="font-noto-tc text-black leading-[1.8]
                               text-[13px] md:text-[15px] 3xl:text-[24px]
                               3xl:leading-[36px] pl-[34px] md:pl-[38px] 3xl:pl-[52px]">
                  {desc}
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={img}
                  alt={alt}
                  className="w-full max-w-[800px] 3xl:max-w-[1150px]
                             rounded-[8px] mix-blend-multiply
                             object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 9. Outcome ──────────────────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[20px] pb-[40px]
                           md:gap-[24px] md:pb-[50px]">
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-semibold text-black
                     text-[18px] md:text-[24px] xl:text-[28px] 3xl:text-[36px]"
        >
          整合後的服務流程，對三個角色都帶來改變
        </motion.h2>

        {/* Outcome banner */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="bg-[#12a296] rounded-[16px] md:rounded-[24px]
                     px-[20px] py-[20px]
                     md:px-[40px] md:py-[24px]
                     3xl:px-[60px] 3xl:py-[30px]
                     flex flex-col gap-[8px]"
        >
          <p className="font-poppins font-medium text-white
                         text-[15px] md:text-[20px] 3xl:text-[32px]">
            成功將服務優化為 5 步驟、0 次系統切換
          </p>
          <p className="font-noto-tc text-white leading-[1.7]
                         text-[13px] md:text-[15px] 3xl:text-[24px]">
            櫃員進行測試能順利完成流程、不需額外說明、減少系統切換。
          </p>
        </motion.div>

        {/* 3 impact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] 3xl:gap-[20px]">
          {[
            {
              role:   '對櫃員',
              items:  ['減少系統切換成本', '降低認知負擔', '提升服務專注度'],
            },
            {
              role:   '對民眾',
              items:  ['降低等待與重複確認', '提升服務流暢度', '增加對服務流程的理解'],
            },
            {
              role:   '對組織',
              items:  ['建立一致化服務流程', '降低教育訓練成本', '提升櫃台服務效率'],
            },
          ].map(({ role, items }, i) => (
            <motion.div
              key={role}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#fafafa] rounded-[16px] md:rounded-[20px]
                         p-[20px] md:p-[24px] 3xl:p-[30px]
                         flex flex-col gap-[12px]"
            >
              <p className="font-poppins font-medium text-[#12a296]
                             text-[16px] md:text-[20px] 3xl:text-[28px]">
                {role}
              </p>
              <ul className="flex flex-col gap-[4px]">
                {items.map(item => (
                  <li key={item}
                      className="font-noto-tc text-black leading-[1.8]
                                  text-[13px] md:text-[15px] 3xl:text-[24px]
                                  3xl:leading-[48px]">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 10. Reflection ──────────────────────────────── */}
      <motion.section
        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="section-px flex flex-col
                   gap-[16px] pb-[60px]
                   md:gap-[20px] md:pb-[80px]
                   3xl:pb-[100px]"
      >
        <h2 className="font-poppins font-semibold text-black
                        text-[16px] leading-[1.7]
                        md:text-[20px]
                        xl:text-[24px]
                        3xl:text-[36px] 3xl:leading-[normal]">
          「服務流程的問題，往往不是因為缺少功能，而是因為功能之間缺少連結。」
        </h2>
        <div className="font-noto-tc text-black leading-[1.8]
                        text-[14px] md:text-[16px] xl:text-[18px] 3xl:text-[24px]
                        3xl:leading-[36px] flex flex-col gap-[8px]">
          <p>
            這個專案讓我重新思考設計師的角色——不只是設計畫面，而是透過流程定義與體驗設計，
            讓不同系統能共同支撐一段完整的服務。
          </p>
          <p>當系統開始引導流程時，人才能真正專注在服務本身。</p>
        </div>
      </motion.section>

    </div>
  )
}
