"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53826],{37929:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>h});var s=l(74848),n=l(28453),i=l(94331);const d={title:"Trading Hours",description:"The Trading Hours sub-module provides functions for checking the status and hours of operation for markets globally. It allows users to understand which exchanges are currently open, all exchanges and their status, details for individual exchanges, and a list of closed exchanges.",keywords:["Trading Hours","Market Status","Stock Exchanges","Open Exchanges","Closed Exchanges","Individual Exchange Details","Global Markets"]},r=void 0,a={id:"sdk/data-available/stocks/trading-hours",title:"Trading Hours",description:"The Trading Hours sub-module provides functions for checking the status and hours of operation for markets globally. It allows users to understand which exchanges are currently open, all exchanges and their status, details for individual exchanges, and a list of closed exchanges.",source:"@site/content/sdk/data-available/stocks/trading-hours.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/trading-hours",permalink:"/openbb-docs/sdk/data-available/stocks/trading-hours",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/data-available/stocks/trading-hours.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"Trading Hours",description:"The Trading Hours sub-module provides functions for checking the status and hours of operation for markets globally. It allows users to understand which exchanges are currently open, all exchanges and their status, details for individual exchanges, and a list of closed exchanges.",keywords:["Trading Hours","Market Status","Stock Exchanges","Open Exchanges","Closed Exchanges","Individual Exchange Details","Global Markets"]},sidebar:"tutorialSidebar",previous:{title:"Stocks Screener",permalink:"/openbb-docs/sdk/data-available/stocks/stocks-screener"},next:{title:"Crypto",permalink:"/openbb-docs/sdk/data-available/crypto/"}},c={},h=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"All",id:"all",level:3},{value:"Open",id:"open",level:3},{value:"Exchange",id:"exchange",level:3}];function x(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"Trading Hours - Stocks - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"The Trading Hours sub-module is a set of functions for checking the status and hours of operation for markets globally."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(t.p,{children:"There are only a handful of commands in the set, and they are listed below with a short description."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.th.open"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Which Exchanges are Currently Open"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.th.all"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"All Exchanges and Their Status"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.th.exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Details for Individual Exchanges"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.th.closed"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"List of Closed Exchanges"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Alternatively, print the contents sub-module by entering:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"help(openbb.stocks.th)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h3,{id:"all",children:"All"}),"\n",(0,s.jsx)(t.p,{children:"Get a list of global exchanges and their current status."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.stocks.th.all()\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"short_name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"open"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SHZ"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Shenzen Stock Exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SHZE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"KSC"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Korea Exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"KRX"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"KOE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Korea Exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"KRX"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CAI"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"The Egyptian Exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CA"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"PCX"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NYSE Arca"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ARCA"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"SAT"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Nasdaq OMX Stockholm"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ST"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"False"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"open",children:"Open"}),"\n",(0,s.jsx)(t.p,{children:"See which exchanges are open right now."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.stocks.th.open()\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"name"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"short_name"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CNQ"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Canadian Securities Exchange: CSE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CN"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NZE"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NZX"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"NZ"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MCX"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"MOEX"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"ME"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"exchange",children:"Exchange"}),"\n",(0,s.jsx)(t.p,{children:"Get the schedule of an individual exchange."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.stocks.th.exchange('CNQ')\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"}}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"CNQ"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Canadian Securities Exchange: CSE"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"short_name"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CN"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"website"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.thecse.com/en/trading/trading-rules-and-links/trading-rules-and-regulations",children:"https://www.thecse.com/en/trading/trading-rules-and-links/trading-rules-and-regulations"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"market_open"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"08:00:00"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"market_close"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"18:00:00"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"lunchbreak_start"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"lunchbreak_end"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"opening_auction_start"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"opening_auction_end"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"closing_auction_start"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"closing_auction_end"}),(0,s.jsx)(t.td,{style:{textAlign:"left"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"timezone"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Canada/Eastern"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"flag"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"\ud83c\udde8\ud83c\udde6"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"open"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"True"})]})]})]})]})}function o(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},94331:(e,t,l)=>{l.d(t,{A:()=>i});l(96540);var s=l(5260),n=l(74848);function i(e){let{title:t}=e;return(0,n.jsx)(s.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,l)=>{l.d(t,{R:()=>d,x:()=>r});var s=l(96540);const n={},i=s.createContext(n);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);