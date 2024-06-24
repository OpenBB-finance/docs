"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79917],{43287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=n(74848),a=n(28453),s=n(94331);const i={title:"kc",description:"In-depth explanation and usage of the KC function for Keltner Channels; including parameters, and how to utilize it to determine trend direction through volatility-based bands.",keywords:["Keltner Channels","volatility-based bands","asset's price","average true range","ATR","volatility","trend direction","kc","n_length","n_scalar","s_mamode","n_offset"]},d=void 0,c={id:"terminal/reference/stocks/ta/kc",title:"kc",description:"In-depth explanation and usage of the KC function for Keltner Channels; including parameters, and how to utilize it to determine trend direction through volatility-based bands.",source:"@site/content/terminal/reference/stocks/ta/kc.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/kc",permalink:"/terminal/reference/stocks/ta/kc",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/ta/kc.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"kc",description:"In-depth explanation and usage of the KC function for Keltner Channels; including parameters, and how to utilize it to determine trend direction through volatility-based bands.",keywords:["Keltner Channels","volatility-based bands","asset's price","average true range","ATR","volatility","trend direction","kc","n_length","n_scalar","s_mamode","n_offset"]},sidebar:"tutorialSidebar",previous:{title:"hma",permalink:"/terminal/reference/stocks/ta/hma"},next:{title:"load",permalink:"/terminal/reference/stocks/ta/load"}},l={},o=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"stocks/ta/kc - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Keltner Channels are volatility-based bands that are placed on either side of an asset's price and can aid in determining the direction of a trend.The Keltner channel uses the average true range (ATR) or volatility, with breaks above or below the top and bottom barriers signaling a continuation."}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"kc [-l N_LENGTH] [-s N_SCALAR] [-m {ema,sma,wma,hma,zlma}] [-o N_OFFSET]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_length"}),(0,r.jsx)(t.td,{children:"Window length"}),(0,r.jsx)(t.td,{children:"20"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_scalar"}),(0,r.jsx)(t.td,{children:"scalar"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"s_mamode"}),(0,r.jsx)(t.td,{children:"mamode"}),(0,r.jsx)(t.td,{children:"ema"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"ema, sma, wma, hma, zlma"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"n_offset"}),(0,r.jsx)(t.td,{children:"offset"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154311120-a769ee53-901b-401f-907f-cacac43ee9b9.png",alt:"kc"})}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);