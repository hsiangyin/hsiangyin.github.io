import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ─── shared primitives ─────────────────────────────────── */

function Breadcrumb() {
  return (
    <nav className="flex items-center gap-[8px] font-noto text-[13px] text-[#878787]">
      <Link to="/design-system" className="hover:text-[#1e1e1e] transition-colors no-underline text-[#878787]">
        Design System
      </Link>
      <span>/</span>
      <span className="text-[#1e1e1e] font-medium">Button</span>
    </nav>
  )
}

function StatusBadge({ label, color }: { label: string; color: string }) {
  return (
    <span
      className="inline-flex items-center rounded-full px-[10px] py-[4px] font-noto text-[12px] font-medium"
      style={{ backgroundColor: color + '20', color }}
    >
      {label}
    </span>
  )
}

function DocSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="flex flex-col gap-[24px] scroll-mt-[80px]">
      <h2 className="font-poppins font-semibold text-[#1e1e1e] text-[18px] pb-[12px] border-b border-[#e8e8e8]">
        {title}
      </h2>
      {children}
    </section>
  )
}

function Callout({ type, children }: { type: 'info' | 'tip'; children: ReactNode }) {
  const styles = {
    info: { bg: '#f0f7ff', border: '#bfdbfe', icon: 'ℹ', text: '#1d4ed8' },
    tip:  { bg: '#f0fdf4', border: '#bbf7d0', icon: '✦', text: '#15803d' },
  }
  const s = styles[type]
  return (
    <div
      className="flex gap-[12px] rounded-[12px] px-[16px] py-[14px] text-[14px] leading-[1.7]"
      style={{ backgroundColor: s.bg, borderLeft: `3px solid ${s.border}` }}
    >
      <span style={{ color: s.text }}>{s.icon}</span>
      <p className="font-noto-tc" style={{ color: s.text }}>{children}</p>
    </div>
  )
}

/* ─── anatomy diagram ───────────────────────────────────── */

