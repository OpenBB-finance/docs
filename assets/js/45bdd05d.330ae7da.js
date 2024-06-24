"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[69211],{85653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(74848),a=t(28453),r=t(94331);const i={title:"season",description:"Meta description for the 'season' function in Docusaurus. This function helps to display and understand the seasonality for a given column in a dataset, providing options for customization such as time lag, maximal lag order, and confidence interval.",keywords:["docusaurus","season","dataset","seasonality","time lag","maximal lag order","confidence interval","data visualization"]},o=void 0,d={id:"terminal/reference/forecast/season",title:"season",description:"Meta description for the 'season' function in Docusaurus. This function helps to display and understand the seasonality for a given column in a dataset, providing options for customization such as time lag, maximal lag order, and confidence interval.",source:"@site/content/terminal/reference/forecast/season.md",sourceDirName:"terminal/reference/forecast",slug:"/terminal/reference/forecast/season",permalink:"/terminal/reference/forecast/season",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/forecast/season.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719239402e3,frontMatter:{title:"season",description:"Meta description for the 'season' function in Docusaurus. This function helps to display and understand the seasonality for a given column in a dataset, providing options for customization such as time lag, maximal lag order, and confidence interval.",keywords:["docusaurus","season","dataset","seasonality","time lag","maximal lag order","confidence interval","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"rwd",permalink:"/terminal/reference/forecast/rwd"},next:{title:"seasonalnaive",permalink:"/terminal/reference/forecast/seasonalnaive"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"forecast /season - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.p,{children:"The seasonality for a given column"}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"season [-v {}] [-m M] [--max_lag MAX_LAG] [-a ALPHA]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Choices"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"values"}),(0,s.jsx)(n.td,{children:"Dataset.column values to be displayed in a plot"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"m"}),(0,s.jsx)(n.td,{children:"A time lag to highlight on the plot"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"max_lag"}),(0,s.jsx)(n.td,{children:"The maximal lag order to consider"}),(0,s.jsx)(n.td,{children:"24"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"alpha"}),(0,s.jsx)(n.td,{children:"The confidence interval to display"}),(0,s.jsx)(n.td,{children:"0.05"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"(\ud83e\udd8b) /forecast/ $ load TSLA.csv\n\n(\ud83e\udd8b) /forecast/ $ season TSLA.volume\nTODO: screen shot\n"})}),"\n",(0,s.jsx)(n.hr,{})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),a=t(74848);function r(e){let{title:n}=e;return(0,a.jsx)(s.A,{children:(0,a.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);