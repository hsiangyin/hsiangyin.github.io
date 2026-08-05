import { motion } from 'framer-motion'
import iconWorkflow   from '@/assets/images/icon-workflow.svg'
import iconEnterprise from '@/assets/images/icon-enterprise.svg'
import iconService    from '@/assets/images/icon-service.svg'
import iconDigital    from '@/assets/images/icon-digital.svg'

const expertiseItems = [
  {
    id: 'workflow',
    icon: iconWorkflow,
    title: '流程設計',
    description: '規劃符合使用者與企業需求的工作流程，降低操作成本並提升效率。',
  },
  {
    id: 'enterprise',
    icon: iconEnterprise,
    title: '企業產品體驗',
    description: '設計企業內部系統與管理平台，兼顧業務邏輯、使用效率與產品一致性。',
  },
  {
    id: 'service',
    icon: iconService,
    title: '服務設計',
    description: '整合不同角色與服務接觸點，打造完整且流暢的服務體驗。',
  },
  {
    id: 'digital',
    icon: iconDigital,
    title: '數位轉型',
    description: '協助企業將紙本流程、人工作業與複雜規範轉化為可落地的數位流程。',
  },
]

export function CoreExpertise() {
  return (
    <section
      className="section-px flex w-full flex-col
                 gap-[20px] pb-[48px]
                 md:gap-[24px] md:pb-[60px]
                 3xl:gap-[30px] 3xl:pb-[80px]"
    >
      <div
        className="flex flex-wrap items-center gap-[8px]
                   text-[26px]
                   md:text-[36px]
                   xl:text-[48px]
                   3xl:text-[60px]"
      >
        <span className="font-poppins font-medium text-[#444]">Core</span>
        <span className="font-baskerville font-bold italic text-[#444]">Expertise</span>
      </div>

      {/* Grid: 1 col → 2 col (tablet) → 4 col (desktop) */}
      <div className="grid gap-[16px] grid-cols-1 md:grid-cols-2 xl:grid-cols-4 3xl:gap-[20px]">
        {expertiseItems.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            className="flex flex-col items-start rounded-[20px] shadow-[0px_2px_5px_rgba(0,0,0,0.15)]
                       p-[28px]
                       md:p-[36px]
                       3xl:rounded-[24px] 3xl:p-[50px]"
            style={{ background: 'linear-gradient(155deg, #ffffff 6%, #F6EFFA 96%)' }}
          >
            {/* Icon */}
            <div
              className="flex w-full items-center justify-center
                         h-[100px]
                         md:h-[130px]
                         3xl:h-[190px]"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-full w-auto max-w-full object-contain"
              />
            </div>

            {/* Title */}
            <p
              className="mt-[16px] w-full text-center font-poppins font-bold text-black
                         text-[18px] leading-[1.4]
                         md:text-[22px]
                         3xl:text-[32px] 3xl:leading-[48px] 3xl:mt-[20px]"
            >
              {item.title}
            </p>

            {/* Description */}
            <p
              className="mt-[8px] w-full font-noto-tc text-black leading-relaxed
                         text-[13px]
                         md:text-[15px]
                         3xl:text-[18px] 3xl:mt-[4px]"
            >
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
