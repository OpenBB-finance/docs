"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52612],{8473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var r=t(74848),s=t(28453),i=t(94331);const d={title:"future",description:"This page provides detailed documentation on how to use OpenBB's 'future' function in Python script. It explains parameters and returns related to different financial instruments.",keywords:["OpenBB future function","Python script","financial instruments","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies","Finviz"]},o=void 0,c={id:"sdk/reference/economy/future",title:"future",description:"This page provides detailed documentation on how to use OpenBB's 'future' function in Python script. It explains parameters and returns related to different financial instruments.",source:"@site/content/sdk/reference/economy/future.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/future",permalink:"/openbb-docs/sdk/reference/economy/future",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/economy/future.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"future",description:"This page provides detailed documentation on how to use OpenBB's 'future' function in Python script. It explains parameters and returns related to different financial instruments.",keywords:["OpenBB future function","Python script","financial instruments","Indices","Energy","Metals","Meats","Grains","Softs","Bonds","Currencies","Finviz"]},sidebar:"tutorialSidebar",previous:{title:"fred_notes",permalink:"/openbb-docs/sdk/reference/economy/fred_notes"},next:{title:"futures",permalink:"/openbb-docs/sdk/reference/economy/futures"}},a={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.A,{title:"economy.future - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get futures data. [Source: Finviz]"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L187",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.economy.future(future_type: str = "Indices", sortby: str = "ticker", ascend: bool = False)\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"future_type"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"From the following: Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies"}),(0,r.jsx)(n.td,{children:"Indices"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sortby"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Column to sort by"}),(0,r.jsx)(n.td,{children:"ticker"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ascend"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"Flag to sort in ascending order"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.Dataframe"}),(0,r.jsx)(n.td,{children:"Indices, Energy, Metals, Meats, Grains, Softs, Bonds, Currencies"})]})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var r=t(5260),s=t(74848);function i(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);