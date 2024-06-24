"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75949],{52488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=n(74848),r=n(28453),i=n(94331);const a={title:"sma",description:"This page provides a comprehensive guide on how to use the sma function in OpenBB to get the Simple Moving Average (SMA) for stock. It also includes source code, parameters, and returns descriptions.",keywords:["sma","moving average","stock","financial technical analysis","openbb.ta.sma function","dataframe","pricing","programming"]},d=void 0,c={id:"sdk/reference/ta/sma",title:"sma",description:"This page provides a comprehensive guide on how to use the sma function in OpenBB to get the Simple Moving Average (SMA) for stock. It also includes source code, parameters, and returns descriptions.",source:"@site/content/sdk/reference/ta/sma.md",sourceDirName:"sdk/reference/ta",slug:"/sdk/reference/ta/sma",permalink:"/openbb-docs/sdk/reference/ta/sma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/ta/sma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"sma",description:"This page provides a comprehensive guide on how to use the sma function in OpenBB to get the Simple Moving Average (SMA) for stock. It also includes source code, parameters, and returns descriptions.",keywords:["sma","moving average","stock","financial technical analysis","openbb.ta.sma function","dataframe","pricing","programming"]},sidebar:"tutorialSidebar",previous:{title:"rsi",permalink:"/openbb-docs/sdk/reference/ta/rsi"},next:{title:"stoch",permalink:"/openbb-docs/sdk/reference/ta/stoch"}},o={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"ta.sma - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Gets simple moving average (SMA) for stock"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/overlap_model.py#L43",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.ta.sma(data: pd.Series, length: int = 50, offset: int = 0)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"pd.Series"}),(0,s.jsx)(t.td,{children:"Dataframe of dates and prices"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"length"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Length of SMA window"}),(0,s.jsx)(t.td,{children:"50"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"offset"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Length of offset"}),(0,s.jsx)(t.td,{children:"0"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Dataframe containing prices and SMA"})]})})]}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(5260),r=n(74848);function i(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);