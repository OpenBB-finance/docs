"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3514],{77682:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var n=o(74848),r=o(28453),s=o(94331);const l={title:"es",description:"Learn how to use the openbb.portfolio.es function to calculate the portfolio expected shortfall. It allows the use of different distributions and custom percentiles.",keywords:["openbb.portfolio.es","Portfolio expected shortfall","PortfolioEngine class","Calculations on portfolio","Portfolio distributions","Portfolio percentiles","openbb.portfolio.load","Portfolio examples","Python portfolio calculations"]},i=void 0,d={id:"sdk/reference/portfolio/es",title:"es",description:"Learn how to use the openbb.portfolio.es function to calculate the portfolio expected shortfall. It allows the use of different distributions and custom percentiles.",source:"@site/content/sdk/reference/portfolio/es.md",sourceDirName:"sdk/reference/portfolio",slug:"/sdk/reference/portfolio/es",permalink:"/openbb-docs/sdk/reference/portfolio/es",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/portfolio/es.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"es",description:"Learn how to use the openbb.portfolio.es function to calculate the portfolio expected shortfall. It allows the use of different distributions and custom percentiles.",keywords:["openbb.portfolio.es","Portfolio expected shortfall","PortfolioEngine class","Calculations on portfolio","Portfolio distributions","Portfolio percentiles","openbb.portfolio.load","Portfolio examples","Python portfolio calculations"]},sidebar:"tutorialSidebar",previous:{title:"dret",permalink:"/openbb-docs/sdk/reference/portfolio/dret"},next:{title:"holdp",permalink:"/openbb-docs/sdk/reference/portfolio/holdp"}},c={},a=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"portfolio.es - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get portfolio expected shortfall"}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_model.py#L1797",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.portfolio.es(portfolio_engine: portfolio_engine.PortfolioEngine, use_mean: bool = False, distribution: str = "normal", percentile: float = 99.9)\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"portfolio_engine"}),(0,n.jsx)(t.td,{children:"PortfolioEngine"}),(0,n.jsxs)(t.td,{children:["PortfolioEngine class instance, this will hold transactions and perform calculations.",(0,n.jsx)("br",{}),"Use ",(0,n.jsx)(t.code,{children:"portfolio.load"})," to create a PortfolioEngine."]}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"use_mean"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"if one should use the data mean return"}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"distribution"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"choose distribution to use: logistic, laplace, normal"}),(0,n.jsx)(t.td,{children:"normal"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"percentile"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"es percentile (%)"}),(0,n.jsx)(t.td,{children:"99.9"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame with portfolio expected shortfall"})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.load("openbb_terminal/miscellaneous/portfolio_examples/holdings/example.csv")\noutput = openbb.portfolio.es(p)\n'})}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,o)=>{o.d(t,{A:()=>s});o(96540);var n=o(5260),r=o(74848);function s(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>i});var n=o(96540);const r={},s=n.createContext(r);function l(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);