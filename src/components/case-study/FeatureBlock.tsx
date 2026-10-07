import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Tag } from '@/components/ui/Tag'
import { ACCENT, reveal, smallText } from './tokens'
import type { Detail, Feature, FlowRow } from './types'

// 結果色塊：一句話講這個決策帶來什麼，樣式與 QuestionBubble 相同（紫底白字、左下角小圓角）
function ResultPill({ children }: { children: ReactNode }) {
  return (
    <p className="inline-block self-start
                  font-noto-tc font-semibold text-white text-[18px] leading-[1.6]
                  px-[18px] py-[12px] rounded-[28px_28px_28px_4px]"
       style={{ backgroundColor: ACCENT }}>
      {children}
    </p>
  )
}

// 原本 vs 改版對照卡片：原本灰色 ✦，改版紫色 ✦ 加紫框
function CompareCards({ before, after }: Pick<Feature, 'before' | 'after'>) {
  return (
    <div className="grid grid-cols-1 gap-[12px] md:grid-cols-2 md:gap-[20px]">
      {[
        { ...before, highlight: false },
        { ...after,  highlight: true  },
      ].map((card) => (
        <div key={card.title}
             className={`flex flex-col gap-[12px] rounded-[16px] md:rounded-[24px] p-[20px] md:p-[32px] border
                         ${card.highlight ? 'bg-white' : 'bg-[#fafafa] border-transparent'}`}
             style={card.highlight ? { borderColor: `${ACCENT}66` } : undefined}>
          <p className="font-noto-tc font-bold text-black text-[16px] md:text-[20px] 3xl:text-[26px]">
            {card.title}
          </p>
          <ul className="flex flex-col gap-[8px]">
            {card.points.map((pt) => (
              <li key={pt} className={`${smallText} flex gap-[8px]`}>
                <span aria-hidden="true" style={{ color: card.highlight ? ACCENT : '#b3b3b3' }}>✦</span>
                {pt}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// 路徑膠囊：原本灰白、改版實心紫，步驟之間用 › 連接
function FlowChips({ before, after }: { before: FlowRow; after: FlowRow }) {
  return (
    <div className="flex flex-col gap-[16px]">
      {[
        { ...before, highlight: false },
        { ...after,  highlight: true  },
      ].map((row) => (
        <div key={row.label} className="flex flex-col gap-[8px]">
          <p className="font-noto-tc font-bold text-[13px] md:text-[14px]"
             style={{ color: row.highlight ? ACCENT : '#767676' }}>
            {row.label}
          </p>
          {/* ol 讓螢幕閱讀器知道這是有順序的步驟 */}
          <ol className="flex flex-wrap items-center gap-x-[6px] gap-y-[8px]">
            {row.steps.map((s, i) => (
              <li key={s.step} className="flex items-center gap-[6px]">
                <span className={`rounded-full font-noto-tc px-[14px] py-[7px] text-[13px] md:text-[15px]
                                  ${row.highlight ? 'text-white' : 'bg-white text-black border border-[#e2e5eb]'}`}
                      style={row.highlight ? { backgroundColor: ACCENT } : undefined}>
                  {s.step}
                  {s.role && <span className="opacity-70 text-[11px] md:text-[12px]">｜{s.role}</span>}
                </span>
                {i < row.steps.length - 1 && (
                  <span aria-hidden="true" className="text-[#b3b3b3]">›</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

// 兩欄表格：第一欄粗體，標題列用紫色小字
function DetailTable({ head, rows }: { head: [string, string]; rows: [string, string][] }) {
  return (
    <div className="bg-[#fafafa] rounded-[16px] md:rounded-[24px] px-[20px] py-[12px] md:px-[32px] md:py-[20px]">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="font-noto-tc font-bold py-[10px] text-[12px] md:text-[14px]"
                  style={{ color: ACCENT }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b]) => (
            <tr key={a} className="border-t border-[#e2e5eb]">
              <td className={`${smallText} font-medium py-[12px] pr-[16px] align-top`}>{a}</td>
              <td className={`${smallText} py-[12px] align-top`}>{b}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// 圖片對照：兩張圖合在同一個灰色色塊裡，中間用線分開（同 Outcome 成功條件的做法）
// 外層灰底留 20px 讓分隔線不碰到邊緣；內層用分隔線顏色當底，格子間留 1px 就成了分隔線
function ImageCompare({ before, after }: Extract<Detail, { kind: 'imageCompare' }>) {
  return (
    <div className="bg-[#fafafa] rounded-[16px] md:rounded-[24px] p-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e5eb]">
      {[before, after].map((img, i) => (
        <figure key={img.label}
                className="bg-[#fafafa] flex flex-col items-center gap-[12px]
                           p-[20px] md:p-[32px]">
          <figcaption className="font-noto-tc font-bold text-[14px] md:text-[16px]"
                      style={{ color: i === 1 ? ACCENT : '#767676' }}>
            {img.label}
          </figcaption>
          <img src={img.src} alt={img.alt}
               className="block w-full max-w-[480px] rounded-[8px] md:rounded-[12px]" />
        </figure>
      ))}
      </div>
    </div>
  )
}

// 補充細節：小標 + 說明 + 依 kind 挑呈現方式
function FeatureDetail({ detail }: { detail: Detail }) {
  return (
    <div className="flex flex-col gap-[12px] md:gap-[16px]">
      <h4 className="font-noto-tc font-bold text-black leading-[1.5]
                     text-[16px] md:text-[22px] 3xl:text-[30px]">
        {detail.title}
      </h4>
      {detail.desc && <p className={smallText}>{detail.desc}</p>}
      {detail.kind === 'table'        && <DetailTable head={detail.head} rows={detail.rows} />}
      {detail.kind === 'flow'         && <FlowChips before={detail.before} after={detail.after} />}
      {detail.kind === 'imageCompare' && <ImageCompare {...detail} />}
      {detail.kind === 'image'        && (
        // 灰色色塊當背景，圖片本身不加框線
        <div className="bg-[#fafafa] rounded-[16px] md:rounded-[24px] p-[20px] md:p-[40px]">
          <img src={detail.src} alt={detail.alt}
               className={`block w-full mx-auto rounded-[8px] md:rounded-[12px]
                           ${detail.portrait ? 'max-w-[520px]' : 'max-w-[900px]'}`} />
        </div>
      )}
    </div>
  )
}

// 一個 Feature：標籤 + 標題 + 脈絡 + 結果色塊 → 對照卡片 → 補充細節
export function FeatureBlock({ feature: f, first }: { feature: Feature; first: boolean }) {
  return (
    <article className={`flex flex-col gap-[24px] md:gap-[32px]
                         ${first ? '' : 'border-t border-[#d9d9d9] mt-[48px] pt-[48px] md:mt-[72px] md:pt-[72px]'}`}>

      <motion.div {...reveal} className="flex flex-col gap-[12px] md:gap-[16px]">
        <Tag label={f.label} className="self-start bg-white border-[#7718D6] text-[#7718D6]" />
        <h3 className="font-noto-tc font-bold text-black leading-[1.5]
                       text-[18px] md:text-[26px] xl:text-[30px] 3xl:text-[40px]">
          {f.title}
        </h3>
        <p className="font-noto-tc text-[#444] leading-[1.9] max-w-[1100px]
                      text-[14px] md:text-[17px] 3xl:text-[22px]">
          {f.context}
        </p>
        <ResultPill>{f.result}</ResultPill>
      </motion.div>

      <motion.div {...reveal}>
        <CompareCards before={f.before} after={f.after} />
      </motion.div>

      {f.details.map((d) => (
        <motion.div key={d.title} {...reveal} className="mt-[8px] md:mt-[16px]">
          <FeatureDetail detail={d} />
        </motion.div>
      ))}
    </article>
  )
}
