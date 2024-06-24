"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31013],{69013:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(74848),r=t(28453),i=t(94331);const s={title:"kurtosis",description:"This documentation page provides information on how to get the kurtosis for portfolio and benchmark selected using the OpenBB finance portfolio engine. The page contains source code, parameters, return types and examples.",keywords:["OpenBB finance portfolio engine","portfolio metrics","kurtosis","portfolio and benchmark","data analysis","PortfolioEngine class instance","portfolio load"]},l=void 0,a={id:"sdk/reference/portfolio/metric/kurtosis",title:"kurtosis",description:"This documentation page provides information on how to get the kurtosis for portfolio and benchmark selected using the OpenBB finance portfolio engine. The page contains source code, parameters, return types and examples.",source:"@site/content/sdk/reference/portfolio/metric/kurtosis.md",sourceDirName:"sdk/reference/portfolio/metric",slug:"/sdk/reference/portfolio/metric/kurtosis",permalink:"/openbb-docs/sdk/reference/portfolio/metric/kurtosis",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/metric/kurtosis.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"kurtosis",description:"This documentation page provides information on how to get the kurtosis for portfolio and benchmark selected using the OpenBB finance portfolio engine. The page contains source code, parameters, return types and examples.",keywords:["OpenBB finance portfolio engine","portfolio metrics","kurtosis","portfolio and benchmark","data analysis","PortfolioEngine class instance","portfolio load"]},sidebar:"tutorialSidebar",previous:{title:"kelly",permalink:"/openbb-docs/sdk/reference/portfolio/metric/kelly"},next:{title:"maxdrawdown",permalink:"/openbb-docs/sdk/reference/portfolio/metric/maxdrawdown"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const o={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"portfolio.metric.kurtosis - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(o.p,{children:"Get kurtosis for portfolio and benchmark selected"}),"\n",(0,n.jsxs)(o.p,{children:["Source Code: [",(0,n.jsx)(o.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1032",children:"link"}),"]"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"openbb.portfolio.metric.kurtosis(portfolio_engine: portfolio_engine.PortfolioEngine)\n"})}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Name"}),(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"}),(0,n.jsx)(o.th,{children:"Default"}),(0,n.jsx)(o.th,{children:"Optional"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"portfolio_engine"}),(0,n.jsx)(o.td,{children:"PortfolioEngine"}),(0,n.jsxs)(o.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(o.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(o.td,{children:"None"}),(0,n.jsx)(o.td,{children:"False"})]})})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Type"}),(0,n.jsx)(o.th,{children:"Description"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"pd.DataFrame"}),(0,n.jsx)(o.td,{children:"DataFrame with kurtosis for portfolio and benchmark for different periods"})]})})]}),"\n",(0,n.jsx)(o.hr,{}),"\n",(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.metric.kurtosis(p)\n'})}),"\n",(0,n.jsx)(o.hr,{})]})}function h(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,o,t)=>{t.d(o,{A:()=>i});t(96540);var n=t(5260),r=t(74848);function i(e){let{title:o}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:o})})}},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>l});var n=t(96540);const r={},i=n.createContext(r);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);