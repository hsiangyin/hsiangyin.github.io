import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Design System — living reference for Sharlene Tang Portfolio
   Route: /design-system
   ───────────────────────────────────────────────────────── */

/* ── Section wrapper ────────────────────────────────────── */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-[24px] pb-[60px] border-b border-[#d9d9d9] last:border-0 last:pb-0">
      <h2 className="font-poppins font-semibold text-[#1e1e1e] text-[20px]">{title}</h2>
      {children}
    </section>
  )
}

/* ── Color swatch ───────────────────────────────────────── */
function Swatch({ name, hex }: { name: string; hex: string }) {
  return (
    <div className="flex flex-col gap-[8px]">
      <div
        className="h-[80px] w-full rounded-[12px] border border-[#e2e5eb]"
        style={{ backgroundColor: hex }}
      />
      <p className="font-poppins text-[13px] font-medium text-[#1e1e1e]">{name}</p>
      <p className="font-mono text-[12px] text-[#878787]">{hex}</p>
    </div>
  )
}

/* ── Type specimen ──────────────────────────────────────── */
function TypeRow({ label, className, sample = 'The quick brown fox' }: { label: string; className: string; sample?: string }) {
  return (
    <div className="flex flex-col gap-[4px] py-[16px] border-b border-[#f0f0f0] last:border-0">
      <p className="font-mono text-[11px] text-[#878787] mb-[4px]">{label}</p>
      <p className={className}>{sample}</p>
    </div>
  )
}

