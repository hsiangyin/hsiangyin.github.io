import { useParams } from 'react-router-dom'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <section className="px-8 py-16">
      <h1 className="text-3xl font-medium text-[var(--color-text)]">
        {slug ? `Project: ${slug}` : '作品頁面'}
      </h1>
      <p className="mt-4 text-[var(--color-text-muted)]">案例內容建置中...</p>
    </section>
  )
}
