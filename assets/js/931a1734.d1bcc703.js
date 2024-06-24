"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[47152],{69297:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=s(74848),a=s(28453),n=s(94331);const c={title:"cashflow",description:"This page discusses the cashflow data from Marketwatch. It explains how to use the openbb.stocks.ca.cashflow function, its parameters, and outputs, emphasizing on a dataframe of cashflow comparisons.",keywords:["cashflow data","marketwatch source code","openbb.stocks.ca.cashflow function","parameters","dataframe of cashflow comparisons","timeframe","quarter","export"]},o=void 0,i={id:"sdk/reference/stocks/ca/cashflow",title:"cashflow",description:"This page discusses the cashflow data from Marketwatch. It explains how to use the openbb.stocks.ca.cashflow function, its parameters, and outputs, emphasizing on a dataframe of cashflow comparisons.",source:"@site/content/sdk/reference/stocks/ca/cashflow.md",sourceDirName:"sdk/reference/stocks/ca",slug:"/sdk/reference/stocks/ca/cashflow",permalink:"/openbb-docs/sdk/reference/stocks/ca/cashflow",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/ca/cashflow.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"cashflow",description:"This page discusses the cashflow data from Marketwatch. It explains how to use the openbb.stocks.ca.cashflow function, its parameters, and outputs, emphasizing on a dataframe of cashflow comparisons.",keywords:["cashflow data","marketwatch source code","openbb.stocks.ca.cashflow function","parameters","dataframe of cashflow comparisons","timeframe","quarter","export"]},sidebar:"tutorialSidebar",previous:{title:"balance",permalink:"/openbb-docs/sdk/reference/stocks/ca/balance"},next:{title:"hcorr",permalink:"/openbb-docs/sdk/reference/stocks/ca/hcorr"}},d={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.A,{title:"stocks.ca.cashflow - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(t.p,{children:"Get cashflow data. [Source: Marketwatch]"}),"\n",(0,r.jsxs)(t.p,{children:["Source Code: [",(0,r.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/comparison_analysis/marketwatch_model.py#L140",children:"link"}),"]"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'openbb.stocks.ca.cashflow(similar: List[str], timeframe: str = "2021", quarter: bool = False)\n'})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"similar"}),(0,r.jsx)(t.td,{children:"List[str]"}),(0,r.jsxs)(t.td,{children:["List of tickers to compare.",(0,r.jsx)("br",{}),"Comparable companies can be accessed through",(0,r.jsx)("br",{}),"finnhub_peers(), finviz_peers(), polygon_peers()."]}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"False"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"timeframe"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Column header to compare"}),(0,r.jsx)(t.td,{children:"2021"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"quarter"}),(0,r.jsx)(t.td,{children:"bool"}),(0,r.jsx)(t.td,{children:"Whether to use quarterly statements, by default False"}),(0,r.jsx)(t.td,{children:"False"}),(0,r.jsx)(t.td,{children:"True"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"export"}),(0,r.jsx)(t.td,{children:"str"}),(0,r.jsx)(t.td,{children:"Format to export data"}),(0,r.jsx)(t.td,{children:"None"}),(0,r.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"pd.DataFrame"}),(0,r.jsx)(t.td,{children:"Dataframe of cashflow comparisons"})]})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>n});s(96540);var r=s(5260),a=s(74848);function n(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var r=s(96540);const a={},n=r.createContext(a);function c(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);