function AnatomyDiagram() {
  return (
    <div className="flex flex-col gap-[32px] rounded-[16px] bg-[#fafafa] p-[32px] md:p-[48px]">
      {/* Primary button anatomy */}
      <div className="flex flex-col items-center gap-[40px]">
        <div className="relative inline-flex">
          {/* Button */}
          <div className="rounded-[50px] bg-[#1e1e1e] px-[20px] py-[10px] font-noto-tc text-[16px] text-white select-none">
            下載履歷
          </div>
          {/* Label: Container */}
          <div className="absolute -top-[36px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[4px]">
            <span className="font-mono text-[11px] text-[#878787] whitespace-nowrap">① Container</span>
            <div className="w-px h-[16px] bg-[#d9d9d9]" />
          </div>
          {/* Label: Label text */}
          <div className="absolute -bottom-[36px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[4px]">
            <div className="w-px h-[16px] bg-[#d9d9d9]" />
            <span className="font-mono text-[11px] text-[#878787] whitespace-nowrap">② Label</span>
          </div>
        </div>
      </div>

      {/* Parts table */}
      <div className="mt-[16px] overflow-x-auto">
        <table className="w-full font-noto text-[13px] border-collapse">
          <thead>
            <tr className="border-b border-[#e8e8e8]">
              <th className="text-left py-[8px] pr-[16px] font-semibold text-[#1e1e1e] w-[32px]">#</th>
              <th className="text-left py-[8px] pr-[16px] font-semibold text-[#1e1e1e]">Part</th>
              <th className="text-left py-[8px] font-semibold text-[#1e1e1e]">Description</th>
            </tr>
          </thead>
          <tbody>
            {[
              { n: 1, part: 'Container', desc: '圓角膠囊形狀的背景區塊，定義可點擊範圍。Primary 為深色填充；Outline 為透明底加邊框。' },
              { n: 2, part: 'Label',     desc: '按鈕文字，使用 font-noto-tc。Primary 白色；Outline 深色；Nav Link 深色帶 hover 透明度。' },
            ].map(({ n, part, desc }) => (
              <tr key={n} className="border-b border-[#f0f0f0] last:border-0">
                <td className="py-[10px] pr-[16px] text-[#878787] font-mono">{n}</td>
                <td className="py-[10px] pr-[16px] font-medium text-[#1e1e1e] whitespace-nowrap">{part}</td>
                <td className="py-[10px] font-noto-tc text-[#585c5f] leading-[1.7]">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* ─── variant showcase ──────────────────────────────────── */

function VariantRow({
  name, description, children, code,
}: {
  name: string; description: string; children: ReactNode; code: string
}) {
  return (
    <div className="flex flex-col gap-[16px] rounded-[16px] border border-[#e8e8e8] overflow-hidden">
      {/* Preview */}
      <div className="flex min-h-[100px] items-center justify-center bg-[#fafafa] px-[32px] py-[32px]">
        {children}
      </div>
      {/* Meta */}
      <div className="flex flex-col gap-[8px] px-[20px] pb-[20px]">
        <p className="font-poppins font-semibold text-[#1e1e1e] text-[14px]">{name}</p>
        <p className="font-noto-tc text-[#585c5f] text-[13px] leading-[1.7]">{description}</p>
        <code className="mt-[4px] block rounded-[8px] bg-[#f0f0f0] px-[12px] py-[8px] font-mono text-[12px] text-[#1e1e1e] overflow-x-auto">
          {code}
        </code>
      </div>
    </div>
  )
}

/* ─── state showcase ────────────────────────────────────── */

function StateDemo({ label, className, style }: { label: string; className: string; style?: React.CSSProperties }) {
  return (
    <div className="flex flex-col items-center gap-[12px]">
      <button className={className} style={style} disabled={label === 'Disabled'}>
        下載履歷
      </button>
      <span className="font-mono text-[12px] text-[#878787]">{label}</span>
    </div>
  )
}

/* ─── do / don't card ───────────────────────────────────── */

function DoDont({ type, title, children, preview }: { type: 'do' | 'dont'; title: string; children: ReactNode; preview: ReactNode }) {
  const isDo = type === 'do'
  return (
    <div className={`flex flex-col gap-0 rounded-[16px] border-t-4 overflow-hidden ${isDo ? 'border-[#12a296]' : 'border-[#e05353]'}`}>
      <div className="flex min-h-[100px] items-center justify-center bg-[#fafafa] px-[24px] py-[24px]">
        {preview}
      </div>
      <div className="flex flex-col gap-[6px] bg-white px-[20px] py-[16px]">
        <p className={`font-poppins font-semibold text-[13px] ${isDo ? 'text-[#12a296]' : 'text-[#e05353]'}`}>
          {isDo ? '✓ Do' : '✗ Don\'t'} — {title}
        </p>
        <p className="font-noto-tc text-[#585c5f] text-[13px] leading-[1.7]">{children}</p>
      </div>
    </div>
  )
}

/* ─── table of contents ─────────────────────────────────── */

const TOC_ITEMS = [
  { id: 'overview',        label: 'Overview' },
  { id: 'anatomy',         label: 'Anatomy' },
  { id: 'variants',        label: 'Variants' },
  { id: 'sizes',           label: 'Sizes' },
  { id: 'states',          label: 'States' },
  { id: 'usage',           label: 'Usage guidelines' },
  { id: 'implementation',  label: 'Implementation' },
]

/* ─── main page ─────────────────────────────────────────── */

export function ButtonDocPage() {
  return (
    <div className="w-full bg-white">
      <div className="section-px py-[48px]">
        <div className="flex flex-col xl:flex-row gap-[60px]">

          {/* ── Main content ───────────────────────────── */}
          <div className="flex-1 min-w-0 flex flex-col gap-[56px]">

            {/* Page header */}
            <div className="flex flex-col gap-[16px]">
              <Breadcrumb />
              <div className="flex items-center gap-[12px]">
                <h1 className="font-baskerville text-[36px] md:text-[44px] font-normal text-[#1e1e1e]">
                  Button
                </h1>
                <StatusBadge label="Stable" color="#12a296" />
              </div>
              <p className="font-noto-tc text-[#585c5f] text-[16px] leading-[1.8] max-w-[640px]">
                Button 讓使用者可以觸發一個動作或跳轉到目標頁面。
                選擇正確的 Button 樣式能幫助使用者理解最重要的操作為何，以及該在哪一刻採取行動。
              </p>
            </div>

            {/* ── 1. Overview ──────────────────────────── */}
            <DocSection id="overview" title="Overview">
              <p className="font-noto-tc text-[#585c5f] text-[15px] leading-[1.8]">
                此 Portfolio 包含三種 Button 型態，依照視覺層次由強到弱排列：
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {[
                  { name: 'Primary',   desc: '最高優先度操作，每個視窗原則上只出現一次。目前用於 Navbar 的「下載履歷」。', color: '#1e1e1e' },
                  { name: 'Outline',   desc: '次要操作，視覺權重低於 Primary，適合搭配 Primary 出現。',                   color: '#7718D6' },
                  { name: 'Nav Link',  desc: '導覽連結，無填充背景，最低視覺權重，用於頁面內部導覽。',                   color: '#12a296' },
                ].map(({ name, desc, color }) => (
                  <div key={name} className="flex flex-col gap-[8px] rounded-[12px] bg-[#fafafa] p-[16px]">
                    <div className="flex items-center gap-[8px]">
                      <div className="size-[10px] rounded-full" style={{ backgroundColor: color }} />
                      <p className="font-poppins font-semibold text-[14px] text-[#1e1e1e]">{name}</p>
                    </div>
                    <p className="font-noto-tc text-[#585c5f] text-[13px] leading-[1.7]">{desc}</p>
                  </div>
                ))}
              </div>
              <Callout type="info">
                一個操作區域內請避免出現兩個 Primary button，以免使用者無法判斷主要行動。
              </Callout>
            </DocSection>

            {/* ── 2. Anatomy ───────────────────────────── */}
            <DocSection id="anatomy" title="Anatomy">
              <AnatomyDiagram />
            </DocSection>

            {/* ── 3. Variants ──────────────────────────── */}
            <DocSection id="variants" title="Variants">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
                <VariantRow
                  name="Primary"
                  description="深色填充的膠囊形按鈕，用於最主要的操作。配色為 #1e1e1e 背景 + 白色文字。"
                  code="rounded-[50px] bg-[#1e1e1e] text-white px-[20px] py-[10px]"
                >
                  <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[16px]">
                    下載履歷
                  </button>
                </VariantRow>

                <VariantRow
                  name="Outline"
                  description="透明底加描邊的膠囊形按鈕，視覺權重低於 Primary，用於次要操作。"
                  code="rounded-[50px] border border-[#1e1e1e] text-[#1e1e1e] px-[20px] py-[10px]"
                >
                  <button className="rounded-[50px] border border-[#1e1e1e] text-[#1e1e1e] font-noto-tc px-[20px] py-[10px] text-[16px]">
                    了解更多
                  </button>
                </VariantRow>

                <VariantRow
                  name="Nav Link"
                  description="無背景的純文字連結，用於 Navbar 導覽項目。Hover 時透明度降至 60%。"
                  code="font-noto-tc text-[#1e1e1e] transition-opacity hover:opacity-60"
                >
                  <a href="#" className="font-noto-tc text-[#1e1e1e] no-underline transition-opacity hover:opacity-60 text-[16px]">
                    精選作品
                  </a>
                </VariantRow>
              </div>
            </DocSection>

            {/* ── 4. Sizes ─────────────────────────────── */}
            <DocSection id="sizes" title="Sizes">
              <p className="font-noto-tc text-[#585c5f] text-[14px] leading-[1.8]">
                Primary button 在不同斷點有對應的尺寸，確保在各裝置上維持適當的點擊目標大小（建議最小 44px 高）。
              </p>
              <div className="overflow-x-auto rounded-[12px] border border-[#e8e8e8]">
                <table className="w-full font-noto text-[13px] border-collapse">
                  <thead>
                    <tr className="bg-[#fafafa] border-b border-[#e8e8e8]">
                      {['Breakpoint', 'Font size', 'Padding X', 'Padding Y', 'Preview'].map(h => (
                        <th key={h} className="text-left px-[16px] py-[12px] font-semibold text-[#1e1e1e] whitespace-nowrap">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { bp: 'Mobile  (default)', font: '13px', px: '14px', py: '7px',  cls: 'rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[14px] py-[7px] text-[13px]' },
                      { bp: 'Tablet  (md ≥ 768px)', font: '16px', px: '20px', py: '10px', cls: 'rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[16px]' },
                      { bp: '3xl  (≥ 1920px)', font: '24px', px: '24px', py: '12px', cls: 'rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[24px] py-[12px] text-[24px]' },
                    ].map(({ bp, font, px, py, cls }) => (
                      <tr key={bp} className="border-b border-[#f0f0f0] last:border-0">
                        <td className="px-[16px] py-[12px] font-mono text-[#585c5f] whitespace-nowrap">{bp}</td>
                        <td className="px-[16px] py-[12px] font-mono text-[#585c5f]">{font}</td>
                        <td className="px-[16px] py-[12px] font-mono text-[#585c5f]">{px}</td>
                        <td className="px-[16px] py-[12px] font-mono text-[#585c5f]">{py}</td>
                        <td className="px-[16px] py-[12px]">
                          <button className={cls}>下載履歷</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Callout type="tip">
                Navbar 的 Primary button 使用 Tailwind responsive prefix 統一定義：
                <code className="mx-[4px] rounded-[4px] bg-[#dcfce7] px-[6px] py-[1px] font-mono text-[12px]">
                  px-[14px] py-[7px] text-[13px] md:px-[20px] md:py-[10px] md:text-[16px] 3xl:px-[24px] 3xl:py-[12px] 3xl:text-[24px]
                </code>
              </Callout>
            </DocSection>

            {/* ── 5. States ────────────────────────────── */}
            <DocSection id="states" title="States">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] rounded-[16px] bg-[#fafafa] p-[32px]">
                <StateDemo
                  label="Default"
                  className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[16px]"
                />
                <StateDemo
                  label="Hover"
                  className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[16px] opacity-80"
                />
                <StateDemo
                  label="Focus"
                  className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[16px] outline outline-2 outline-offset-2 outline-[#1e1e1e]"
                />
                <StateDemo
                  label="Disabled"
                  className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[16px] opacity-30 cursor-not-allowed"
                />
              </div>
              <div className="overflow-x-auto rounded-[12px] border border-[#e8e8e8]">
                <table className="w-full font-noto text-[13px] border-collapse">
                  <thead>
                    <tr className="bg-[#fafafa] border-b border-[#e8e8e8]">
                      {['State', 'Visual change', 'Tailwind class'].map(h => (
                        <th key={h} className="text-left px-[16px] py-[12px] font-semibold text-[#1e1e1e]">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { state: 'Default',  change: '基準樣式',                        cls: '—' },
                      { state: 'Hover',    change: 'opacity 0.8 (Primary / Outline)；opacity 0.6 (Nav Link)', cls: 'hover:opacity-80 / hover:opacity-60' },
                      { state: 'Focus',    change: '2px outline，offset 2px，與背景色一致', cls: 'focus-visible:outline-2 focus-visible:outline-offset-2' },
                      { state: 'Disabled', change: 'opacity 0.3，cursor not-allowed',  cls: 'disabled:opacity-30 disabled:cursor-not-allowed' },
                    ].map(({ state, change, cls }) => (
                      <tr key={state} className="border-b border-[#f0f0f0] last:border-0">
                        <td className="px-[16px] py-[12px] font-medium text-[#1e1e1e]">{state}</td>
                        <td className="px-[16px] py-[12px] font-noto-tc text-[#585c5f] leading-[1.6]">{change}</td>
                        <td className="px-[16px] py-[12px] font-mono text-[#585c5f]">{cls}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </DocSection>

            {/* ── 6. Usage guidelines ──────────────────── */}
            <DocSection id="usage" title="Usage guidelines">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
                <DoDont
                  type="do"
                  title="單一主要操作"
                  preview={
                    <div className="flex gap-[12px]">
                      <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[15px]">下載履歷</button>
                    </div>
                  }
                >
                  每個操作區域只放一個 Primary button，讓使用者清楚知道主要行動是什麼。
                </DoDont>
                <DoDont
                  type="dont"
                  title="兩個 Primary 並排"
                  preview={
                    <div className="flex gap-[12px]">
                      <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[15px]">下載履歷</button>
                      <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[15px]">聯絡我</button>
                    </div>
                  }
                >
                  避免在同一區域放置兩個 Primary button，這會讓使用者困惑哪個才是最主要的操作。
                </DoDont>
                <DoDont
                  type="do"
                  title="具體且簡短的文字"
                  preview={
                    <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[15px]">下載履歷</button>
                  }
                >
                  Label 應直接說明操作結果，2–4 字最佳，讓使用者在點擊前就能預期結果。
                </DoDont>
                <DoDont
                  type="dont"
                  title="模糊或冗長的文字"
                  preview={
                    <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[16px] py-[10px] text-[14px]">點擊這裡查看更多資訊</button>
                  }
                >
                  避免使用「點擊這裡」等模糊字眼，或過長的說明性文字作為 button label。
                </DoDont>
                <DoDont
                  type="do"
                  title="層次搭配"
                  preview={
                    <div className="flex items-center gap-[12px]">
                      <button className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[20px] py-[10px] text-[15px]">下載履歷</button>
                      <a href="#" className="font-noto-tc text-[#1e1e1e] no-underline text-[15px]">聯絡我 →</a>
                    </div>
                  }
                >
                  當有主次操作時，用 Primary + Nav Link 組合，維持清晰的視覺層次。
                </DoDont>
                <DoDont
                  type="dont"
                  title="在正文段落中使用 Primary"
                  preview={
                    <p className="font-noto-tc text-[14px] text-[#585c5f] leading-[1.8]">
                      想了解更多？
                      <button className="mx-[4px] rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc px-[12px] py-[4px] text-[13px]">點這裡</button>
                      查看案例。
                    </p>
                  }
                >
                  不要在行內文字中嵌入 Primary button，這違反文字流排版並造成視覺干擾。改用 Nav Link 樣式。
                </DoDont>
              </div>
            </DocSection>

            {/* ── 7. Implementation ────────────────────── */}
            <DocSection id="implementation" title="Implementation">
              <p className="font-noto-tc text-[#585c5f] text-[14px] leading-[1.8]">
                此專案使用 Tailwind CSS v4 進行樣式定義，無獨立的 Button 元件檔案。
                以下為各 Variant 的完整 class string。
              </p>

              {[
                {
                  name: 'Primary (Navbar — responsive)',
                  code: `<a
  href="/resume.pdf"
  className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc
             no-underline transition-opacity hover:opacity-80
             px-[14px] py-[7px]   text-[13px]
             md:px-[20px] md:py-[10px] md:text-[16px]
             3xl:px-[24px] 3xl:py-[12px] 3xl:text-[24px]"
>
  下載履歷
</a>`,
                },
                {
                  name: 'Outline',
                  code: `<button
  className="rounded-[50px] border border-[#1e1e1e] text-[#1e1e1e]
             font-noto-tc transition-opacity hover:opacity-60
             px-[20px] py-[10px] text-[16px]"
>
  了解更多
</button>`,
                },
                {
                  name: 'Nav Link',
                  code: `<Link
  to="/works"
  className="font-noto-tc text-[#1e1e1e] no-underline
             transition-opacity hover:opacity-60
             text-[16px] 3xl:text-[24px]"
>
  精選作品
</Link>`,
                },
              ].map(({ name, code }) => (
                <div key={name} className="flex flex-col gap-[8px]">
                  <p className="font-poppins font-medium text-[#1e1e1e] text-[14px]">{name}</p>
                  <pre className="overflow-x-auto rounded-[12px] bg-[#1e1e1e] px-[20px] py-[16px] font-mono text-[12px] text-[#e8e8e8] leading-[1.8] whitespace-pre">
                    {code}
                  </pre>
                </div>
              ))}

              <Callout type="info">
                目前 Button 尚未封裝為獨立的 React 元件。若日後需要複用多次，建議在
                <code className="mx-[4px] rounded-[4px] bg-[#e0f0ff] px-[6px] py-[1px] font-mono text-[12px] text-[#1d4ed8]">
                  src/components/ui/Button.tsx
                </code>
                建立元件並接受 variant、size、disabled props。
              </Callout>
            </DocSection>

          </div>

          {/* ── Table of Contents (desktop sidebar) ──── */}
          <aside className="hidden xl:block w-[200px] shrink-0">
            <div className="sticky top-[90px] flex flex-col gap-[4px]">
              <p className="font-poppins text-[12px] font-semibold text-[#878787] uppercase tracking-wider mb-[8px]">
                On this page
              </p>
              {TOC_ITEMS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="font-noto text-[13px] text-[#878787] no-underline
                             py-[4px] px-[8px] rounded-[6px] hover:bg-[#fafafa] hover:text-[#1e1e1e]
                             transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
