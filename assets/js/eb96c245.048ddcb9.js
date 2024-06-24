"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60261],{71357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=n(74848),s=n(28453),i=n(94331);const r={title:"fraud",description:"An in-depth look at various statistical models for detecting fraud in a company's reported earnings. Includes discussions on the Beneish model, Zmijewski Score, and McKee Score; and use of different indices like Days Sales in Receivables Index, Gross Margin Index, Asset Quality Index, and more.",keywords:["Beneish model","Zmijewski Score","McKee Score","Days Sales in Receivables Index","Gross Margin Index","Asset Quality Index","Sales Growth Index","Depreciation Index","Sales General and Administrative Expenses Index","Leverage Index","Total Accruals to Total Assets","Fraud detection","Earnings manipulation"]},o=void 0,d={id:"terminal/reference/stocks/fa/fraud",title:"fraud",description:"An in-depth look at various statistical models for detecting fraud in a company's reported earnings. Includes discussions on the Beneish model, Zmijewski Score, and McKee Score; and use of different indices like Days Sales in Receivables Index, Gross Margin Index, Asset Quality Index, and more.",source:"@site/content/terminal/reference/stocks/fa/fraud.md",sourceDirName:"terminal/reference/stocks/fa",slug:"/terminal/reference/stocks/fa/fraud",permalink:"/openbb-docs/terminal/reference/stocks/fa/fraud",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/stocks/fa/fraud.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"fraud",description:"An in-depth look at various statistical models for detecting fraud in a company's reported earnings. Includes discussions on the Beneish model, Zmijewski Score, and McKee Score; and use of different indices like Days Sales in Receivables Index, Gross Margin Index, Asset Quality Index, and more.",keywords:["Beneish model","Zmijewski Score","McKee Score","Days Sales in Receivables Index","Gross Margin Index","Asset Quality Index","Sales Growth Index","Depreciation Index","Sales General and Administrative Expenses Index","Leverage Index","Total Accruals to Total Assets","Fraud detection","Earnings manipulation"]},sidebar:"tutorialSidebar",previous:{title:"enterprise",permalink:"/openbb-docs/terminal/reference/stocks/fa/enterprise"},next:{title:"growth",permalink:"/openbb-docs/terminal/reference/stocks/fa/growth"}},c={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function h(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.A,{title:"stocks/fa/fraud - Reference | OpenBB Terminal Docs"}),"\n",(0,a.jsx)(t.p,{children:"M-score: ------------------------------------------------ The Beneish model is a statistical model that uses financial ratios calculated with accounting data of a specific company in order to check if it is likely (high probability) that the reported earnings of the company have been manipulated. A score of -5 to -2.22 indicated a low chance of fraud, a score of -2.22 to -1.78 indicates a moderate change of fraud, and a score above -1.78 indicated a high chance of fraud.[Source: Wikipedia] DSRI: Days Sales in Receivables Index gauges whether receivables and revenue are out of balance, a large number is expected to be associated with a higher likelihood that revenues and earnings are overstated. GMI: Gross Margin Index shows if gross margins are deteriorating. Research suggests that firms with worsening gross margin are more likely to engage in earnings management, therefore there should be a positive correlation between GMI and probability of earnings management. AQI: Asset Quality Index measures the proportion of assets where potential benefit is less certain. A positive relation between AQI and earnings manipulation is expected. SGI: Sales Growth Index shows the amount of growth companies are having. Higher growth companies are more likely to commit fraud so there should be a positive relation between SGI and earnings management. DEPI: Depreciation Index is the ratio for the rate of depreciation. A DEPI greater than 1 shows that the depreciation rate has slowed and is positively correlated with earnings management. SGAI: Sales General and Administrative Expenses Index measures the change in SG&A over sales. There should be a positive relationship between SGAI and earnings management. LVGI: Leverage Index represents change in leverage. A LVGI greater than one indicates a lower change of fraud. TATA: Total Accruals to Total Assets is a proxy for the extent that cash underlies earnings. A higher number is associated with a higher likelihood of manipulation. Z-score: ------------------------------------------------ The Zmijewski Score is a bankruptcy model used to predict a firm's bankruptcy in two years. The ratio uses in the Zmijewski score were determined by probit analysis (think of probit as probability unit). In this case, scores less than .5 represent a higher probability of default. One of the criticisms that Zmijewski made was that other bankruptcy scoring models oversampled distressed firms and favored situations with more complete data.[Source: YCharts] McKee-score: ------------------------------------------------ The McKee Score is a bankruptcy model used to predict a firm's bankruptcy in one yearIt looks at a company's size, profitability, and liquidity to determine the probability.This model is 80% accurate in predicting bankruptcy."}),"\n",(0,a.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"fraud [-e] [-d]\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"}),(0,a.jsx)(t.th,{children:"Choices"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"exp"}),(0,a.jsx)(t.td,{children:"Shows an explanation for the metrics"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"detail"}),(0,a.jsx)(t.td,{children:"Shows the details for calculating the mscore"}),(0,a.jsx)(t.td,{children:"False"}),(0,a.jsx)(t.td,{children:"True"}),(0,a.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,a.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var a=n(5260),s=n(74848);function i(e){let{title:t}=e;return(0,s.jsx)(a.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);