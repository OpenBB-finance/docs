"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2737],{66025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var i=n(74848),s=n(28453),a=n(94331);const r={title:"stats",description:"Documentation for 'stats' query, providing base statistics about Uniswap, a decentralized exchange (DEX). The page includes usage instructions and examples of results including metrics like totalVolumeUSD, totalLiquidityUSD, pairCount, txCount, and totalLiquidityETH.",keywords:["Uniswap DEX","DEX statistics","crypto defi stats","volumeUSD","liquidityUSD","pairCount","txCount","liquidityETH","base statistics","theGraph.com","usage query","Uniswap metrics"]},o=void 0,c={id:"terminal/reference/crypto/defi/stats",title:"stats",description:"Documentation for 'stats' query, providing base statistics about Uniswap, a decentralized exchange (DEX). The page includes usage instructions and examples of results including metrics like totalVolumeUSD, totalLiquidityUSD, pairCount, txCount, and totalLiquidityETH.",source:"@site/content/terminal/reference/crypto/defi/stats.md",sourceDirName:"terminal/reference/crypto/defi",slug:"/terminal/reference/crypto/defi/stats",permalink:"/terminal/reference/crypto/defi/stats",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/defi/stats.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"stats",description:"Documentation for 'stats' query, providing base statistics about Uniswap, a decentralized exchange (DEX). The page includes usage instructions and examples of results including metrics like totalVolumeUSD, totalLiquidityUSD, pairCount, txCount, and totalLiquidityETH.",keywords:["Uniswap DEX","DEX statistics","crypto defi stats","volumeUSD","liquidityUSD","pairCount","txCount","liquidityETH","base statistics","theGraph.com","usage query","Uniswap metrics"]},sidebar:"tutorialSidebar",previous:{title:"sreturn",permalink:"/terminal/reference/crypto/defi/sreturn"},next:{title:"stvl",permalink:"/terminal/reference/crypto/defi/stvl"}},l={},u=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{title:"crypto/defi/stats - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsxs)(t.p,{children:["Display base statistics about Uniswap DEX. [Source: ",(0,i.jsx)(t.a,{href:"https://thegraph.com/en/",children:"https://thegraph.com/en/"}),"]"]}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"stats\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(t.p,{children:"This command has no parameters"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"2022 Feb 15, 06:33 (\ud83e\udd8b) /crypto/defi/ $ stats\n Uniswap DEX Base Statistics\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Metric            \u2502 Value  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 totalVolumeUSD    \u2502 393.2B \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 totalLiquidityUSD \u2502 3.3B   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 pairCount         \u2502 63.3K  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 txCount           \u2502 73.6M  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 totalLiquidityETH \u2502 1.1M   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>a});n(96540);var i=n(5260),s=n(74848);function a(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);