"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[82731],{13475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=n(74848),i=n(28453),r=n(94331);const s={title:"sma",description:"A documentation page elaborating on Simple Moving Averages (sma), their application in data smoothing and trend identification. It outlines usage, parameters and provides visualized data.",keywords:["Moving averages","Data smoothing","Trend identification","Simple Moving Average","Filtering data changes","sma parameters"]},o=void 0,d={id:"terminal/reference/crypto/ta/sma",title:"sma",description:"A documentation page elaborating on Simple Moving Averages (sma), their application in data smoothing and trend identification. It outlines usage, parameters and provides visualized data.",source:"@site/content/terminal/reference/crypto/ta/sma.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/sma",permalink:"/terminal/reference/crypto/ta/sma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ta/sma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"sma",description:"A documentation page elaborating on Simple Moving Averages (sma), their application in data smoothing and trend identification. It outlines usage, parameters and provides visualized data.",keywords:["Moving averages","Data smoothing","Trend identification","Simple Moving Average","Filtering data changes","sma parameters"]},sidebar:"tutorialSidebar",previous:{title:"rsi",permalink:"/terminal/reference/crypto/ta/rsi"},next:{title:"stoch",permalink:"/terminal/reference/crypto/ta/stoch"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.A,{title:"crypto/ta/sma - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"Moving Averages are used to smooth the data in an array to help eliminate noise and identify trends. The Simple Moving Average is literally the simplest form of a moving average. Each output value is the average of the previous n values. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. This makes it less responsive to recent changes in the data, which can be useful for filtering out those changes."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"sma [-l N_LENGTH] [-o N_OFFSET]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_length"}),(0,a.jsx)(t.td,{children:"Window lengths. Multiple values indicated as comma separated values."}),(0,a.jsx)(t.td,{children:"20, 50"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"n_offset"}),(0,a.jsx)(t.td,{children:"offset"}),(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"range(0, 100)"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311791-5b130d08-55bd-406b-a68e-914a733c5191.png",alt:"sma"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var a=n(5260),i=n(74848);function r(e){let{title:t}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const i={},r=a.createContext(i);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);