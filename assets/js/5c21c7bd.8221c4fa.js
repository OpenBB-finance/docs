"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41807],{57980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(74848),r=n(28453),d=n(94331);const a={title:"candle",description:"This page provides a detailed guide on the usage of the 'candle' command in Python, a tool for displaying historic stock data. It covers functionalities such as plot display, data sorting and trendline addition.",keywords:["candle command","historic stock data","data visualization","data sorting","trendlines","interactive plotly chart","moving average","log scale"]},i=void 0,o={id:"terminal/reference/stocks/candle",title:"candle",description:"This page provides a detailed guide on the usage of the 'candle' command in Python, a tool for displaying historic stock data. It covers functionalities such as plot display, data sorting and trendline addition.",source:"@site/content/terminal/reference/stocks/candle.md",sourceDirName:"terminal/reference/stocks",slug:"/terminal/reference/stocks/candle",permalink:"/openbb-docs/terminal/reference/stocks/candle",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/candle.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"candle",description:"This page provides a detailed guide on the usage of the 'candle' command in Python, a tool for displaying historic stock data. It covers functionalities such as plot display, data sorting and trendline addition.",keywords:["candle command","historic stock data","data visualization","data sorting","trendlines","interactive plotly chart","moving average","log scale"]},sidebar:"tutorialSidebar",previous:{title:"volume",permalink:"/openbb-docs/terminal/reference/stocks/ca/volume"},next:{title:"analyst",permalink:"/openbb-docs/terminal/reference/stocks/dd/analyst"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:"stocks/candle - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(t.p,{children:"Shows historic data for a stock"}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"candle [-p] [--sort {adjclose,open,close,high,low,volume,returns,logret}] [-r] [--raw] [-t] [--ma MOV_AVG] [--log]\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"}),(0,s.jsx)(t.th,{children:"Choices"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"plotly"}),(0,s.jsx)(t.td,{children:"Flag to show interactive plotly chart"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sort"}),(0,s.jsx)(t.td,{children:"Choose a column to sort by. Only works when raw data is displayed."}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"adjclose, open, close, high, low, volume, returns, logret"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"reverse"}),(0,s.jsx)(t.td,{children:"Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"raw"}),(0,s.jsx)(t.td,{children:"Shows raw data instead of chart."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"trendlines"}),(0,s.jsx)(t.td,{children:"Flag to add high and low trends to candle"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"mov_avg"}),(0,s.jsx)(t.td,{children:"Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1."}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"logy"}),(0,s.jsx)(t.td,{children:"Plot with y axis on log scale"}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"}),(0,s.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://user-images.githubusercontent.com/46355364/154072214-f4b49833-157f-44a7-be2d-d558ffc6f945.png",alt:"candle"})}),"\n",(0,s.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(5260),r=n(74848);function d(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(96540);const r={},d=s.createContext(r);function a(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);