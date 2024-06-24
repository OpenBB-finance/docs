"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67923],{60671:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(74848),a=t(28453),r=t(94331);const i={title:"load",description:"This page provides a guide on how to load an Exchange Traded Fund (ETF) ticker to perform analysis. It includes the usage, parameters such as ticker, start date, end date and limit of holdings. The page also includes examples of how to use the load feature.",keywords:["load","ETF","analysis","parameters","date","holdings","Yahoo Finance","StockAnalysis"]},o=void 0,d={id:"terminal/reference/etf/load",title:"load",description:"This page provides a guide on how to load an Exchange Traded Fund (ETF) ticker to perform analysis. It includes the usage, parameters such as ticker, start date, end date and limit of holdings. The page also includes examples of how to use the load feature.",source:"@site/content/terminal/reference/etf/load.md",sourceDirName:"terminal/reference/etf",slug:"/terminal/reference/etf/load",permalink:"/openbb-docs/terminal/reference/etf/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/etf/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"load",description:"This page provides a guide on how to load an Exchange Traded Fund (ETF) ticker to perform analysis. It includes the usage, parameters such as ticker, start date, end date and limit of holdings. The page also includes examples of how to use the load feature.",keywords:["load","ETF","analysis","parameters","date","holdings","Yahoo Finance","StockAnalysis"]},sidebar:"tutorialSidebar",previous:{title:"gainers",permalink:"/openbb-docs/terminal/reference/etf/disc/gainers"},next:{title:"news",permalink:"/openbb-docs/terminal/reference/etf/news"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"etf /load - Reference | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.p,{children:"Load ETF ticker to perform analysis on."}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"load -t TICKER [-s START] [-e END] [-l LIMIT]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"}),(0,s.jsx)(n.th,{children:"Choices"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ticker"}),(0,s.jsx)(n.td,{children:"ETF ticker"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"start"}),(0,s.jsx)(n.td,{children:"The starting date (format YYYY-MM-DD) of the ETF"}),(0,s.jsx)(n.td,{children:"2021-11-24"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"end"}),(0,s.jsx)(n.td,{children:"The ending date (format YYYY-MM-DD) of the ETF"}),(0,s.jsx)(n.td,{children:"2022-11-25"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"limit"}),(0,s.jsx)(n.td,{children:"Limit of holdings to display"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"None"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"2022 Jun 21, 09:18 (\ud83e\udd8b) /etf/ $ load voo\nTop company holdings found: AAPL, MSFT, AMZN, GOOGL, TSLA\n\n\n2022 Jun 21, 09:18 (\ud83e\udd8b) /etf/ $ ?\n\u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 ETF \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502     ln                 lookup by name                                                  [FinanceDatabase / StockAnalysis]                                                                                           \u2502\n\u2502     ld                 lookup by description                                           [FinanceDatabase]                                                                                                           \u2502\n\u2502     load               load ETF data                                                   [Yahoo Finance]                                                                                                             \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502 Symbol: VOO                                                                                                                                                                                                        \u2502\n\u2502 Major holdings: AAPL, MSFT, AMZN, GOOGL, TSLA                                                                                                                                                                      \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502    ca                 comparison analysis,          get similar, historical, correlation, financials                                                                                                              \u2502\n\u2502    disc               discover ETFs,                gainers/decliners/active                                                                                                                                      \u2502\n\u2502    scr                screener ETFs,                overview/performance, using preset filters                                                                                                                    \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502     overview           get overview                                                    [StockAnalysis]                                                                                                             \u2502\n\u2502     holdings           top company holdings                                            [StockAnalysis]                                                                                                             \u2502\n\u2502     weights            sector weights allocation                                       [Yahoo Finance]                                                                                                             \u2502\n\u2502     summary            summary description of the ETF                                  [Yahoo Finance]                                                                                                             \u2502\n\u2502     news               latest news of the company                                      [News API]                                                                                                                  \u2502\n\u2502     candle             view a candle chart for ETF                                                                                                                                                                 \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502     pir                create (multiple) passive investor excel report(s)              [PassiveInvestor]                                                                                                           \u2502\n\u2502     compare            compare multiple different ETFs                                 [StockAnalysis]                                                                                                             \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2502    ta                 technical analysis,           ema, macd, rsi, adx, bbands, obv                                                                                                                              \u2502\n\u2502    pred               prediction techniques,        regression, arima, rnn, lstm                                                                                                                                  \u2502\n\u2502                                                                                                                                                                                                                    \u2502\n\u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 OpenBB Terminal v1.3.0 (https://openbb.co) \u2500\u256f\n"})}),"\n",(0,s.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),a=t(74848);function r(e){let{title:n}=e;return(0,a.jsx)(s.A,{children:(0,a.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);