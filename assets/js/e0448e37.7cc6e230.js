"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67915],{97413:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>p});var r=o(74848),i=o(28453),s=o(62510);const n={},l="portfolio",a={id:"terminal/reference/portfolio/index",title:"portfolio",description:"<ReferenceCard",source:"@site/content/terminal/reference/portfolio/index.mdx",sourceDirName:"terminal/reference/portfolio",slug:"/terminal/reference/portfolio/",permalink:"/terminal/reference/portfolio/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/portfolio/index.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"search",permalink:"/terminal/reference/futures/search"},next:{title:"alloc",permalink:"/terminal/reference/portfolio/alloc"}},d={},p=[];function c(t){const e={h1:"h1",...(0,i.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"portfolio",children:"portfolio"}),"\n","\n",(0,r.jsxs)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6",children:[(0,r.jsx)(s.A,{title:"Brokers",description:"balances, history, holdings, movers, quote, account, deposits, history, orders, cancel, companynews, create, hold, lastnews, login, logout, lookup, paexport, pending, topnews, update, history, holdings",url:"portfolio/brokers"}),(0,r.jsx)(s.A,{title:"Po",description:"blacklitterman, dividend, ef, equal, file, herc, hrp, load, maxdecorr, maxdiv, maxret, maxsharpe, maxutil, minrisk, mktcap, nco, plot, property, relriskparity, riskparity, rpf, show, arg, load, save, set",url:"portfolio/po"}),(0,r.jsx)(s.A,{title:"Portfolio_analysis",description:"group, load, view",url:"portfolio/portfolio_analysis"}),(0,r.jsx)(s.A,{title:"alloc",description:"The page serves as a documentation for 'alloc' - a python function that",url:"portfolio/alloc"}),(0,r.jsx)(s.A,{title:"attrib",description:"The page provides detailed information on how to use the 'attrib' command",url:"portfolio/attrib"}),(0,r.jsx)(s.A,{title:"bench",description:"This page provides a detailed guideline on how to load in benchmarks",url:"portfolio/bench"}),(0,r.jsx)(s.A,{title:"distr",description:"This page provides information on how to compute the distribution of",url:"portfolio/distr"}),(0,r.jsx)(s.A,{title:"dret",description:"The dret page is about getting daily returns for specific periods. Users",url:"portfolio/dret"}),(0,r.jsx)(s.A,{title:"es",description:"This documentation page provides guidance on how to use the Expected",url:"portfolio/es"}),(0,r.jsx)(s.A,{title:"holdp",description:"A guide on how to use the holdp function to display holdings of assets",url:"portfolio/holdp"}),(0,r.jsx)(s.A,{title:"holdv",description:"The page provides detailed information on the usage, the required and",url:"portfolio/holdv"}),(0,r.jsx)(s.A,{title:"load",description:"The 'load' function allows users to load their portfolio transactions",url:"portfolio/load"}),(0,r.jsx)(s.A,{title:"maxdd",description:"This page provides a detailed guideline on how to use 'maxdd' command",url:"portfolio/maxdd"}),(0,r.jsx)(s.A,{title:"metric",description:"This page provides detailed instructions on how to display a chosen metric",url:"portfolio/metric"}),(0,r.jsx)(s.A,{title:"mret",description:"This page is about the mret tool that helps to calculate monthly returns.",url:"portfolio/mret"}),(0,r.jsx)(s.A,{title:"om",description:"A documentation page providing information about the om function that",url:"portfolio/om"}),(0,r.jsx)(s.A,{title:"perf",description:"The 'perf' function displays the performance metrics of both individual",url:"portfolio/perf"}),(0,r.jsx)(s.A,{title:"rbeta",description:"This page provides a detailed guide on the use of the 'rbeta' function",url:"portfolio/rbeta"}),(0,r.jsx)(s.A,{title:"rsharpe",description:"The page provides comprehensive instructions on how to use the 'rsharpe'",url:"portfolio/rsharpe"}),(0,r.jsx)(s.A,{title:"rvol",description:"Rvol page shows the rolling volatility portfolio versus benchmark. It",url:"portfolio/rvol"}),(0,r.jsx)(s.A,{title:"show",description:"This documentation page describes the 'show' command, which presents",url:"portfolio/show"}),(0,r.jsx)(s.A,{title:"summary",description:"The page provides a detailed guide on how to display a summary of portfolio",url:"portfolio/summary"}),(0,r.jsx)(s.A,{title:"var",description:"Learn how to calculate the Value at Risk (VaR) of your portfolio using",url:"portfolio/var"}),(0,r.jsx)(s.A,{title:"yret",description:"This page provides a guide on how to use the command 'yret' for determining",url:"portfolio/yret"})]})]})}function u(t={}){const{wrapper:e}={...(0,i.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(c,{...t})}):c(t)}},62510:(t,e,o)=>{o.d(e,{A:()=>l});var r=o(28774),i=o(34164),s=(o(96540),o(56347)),n=o(74848);function l(t){let{title:e,url:o,description:l,command:a}=t;const{pathname:d}=(0,s.zy)(),p=d.replace(/\/v\d+/,"");return(0,n.jsxs)(r.A,{className:(0,i.A)("rounded border-2 !no-underline border-grey-600 p-6 cursor-pointer relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-2xl",{header_docs_terminal:p.startsWith("/terminal"),"bg-gradient-to-r from-[#541c12] to-[rgba(84, 29, 19, 1)]":p.startsWith("/sdk")||p.startsWith("/cli")||p.startsWith("/platform"),"bg-gradient-to-r from-grey-800 to-purple-800":p.startsWith("/bot"),header_docs:!(p.startsWith("/terminal")||p.startsWith("/sdk")||p.startsWith("/platform")||p.startsWith("/bot")||p.startsWith("/cli"))}),to:o,children:[(0,n.jsx)("div",{className:"absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-black to-transparent"}),(0,n.jsxs)("p",{className:"py-2 font-bold text-lg my-0",children:[e,""]}),l?(0,n.jsx)("p",{className:"text-grey-200 text-xs mt-2 mb-0",children:l}):null]})}},28453:(t,e,o)=>{o.d(e,{R:()=>n,x:()=>l});var r=o(96540);const i={},s=r.createContext(i);function n(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function l(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:n(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);