/* ── Main page ──────────────────────────────────────────── */
export function DesignSystemPage() {
  return (
    <div className="w-full bg-white">
      {/* Page header */}
      <div className="section-px pt-[48px] pb-[40px] border-b border-[#d9d9d9]">
        <p className="font-noto text-[#878787] text-[14px] mb-[8px]">Internal Reference</p>
        <h1 className="font-baskerville text-[#1e1e1e] text-[32px] md:text-[40px] font-normal mb-[12px]">
          Design System
        </h1>
        <p className="font-noto-tc text-[#585c5f] text-[15px] leading-[1.8] max-w-[600px]">
          此頁面收錄 Portfolio 所有核心設計語彙——顏色、字體、間距，以及可複用的 UI 元件。
          新增或修改 UI 時請以此為基準。
        </p>
      </div>

      <div className="section-px flex flex-col gap-[60px] py-[60px]">

        {/* ── 1. Colors ──────────────────────────────────── */}
        <Section title="Colors">
          <div>
            <p className="font-poppins text-[13px] font-medium text-[#878787] mb-[16px] uppercase tracking-wider">
              Core
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-[16px]">
              <Swatch name="Brand / Text" hex="#1e1e1e" />
              <Swatch name="White / BG" hex="#ffffff" />
              <Swatch name="Teal Accent" hex="#12a296" />
              <Swatch name="Purple Accent" hex="#7718D6" />
              <Swatch name="Muted Text" hex="#878787" />
              <Swatch name="Footer Text" hex="#585c5f" />
            </div>
          </div>

          <div>
            <p className="font-poppins text-[13px] font-medium text-[#878787] mb-[16px] uppercase tracking-wider">
              Surface &amp; Border
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-[16px]">
              <Swatch name="Card BG" hex="#edeef2" />
              <Swatch name="Card Light" hex="#fafafa" />
              <Swatch name="Tag BG" hex="#f7f7f7" />
              <Swatch name="Tag Border" hex="#e2e5eb" />
              <Swatch name="Divider" hex="#d9d9d9" />
              <Swatch name="Dark UI" hex="#2B2D31" />
            </div>
          </div>

          <div>
            <p className="font-poppins text-[13px] font-medium text-[#878787] mb-[16px] uppercase tracking-wider">
              Animated Orbs (Layout BG)
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-[16px]">
              <Swatch name="Orb Pink" hex="#c084fc" />
              <Swatch name="Orb Purple" hex="#a855f7" />
              <Swatch name="Orb Amber" hex="#fbbf24" />
            </div>
          </div>

          <div>
            <p className="font-poppins text-[13px] font-medium text-[#878787] mb-[16px] uppercase tracking-wider">
              Gradients
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px]">
              <div className="flex flex-col gap-[8px]">
                <div
                  className="h-[80px] rounded-[12px]"
                  style={{ background: 'linear-gradient(155deg, #ffffff 6%, #F6EFFA 96%)' }}
                />
                <p className="font-poppins text-[13px] font-medium text-[#1e1e1e]">Expertise Card</p>
                <p className="font-mono text-[12px] text-[#878787]">linear-gradient(155deg, #ffffff 6%, #F6EFFA 96%)</p>
              </div>
              <div className="flex flex-col gap-[8px]">
                <div
                  className="h-[80px] rounded-[12px]"
                  style={{ background: 'linear-gradient(to bottom, #e6e9ec 8%, #c4c8c9 85%)' }}
                />
                <p className="font-poppins text-[13px] font-medium text-[#1e1e1e]">Hero Image BG</p>
                <p className="font-mono text-[12px] text-[#878787]">linear-gradient(to bottom, #e6e9ec 8%, #c4c8c9 85%)</p>
              </div>
            </div>
          </div>
        </Section>

        {/* ── 2. Typography ──────────────────────────────── */}
        <Section title="Typography">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px]">
            {/* Font families */}
            <div className="flex flex-col gap-[4px]">
              <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider mb-[12px]">
                Font Families
              </p>
              {[
                { var: '--font-baskerville', label: 'Libre Baskerville', className: 'font-baskerville text-[22px]', sample: 'Display / Headers' },
                { var: '--font-poppins',     label: 'Poppins',           className: 'font-poppins text-[22px]',     sample: 'UI / Subheadings' },
                { var: '--font-noto-tc',     label: 'Noto Sans TC',      className: 'font-noto-tc text-[22px]',     sample: '中文內文字體' },
                { var: '--font-noto',        label: 'Noto Sans',         className: 'font-noto text-[22px]',        sample: 'EN body / labels' },
              ].map(f => (
                <div key={f.var} className="py-[12px] border-b border-[#f0f0f0] last:border-0 flex flex-col gap-[2px]">
                  <p className="font-mono text-[11px] text-[#878787]">{f.var} · {f.label}</p>
                  <p className={f.className}>{f.sample}</p>
                </div>
              ))}
            </div>

            {/* Scale */}
            <div>
              <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider mb-[12px]">
                Type Scale (Desktop xl)
              </p>
              <TypeRow label="Hero h1 · font-baskerville · 2rem"    className="font-baskerville text-[2rem] font-normal"   sample="Hello, I'm Sharlene." />
              <TypeRow label="Section h2 · font-baskerville · 28px" className="font-baskerville text-[28px] font-normal"   sample="Featured Works" />
              <TypeRow label="Card h2 · font-poppins semibold · 28px" className="font-poppins font-semibold text-[28px]"   sample="Problem Statement" />
              <TypeRow label="Card title · font-poppins medium · 20px" className="font-poppins font-medium text-[20px]"   sample="流程設計" />
              <TypeRow label="Body TC · font-noto-tc · 18px · 1.8" className="font-noto-tc text-[18px] leading-[1.8]"     sample="設計師的角色——不只是設計畫面，而是規劃流程。" />
              <TypeRow label="Body EN · font-noto · 16px"           className="font-noto text-[16px]"                      sample="Product Designer · 2025–2026" />
              <TypeRow label="Tag · font-noto-tc · 14px"            className="font-noto-tc text-[14px]"                   sample="服務設計 · 流程設計" />
              <TypeRow label="Caption · font-noto · 13px · muted"   className="font-noto text-[13px] text-[#878787]"       sample="Operational System" />
            </div>
          </div>
        </Section>

        {/* ── 3. Spacing & Layout ────────────────────────── */}
        <Section title="Spacing &amp; Layout">
          <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">
            .section-px — Responsive Content Padding
          </p>
          <div className="bg-[#fafafa] rounded-[12px] p-[20px] font-mono text-[13px] leading-[2]">
            <p><span className="text-[#7718D6]">Mobile</span>  &lt;768px   → padding-inline: 20px</p>
            <p><span className="text-[#7718D6]">Tablet</span>  ≥768px   → padding-inline: 40px</p>
            <p><span className="text-[#7718D6]">Desktop</span> ≥1280px  → padding-inline: 80px · max-width: 1260px · margin: auto</p>
            <p><span className="text-[#7718D6]">3xl</span>     ≥1920px  → padding-inline: 240px · max-width: none</p>
          </div>

          <div>
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider mb-[12px]">
              Border Radius
            </p>
            <div className="flex flex-wrap gap-[16px]">
              {[
                { label: 'Pill · 50px',   r: '50px',  w: 120 },
                { label: 'Card · 20px',   r: '20px',  w: 80  },
                { label: 'Card lg · 24px', r: '24px', w: 80  },
                { label: 'Tag · 6px',      r: '6px',  w: 80  },
                { label: 'Step · full',    r: '9999px', w: 56 },
              ].map(({ label, r, w }) => (
                <div key={label} className="flex flex-col items-center gap-[8px]">
                  <div
                    className="h-[56px] border-2 border-[#1e1e1e]"
                    style={{ width: w, borderRadius: r }}
                  />
                  <p className="font-mono text-[11px] text-[#878787] text-center">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider mb-[12px]">
              Shadow
            </p>
            <div className="flex flex-wrap gap-[24px]">
              {[
                { label: 'Navbar',      shadow: '0px 2px 5px rgba(0,0,0,0.08)'  },
                { label: 'Card',        shadow: '0px 2px 10px 0px rgba(0,0,0,0.15)' },
                { label: 'Expertise',   shadow: '0px 2px 5px rgba(0,0,0,0.15)'  },
              ].map(({ label, shadow }) => (
                <div key={label} className="flex flex-col gap-[10px]">
                  <div
                    className="w-[120px] h-[56px] rounded-[12px] bg-white"
                    style={{ boxShadow: shadow }}
                  />
                  <p className="font-mono text-[11px] text-[#878787]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ── 4. Components ──────────────────────────────── */}
        <Section title="Components">

          {/* Buttons */}
          <div className="flex flex-col gap-[12px]">
            <div className="flex items-center justify-between">
              <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">Buttons</p>
              <Link
                to="/design-system/buttons"
                className="font-noto text-[13px] text-[#7718D6] no-underline hover:opacity-70 transition-opacity"
              >
                查看文件 →
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-[16px]">
              <button
                className="rounded-[50px] bg-[#1e1e1e] text-white font-noto-tc
                           px-[20px] py-[10px] text-[16px] transition-opacity hover:opacity-80"
              >
                下載履歷 (Primary)
              </button>
              <button
                className="rounded-[50px] border border-[#1e1e1e] text-[#1e1e1e] font-noto-tc
                           px-[20px] py-[10px] text-[16px] transition-opacity hover:opacity-60"
              >
                Outline
              </button>
              <a
                href="#"
                className="font-noto-tc text-[#1e1e1e] no-underline transition-opacity hover:opacity-60 text-[16px]"
              >
                Nav Link →
              </a>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">Tags</p>
            <div className="flex flex-wrap gap-[8px]">
              {['服務設計', '政府服務', '資訊架構', '金融科技', '數位轉型'].map(tag => (
                <span
                  key={tag}
                  className="rounded-[6px] border border-[#e2e5eb] bg-[#f7f7f7]
                             font-noto-tc text-[#7718D6]
                             px-[12px] py-[8px] text-[14px]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">Divider</p>
            <div className="h-px w-full bg-[#d9d9d9]" />
            <p className="font-mono text-[12px] text-[#878787]">h-px · bg-[#d9d9d9] · used in Hero section &amp; Footer</p>
          </div>

          {/* Expertise Card */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">
              Expertise Card
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[16px]">
              <div
                className="flex flex-col items-start rounded-[20px] shadow-[0px_2px_5px_rgba(0,0,0,0.15)]
                           p-[28px]"
                style={{ background: 'linear-gradient(155deg, #ffffff 6%, #F6EFFA 96%)' }}
              >
                <div className="w-full h-[80px] rounded-[8px] bg-[#e8e8e8] mb-[16px]" />
                <p className="font-poppins font-bold text-black text-[18px]">流程設計</p>
                <p className="mt-[8px] font-noto-tc text-black text-[13px] leading-relaxed">
                  規劃符合使用者與企業需求的工作流程，降低操作成本並提升效率。
                </p>
              </div>
            </div>
          </div>

          {/* Featured Works Card */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">
              Featured Works Card
            </p>
            <div
              className="relative flex overflow-hidden rounded-[20px]
                         shadow-[0px_2px_10px_0px_rgba(0,0,0,0.15)]
                         h-[220px]"
              style={{ backgroundColor: '#edeef2' }}
            >
              <div className="relative z-10 flex flex-col justify-center gap-[16px] py-[50px] px-[60px]">
                <p className="font-noto-tc font-medium text-black text-[22px] leading-[1.5]">
                  分散的櫃台服務流程整合為一段可被執行的服務體驗
                </p>
                <div className="flex gap-[8px]">
                  {['服務設計', '政府服務'].map(t => (
                    <span key={t} className="rounded-[6px] border border-[#e2e5eb] bg-[#f7f7f7]/90 font-noto-tc text-[#7718D6] px-[12px] py-[8px] text-[14px]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Finding / Step Card */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">
              Finding Card (Counter Service)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
              {[
                { n: 1, title: '櫃員的工作被系統切碎', desc: '服務流程跨越多套系統，必須依靠人工串接。' },
                { n: 2, title: '流程仰賴經驗記憶',     desc: '系統沒有引導下一步，新人學習成本高。' },
                { n: 3, title: '文件處理最容易中斷流程', desc: '文件拍攝與電子簽名經常造成流程跳轉。' },
              ].map(({ n, title, desc }) => (
                <div
                  key={n}
                  className="bg-[#fafafa] rounded-[16px] p-[20px] flex flex-col gap-[4px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <div className="relative shrink-0 size-[24px]">
                      <div className="absolute inset-0 rounded-full bg-[#12a296]" />
                      <span className="absolute inset-0 flex items-center justify-center font-bold text-white text-[11px]">
                        {n}
                      </span>
                    </div>
                    <p className="font-poppins font-medium text-black text-[15px]">{title}</p>
                  </div>
                  <p className="font-noto-tc text-black text-[13px] leading-[1.7] pl-[34px]">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome Banner */}
          <div className="flex flex-col gap-[12px]">
            <p className="font-poppins text-[13px] font-medium text-[#878787] uppercase tracking-wider">
              Outcome Banner
            </p>
            <div className="bg-[#12a296] rounded-[16px] px-[20px] py-[20px] md:px-[40px] md:py-[24px] flex flex-col gap-[8px]">
              <p className="font-poppins font-medium text-white text-[15px] md:text-[20px]">
                成功將服務優化為 5 步驟、0 次系統切換
              </p>
              <p className="font-noto-tc text-white text-[13px] md:text-[15px] leading-[1.7]">
                櫃員進行測試能順利完成流程、不需額外說明、減少系統切換。
              </p>
            </div>
          </div>

        </Section>

        {/* ── 5. Animation Tokens ────────────────────────── */}
        <Section title="Animation">
          <div className="bg-[#fafafa] rounded-[12px] p-[20px] font-mono text-[13px] leading-[2.2]">
            <p className="text-[#878787] mb-[4px]">// Scroll reveal (Framer Motion — used on all sections)</p>
            <p><span className="text-[#7718D6]">initial</span>   {'{ opacity: 0, y: 28 }'}</p>
            <p><span className="text-[#7718D6]">animate</span>   {'{ opacity: 1, y: 0 }'}</p>
            <p><span className="text-[#7718D6]">transition</span> {'{ duration: 0.55, ease: "easeOut" }'}</p>
            <p><span className="text-[#7718D6]">viewport</span>   {'{ once: true, margin: "-60px" }'}</p>
            <br />
            <p className="text-[#878787]">// Background orbs (Layout.tsx)</p>
            <p><span className="text-[#7718D6]">animate.x</span>  [0, 50, -20, 30, 0]</p>
            <p><span className="text-[#7718D6]">animate.y</span>  [0, -38, 20, -12, 0]</p>
            <p><span className="text-[#7718D6]">transition</span> {'{ duration: 18, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }'}</p>
          </div>
        </Section>

      </div>
    </div>
  )
}
