"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96861],{30344:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var n=s(74848),i=s(28453),o=s(94331);const r={title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",keywords:["option chains","parameters","python usage","call options","put options","strike price","ask size","bid size","volume","open interest","delta","gamma","theta","vega","ask iv","bid iv","mid iv"]},a=void 0,d={id:"terminal/reference/stocks/options/chains",title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",source:"@site/content/terminal/reference/stocks/options/chains.md",sourceDirName:"terminal/reference/stocks/options",slug:"/terminal/reference/stocks/options/chains",permalink:"/openbb-docs/terminal/reference/stocks/options/chains",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/options/chains.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"chains",description:"Detailed guide on how to display option chains with python usage. Documentation includes parameters for call options, put options, strike price, ask size, bid size, volume, open interest and others, along with their default values and options.",keywords:["option chains","parameters","python usage","call options","put options","strike price","ask size","bid size","volume","open interest","delta","gamma","theta","vega","ask iv","bid iv","mid iv"]},sidebar:"tutorialSidebar",previous:{title:"calc",permalink:"/openbb-docs/terminal/reference/stocks/options/calc"},next:{title:"exp",permalink:"/openbb-docs/terminal/reference/stocks/options/exp"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"stocks/options/chains - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(t.p,{children:"Display option chains"}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"chains [-c] [-p] [-m MIN_SP] [-M MAX_SP] [-d TO_DISPLAY]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"calls"}),(0,n.jsx)(t.td,{children:"Flag to show calls only"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"puts"}),(0,n.jsx)(t.td,{children:"Flag to show puts only"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"min_sp"}),(0,n.jsx)(t.td,{children:"minimum strike price to consider."}),(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"max_sp"}),(0,n.jsx)(t.td,{children:"maximum strike price to consider."}),(0,n.jsx)(t.td,{children:"-1"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"to_display"}),(0,n.jsx)(t.td,{children:"(tradier only) Columns to look at. Columns can be: bid, ask, strike, bidsize, asksize, volume, open_interest, delta, gamma, theta, vega, ask_iv, bid_iv, mid_iv. E.g. 'bid,ask,strike'"}),(0,n.jsx)(t.td,{children:"mid_iv, vega, delta, gamma, theta, volume, open_interest, bid, ask"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>o});s(96540);var n=s(5260),i=s(74848);function o(e){let{title:t}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);