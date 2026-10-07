import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

// 標題 + 說明，Achievement、Challenge、Insights、Reflection 共用
export type TitledItem = { title: string; desc: string }

export type ImageRef = { src: string; alt: string }

// 路徑膠囊的一步：步驟名稱 + 負責角色（全部同一個角色時可省略）
export type FlowStep = { step: string; role?: string }
export type FlowRow  = { label: string; steps: FlowStep[] }

// Feature 的補充細節：小標 + 說明 + 一種呈現方式
export type Detail =
  | { kind: 'table';        title: string; desc?: string; head: [string, string]; rows: [string, string][] }
  | { kind: 'text';         title: string; desc: string }
  | { kind: 'flow';         title: string; desc?: string; before: FlowRow; after: FlowRow }
  | { kind: 'image';        title: string; desc?: string; src: string; alt: string; portrait?: boolean }
  | { kind: 'imageCompare'; title: string; desc?: string; before: ImageRef & { label: string }; after: ImageRef & { label: string } }

// 參考 Joey Tseng 的 Design Feature：
// 標籤 → 標題（決策）→ 脈絡（問題＋為什麼先做）→ 結果色塊 → 原本 vs 改版對照 → 補充細節
export type Feature = {
  label:   string
  title:   string
  context: string
  result:  string
  before:  { title: string; points: string[] }
  after:   { title: string; points: string[] }
  details: Detail[]
}

// 一整頁案例的資料：依永豐證券案的段落順序排列
export type CaseStudyData = {
  hero:     ImageRef
  category: string
  title:    string
  // font 預設 font-noto；中文內容較多的欄位可改 font-noto-tc
  meta:     { label: string; value: string; font?: string }[]

  overview:    { heading: string; paragraphs: string[] }
  // photo.className 可覆寫照片的比例與裁切
  achievement: { heading: ReactNode; items: TitledItem[]; photo?: ImageRef & { className?: string } }
  problem:     { heading: string; painPoints: (TitledItem & { role: string })[]; summary?: string }
  challenge:   { heading: string; items: TitledItem[] }
  // photo：情境照片，固定高度裁切；figure：流程圖這類要完整顯示的圖，放在灰色色塊裡
  research:    { heading: string; paragraphs: string[]; photo?: ImageRef; figure?: ImageRef; questionLead?: string; question?: string }
  insights:    { heading: string; intro?: string; items: TitledItem[] }
  strategy:    { heading: string; body?: string; items: (TitledItem & { icon: LucideIcon })[] }
  solution:    { heading: string; features: Feature[] }
  outcome:     {
    heading:        string
    roles:          { role: string; desc: string }[]
    criteriaIntro?: string
    criteria?:      { goal: string; looks: string }[]
  }
  reflection:  { intro?: string; items: TitledItem[] }
}
