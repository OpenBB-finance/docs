"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[10112],{27929:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>x,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var n=l(74848),s=l(28453),i=l(94331);const d={title:"Comparison Analysis",description:"This page provides an introduction to the Comparison Analysis (CA) sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["comparison","analysis","peers","similar stocks","compare","correlation","historical","screen","pairs","performance","valuation"]},r=void 0,c={id:"terminal/menus/stocks/comparison",title:"Comparison Analysis",description:"This page provides an introduction to the Comparison Analysis (CA) sub-menu, within the Stocks menu, of the OpenBB Terminal.",source:"@site/content/terminal/menus/stocks/comparison.md",sourceDirName:"terminal/menus/stocks",slug:"/terminal/menus/stocks/comparison",permalink:"/openbb-docs/terminal/menus/stocks/comparison",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/stocks/comparison.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"Comparison Analysis",description:"This page provides an introduction to the Comparison Analysis (CA) sub-menu, within the Stocks menu, of the OpenBB Terminal.",keywords:["comparison","analysis","peers","similar stocks","compare","correlation","historical","screen","pairs","performance","valuation"]},sidebar:"tutorialSidebar",previous:{title:"Behavioural Analysis",permalink:"/openbb-docs/terminal/menus/stocks/ba"},next:{title:"Dark Pools & Short Data",permalink:"/openbb-docs/terminal/menus/stocks/dark-pool-shorts"}},x={},h=[{value:"Usage",id:"usage",level:2},{value:"Get",id:"get",level:3},{value:"RMV",id:"rmv",level:3},{value:"Add",id:"add",level:3},{value:"Technical",id:"technical",level:3},{value:"Cashflow",id:"cashflow",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"Comparison Analysis - Stocks - Menus | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"The Comparison Analysis menu features different methods for comparing price, volume, and fundamentals across multiple stocks."}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:["Enter the menu from the ",(0,n.jsx)(t.code,{children:"/stocks"})," menu.  If a ticker is not already loaded, enter one now by using the ",(0,n.jsx)(t.code,{children:"ticker"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"/stocks/ca/ticker AMD\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/75ae98f4-e928-4319-8675-a09d4fe0ca87",alt:"Screenshot 2023-10-31 at 9 32 13\u202fPM"})}),"\n",(0,n.jsx)(t.h3,{id:"get",children:"Get"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"get"})," command will attempt to find the company peers of the base ticker."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"get --source Polygon\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"[Polygon] Similar Companies: AMD, INTC, MCHP, NVDA, TXN, HPQ, XLK \n"})}),"\n",(0,n.jsxs)(t.p,{children:["Refreshing the screen, ",(0,n.jsx)(t.code,{children:"?"})," or ",(0,n.jsx)(t.code,{children:"h"})," with no command, will update the list of similar companies."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/418ca6fc-63d6-4ec6-99d5-ac1f1375b358",alt:"Screenshot 2023-10-31 at 9 38 17\u202fPM"})}),"\n",(0,n.jsx)(t.h3,{id:"rmv",children:"RMV"}),"\n",(0,n.jsx)(t.p,{children:"Use the syntax below to remove a ticker from the list:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"rmv xlk\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"[Polygon] Similar Companies: AMD, INTC, MCHP, NVDA, TXN, HPQ\n"})}),"\n",(0,n.jsx)(t.h3,{id:"add",children:"Add"}),"\n",(0,n.jsxs)(t.p,{children:["Similarly, add another one by using the ",(0,n.jsx)(t.code,{children:"add"})," command."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"add mu\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"[Custom] Similar Companies: HPQ, MCHP, TXN, INTC, MU, AMD, NVDA \n"})}),"\n",(0,n.jsx)(t.h3,{id:"technical",children:"Technical"}),"\n",(0,n.jsxs)(t.p,{children:["With a list of similar companies populated, the ",(0,n.jsx)(t.code,{children:"technical"})," command will compare recent price performance metrics."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"technical\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/9eb4ea36-97a2-44ec-ad8a-8d7ec6145097",alt:"Screenshot 2023-11-01 at 8 16 39\u202fAM"})}),"\n",(0,n.jsx)(t.h3,{id:"cashflow",children:"Cashflow"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"cashflow"})," command will compare recent annual and quarterly statements for a given period."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"cashflow --quarter\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-console",children:"Other available quarterly timeframes are: 31-Jul-2022, 31-Oct-2022, 31-Jan-2023, 30-Apr-2023, 31-Jul-2023\n"})}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"Item"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"HPQ (31-Jul-2023)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"MCHP (30-Jun-2023)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"TXN (30-Jun-2023)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"INTC (30-Jun-2023)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"MU (31-Aug-2023)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"AMD (30-Jun-2023)"}),(0,n.jsx)(t.th,{style:{textAlign:"left"},children:"NVDA (31-Jul-2023)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Net Income before Extraordinaries"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"736M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"666.4M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.72B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.47B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(1.43B)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"27M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6.19B"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Net Income Growth"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-30.96%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"10.33%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"0.82%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"153.22%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"24.58%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"119.42%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"202.94%"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Depreciation, Depletion & Amortization"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"217M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"222.9M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"300M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2.28B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.94B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"873M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"365M"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Depreciation and Depletion"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"126M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50.5M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"285M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.83B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.92B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"180M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"219M"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Amortization of Intangible Assets"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"91M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"172.4M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"15M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"444M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"20M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"693M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"146M"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Deferred Taxes & Investment Tax Credit"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"43M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"23.9M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(52M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(274M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(746M)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Deferred Taxes"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"43M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"23.9M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(52M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(274M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(746M)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Investment Tax Credit"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Other Funds"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"69M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"57.9M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"110M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.14B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"260M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"335M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"714M"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Funds from Operations"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.07B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"971.1M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2.08B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"4.89B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"767M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"961M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6.52B"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Extraordinaries"}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}}),(0,n.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Changes in Working Capital"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(89M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"22.1M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(681M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(2.08B)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(518M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(582M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(174M)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Receivables"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(246M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(159.7M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(79M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"851M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"35M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(272M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(2.99B)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Accounts Payable"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"781M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"34.9M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"74M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(331M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(340M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"236M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"778M"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Other Assets/Liabilities"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(659M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"50.5M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(157M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(303M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(64M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(87M)"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"(246M)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Net Operating Cash Flow"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"976M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"993.2M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"1.4B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"2.81B"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"249M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"379M"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6.35B"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Net Operating Cash Flow Growth"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"53.46%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"39.99%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"20.60%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"257.31%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"937.50%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"-22.02%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"118.07%"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"Net Operating Cash Flow / Sales"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"7.38%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"43.40%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"30.88%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"21.69%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"6.21%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"7.07%"}),(0,n.jsx)(t.td,{style:{textAlign:"left"},children:"47.00%"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},94331:(e,t,l)=>{l.d(t,{A:()=>i});l(96540);var n=l(5260),s=l(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var n=l(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);