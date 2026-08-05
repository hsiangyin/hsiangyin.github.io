import { useLayoutEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { AboutPage } from '@/pages/AboutPage'
import { ProjectPage } from '@/pages/ProjectPage'
import { CounterServicePage } from '@/pages/CounterServicePage'
import { ExpenseApprovalPage } from '@/pages/ExpenseApprovalPage'
import { SinotradePage } from '@/pages/SinotradePage'
import { DesignSystemPage } from '@/pages/DesignSystemPage'
import { ButtonDocPage } from '@/pages/ButtonDocPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useLayoutEffect(() => {
    // Disable browser scroll restoration so it doesn't fight with ours
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    document.documentElement.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    // Restore smooth scroll in the next frame so user-initiated scrolling stays smooth
    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = ''
    })
  }, [pathname])
  return null
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<HomePage />} />
            <Route path="/design-system" element={<DesignSystemPage />} />
            <Route path="/design-system/buttons" element={<ButtonDocPage />} />
            <Route path="/works/counter-service" element={<CounterServicePage />} />
            <Route path="/works/expense-approval" element={<ExpenseApprovalPage />} />
            <Route path="/works/sinotrade" element={<SinotradePage />} />
            <Route path="/works/:slug" element={<ProjectPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
