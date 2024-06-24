"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7125],{35475:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(74848),a=n(28453),s=n(94331);const i={title:"recom",description:"This documentation page outlines the use of a Python command-line tool that prints Tradingview recommendations for various stock exchanges based on selected technical indicators. It also covers the usage, parameters, and provides examples of applicable scripts with their outputs.",keywords:["Tradingview recommendation","Technical indicators","Script","Stock exchange","Python command-line tool","Forex","Crypto","Screener","Stocks"]},o=void 0,c={id:"terminal/reference/stocks/ta/recom",title:"recom",description:"This documentation page outlines the use of a Python command-line tool that prints Tradingview recommendations for various stock exchanges based on selected technical indicators. It also covers the usage, parameters, and provides examples of applicable scripts with their outputs.",source:"@site/content/terminal/reference/stocks/ta/recom.md",sourceDirName:"terminal/reference/stocks/ta",slug:"/terminal/reference/stocks/ta/recom",permalink:"/openbb-docs/terminal/reference/stocks/ta/recom",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/ta/recom.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"recom",description:"This documentation page outlines the use of a Python command-line tool that prints Tradingview recommendations for various stock exchanges based on selected technical indicators. It also covers the usage, parameters, and provides examples of applicable scripts with their outputs.",keywords:["Tradingview recommendation","Technical indicators","Script","Stock exchange","Python command-line tool","Forex","Crypto","Screener","Stocks"]},sidebar:"tutorialSidebar",previous:{title:"obv",permalink:"/openbb-docs/terminal/reference/stocks/ta/obv"},next:{title:"rsi",permalink:"/openbb-docs/terminal/reference/stocks/ta/rsi"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.A,{title:"stocks/ta/recom - Reference | OpenBB Terminal Docs"}),"\n",(0,r.jsx)(t.p,{children:"Print tradingview recommendation based on technical indicators. [Source: Tradingview]"}),"\n",(0,r.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"recom [-s {australia,brazil,cfd,crypto,euronext,forex,france,germany,hongkong,india,indonesia,malaysia,philippines,russia,ksa,rsa,korea,spain,sweden,taiwan,thailand,turkey,uk,america,vietnam}] [-e EXCHANGE] [-i {1m,5m,15m,1h,4h,1d,1W,1M}]\n"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Name"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default"}),(0,r.jsx)(t.th,{children:"Optional"}),(0,r.jsx)(t.th,{children:"Choices"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"screener"}),(0,r.jsxs)(t.td,{children:["Screener. See ",(0,r.jsx)(t.a,{href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html",children:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"})]}),(0,r.jsx)(t.td,{children:"america"}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"australia, brazil, cfd, crypto, euronext, forex, france, germany, hongkong, india, indonesia, malaysia, philippines, russia, ksa, rsa, korea, spain, sweden, taiwan, thailand, turkey, uk, america, vietnam"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"exchange"}),(0,r.jsxs)(t.td,{children:["Set exchange. For Forex use: 'FX_IDC', and for crypto use 'TVC'. See ",(0,r.jsx)(t.a,{href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html",children:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"}),". By default Alpha Vantage tries to get this data from the ticker."]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"None"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"interval"}),(0,r.jsxs)(t.td,{children:["Interval, that corresponds to the recommendation given by tradingview based on technical indicators. See ",(0,r.jsx)(t.a,{href:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html",children:"https://python-tradingview-ta.readthedocs.io/en/latest/usage.html"})]}),(0,r.jsx)(t.td,{}),(0,r.jsx)(t.td,{children:"True"}),(0,r.jsx)(t.td,{children:"1m, 5m, 15m, 1h, 4h, 1d, 1W, 1M"})]})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"2022 Feb 16, 11:31 (\ud83e\udd8b) /stocks/ta/ $ recom\n               Ticker Recommendation\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503         \u2503 RECOMMENDATION \u2503 BUY \u2503 SELL \u2503 NEUTRAL \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 1 month \u2502 BUY            \u2502 15  \u2502 2    \u2502 9       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1 week  \u2502 BUY            \u2502 14  \u2502 2    \u2502 10      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1 day   \u2502 SELL           \u2502 5   \u2502 13   \u2502 8       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 4 hours \u2502 SELL           \u2502 4   \u2502 14   \u2502 8       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1 hour  \u2502 SELL           \u2502 4   \u2502 13   \u2502 9       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 15 min  \u2502 SELL           \u2502 3   \u2502 13   \u2502 10      \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 5 min   \u2502 SELL           \u2502 5   \u2502 12   \u2502 9       \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 1 min   \u2502 SELL           \u2502 6   \u2502 11   \u2502 9       \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var r=n(5260),a=n(74848);function s(e){let{title:t}=e;return(0,a.jsx)(r.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(96540);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);