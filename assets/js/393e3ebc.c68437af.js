"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[76874],{69182:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=n(74848),r=n(28453),i=n(77968);const s={},o="EQUITY.FUNDAMENTAL",d={id:"excel/reference/equity/fundamental/index",title:"EQUITY.FUNDAMENTAL",description:"Commands",source:"@site/content/excel/reference/equity/fundamental/index.mdx",sourceDirName:"excel/reference/equity/fundamental",slug:"/excel/reference/equity/fundamental/",permalink:"/openbb-docs/excel/reference/equity/fundamental/",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/fundamental/index.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PRICE_TARGET",permalink:"/openbb-docs/excel/reference/equity/estimates/price_target"},next:{title:"BALANCE",permalink:"/openbb-docs/excel/reference/equity/fundamental/balance"}},c={},l=[{value:"Commands",id:"commands",level:3}];function m(e){const t={h1:"h1",h3:"h3",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"equityfundamental",children:"EQUITY.FUNDAMENTAL"}),"\n","\n",(0,a.jsx)(t.h3,{id:"commands",children:"Commands"}),"\n",(0,a.jsxs)("ul",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 -ml-6",children:[(0,a.jsx)(i.A,{title:"INCOME",description:"Get the income statement for a given company.",url:"fundamental/income",command:!0}),(0,a.jsx)(i.A,{title:"DIVIDENDS",description:"Get historical dividend data for a given company.",url:"fundamental/dividends",command:!0}),(0,a.jsx)(i.A,{title:"MANAGEMENT",description:"Get executive management team data for a given company.",url:"fundamental/management",command:!0}),(0,a.jsx)(i.A,{title:"HISTORICAL_SPLITS",description:"Get historical stock splits for a given company.",url:"fundamental/historical_splits",command:!0}),(0,a.jsx)(i.A,{title:"BALANCE",description:"Get the balance sheet for a given company.",url:"fundamental/balance",command:!0}),(0,a.jsx)(i.A,{title:"HISTORICAL_EPS",description:"Get historical earnings per share data for a given company.",url:"fundamental/historical_eps",command:!0}),(0,a.jsx)(i.A,{title:"METRICS",description:"Get fundamental metrics for a given company.",url:"fundamental/metrics",command:!0}),(0,a.jsx)(i.A,{title:"FILINGS",description:"Get the URLs to SEC filings reported to EDGAR database, such as 10-K, 10-Q, 8-K, and more. SEC...",url:"fundamental/filings",command:!0}),(0,a.jsx)(i.A,{title:"REVENUE_PER_GEOGRAPHY",description:"Get the revenue geographic breakdown for a given company over time.",url:"fundamental/revenue_per_geography",command:!0}),(0,a.jsx)(i.A,{title:"CASH",description:"Get the cash flow statement for a given company.",url:"fundamental/cash",command:!0}),(0,a.jsx)(i.A,{title:"REVENUE_PER_SEGMENT",description:"Get the revenue breakdown by business segment for a given company over time.",url:"fundamental/revenue_per_segment",command:!0}),(0,a.jsx)(i.A,{title:"RATIOS",description:"Get an extensive set of financial and accounting ratios for a given company over time.",url:"fundamental/ratios",command:!0}),(0,a.jsx)(i.A,{title:"TRANSCRIPT",description:"Get earnings call transcripts for a given company.",url:"fundamental/transcript",command:!0}),(0,a.jsx)(i.A,{title:"OVERVIEW",description:"Get company general business and stock data for a given company.",url:"fundamental/overview",command:!0})]})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},77968:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(28774),r=n(34164),i=(n(96540),n(56347)),s=n(51820),o=n(74848);function d(e){let{title:t,url:n,description:d,command:c}=e;const{pathname:l}=(0,i.zy)(),m=l.replace(/\/v\d+/,""),u=!m.includes("/reference")&&!m.includes("/widgets-library/")&&!m.includes("/data_models");return(0,o.jsxs)(a.A,{className:(0,r.A)("rounded border-2 hover:!text-black dark:hover:!text-white !no-underline p-6 cursor-pointer relative overflow-hidden hover:-translate-y-2 transform transition-all duration-300 ease-in-out font-bold shadow-md",{"hover:bg-[#669DCB] border-[#669DCB] dark:hover:bg-[#004A87] dark:border-[#004A87]":m.startsWith("/terminal")||m.startsWith("/pro"),"hover:bg-[#b186bb] border-[#b186bb] dark:hover:bg-[#3a204f] dark:border-[#3a204f]":m.startsWith("/bot"),"hover:bg-[#F5B166] border-[#F5B166] dark:hover:bg-[#511d11] dark:border-[#511d11]":m.startsWith("/sdk")||m.startsWith("/cli")||m.startsWith("/platform"),"hover:bg-[#16A34A] border-[#16A34A] dark:hover:bg-[#14532D] dark:border-[#14532D]":m.startsWith("/excel"),header_docs:!(m.startsWith("/terminal")||m.startsWith("/pro")||m.startsWith("/excel")||m.startsWith("/sdk")||m.startsWith("/platform")||m.startsWith("/bot")||m.startsWith("/cli"))}),to:n,children:[(0,o.jsx)("div",{className:"absolute top-0 right-0 left-0 bottom-0"}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsxs)("p",{className:"py-2 font-bold text-lg my-0",children:[t,""]}),u&&(0,o.jsx)(s.A,{className:"ml-auto mr-4"})]}),d?(0,o.jsx)("p",{className:"text-grey-900 dark:text-grey-200 text-xs font-medium mt-2 mb-0",children:d}):null]})}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var a=n(96540);const r={},i=a.createContext(r);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);