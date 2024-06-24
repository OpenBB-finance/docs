"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65296],{69146:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=s(74848),n=s(28453),r=s(94331);const c={title:"cash",description:"Improve financial analysis with OpenBB's Cash Flow feature. Retrieve historical cash flow data for any stock symbol using various sources like YahooFinance with options to get quarterly data and data as a percentage change.",keywords:["Cash Flow","Financial Analysis","Stock Symbol","YahooFinance","AlphaVantage"," quarterly data","percentage change"]},o=void 0,i={id:"sdk/reference/stocks/fa/cash",title:"cash",description:"Improve financial analysis with OpenBB's Cash Flow feature. Retrieve historical cash flow data for any stock symbol using various sources like YahooFinance with options to get quarterly data and data as a percentage change.",source:"@site/content/sdk/reference/stocks/fa/cash.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/cash",permalink:"/openbb-docs/sdk/reference/stocks/fa/cash",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/fa/cash.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"cash",description:"Improve financial analysis with OpenBB's Cash Flow feature. Retrieve historical cash flow data for any stock symbol using various sources like YahooFinance with options to get quarterly data and data as a percentage change.",keywords:["Cash Flow","Financial Analysis","Stock Symbol","YahooFinance","AlphaVantage"," quarterly data","percentage change"]},sidebar:"tutorialSidebar",previous:{title:"cal",permalink:"/openbb-docs/sdk/reference/stocks/fa/cal"},next:{title:"data",permalink:"/openbb-docs/sdk/reference/stocks/fa/data"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"stocks.fa.cash - Reference | OpenBB SDK Docs"}),"\n",(0,a.jsx)(t.p,{children:"Get Cash Flow."}),"\n",(0,a.jsxs)(t.p,{children:["Source Code: [",(0,a.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/sdk_helpers.py#L140",children:"link"}),"]"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'openbb.stocks.fa.cash(symbol: str, quarterly: bool = False, ratios: bool = False, source: str = "YahooFinance", limit: int = 10)\n'})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"symbol"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"Symbol to get cash flow for"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"source"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:'Data source for cash flow, by default "YahooFinance"'}),(0,a.jsx)(t.td,{children:"YahooFinance"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"quarterly"}),(0,a.jsx)(t.td,{children:"bool"}),(0,a.jsx)(t.td,{children:"Flag to get quarterly data"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ratios"}),(0,a.jsx)(t.td,{children:"bool"}),(0,a.jsx)(t.td,{children:"Flag to return data as a percent change."}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"limit"}),(0,a.jsx)(t.td,{children:"int"}),(0,a.jsx)(t.td,{children:"Number of statements to return (free tiers may be limited to 5 years)"}),(0,a.jsx)(t.td,{children:"10"}),(0,a.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"pd.DataFrame"}),(0,a.jsx)(t.td,{children:"Dataframe of cash flow"})]})})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ncash_flow = openbb.stocks.fa.cash("AAPL", source="YahooFinance)\n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"If you have a premium AlphaVantage key, you can use the quarterly flag to get quarterly statements\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'quarterly_income_statement = openbb.stocks.fa.cash("AAPL", source="AlphaVantage", quarterly=True)\n'})}),"\n",(0,a.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var a=s(5260),n=s(74848);function r(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var a=s(96540);const n={},r=a.createContext(n);function c(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);