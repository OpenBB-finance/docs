"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9004],{24104:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=n(74848),r=n(28453),s=n(94331);const i={title:"gamma",description:"This docusaurus page provides insights about the usage of gamma command which allows the user to view the Options Gamma Levels for a particular stock. This can be crucial to make informed trading decisions.",keywords:["Options Gamma Levels","Zero Gamma","Put Wall","Call Wall","Gamma command","underlying stock price changes"]},o=void 0,c={id:"bot/reference/telegram/options/gamma",title:"gamma",description:"This docusaurus page provides insights about the usage of gamma command which allows the user to view the Options Gamma Levels for a particular stock. This can be crucial to make informed trading decisions.",source:"@site/content/bot/reference/telegram/options/gamma.md",sourceDirName:"bot/reference/telegram/options",slug:"/bot/reference/telegram/options/gamma",permalink:"/openbb-docs/bot/reference/telegram/options/gamma",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/bot/reference/telegram/options/gamma.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"gamma",description:"This docusaurus page provides insights about the usage of gamma command which allows the user to view the Options Gamma Levels for a particular stock. This can be crucial to make informed trading decisions.",keywords:["Options Gamma Levels","Zero Gamma","Put Wall","Call Wall","Gamma command","underlying stock price changes"]},sidebar:"tutorialSidebar",previous:{title:"equitypc",permalink:"/openbb-docs/bot/reference/telegram/options/equitypc"},next:{title:"highiv",permalink:"/openbb-docs/bot/reference/telegram/options/highiv"}},l={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"options: gamma - Telegram Reference | OpenBB Bot Docs"}),"\n",(0,a.jsx)(t.p,{children:"This command allows the user to view the Options Gamma Levels for a particular stock. Options Gamma Levels are important to understanding the rate of change for the option's Delta when the underlying stock price changes. Knowing this information can help traders make informed decisions about which options to purchase."}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Zero Gamma"}),(0,a.jsx)(t.td,{children:"Point closest to net zero of Call and Put Gamma"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Put Wall"}),(0,a.jsx)(t.td,{children:"Strike with the largest NET Put Gamma"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Call Wall"}),(0,a.jsx)(t.td,{children:"Strike with the largest NET Call Gamma"})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"/gamma ticker [expiry]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ticker"}),(0,a.jsx)(t.td,{children:"Stock Ticker"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"expiry"}),(0,a.jsx)(t.td,{children:"Gamma from now until expiry"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"/gamma AMD\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"/gamma AMD 2022-07-29\n"})}),"\n",(0,a.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(5260),r=n(74848);function s(e){let{title:t}=e;return(0,r.jsx)(a.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(96540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);