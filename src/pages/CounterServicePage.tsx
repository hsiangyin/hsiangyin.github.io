import { Layers, Workflow, ListChecks } from 'lucide-react'
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate'
import type { CaseStudyData } from '@/components/case-study/types'
import heroTablet    from '@/assets/images/wdopa/hero-tablet.png'
import photoResearch from '@/assets/images/wdopa/photo-research.png'
import beforeCall    from '@/assets/images/wdopa/before-callnumber-v1.png'
import afterCall     from '@/assets/images/wdopa/after-callnumber-v3.png'
import screenDoc     from '@/assets/images/wdopa/screen-document.png'
import screenSign    from '@/assets/images/wdopa/screen-signature.png'

// 中彰投分署櫃台叫號系統升級：套用永豐證券案的案例架構
const data: CaseStudyData = {
  hero:     { src: heroTablet, alt: '叫號系統介面總覽' },
  category: 'Operational System',
  title:    '將分散的櫃台服務流程，整合成一條不用切換的服務體驗',
  meta: [
    { label: '專案時程', value: '2025.11 - 2026.01' },
    { label: '專案角色', value: 'Product Designer' },
    { label: '負責項目', value: '流程定義、服務流程規劃、UI/UX 設計、設計交付', font: 'font-noto-tc' },
  ],

  overview: {
    heading: '櫃台想把服務做好，卡住的卻是一套用了 12 年的老系統',
    paragraphs: [
      '中彰投分署所屬的三個就業中心跟埔里分站，現行的叫號系統自民國 102 年建置，至今已經超過 12 年。長期使用下來，系統常常當機、軟硬體之間也無法互相配合，服務項目沒辦法因應業務調整直接變更。',
      '這個專案的目標是汰換升級這套系統，把原本各自獨立的叫號、雙螢幕、電子簽名、文件拍攝整合成一段連續的服務流程。換系統本身不難，難在先弄清楚櫃員服務民眾時卡在哪幾次系統切換，再整理成櫃員能順手操作的流程。',
    ],
  },

  achievement: {
    heading: '從四個各自獨立的分頁籤，整合成一套連續的互動導引系統',
    items: [
      { title: '功能整合', desc: '叫號、雙螢幕、電子簽名、文件拍攝四大功能模組，整合進同一個服務畫面。' },
      { title: '流程縮短', desc: '服務流程從 7 步驟、4 次系統切換，優化為 5 步驟、0 次切換。' },
      { title: '四個據點共用一套系統', desc: '彰化、員林、南投三個就業中心跟埔里分站，共用同一套叫號與服務流程。' },
    ],
  },

  problem: {
    heading: '四套系統各管一段，櫃員只能靠自己串起來',
    painPoints: [
      {
        title: '一次服務要切換 4 次系統',
        role:  '櫃員',
        desc:  '從預約查詢、叫號、確認民眾資料，到拍攝文件、開啟簽名，一次服務要在不同系統之間切換 4 次。',
      },
      {
        title: '不知道下一步該做什麼',
        role:  '新進櫃員',
        desc:  '系統不會提示下一步，服務順序得靠經驗記住，新人要花很多時間才上手。',
      },
    ],
  },

  challenge: {
    heading: '舊系統不能停、需求又在中途增加，怎麼重新整理櫃台流程？',
    items: [
      {
        title: '舊系統包袱不能一次砍掉重練',
        desc:  '升級要在彰化、員林、南投三個就業中心跟埔里分站持續運作的前提下逐步汰換，不能中斷現場的服務。',
      },
      {
        title: '客戶在第一版定案後才追加需求',
        desc:  '第一版只規劃了叫號、重叫、完成、轉櫃、暫停、預約六個功能，沒有涵蓋「櫃員遇到疑難案件需要主管支援」跟「民眾過號未到」兩種現場情境，得在既有設計上加回去。',
      },
    ],
  },

  research: {
    heading: '在設計之前，我想先理解櫃員如何完成一次服務',
    paragraphs: [
      '我在台中就業服務中心訪談了 5 位櫃員與主管，理解實際工作流程、常見問題與系統使用情況；也到現場觀察櫃員從報到到服務完成的過程，記錄系統切換、等待時間與重複操作。',
      '盤點下來，預約查詢、叫號管理、文件拍攝與電子簽名雖然各自能正常運作，但彼此缺乏流程連結。系統提供的是功能，但櫃員真正需要的是流程。',
    ],
    photo:        { src: photoResearch, alt: '就業服務中心實地觀察' },
    questionLead: '所以我把問題定義成：',
    question:     '如何讓櫃台人員在服務民眾時，不需要在多個系統之間來回切換？',
  },

  insights: {
    heading: '櫃員卡住，是因為服務流程被系統切碎',
    items: [
      { title: '切換次數來自系統分工，跟熟練度無關', desc: '服務流程跨越多套系統，必須依靠人工串接。' },
      { title: '流程仰賴經驗記憶',       desc: '系統沒有引導下一步，新人學習成本高。' },
      { title: '文件處理最容易中斷流程', desc: '文件拍攝與電子簽名經常造成流程跳轉。' },
    ],
  },

  strategy: {
    heading: '以櫃台服務流程為主軸，重新安排系統功能',
    body:    '先把每次服務的起點（預約與叫號）接起來，再把最容易中斷的文件拍攝嵌進主流程，最後讓電子簽名成為服務的自然結尾，櫃員不用記住下一步。',
    items: [
      { title: '減少系統切換',   desc: '預約、報到、叫號在同一個畫面啟動', icon: Layers },
      { title: '讓流程保持連續', desc: '文件拍攝不再跳到外接視窗',         icon: Workflow },
      { title: '降低記憶負擔',   desc: '電子簽名接在服務最後一步',         icon: ListChecks },
    ],
  },

  solution: {
    heading: '3 項流程與介面決策',
    features: [
      {
        label:   '減少系統切換',
        title:   '預約、報到與叫號，在同一個畫面接起來',
        context: '原本預約查詢和叫號分屬不同系統，櫃員每服務一位民眾，都要先查預約、再切去叫號。這是每次服務的起點，所以先處理。',
        result:  '直接由預約資訊啟動服務流程，叫號不用再切換系統。',
        before: {
          title:  '原本・叫號作業',
          points: ['預約查詢與叫號分屬不同系統', '叫號、雙螢幕、電子簽名、文件拍攝是平行的分頁籤，功能彼此獨立'],
        },
        after: {
          title:  '改版・叫號作業',
          points: ['由預約資訊直接啟動服務流程', '常用功能整合進同一個畫面，雙螢幕、電子簽名、文件拍攝變成右上角的圖示捷徑', '狀態欄位改用顏色區分，一眼掌握進度'],
        },
        details: [
          {
            kind:  'imageCompare',
            title: '從分頁籤設計，到整合的互動導引系統',
            desc:  '客戶看過第一版後，追加了「櫃員遇到疑難案件需要主管支援」和「民眾過號未到」兩種情境。我在既有設計上加入「呼叫主管」「未臨櫃」兩個按鈕，沒有推翻重來。',
            before: { src: beforeCall, alt: '第一版叫號畫面，功能分散在各自的分頁籤', label: '第一版' },
            after:  { src: afterCall,  alt: '整合後的互動導引系統，新增呼叫主管與未臨櫃功能，狀態改為顏色區分', label: '追加需求後' },
          },
        ],
      },
      {
        label:   '讓流程保持連續',
        title:   '文件拍攝嵌進主流程，拍完自動更新狀態',
        context: '文件處理是最容易中斷流程的環節：櫃員得切到外接視窗拍攝，再回來確認文件是否完成。',
        result:  '櫃員不用切換到外接視窗，拍攝完成後文件狀態自動更新。',
        before: {
          title:  '原本・文件拍攝',
          points: ['拍攝要切換到外接視窗', '拍完要再切回來確認文件是否完成'],
        },
        after: {
          title:  '改版・文件拍攝',
          points: ['文件拍攝嵌入主服務流程的視窗', '拍攝完成，文件狀態自動更新'],
        },
        details: [
          {
            kind:  'flow',
            title: '服務流程：從 7 步驟、4 次切換，到 5 步驟、0 次切換',
            desc:  '每少一次切換，櫃員就少一次中斷。',
            before: {
              label: '原本・7 步驟、4 次切換',
              steps: [
                { step: '預約查詢' },
                { step: '切換叫號系統' },
                { step: '確認民眾資料' },
                { step: '拍攝文件' },
                { step: '確認文件是否完成' },
                { step: '開啟簽名流程' },
                { step: '完成服務' },
              ],
            },
            after: {
              label: '改版・5 步驟、0 次切換',
              steps: [
                { step: '預約報到與叫號' },
                { step: '確認民眾資料' },
                { step: '拍攝文件' },
                { step: '電子簽名' },
                { step: '完成服務' },
              ],
            },
          },
          {
            kind:  'image',
            title: '文件拍攝：在同一個視窗完成',
            src:   screenDoc,
            alt:   '文件拍攝介面',
          },
        ],
      },
      {
        label:   '降低記憶負擔',
        title:   '電子簽名成為服務的自然結尾',
        context: '電子簽名原本要另外開啟流程，櫃員得記得在服務最後切過去。前兩步接好之後，最後要讓「服務完成」不再靠櫃員記得。',
        result:  '簽名完成即服務完成，櫃員不用主動記住下一步。',
        before: {
          title:  '原本・電子簽名',
          points: ['簽名要另外開啟流程', '服務是否完成，靠櫃員自己記得'],
        },
        after: {
          title:  '改版・電子簽名',
          points: ['電子簽名整合為服務的最後一步', '簽名完成，服務即完成'],
        },
        details: [
          {
            kind:  'image',
            title: '電子簽名畫面',
            src:   screenSign,
            alt:   '電子簽名介面',
          },
        ],
      },
    ],
  },

  outcome: {
    heading: '少了切換之後，櫃員、民眾與組織的改變',
    roles: [
      { role: '櫃員', desc: '減少系統切換與認知負擔，能更專注在服務民眾。' },
      { role: '民眾', desc: '民眾等候時間減少。' },
      { role: '組織', desc: '建立一致的服務流程，降低新人的教育訓練成本。' },
    ],
    criteriaIntro: '我用三個流程上的改變，來確認專案達到目標：',
    criteria: [
      { goal: '流程縮短',     looks: '服務流程從 7 步驟、4 次系統切換，縮短為 5 步驟、0 次切換' },
      { goal: '功能整合',     looks: '叫號、雙螢幕、電子簽名、文件拍攝整合成一套連續的互動導引系統' },
      { goal: '現場情境補齊', looks: '新增「呼叫主管」「未臨櫃」，涵蓋疑難案件與民眾過號未到' },
    ],
  },

  reflection: {
    intro: '這個專案讓我重新思考設計師的角色：除了畫面，還要定義流程，讓不同系統能一起撐起一段完整的服務。',
    items: [
      { title: '例外情境應該在第一版就盤點進來', desc: '「呼叫主管」和「未臨櫃」都是客戶看過第一版才提出的需求。如果在研究階段就把例外情境一起盤點，可以少一輪修改。' },
    ],
  },
}

export function CounterServicePage() {
  return <CaseStudyTemplate data={data} />
}
