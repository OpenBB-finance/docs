"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5144],{20664:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(74848),r=s(28453),a=s(94331);const o={title:"load",description:"This page provides comprehensive instructions and details on how to load stock ticker for market analysis, using various parameters. Details on how to choose the starting and ending date, intraday stock minutes, pre and post market hours are provided. There are also instructions on how to load custom files and specific frequency data such as monthly or weekly.",keywords:["stock ticker","market analysis","intraday stock","prepost market","load stock data","analysis parameters","data frequency","load custom file","SBIN.NS","Indian ticker","monthly data","weekly data"]},d=void 0,i={id:"terminal/reference/stocks/gov/load",title:"load",description:"This page provides comprehensive instructions and details on how to load stock ticker for market analysis, using various parameters. Details on how to choose the starting and ending date, intraday stock minutes, pre and post market hours are provided. There are also instructions on how to load custom files and specific frequency data such as monthly or weekly.",source:"@site/content/terminal/reference/stocks/gov/load.md",sourceDirName:"terminal/reference/stocks/gov",slug:"/terminal/reference/stocks/gov/load",permalink:"/openbb-docs/terminal/reference/stocks/gov/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/gov/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"load",description:"This page provides comprehensive instructions and details on how to load stock ticker for market analysis, using various parameters. Details on how to choose the starting and ending date, intraday stock minutes, pre and post market hours are provided. There are also instructions on how to load custom files and specific frequency data such as monthly or weekly.",keywords:["stock ticker","market analysis","intraday stock","prepost market","load stock data","analysis parameters","data frequency","load custom file","SBIN.NS","Indian ticker","monthly data","weekly data"]},sidebar:"tutorialSidebar",previous:{title:"lasttrades",permalink:"/openbb-docs/terminal/reference/stocks/gov/lasttrades"},next:{title:"lobbying",permalink:"/openbb-docs/terminal/reference/stocks/gov/lobbying"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"stocks/gov/load - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsxs)(t.p,{children:["Load stock ticker to perform analysis on. When the data source is syf', an Indian ticker can be loaded by using '.NS' at the end, e.g. 'SBIN.NS'. See available market in ",(0,n.jsx)(t.a,{href:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html",children:"https://help.yahoo.com/kb/exchanges-data-providers-yahoo-finance-sln2310.html"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"load -t TICKER [-s START] [-e END] [-i {1,5,15,30,60}] [-p] [-f FILEPATH] [-m] [-w] [-r {ytd,1y,2y,5y,6m}]\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"}),(0,n.jsx)(t.th,{children:"Choices"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"ticker"}),(0,n.jsx)(t.td,{children:"Stock ticker"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start"}),(0,n.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the stock"}),(0,n.jsx)(t.td,{children:"2019-11-21"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end"}),(0,n.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the stock"}),(0,n.jsx)(t.td,{children:"2022-11-25"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"interval"}),(0,n.jsx)(t.td,{children:"Intraday stock minutes"}),(0,n.jsx)(t.td,{children:"1440"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"1, 5, 15, 30, 60"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"prepost"}),(0,n.jsx)(t.td,{children:"Pre/After market hours. Only works for 'yf' source, and intraday data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filepath"}),(0,n.jsx)(t.td,{children:"Path to load custom file."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"monthly"}),(0,n.jsx)(t.td,{children:"Load monthly data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"weekly"}),(0,n.jsx)(t.td,{children:"Load weekly data"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"}),(0,n.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>a});s(96540);var n=s(5260),r=s(74848);function a(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>d});var n=s(96540);const r={},a=n.createContext(r);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);