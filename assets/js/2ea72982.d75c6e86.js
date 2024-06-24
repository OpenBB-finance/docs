"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98473],{83474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(74848),r=t(28453),i=t(94331);const o={title:"income",description:"This page is a detailed guide on how to use the 'income' function provided by OpenBBTerminal. This function fetches income statements for a given stock symbol from selected data sources like YahooFinance or AlphaVantage.",keywords:["income statement","stock","symbol","source","YahooFinance","AlphaVantage","OpenBBTerminal income","Financial Analysis","fundamental analysis"]},a=void 0,c={id:"sdk/reference/stocks/fa/income",title:"income",description:"This page is a detailed guide on how to use the 'income' function provided by OpenBBTerminal. This function fetches income statements for a given stock symbol from selected data sources like YahooFinance or AlphaVantage.",source:"@site/content/sdk/reference/stocks/fa/income.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/income",permalink:"/openbb-docs/sdk/reference/stocks/fa/income",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/fa/income.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"income",description:"This page is a detailed guide on how to use the 'income' function provided by OpenBBTerminal. This function fetches income statements for a given stock symbol from selected data sources like YahooFinance or AlphaVantage.",keywords:["income statement","stock","symbol","source","YahooFinance","AlphaVantage","OpenBBTerminal income","Financial Analysis","fundamental analysis"]},sidebar:"tutorialSidebar",previous:{title:"hq",permalink:"/openbb-docs/sdk/reference/stocks/fa/hq"},next:{title:"info",permalink:"/openbb-docs/sdk/reference/stocks/fa/info"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"stocks.fa.income - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(n.p,{children:"Get income statement."}),"\n",(0,s.jsxs)(n.p,{children:["Source Code: [",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/sdk_helpers.py#L14",children:"link"}),"]"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'openbb.stocks.fa.income(symbol: str, quarterly: bool = False, ratios: bool = False, source: str = "YahooFinance", limit: int = 10)\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"symbol"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"Symbol to get income statement for"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"source"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:'Data source for income statement, by default "YahooFinance"'}),(0,s.jsx)(n.td,{children:"YahooFinance"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"quarterly"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"Flag to get quarterly data"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ratios"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"Flag to return data as a percent change."}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"Number of statements to return (free tiers may be limited to 5 years)"}),(0,s.jsx)(n.td,{children:"10"}),(0,s.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pd.DataFrame"}),(0,s.jsx)(n.td,{children:"Dataframe of income statement"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nincome_statement = openbb.stocks.fa.income("AAPL", source="YahooFinance)\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"If you have a premium AlphaVantage key, you can use the quarterly flag to get quarterly statements\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'quarterly_income_statement = openbb.stocks.fa.income("AAPL", source="AlphaVantage", quarterly=True)\n'})}),"\n",(0,s.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(5260),r=t(74848);function i(e){let{title:n}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);