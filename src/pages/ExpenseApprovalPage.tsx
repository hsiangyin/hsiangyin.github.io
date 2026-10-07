import { Database, Paperclip, SearchCheck } from 'lucide-react'
import { CaseStudyTemplate } from '@/components/case-study/CaseStudyTemplate'
import type { CaseStudyData } from '@/components/case-study/types'
import heroTablet from '@/assets/images/dasio/hero-tablet.jpg'
import photoDasio from '@/assets/images/dasio/photo-dasio.png'
import imgFlow    from '@/assets/images/dasio/img-dasio-01.png'
import imgAutoFill from '@/assets/images/dasio/img-dasio-03.png'
import imgAttach  from '@/assets/images/dasio/img-dasio-04.png'
import imgStatus  from '@/assets/images/dasio/img-dasio-05.png'

// 大創百貨費用核銷系統：套用永豐證券案的案例架構
const data: CaseStudyData = {
  hero:     { src: heroTablet, alt: '費用核銷系統 UI' },
  category: 'Enterprise System',
  title:    '把複雜的費用核銷規則，變成員工看得懂的申請流程',
  meta: [
    { label: '專案時程', value: '2024.07 - 2024.12' },
    { label: '專案角色', value: 'Product Designer' },
    { label: '負責項目', value: '流程定義、UX 規劃、UI 設計與交付', font: 'font-noto-tc' },
  ],

  overview: {
    heading: '一筆費用申請，要員工、主管、會計三個角色接力完成',
    paragraphs: [
      '在大創百貨，員工提出申請、主管審核、會計核銷入帳。過去這套流程完全仰賴紙本、Excel 與人工核對，角色之間靠口頭確認銜接。',
      '申請量一多，資料缺漏、金額對不上、格式不一致的情況就頻繁發生。對會計來說，最麻煩的是每筆申請核銷完，還要再手動輸入會計系統一次，同一份資料處理兩遍。這也是專案的起點：會計希望新系統能串接既有的會計系統，核銷完成後資料自動同步。',
    ],
  },

  achievement: {
    heading: '費用申請與差旅申請，整合進同一套線上簽核流程',
    items: [
      { title: '申請整合',       desc: '費用申請、差旅申請共用同一套簽核邏輯，簽核層級可依單位與角色設定。' },
      { title: '附件跟著申請書', desc: '附件直接在申請書裡上傳，缺件狀態看得到，不再靠私訊補件。' },
      { title: '自動產生傳票檔', desc: '核銷完成後系統直接產生傳票檔，會計不用再把資料手動輸入會計系統。' },
    ],
  },

  problem: {
    heading: '三個角色之間靠人工銜接，錯誤到了流程後段才被發現',
    painPoints: [
      {
        title: '填單時得自己查匯率',
        role:  '員工',
        desc:  '外幣費用沒有固定的匯率來源，員工得自己上網查、手動填，金額很容易跟著算錯。',
      },
      {
        title: '發票漏傳，只能私訊補件',
        role:  '主管',
        desc:  '送出申請後才發現缺附件，系統沒有補件通知，只能私訊員工確認，來回耗時。',
      },
      {
        title: '手動核對金額，算錯就退件',
        role:  '會計',
        desc:  '金額加總靠人工核對，算錯就得退件重送，員工跟會計都要重來一次。',
      },
    ],
  },

  challenge: {
    heading: '簽核規則複雜又不能改，也沒有機會訪談使用者',
    items: [
      {
        title: '同單位不同角色，簽核層級完全不同',
        desc:  '店鋪員工的差旅費要走「店長 → 區店或區主管 → 承辦人員 → 長官核決」，其他部門員工則是「部門主管 → 承辦人員 → 長官核決」，兩條路徑沒辦法共用一套固定的簽核鏈。',
      },
      {
        title: '四種簽核方式，各有不同的退件規則',
        desc:  '簽核分成串簽、會辦、擇辦、通知四種，這些都是組織既有的作業方式，設計上不能簡化成單一流程。',
      },
      {
        title: '沒有機會訪談員工與主管',
        desc:  '需求都透過 PM 轉述會計跟主管的期待。我得想辦法讓每個判斷站得住腳，不能只把轉述的需求直接畫成畫面。',
      },
    ],
  },

  research: {
    heading: '從真實的駁回紀錄找問題',
    paragraphs: [
      '我請 PM 把過去的紙本申請單跟駁回紀錄找出來，從實際被退件的單據，找出使用者卡在哪裡。',
      '把這些紀錄畫回流程圖後，問題從模糊的「不好用」，變成流程上三個明確會卡住的位置：員工查匯率、發票漏傳後的私訊補件、會計人工核對金額。',
      // 退件原因取自流程圖上兩個「常見問題」區塊
      '紀錄裡也反覆出現同樣的退件原因。員工整理單據時，常見發票漏傳、檔案不清楚、金額填錯、格式不一致；到了主管審核，則常卡在資料不完整、用途說明不清楚、金額有疑慮。其中發票漏傳和金額填錯，就是後面設計優先處理的兩件事。',
    ],
    photo:        { src: photoDasio, alt: '堆滿紙本單據與發票的會計辦公桌' },
    figure:       { src: imgFlow,    alt: '費用申請流程圖，標出員工查匯率、私訊補件、會計人工核對三個斷點' },
    questionLead: '所以我把問題定成：',
    question:     '能不能讓系統接手這些原本靠人工記得、人工核對的事？',
  },

  insights: {
    heading: '算錯、缺件、來回確認，都是因為該交給系統的事，落到了人身上',
    items: [
      { title: '系統算得出來的，就不該讓人算', desc: '金額加總有固定規則，交給系統計算，錯誤就不會拖到會計那一關才被抓到。' },
      { title: '缺件要在送出前被看見',         desc: '附件應該是申請書的一部分，送出前就能檢查有沒有缺。' },
      { title: '規則越複雜，進度越要透明',     desc: '簽核鏈依角色不同、又有四種簽核方式，單據卡在哪一關，應該不用問人就查得到。' },
    ],
  },

  strategy: {
    heading: '讓系統接手三件原本靠人的事',
    items: [
      { title: '自動帶入',       desc: '系統已知的資料不讓人重填',     icon: Database },
      { title: '附件跟著申請書', desc: '缺件在送出前就看得到',         icon: Paperclip },
      { title: '進度公開',       desc: '簽核狀態公開查詢',             icon: SearchCheck },
    ],
  },

  solution: {
    heading: '3 項流程與介面決策',
    features: [
      {
        label:   '自動帶入',
        title:   '系統已經知道的資料，不再讓員工重填',
        context: '姓名、部門這類資料系統本來就有，卻每次申請都要重新輸入。每多一個手動欄位，就多一個填錯被退件的機會，所以先處理。',
        result:  '員工少填兩個欄位，金額也不用自己加總。',
        before: {
          title:  '原本・填寫申請單',
          points: ['姓名、部門每次申請都要重新輸入', '金額加總靠人工，算錯就被退件'],
        },
        after: {
          title:  '改版・填寫申請單',
          points: ['姓名、部門由系統自動帶入', '金額由系統計算'],
        },
        details: [
          {
            kind:  'image',
            title: '申請書畫面：已知資料自動帶入',
            src:   imgAutoFill,
            alt:   '費用申請書畫面，姓名與部門由系統自動帶入',
          },
          {
            kind:  'text',
            title: '取捨：匯率仍由員工手動填寫',
            desc:  '員工實際購買外幣時的匯率，跟報帳當天的匯率不一樣。系統不管帶入哪一天的匯率，都可能跟員工實際花的金額對不上，所以這一版保留讓員工手動填寫。',
          },
        ],
      },
      {
        label:   '附件跟著申請書',
        title:   '附件直接放進申請書，缺件送出前就看得到',
        context: '填單變輕鬆之後，下一個要處理的是補件。資料完不完整，不該靠員工記不記得補交。',
        result:  '補件不用再靠私訊追問。',
        before: {
          title:  '原本・附件與補件',
          points: ['附件和申請書分開處理', '缺件在送出後才發現，只能私訊補件'],
        },
        after: {
          title:  '改版・附件與補件',
          points: ['附件直接在申請書裡上傳', '缺件狀態看得見'],
        },
        details: [
          {
            kind:  'image',
            title: '申請書附件：上傳後直接列在檔案清單',
            src:   imgAttach,
            alt:   '申請書內的附件上傳與檔案清單',
          },
        ],
      },
      {
        label:   '進度公開',
        title:   '單據卡在哪一關、誰還沒簽，自己就查得到',
        context: '簽核鏈依角色不同，還有四種簽核方式，員工和主管常搞不清楚單據現在在哪裡。',
        result:  '員工和主管不用再為了一筆申請，來回確認進度。',
        before: {
          title:  '原本・確認進度',
          points: ['單據在哪一關，只能問人', '員工和主管為了一筆申請反覆溝通'],
        },
        after: {
          title:  '改版・確認進度',
          points: ['簽核進度公開查詢', '四種簽核方式各有對應的狀態'],
        },
        details: [
          {
            kind:  'table',
            title: '四種簽核方式',
            head:  ['簽核方式', '規則'],
            rows: [
              ['串簽', '一關簽完才給下一關，任何人都能退件'],
              ['會辦', '多人同時收到，全部簽完才往下走，不能退件'],
              ['擇辦', '只需要其中一人執行'],
              ['通知', '只知會，不需要簽核'],
            ],
          },
          {
            kind:  'image',
            title: '審核進度畫面',
            src:   imgStatus,
            alt:   '申請書審核進度介面',
          },
        ],
      },
    ],
  },

  outcome: {
    heading: '員工、主管與會計，各自少了一段人工作業',
    roles: [
      { role: '員工', desc: '不用自己算金額，也不會因為缺發票被私訊追問。' },
      { role: '主管', desc: '少了員工為了確認進度而來的詢問。' },
      { role: '會計', desc: '不用再逐筆核對金額，也不用把同一份資料輸入兩次。' },
    ],
  },

  reflection: {
    intro: '這個專案讓我理解，需求不一定來自最終使用者。員工要操作、主管要決策、會計要守規則，三邊都顧到，流程才走得通。',
    items: [
      { title: '卡住流程的，常常是沒人翻譯的專業邏輯',   desc: '以為是某個角色能力不足，其實是沒有人把背後的專業邏輯翻譯給其他角色。' },
      { title: '沒辦法訪談時，真實紀錄比意見更站得住腳', desc: '回頭看真實發生過的駁回紀錄，比問「你覺得怎麼樣」更有根據。這個限制也讓我學到，不是所有問題都要靠我自己挖出來。' },
    ],
  },
}

export function ExpenseApprovalPage() {
  return <CaseStudyTemplate data={data} />
}
