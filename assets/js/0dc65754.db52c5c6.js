"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60859],{69921:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var t=i(74848),o=i(28453);const s={title:"v2.3.0",version:"2.3.0",date:new Date("2023-01-31T00:00:00.000Z"),description:"v2.3.0",sidebar_position:106},l=void 0,a={id:"terminal/changelog/version2_3_0",title:"v2.3.0",description:"v2.3.0",source:"@site/content/terminal/changelog/version2_3_0.mdx",sourceDirName:"terminal/changelog",slug:"/terminal/changelog/version2_3_0",permalink:"/openbb-docs/terminal/changelog/version2_3_0",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/changelog/version2_3_0.mdx",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,sidebarPosition:106,frontMatter:{title:"v2.3.0",version:"2.3.0",date:"2023-01-31T00:00:00.000Z",description:"v2.3.0",sidebar_position:106},sidebar:"tutorialSidebar",previous:{title:"v2.3.1",permalink:"/openbb-docs/terminal/changelog/version2_3_1"},next:{title:"v2.2.0",permalink:"/openbb-docs/terminal/changelog/version2_2_0"}},r={},d=[{value:"What&#39;s new",id:"whats-new",level:2},{value:"What&#39;s changed",id:"whats-changed",level:2}];function c(e){const n={code:"code",h2:"h2",li:"li",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"whats-new",children:"What's new"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"New stocks filings function"}),"\n",(0,t.jsx)(n.li,{children:"Quantile anomaly detection in forecasting menu"}),"\n",(0,t.jsx)(n.li,{children:"Ability to save data to specific excel sheets"}),"\n",(0,t.jsx)(n.li,{children:"File location for presets adjusted and examples added"}),"\n",(0,t.jsx)(n.li,{children:"Updated yfinance and starting to chip away at the deprecated functions there"}),"\n",(0,t.jsx)(n.li,{children:"General bug fixing and enhancements"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"whats-changed",children:"What's changed"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Adds end date to ",(0,t.jsx)(n.code,{children:"forex/load"})," (#4077) @hjoaquim"]}),"\n",(0,t.jsx)(n.li,{children:"Hotfix/Windows-CLI (#4087) @tehcoderer"}),"\n",(0,t.jsxs)(n.li,{children:["Adds auto completion to ",(0,t.jsx)(n.code,{children:"news"})," (#4089) @hjoaquim"]}),"\n",(0,t.jsx)(n.li,{children:"Update commands with --sheet-name that didn't work (#4088) @JerBouma"}),"\n",(0,t.jsxs)(n.li,{children:["Improve the ",(0,t.jsx)(n.code,{children:"stocks/search"})," command (#4084) @JerBouma"]}),"\n",(0,t.jsx)(n.li,{children:"Update the routine, portfolio and screener files and adjust the documentation (#4021) @JerBouma"}),"\n",(0,t.jsx)(n.li,{children:"Add keywords and descriptions to basics, intros and advanced guides (#4052) @JerBouma"}),"\n",(0,t.jsx)(n.li,{children:"Nightly Build Optimization (#4073) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Fix UK Economy/Macro Y10YD bug (#4078) @montezdesousa"}),"\n",(0,t.jsx)(n.li,{children:"Fix incorrect column label in nasdaq_model.py (#4063) @peter-oroszvari"}),"\n",(0,t.jsxs)(n.li,{children:["SDK Docs: Clarifies the ",(0,t.jsx)(n.code,{children:"Stocks.CA.Balance"})," example by including, ",(0,t.jsx)(n.code,{children:"timeframe = '2021'"})," (#4072) @deeleeramone"]}),"\n",(0,t.jsx)(n.li,{children:"Bumping yfinance to 0.2.9 and updating ruff (#4059) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Refactor requests throughout (#4033) @jmaslek"}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"openbb.economy.fred_ids"})," to always return dataframe (#4058) @hjoaquim"]}),"\n",(0,t.jsx)(n.li,{children:"Upgrade dependencies for bug and for security vulnerabilities. (#4031) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Copy paste all the sheet names (#4035) @JerBouma"}),"\n",(0,t.jsxs)(n.li,{children:["Refactor ",(0,t.jsx)(n.code,{children:"stocks/options/voi,vol,oi,chains"})," (#4017) @hjoaquim"]}),"\n",(0,t.jsx)(n.li,{children:"Avoid running build on hotfix branches (#4048) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Feature/release branch gitflow (#4034) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Deprecate reddit commands taking too long to connect to PushshiftAPI (#3999) @montezdesousa"}),"\n",(0,t.jsx)(n.li,{children:"Hotfix/fix integration tests (#4025) @hjoaquim"}),"\n",(0,t.jsx)(n.li,{children:"Hotfix/fix equity reports (#4029) @tehcoderer"}),"\n",(0,t.jsx)(n.li,{children:"Small typo in docs (#4036) @jose-donato"}),"\n",(0,t.jsxs)(n.li,{children:["Fix terminal exit after ",(0,t.jsx)(n.code,{children:"--sort p/e"})," (#4013) @montezdesousa"]}),"\n",(0,t.jsx)(n.li,{children:"Add back pull request to linting action (#4032) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Hotfix --\x3e develop (#4027) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Quantile Anomaly Detection on Timeseries (#3980) @martinb-bb"}),"\n",(0,t.jsx)(n.li,{children:"Feature/excel sheets (#4023) @jmaslek"}),"\n",(0,t.jsx)(n.li,{children:"Feature - Added Integration Test Automation (#4019) @luqmanbello"}),"\n",(0,t.jsx)(n.li,{children:"Adds filings function to the Stocks menu (#3910) @deeleeramone"}),"\n",(0,t.jsx)(n.li,{children:"merge the release changes into develop (#4016) @jmaslek"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(96540);const o={},s=t.createContext(o);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);