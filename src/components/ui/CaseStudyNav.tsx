import { useEffect, useState } from 'react'

interface CaseStudySection {
  id: string
  label: string
}

interface CaseStudyNavProps {
  sections: CaseStudySection[]
}

// Sticky in-page jump nav for long case-study reads — lets a time-pressed
// visitor skip straight to the outcome instead of scrolling the full narrative.
export function CaseStudyNav({ sections }: CaseStudyNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-120px 0px -70% 0px', threshold: 0 },
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  return (
    <nav
      aria-label="案例章節導覽"
      className="sticky top-[57px] z-40 w-full border-b border-[#e2e5eb] bg-white/90 backdrop-blur-sm md:top-[65px] 3xl:top-[89px]"
    >
      <div className="section-px flex items-center gap-[4px] overflow-x-auto py-[10px] 3xl:gap-[8px] 3xl:py-[14px]">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            aria-current={activeId === id ? 'true' : undefined}
            className={`shrink-0 whitespace-nowrap rounded-full px-[14px] py-[6px] font-noto-tc text-[13px] no-underline transition-colors 3xl:px-[20px] 3xl:py-[8px] 3xl:text-[18px]
              ${activeId === id ? 'bg-[#1e1e1e] text-white' : 'text-[#767676] hover:bg-[#f7f7f7]'}`}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  )
}
