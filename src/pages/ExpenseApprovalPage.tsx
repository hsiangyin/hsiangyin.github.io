import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import heroTablet  from '@/assets/images/dasio/hero-tablet.jpg'
import photoDasio  from '@/assets/images/dasio/photo-dasio.png'
import imgDasio01  from '@/assets/images/dasio/img-dasio-01.png'
import imgDasio03  from '@/assets/images/dasio/img-dasio-03.png'
import imgDasio04  from '@/assets/images/dasio/img-dasio-04.png'
import imgDasio05  from '@/assets/images/dasio/img-dasio-05.png'

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const BADGE_ACCENT = '#7718d6'

const overview = [
  {
    title: 'Project Objective',
    desc:  '大創的費用申請流程完全仰賴紙本與 Excel，員工、主管、會計三個角色之間靠人工核對與口頭確認銜接。這個專案的目標，是把分散在紙本裡的審核邏輯，轉換成員工看得懂、會計也能直接串接既有會計系統的線上申請流程。',
  },
  {
    title: 'Role & Deliverables',
    desc:  '擔任 Product Designer，負責流程定義、UX 規劃與 UI 設計交付。因為沒有機會直接訪談員工與主管，我從 PM 轉述的需求與真實駁回紀錄裡，重新盤點費用申請、差旅申請共用的簽核邏輯，產出可直接交付開發的畫面與規格。',
  },
  {
    title: 'Challenges',
    desc:  '同一張差旅費申請單，店鋪員工跟其他部門員工的簽核層級完全不同，還要支援跨部門彈性簽核，並區分「串簽 / 會辦 / 擇辦 / 通知」四種簽核方式——這些都是既有的作業邏輯，設計沒辦法簡化掉，只能做成一套可設定的簽核引擎。',
  },
  {
    title: 'Outcomes & Impact',
    desc:  '費用申請、差旅申請整合進同一套線上簽核流程，附件跟著申請書走，不再靠私訊補件；核銷完成後系統直接產生傳票檔，會計不需要再把資料手動謄寫進會計系統一次。',
  },
]

const problems = [
  { title: '填單時得自己查匯率',           desc: '外幣費用申請沒有系統化的匯率來源，員工得自己上網查、手動填，金額很容易跟著算錯。' },
  { title: '發票漏傳，只能私訊補件',       desc: '送出申請後才發現缺附件，系統沒有補件通知機制，只能私訊員工確認，溝通成本高又耗時。' },
  { title: '會計手動核對金額，容易出錯又退件', desc: '單據到會計手上後，金額加總靠人工核對，算錯就得退件重送，員工跟會計都要重新來一次。' },
]

const challenges = [
  {
    title: '同單位不同角色，簽核層級完全不同',
    desc:  '差旅費申請單，店鋪員工要走「店長 → 區店或區主管 → 承辦人員 → 長官核決」，其他部門員工卻是「部門主管 → 承辦人員 → 長官核決」，兩條路徑沒辦法共用同一套固定簽核鏈。只能把「誰簽給誰」做成可依單位、依角色設定的簽核層級，而不是寫死在流程裡。',
  },
  {
    title: '不是每個簽核都一樣，也不能都用退回處理',
    desc:  '有些關卡是一關簽完才能給下一關的「串簽」，任何人都能退件；有些是多人同時收到、必須全部簽完才能往下走的「會辦」，不能退件；有些只需要其中一人執行的「擇辦」；還有純粹知會、不需簽核的「通知」。這四種邏輯都是既有的作業方式，設計上只能把它們變成清楚可辨識的狀態，不能簡化成單一流程。',
  },
]

const principles = [
  { title: '系統自動帶入已知資料', desc: '姓名、部門這類資料，系統原本就存在，避免讓使用者重複輸入。' },
  { title: '附件跟著申請書走',     desc: '資料的完整性不該建立在使用者記不記得補交上，而該建立在流程本身有沒有把它接住。' },
  { title: '公開審核進度',         desc: '員工跟主管能夠自行查看目前進度，不用再靠問的。' },
]

