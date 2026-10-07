import { motion } from 'framer-motion'
import { Tag } from '@/components/ui/Tag'
import { ACCENT, fadeUp, reveal } from './tokens'
import { Body, NumberedCard, QuestionBubble, Section, SectionHeading, SectionLabel } from './primitives'
import { FeatureBlock } from './FeatureBlock'
import type { CaseStudyData } from './types'

// 案例頁範本：以永豐證券案為準，三個案例共用同一套段落順序與樣式
// Hero → Intro → Overview → Achievement → Problem → Challenge → Research
// → Insights → Strategy → Solution → Outcome → Reflection
export function CaseStudyTemplate({ data: d }: { data: CaseStudyData }) {
  return (
    <div className="w-full bg-white">

      {/* ── Hero Image（放在最上方，標題區在下）──────────── */}
      <section className="w-full">
        <img
          src={d.hero.src}
          alt={d.hero.alt}
          className="w-full object-cover
                     h-[240px] md:h-[400px] xl:h-[480px] 3xl:h-[550px]"
        />
      </section>

      {/* ── Intro：類別、標題、專案資訊 ──────────────────── */}
      <section className="section-px flex flex-col
                           gap-[16px] pt-[40px] pb-[80px]
                           md:gap-[20px]">
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          className="font-noto text-[#767676]
                     text-[14px] md:text-[18px] 3xl:text-[24px]">
          {d.category}
        </motion.p>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.08 }}
          className="font-noto-tc font-bold text-black
                     text-[22px] leading-[1.5]
                     md:text-[32px]
                     xl:text-[38px]
                     3xl:text-[48px]">
          {d.title}
        </motion.h1>

        <motion.div
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.12 }}
          className="flex flex-wrap gap-[24px] md:gap-[48px]">
          {d.meta.map(({ label, value, font = 'font-noto' }) => (
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

        {/* 標題區結尾的分隔線 */}
        <motion.hr
          variants={fadeUp} initial="hidden" animate="visible"
          transition={{ delay: 0.16 }}
          className="border-t border-[#d9d9d9] w-full mt-[8px] md:mt-[12px]" />
      </section>

      {/* ── Overview ─────────────────────────────────────── */}
      <Section>
        <SectionLabel>Overview</SectionLabel>
        <SectionHeading>{d.overview.heading}</SectionHeading>
        {d.overview.paragraphs.map((p) => <Body key={p}>{p}</Body>)}
      </Section>

      {/* ── Achievement：左邊成果卡片、右邊照片 ──────────── */}
      <Section>
        <SectionLabel>Achievement</SectionLabel>
        <SectionHeading>{d.achievement.heading}</SectionHeading>

        <div className={`grid grid-cols-1 gap-[12px] md:gap-[16px] 3xl:gap-[20px]
                         ${d.achievement.photo ? 'md:grid-cols-2' : ''}`}>
          <motion.div {...reveal}
            className="flex flex-col gap-[12px] md:gap-[16px] 3xl:gap-[20px]">
            {d.achievement.items.map((a, i) => (
              <NumberedCard key={a.title} n={i + 1} title={a.title} desc={a.desc} />
            ))}
          </motion.div>

          {d.achievement.photo && (
            <motion.img
              {...reveal}
              src={d.achievement.photo.src}
              alt={d.achievement.photo.alt}
              className={`block w-full self-start rounded-[12px] md:rounded-[20px]
                          ${d.achievement.photo.className ?? 'aspect-[4/3] object-cover'}`}
            />
          )}
        </div>
      </Section>

      {/* ── Problem：角色困境卡片 ────────────────────────── */}
      <Section>
        <SectionLabel>Problem</SectionLabel>
        <SectionHeading>{d.problem.heading}</SectionHeading>

        {/* 3 張卡片時排成三欄，避免「上 2 下 1」右下角空一塊 */}
        <motion.div {...reveal}
          className={`grid grid-cols-1 gap-[12px] md:gap-[16px] 3xl:gap-[20px]
                      ${d.problem.painPoints.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
          {d.problem.painPoints.map((p) => (
            <div key={p.title}
                 className="bg-[#fafafa] flex flex-col gap-[8px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              <Tag label={p.role}
                   className="self-start bg-white border-[#7718D6] text-[#7718D6]" />
              <p className="font-noto-tc font-bold text-black text-[24px]">
                {p.title}
              </p>
              <p className="font-noto-tc text-black leading-[1.7]
                            text-[13px] md:text-[15px] 3xl:text-[20px]">
                {p.desc}
              </p>
            </div>
          ))}
        </motion.div>

        {d.problem.summary && <Body>{d.problem.summary}</Body>}
      </Section>

      {/* ── Challenge ────────────────────────────────────── */}
      <Section>
        <SectionLabel>Challenge</SectionLabel>
        <SectionHeading>{d.challenge.heading}</SectionHeading>

        <motion.div {...reveal}
          className="flex flex-col gap-[12px] md:gap-[16px] 3xl:gap-[20px]">
          {d.challenge.items.map((c, i) => (
            <NumberedCard key={c.title} n={i + 1} title={c.title} desc={c.desc} />
          ))}
        </motion.div>
      </Section>

      {/* ── Research ─────────────────────────────────────── */}
      <Section>
        <SectionLabel>Research</SectionLabel>
        <SectionHeading>{d.research.heading}</SectionHeading>
        {d.research.paragraphs.map((p) => <Body key={p}>{p}</Body>)}

        {d.research.photo && (
          <motion.img {...reveal}
            src={d.research.photo.src}
            alt={d.research.photo.alt}
            className="block w-full object-cover rounded-[12px] md:rounded-[20px]
                       h-[200px] md:h-[340px] xl:h-[420px] 3xl:h-[500px]" />
        )}

        {d.research.figure && (
          <motion.div {...reveal} className="bg-[#fafafa] rounded-[16px] md:rounded-[24px] p-[20px] md:p-[40px]">
            <img src={d.research.figure.src} alt={d.research.figure.alt}
                 className="block w-full mx-auto rounded-[8px] md:rounded-[12px]" />
          </motion.div>
        )}

        {d.research.questionLead && <Body>{d.research.questionLead}</Body>}
        {d.research.question && <QuestionBubble>{d.research.question}</QuestionBubble>}
      </Section>

      {/* ── Insights ─────────────────────────────────────── */}
      <Section>
        <SectionLabel>Insights</SectionLabel>
        <SectionHeading>{d.insights.heading}</SectionHeading>
        {d.insights.intro && <Body>{d.insights.intro}</Body>}

        <motion.div {...reveal}
          className="flex flex-col gap-[12px] md:gap-[16px] 3xl:gap-[20px]">
          {d.insights.items.map((ins, i) => (
            <NumberedCard key={ins.title} n={i + 1} title={ins.title} desc={ins.desc} />
          ))}
        </motion.div>
      </Section>

      {/* ── Strategy：icon + 標題 + 一句說明，平板以上三張並排 ── */}
      <Section>
        <SectionLabel>Strategy</SectionLabel>
        <SectionHeading>{d.strategy.heading}</SectionHeading>
        {d.strategy.body && <Body>{d.strategy.body}</Body>}

        <motion.div {...reveal}
          className="grid grid-cols-1 gap-[12px]
                     md:grid-cols-3 md:gap-[16px]
                     3xl:gap-[20px]">
          {d.strategy.items.map((s) => (
            <div key={s.title}
                 className="bg-[#fafafa] flex flex-col items-center text-center gap-[8px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              {/* 紫色線條 icon，裝飾用，螢幕閱讀器略過 */}
              <s.icon aria-hidden="true" strokeWidth={1.75} color={ACCENT}
                      className="size-[28px] md:size-[32px] 3xl:size-[40px] mb-[4px]" />
              <p className="font-noto-tc font-bold text-black text-[24px]">
                {s.title}
              </p>
              <p className="font-noto-tc text-black leading-[1.7]
                            text-[13px] md:text-[15px] 3xl:text-[20px]">
                {s.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </Section>

      {/* ── Solution（參考 Joey Tseng 的 Design Feature）──── */}
      <Section>
        <SectionLabel>Solution</SectionLabel>
        <SectionHeading>{d.solution.heading}</SectionHeading>

        <div className="flex flex-col mt-[16px] md:mt-[24px]">
          {d.solution.features.map((f, i) => (
            <FeatureBlock key={f.title} feature={f} first={i === 0} />
          ))}
        </div>
      </Section>

      {/* ── Outcome：角色卡片 + 成功條件 ─────────────────── */}
      <Section>
        <SectionLabel>Outcome</SectionLabel>
        <SectionHeading>{d.outcome.heading}</SectionHeading>

        <motion.div {...reveal}
          className="grid grid-cols-1 gap-[12px]
                     md:grid-cols-3 md:gap-[16px]
                     3xl:gap-[20px]">
          {d.outcome.roles.map((o) => (
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

        {d.outcome.criteriaIntro && <Body>{d.outcome.criteriaIntro}</Body>}

        {/* 成功條件合成一塊：外層灰底留 20px，讓分隔線不碰到背景邊緣；
            內層用分隔線顏色當底，格子之間留 1px 縫隙，就成了分隔線 */}
        {d.outcome.criteria && (
          <motion.div {...reveal}
            className="bg-[#fafafa] rounded-[12px] md:rounded-[20px] p-[20px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e5eb]">
              {d.outcome.criteria.map((s) => (
                <div key={s.goal}
                     className="bg-[#fafafa] flex flex-col gap-[4px]
                                p-[20px] md:p-[24px] 3xl:p-[30px]">
                  <p className="font-noto-tc font-bold
                                text-[15px] md:text-[18px] 3xl:text-[26px]"
                     style={{ color: ACCENT }}>
                    <span aria-hidden="true">✦</span> {s.goal}
                  </p>
                  <p className="font-noto-tc text-black leading-[1.6]
                                text-[13px] md:text-[15px] 3xl:text-[20px]">
                    {s.looks}
                  </p>
                </div>
              ))}
              {/* 單數條時補一格空白：桌機上最後一條右邊才會有直線區隔，不會露出一格灰底；
                  手機是單欄，不需要補 */}
              {d.outcome.criteria.length % 2 === 1 && (
                <div aria-hidden="true" className="hidden md:block bg-[#fafafa]" />
              )}
            </div>
          </motion.div>
        )}
      </Section>

      {/* ── Reflection：✦ 卡片 ──────────────────────────── */}
      <Section>
        <SectionLabel>Reflection</SectionLabel>
        {d.reflection.intro && <Body>{d.reflection.intro}</Body>}

        <motion.div {...reveal} className="flex flex-col gap-[12px] md:gap-[16px]">
          {d.reflection.items.map((r) => (
            <div key={r.title}
                 className="bg-[#fafafa] flex items-start gap-[8px]
                            rounded-[12px] md:rounded-[20px]
                            p-[20px] md:p-[24px] 3xl:p-[30px]">
              <span aria-hidden="true" className="shrink-0 text-[14px] md:text-[18px] 3xl:text-[24px]"
                    style={{ color: ACCENT }}>✦</span>
              <div className="flex flex-col gap-[4px]">
                <p className="font-noto-tc font-medium text-black
                              text-[15px] md:text-[18px] 3xl:text-[28px]">
                  {r.title}
                </p>
                <p className="font-noto-tc text-black leading-[1.6]
                              text-[13px] md:text-[15px] 3xl:text-[20px]">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </Section>

    </div>
  )
}
