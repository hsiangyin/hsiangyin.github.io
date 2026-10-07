import type { Project, Expertise } from '@/types'

export const expertiseList: Expertise[] = [
  {
    id: 'flow-design',
    title: '流程設計',
    description: '規劃符合使用者與企業需求的工作流程，降低操作成本並提升效率。',
    iconUrl: '',
  },
  {
    id: 'enterprise-ux',
    title: '企業產品體驗',
    description: '設計企業內部系統與管理平台，兼顧業務流暢、使用效率與產品一致性。',
    iconUrl: '',
  },
  {
    id: 'service-design',
    title: '服務設計',
    description: '整合不同角色與服務接觸點，打造完整且流暢的服務體驗。',
    iconUrl: '',
  },
  {
    id: 'digital-transform',
    title: '數位轉型',
    description: '協助企業將紙本流程、人工作業與複雜規範轉化為可落地的數位流程。',
    iconUrl: '',
  },
]

export const projectList: Project[] = [
  {
    id: 'securities-account',
    title: '證券開戶從「紙本填寫」轉為「數位服務體驗」',
    description: '',
    tags: ['金融科技', '數位轉型', '流程設計'],
    imageUrl: '',
    slug: 'securities-account',
  },
  {
    id: 'daiso',
    title: '把複雜的費用核銷規則，變成員工看得懂的申請流程',
    description: '',
    tags: ['企業內部系統', '流程設計', '簽核流程'],
    imageUrl: '',
    slug: 'daiso',
  },
  {
    id: 'counter-service',
    title: '將分散的櫃台服務流程，整合成一條不用切換的服務體驗',
    description: '',
    tags: ['服務設計', '政府服務', '資訊架構'],
    imageUrl: '',
    slug: 'counter-service',
  },
]