function NumberBadge({ n }: { n: number }) {
  return (
    <div className="relative shrink-0 size-[32px] md:size-[38px] 3xl:size-[50px]">
      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: BADGE_ACCENT }} />
      <span className="absolute inset-0 flex items-center justify-center font-bold text-white
                       text-[15px] md:text-[18px] 3xl:text-[26px]">
        {n}
      </span>
    </div>
  )
}

const designSections = [
  {
    title: '系統自動帶入已知資料',
    desc:  '姓名、部門這類系統本來就有的資料，不用員工每次申請都重新輸入，減少重複填寫，也減少手動輸入造成的資料落差。',
    image: imgDasio03,
    alt:   '系統自動帶入資料介面截圖',
  },
  {
    title: '附件跟著申請書走，取代私訊補件',
    desc:  '斷點 B 是發票漏傳，系統原本沒有通知機制，只能靠私訊員工確認。我把附件上傳直接放進申請書流程裡，缺件狀態能被看見，不用再另外私訊追問。',
    image: imgDasio04,
    alt:   '附件集中管理介面截圖',
  },
  {
    title: '簽核進度公開查詢，減少來回確認',
    desc:  '員工跟主管能直接查看單據卡在哪個簽核關卡、誰還沒處理，不用再靠問的來確認進度。',
    image: imgDasio05,
    alt:   '申請書審核進度介面截圖',
  },
]

