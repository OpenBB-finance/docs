"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9894],{84506:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(74848),r=t(28453),i=t(94331);const o={title:"panel",description:"The documentation page provides a comprehensive guide to performing regression analysis on Panel Data using the 'panel' command in Python. It includes information about the usage, command parameters and the type of regression analysis you can perform.",keywords:["panel data regression","data analysis","regression analysis","Pooled OLS","Random Effects","Between OLS","Fixed Effects","First Difference OLS","entity effects","time effects"]},a=void 0,d={id:"terminal/reference/econometrics/panel",title:"panel",description:"The documentation page provides a comprehensive guide to performing regression analysis on Panel Data using the 'panel' command in Python. It includes information about the usage, command parameters and the type of regression analysis you can perform.",source:"@site/content/terminal/reference/econometrics/panel.md",sourceDirName:"terminal/reference/econometrics",slug:"/terminal/reference/econometrics/panel",permalink:"/terminal/reference/econometrics/panel",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/econometrics/panel.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"panel",description:"The documentation page provides a comprehensive guide to performing regression analysis on Panel Data using the 'panel' command in Python. It includes information about the usage, command parameters and the type of regression analysis you can perform.",keywords:["panel data regression","data analysis","regression analysis","Pooled OLS","Random Effects","Between OLS","Fixed Effects","First Difference OLS","entity effects","time effects"]},sidebar:"tutorialSidebar",previous:{title:"ols",permalink:"/terminal/reference/econometrics/ols"},next:{title:"plot",permalink:"/terminal/reference/econometrics/plot"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"econometrics /panel - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.p,{children:"Performs regression analysis on Panel Data. There are a multitude of options to select from to fit the needs of restrictions of the dataset."}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"panel -d DEPENDENT -i INDEPENDENT [-r {pols,re,bols,fe,fdols,POLS,RE,BOLS,FE,FDOLS}] [-e] [-t]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Choices"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dependent"}),(0,s.jsx)(n.td,{children:"The dependent variable on the regression you would like to perform"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"independent"}),(0,s.jsx)(n.td,{children:"The independent variables on the regression you would like to perform. E.g. wage_panel.married,wage_panel.union"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"type"}),(0,s.jsx)(n.td,{children:"The type of regression you wish to perform. This can be either pols (Pooled OLS), re (Random Effects), bols (Between OLS), fe (Fixed Effects) or fdols (First Difference OLS)"}),(0,s.jsx)(n.td,{children:"pols"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"pols, re, bols, fe, fdols, POLS, RE, BOLS, FE, FDOLS"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"entity_effects"}),(0,s.jsx)(n.td,{children:"Using this command creates entity effects, which is equivalent to including dummies for each entity. This is only used within Fixed Effects estimations (when type is set to 'fe')"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"time_effects"}),(0,s.jsx)(n.td,{children:"Using this command creates time effects, which is equivalent to including dummies for each time. This is only used within Fixed Effects estimations (when type is set to 'fe')"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(n.hr,{})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(5260),r=t(74848);function i(e){let{title:n}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);