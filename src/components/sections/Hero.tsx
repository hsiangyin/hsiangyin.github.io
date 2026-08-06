import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import logo55688      from '@/assets/images/brands/logo_55688.png'
import logoCanon      from '@/assets/images/brands/logo_canon.png'
import logoChientu    from '@/assets/images/brands/logo_chientu.png'
import logoChipmos    from '@/assets/images/brands/logo_chipmos.png'
import logoChunghwa   from '@/assets/images/brands/logo_chunghwa.png'
import logoDaiso      from '@/assets/images/brands/logo_daiso.png'
import logoGardencity from '@/assets/images/brands/logo_gardencity.png'
import logoKbro       from '@/assets/images/brands/logo_kbro.png'
import logoNuskin     from '@/assets/images/brands/logo_nuskin.png'
import logoSinopac    from '@/assets/images/brands/logo_sinopac.png'
import logoStarlux    from '@/assets/images/brands/logo_starlux.png'
import logoTbct       from '@/assets/images/brands/logo_tbct.png'
import logoTra        from '@/assets/images/brands/logo_tra.png'
import logoTvgh       from '@/assets/images/brands/logo_tvgh.png'
import logoWdopa      from '@/assets/images/brands/logo_wdopa.png'

const brandLogos = [
  { src: logoSinopac,    alt: '永豐金證券' },
  { src: logoDaiso,      alt: '大創百貨' },
  { src: logoWdopa,      alt: '偉迅科技' },
  { src: logoStarlux,    alt: '星宇航空' },
  { src: logoChunghwa,   alt: '中華電信' },
  { src: logoTra,        alt: '台灣鐵路' },
  { src: logoTvgh,       alt: '台北榮總' },
  { src: logoNuskin,     alt: 'Nu Skin' },
  { src: logoCanon,      alt: 'Canon' },
  { src: logoKbro,       alt: 'kbro' },
  { src: logoChipmos,    alt: 'ChipMOS' },
  { src: logoTbct,       alt: 'TBCT' },
  { src: logoGardencity, alt: 'Garden City' },
  { src: logoChientu,    alt: 'Chientu' },
  { src: logo55688,      alt: '台灣大車隊 55688' },
]

export function Hero() {
  return (
    <section
      className="section-px flex w-full flex-col
                 gap-[45px] pt-[90px] pb-[45px]"
    >
      <div className="flex w-full flex-col items-center gap-[16px] text-center 3xl:gap-[24px]">
        {/* 主張句：先講價值，不是先打招呼 */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
          className="font-noto-tc font-bold leading-[1.3] text-black
                     text-[22px]
                     md:text-[44px]
                     xl:text-[52px]
                     3xl:text-[72px] 3xl:leading-[1.3]"
        >
          把複雜流程，變成易用體驗。
        </motion.h1>

        {/* 量化副標：建立可信度 */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
          className="font-noto-tc text-[#555] leading-[1.7]
                     text-[14px]
                     md:text-[16px]
                     xl:text-[18px]
                     3xl:text-[26px] 3xl:leading-[42px]"
        >
          Hi，我是 Sharlene Tang！擁有 10 年產品設計經驗，
          <br />
          曾參與金融、交通、零售、政府大型數位轉型專案。
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: 'easeOut' }}
          className="flex justify-center gap-[12px] mt-[40px] 3xl:gap-[16px]"
        >
          <a
            href="#featured-works"
            className="group inline-flex items-center gap-[4px] rounded-[50px] border border-transparent bg-[#1e1e1e] text-white no-underline transition-colors
                       hover:border-black hover:bg-white/65 hover:text-[#000]
                       font-noto-tc px-[24px] py-[12px] text-[14px]
                       md:text-[15px]
                       3xl:px-[32px] 3xl:py-[16px] 3xl:text-[20px]"
          >
            查看作品
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-[4px] 3xl:size-[20px]" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[50px] border border-[#1e1e1e]/20 bg-white/65 text-black no-underline transition-colors hover:bg-white/85
                       font-noto-tc px-[24px] py-[12px] text-[14px]
                       md:text-[15px]
                       3xl:px-[32px] 3xl:py-[16px] 3xl:text-[20px]"
          >
            下載履歷
          </a>
        </motion.div>
      </div>

      {/* ── Brands I've Designed For ───────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        className="flex flex-col gap-[16px]
                   md:flex-row md:items-center md:gap-[32px]"
      >
        <p className="shrink-0 font-noto-tc whitespace-nowrap
                      text-[14px]
                      md:text-[16px]
                      xl:text-[18px]
                      3xl:text-[26px]">
          <span className="text-[#878787]">合作過的</span>
          <span className="font-semibold text-black">品牌</span>
        </p>

        <div
          className="relative w-full overflow-hidden"
          style={{
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="animate-marquee flex w-max items-center gap-[40px] md:gap-[56px] 3xl:gap-[72px]">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-[60px] w-auto shrink-0 object-contain grayscale opacity-60 transition duration-300
                           hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="h-px w-full bg-[#d9d9d9]" />
    </section>
  )
}