const outcomeRoles = [
  { role: '員工', desc: '不用自己查匯率、算金額，也不用因為缺發票被私訊追問，理解成本降低。' },
  { role: '主管', desc: '能直接看到單據卡在哪一關、誰還沒簽，不用再問人才能掌握進度。' },
  { role: '會計', desc: '金額由系統計算，減少人工核對出錯；核銷完成後直接產生傳票檔，不用再把資料手動輸入會計系統一次。' },
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
          className="font-noto text-[#767676]
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
              <p className="font-noto text-[#767676]
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

      {/* ── 2.5 Project Overview ──────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pt-[40px] pb-[20px]
                           md:gap-[20px] md:pt-[50px] md:pb-[30px]
                           3xl:pt-[64px] 3xl:pb-[40px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          專案總覽
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 gap-[12px]
                     md:grid-cols-2 md:gap-[16px]
                     3xl:gap-[20px]">
          {overview.map((o, i) => (
            <div key={o.title}
                 className="bg-[#fafafa] flex flex-col gap-[8px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              <div className="flex items-center gap-[10px]">
                <span className="font-poppins font-bold
                                  text-[15px] md:text-[18px] 3xl:text-[26px]"
                      style={{ color: BADGE_ACCENT }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-poppins font-medium text-black
                              text-[15px] md:text-[18px] 3xl:text-[26px]">
                  {o.title}
                </p>
              </div>
              <p className="font-noto-tc text-[#555] leading-[1.7]
                            text-[13px] md:text-[15px] 3xl:text-[20px]">
                {o.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 3. Background ─────────────────────────────── */}
      <section id="problem" className="section-px flex flex-col
                           scroll-mt-[110px] md:scroll-mt-[125px] 3xl:scroll-mt-[160px]
                           gap-[12px] py-[40px]
                           md:gap-[16px] md:py-[50px]
                           3xl:gap-[20px] 3xl:py-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
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
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[16px] max-w-[1100px]">
          <p className="font-noto-tc text-[#555] leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            大創百貨的費用申請涉及員工、主管與會計三種角色：員工提出申請，主管負責審核，會計則進行核銷與入帳。過去這套流程完全仰賴紙本、Excel 與人工核對——員工手寫或填 Excel 申請單，主管簽核，會計逐筆核對金額與附件、手動輸入會計系統完成入帳。
          </p>
          <p className="font-noto-tc text-[#555] leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            這種仰賴人工核對與重複輸入的流程，隨著申請量增加，負擔也跟著放大：資料缺漏、金額對不上、格式不一致的情況頻繁發生，會計端得花大量時間去補流程本身的漏洞，員工跟主管之間也常常為了確認一筆申請的狀態而反覆溝通。而對會計來說，最直接的痛點是——每一筆申請核銷完後，還要再手動把資料輸入會計系統一次，等於同一份資料被處理兩次。這正是這個專案的起點：會計希望新系統能直接串接既有的會計系統，讓核銷完成後資料能自動同步，不需要再手動謄寫一次，藉此減少工作負擔。
          </p>
        </motion.div>
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
      <section id="research" className="section-px flex flex-col
                           scroll-mt-[110px] md:scroll-mt-[125px] 3xl:scroll-mt-[160px]
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
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
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[16px] max-w-[1100px]">
          <p className="font-noto-tc text-[#555] leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            這個專案沒有機會訪談員工跟主管，所有的需求都是透過 PM 轉述會計跟主管的期待。這是我要面對的第一個限制：沒有第一手訪談，該怎麼讓每個判斷都站得住腳，才不會只是把轉述的需求直接畫成畫面交件。
          </p>
          <p className="font-noto-tc text-[#555] leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            我請 PM 把過去的紙本申請單跟駁回紀錄找出來，讓真實發生過的錯誤，而不是我的猜測，告訴我使用者卡在哪裡。把這些紀錄畫回流程圖上後，問題不再是模糊的「不好用」，而是流程上三個明確會卡住的位置。
          </p>
          <p className="font-noto-tc font-semibold text-black
                        text-[16px] leading-[1.5]
                        md:text-[22px] xl:text-[26px] 3xl:text-[36px]">
            「把會計腦中的判斷邏輯，翻譯成員工不需要學習就能理解的語言。」
          </p>
        </motion.div>
      </section>

      {/* ── 5a. Problem Definition ─────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          問題定義
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-semibold text-black
                     text-[20px] leading-[1.5]
                     md:text-[28px] xl:text-[32px] 3xl:text-[44px]">
          流程圖上有三個實際發生過的斷點
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          我把過去的駁回紀錄對回流程圖，抓出三個具體的斷點。
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
              <p className="font-noto-tc text-[#555] leading-[1.6]
                            pl-[40px] text-[13px]
                            md:pl-[46px] md:text-[15px]
                            3xl:pl-[58px] 3xl:text-[20px]">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.img
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          src={imgDasio01}
          alt="費用申請流程圖，標註出三個實際發生的斷點 A、B、C"
          className="block w-full"
        />

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          三個斷點擺在一起看，方向很清楚：
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc font-semibold text-black
                     text-[16px] leading-[1.5]
                     md:text-[22px] xl:text-[26px] 3xl:text-[36px]">
          「先讓斷點消失，而不是先讓畫面變好看。」
        </motion.p>
      </section>

      {/* ── 5b. Design Principles ─────────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          設計原則
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9]
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
              <p className="font-noto-tc text-[#555] leading-[1.6]
                            pl-[40px] text-[13px]
                            md:pl-[46px] md:text-[15px]
                            3xl:pl-[58px] 3xl:text-[20px]">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 5c. Challenges & Trade-offs ────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pb-[40px]
                           md:gap-[20px] md:pb-[50px]
                           3xl:gap-[24px] 3xl:pb-[64px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          挑戰與取捨
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto-tc text-[#555] leading-[1.9]
                     text-[14px] md:text-[17px] 3xl:text-[22px]">
          有些複雜是可以簡化的，有些是組織原本就存在的規則，設計只能想辦法把它變得清楚，不能假裝它不存在。
        </motion.p>

        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[12px] md:gap-[16px]">
          {challenges.map((c) => (
            <div key={c.title}
                 className="bg-[#fafafa] flex items-start gap-[8px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              <span className="shrink-0 text-black text-[14px] md:text-[18px] 3xl:text-[24px]">➤</span>
              <div className="flex flex-col gap-[4px]">
                <p className="font-noto-tc font-medium text-black
                              text-[15px] md:text-[18px] 3xl:text-[28px]">
                  {c.title}
                </p>
                <p className="font-noto-tc text-[#555] leading-[1.6]
                              text-[13px]
                              md:text-[15px]
                              3xl:text-[20px]">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 6. Design Decisions label ─────────────────── */}
      <section id="solutions" className="section-px flex flex-col scroll-mt-[110px] pt-[8px] pb-[8px] md:scroll-mt-[125px] md:pt-[12px] 3xl:scroll-mt-[160px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          設計決策
        </motion.p>
      </section>

      {/* ── 7–10. Design Sections ─────────────────────── */}
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
            <p className="font-noto-tc text-[#555] leading-[1.9] max-w-[1100px]
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
      <section id="outcome" className="section-px flex flex-col
                           scroll-mt-[110px] md:scroll-mt-[125px] 3xl:scroll-mt-[160px]
                           gap-[20px] pb-[48px]
                           md:gap-[28px] md:pb-[64px]
                           3xl:gap-[36px] 3xl:pb-[80px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          設計成效
        </motion.p>

        {/* Role outcome cards */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-1 gap-[16px]
                     md:grid-cols-3 md:gap-[20px]
                     3xl:gap-[28px]">
          {outcomeRoles.map(({ role, desc }) => (
            <div key={role}
                 className="bg-[#fafafa] flex flex-col gap-[4px]
                            rounded-[12px] md:rounded-[20px]
                            px-[24px] py-[18px] md:px-[40px] md:py-[24px] 3xl:px-[50px] 3xl:py-[30px]">
              <p className="font-noto-tc font-medium text-black
                            text-[16px] md:text-[22px] 3xl:text-[32px]">
                {role}
              </p>
              <p className="font-noto-tc text-black leading-[1.6]
                            text-[13px] md:text-[16px] 3xl:text-[24px]">
                {desc}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 11. Reflection ───────────────────────────── */}
      <section id="reflection" className="section-px flex flex-col
                           scroll-mt-[110px] md:scroll-mt-[125px] 3xl:scroll-mt-[160px]
                           gap-[16px] pb-[80px]
                           md:gap-[20px] md:pb-[100px]
                           3xl:gap-[24px] 3xl:pb-[120px]">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-noto text-[#767676]
                     text-[13px] md:text-[16px] 3xl:text-[20px]">
          學習與反思
        </motion.p>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="font-poppins font-bold text-black leading-[1.7]
                     text-[16px] md:text-[22px] xl:text-[26px] 3xl:text-[36px]">
          「企業內部系統的價值，不只在於提升效率，更在於讓跨部門協作建立共同語言。」
        </motion.p>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex flex-col gap-[16px] max-w-[1100px]">
          <p className="font-noto-tc text-[#555] leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            這個專案讓我理解，需求來源不一定是最終使用者。設計師需要同時理解員工的操作需求、主管的決策需求，以及會計的規則需求，才能建立真正可被執行的服務流程——而多數時候，以為是某個角色能力不足，其實是沒有人把背後的專業邏輯翻譯給其他角色，才是卡住流程的真正原因。
          </p>
          <p className="font-noto-tc text-[#555] leading-[1.9]
                        text-[14px] md:text-[17px] 3xl:text-[22px]">
            也因為沒有機會直接訪談，我換了一種方式去驗證這件事：回頭看真實發生過的駁回紀錄，比起問「你覺得怎麼樣」，這樣的答案更站得住腳。這個限制反而讓我學到一個更重要的分工——不是所有問題都要靠我自己挖出來。
          </p>
        </motion.div>
      </section>

    </div>
  )
}
