"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55961],{40199:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(74848),n=t(28453),i=t(94331);const s={title:"maxdecorr",description:"The page details the function openbb.portfolio.po.maxdecorr(), an optimization tool for decorrelation weights in a portfolio. Explains parameters, returns, and provides examples.",keywords:["maxdecorr","portfolio optimization","portfolio_engine","log_returns","covariance","Ledoit and Wolf Shrinkage method","Oracle Approximation Shrinkage method","Shrunk Covariance method","Graphical Lasso Covariance method","j-LoGo Covariance method","spectral method","programming"]},d=void 0,l={id:"sdk/reference/portfolio/po/maxdecorr",title:"maxdecorr",description:"The page details the function openbb.portfolio.po.maxdecorr(), an optimization tool for decorrelation weights in a portfolio. Explains parameters, returns, and provides examples.",source:"@site/content/sdk/reference/portfolio/po/maxdecorr.md",sourceDirName:"sdk/reference/portfolio/po",slug:"/sdk/reference/portfolio/po/maxdecorr",permalink:"/sdk/reference/portfolio/po/maxdecorr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/portfolio/po/maxdecorr.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"maxdecorr",description:"The page details the function openbb.portfolio.po.maxdecorr(), an optimization tool for decorrelation weights in a portfolio. Explains parameters, returns, and provides examples.",keywords:["maxdecorr","portfolio optimization","portfolio_engine","log_returns","covariance","Ledoit and Wolf Shrinkage method","Oracle Approximation Shrinkage method","Shrunk Covariance method","Graphical Lasso Covariance method","j-LoGo Covariance method","spectral method","programming"]},sidebar:"tutorialSidebar",previous:{title:"load_bl_views",permalink:"/sdk/reference/portfolio/po/load_bl_views"},next:{title:"maxdiv",permalink:"/sdk/reference/portfolio/po/maxdiv"}},a={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.A,{title:"portfolio.po.maxdecorr - Reference | OpenBB SDK Docs"}),"\n",(0,o.jsx)(r.p,{children:"Optimize decorrelation weights"}),"\n",(0,o.jsxs)(r.p,{children:["Source Code: [",(0,o.jsx)(r.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/portfolio/portfolio_optimization/po_model.py#L927",children:"link"}),"]"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:"openbb.portfolio.po.maxdecorr(portfolio_engine: portfolio_optimization.po_engine.PoEngine = None, symbols: List[str] = None, kwargs: Any)\n"})}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Name"}),(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"}),(0,o.jsx)(r.th,{children:"Default"}),(0,o.jsx)(r.th,{children:"Optional"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"portfolio_engine"}),(0,o.jsx)(r.td,{children:"PoEngine"}),(0,o.jsxs)(r.td,{children:["Portfolio optimization engine, by default None",(0,o.jsx)("br",{}),"Use ",(0,o.jsx)(r.code,{children:"portfolio.po.load"})," to load a portfolio engine"]}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"symbols"}),(0,o.jsx)(r.td,{children:"List[str]"}),(0,o.jsx)(r.td,{children:"List of symbols, by default None"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"interval"}),(0,o.jsx)(r.td,{children:"str"}),(0,o.jsx)(r.td,{children:"Interval to get data, by default '3y'"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"start_date"}),(0,o.jsx)(r.td,{children:"str"}),(0,o.jsx)(r.td,{children:'If not using interval, start date string (YYYY-MM-DD), by default ""'}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"end_date"}),(0,o.jsx)(r.td,{children:"str"}),(0,o.jsx)(r.td,{children:'If not using interval, end date string (YYYY-MM-DD). If empty use last weekday, by default ""'}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"log_returns"}),(0,o.jsx)(r.td,{children:"bool"}),(0,o.jsx)(r.td,{children:"If True use log returns, else arithmetic returns, by default False"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"freq"}),(0,o.jsx)(r.td,{children:"str"}),(0,o.jsx)(r.td,{children:"Frequency of returns, by default 'D'. Options: 'D' for daily, 'W' for weekly, 'M' for monthly"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"maxnan"}),(0,o.jsx)(r.td,{children:"float"}),(0,o.jsx)(r.td,{children:"Maximum percentage of NaNs allowed in the data, by default 0.05"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"threshold"}),(0,o.jsx)(r.td,{children:"float"}),(0,o.jsx)(r.td,{children:"Value used to replace outliers that are higher than threshold, by default 0.0"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"method"}),(0,o.jsx)(r.td,{children:"str"}),(0,o.jsxs)(r.td,{children:["Method used to fill nan values, by default 'time'",(0,o.jsx)("br",{}),"For more information see ",(0,o.jsx)(r.code,{children:"interpolate <https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.interpolate.html>"}),"__."]}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"value"}),(0,o.jsx)(r.td,{children:"float"}),(0,o.jsx)(r.td,{children:"Amount to allocate to portfolio in long positions, by default 1.0"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"value_short"}),(0,o.jsx)(r.td,{children:"float"}),(0,o.jsx)(r.td,{children:"Amount to allocate to portfolio in short positions, by default 0.0"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"covariance"}),(0,o.jsx)(r.td,{children:"str"}),(0,o.jsxs)(r.td,{children:["The method used to estimate the covariance matrix, by default 'hist'",(0,o.jsx)("br",{}),"Possible values are:",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),"- 'hist': use historical estimates.",(0,o.jsx)("br",{}),"- 'ewma1': use ewma with adjust=True. For more information see ",(0,o.jsx)(r.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"}),(0,o.jsxs)(r.strong,{children:[".",(0,o.jsx)("br",{}),"- 'ewma2': use ewma with adjust=False. For more information see ",(0,o.jsx)(r.code,{children:"EWM <https://pandas.pydata.org/pandas-docs/stable/user_guide/window.html#exponentially-weighted-window>"})]}),".",(0,o.jsx)("br",{}),"- 'ledoit': use the Ledoit and Wolf Shrinkage method.",(0,o.jsx)("br",{}),"- 'oas': use the Oracle Approximation Shrinkage method.",(0,o.jsx)("br",{}),"- 'shrunk': use the basic Shrunk Covariance method.",(0,o.jsx)("br",{}),"- 'gl': use the basic Graphical Lasso Covariance method.",(0,o.jsx)("br",{}),"- 'jlogo': use the j-LoGo Covariance method. For more information see: ",(0,o.jsx)(r.code,{children:"a-jLogo"}),".",(0,o.jsx)("br",{}),"- 'fixed': denoise using fixed method. For more information see chapter 2 of ",(0,o.jsx)(r.code,{children:"a-MLforAM"}),".",(0,o.jsx)("br",{}),"- 'spectral': denoise using spectral method. For more information see chapter 2 of ",(0,o.jsx)(r.code,{children:"a-MLforAM"}),".",(0,o.jsx)("br",{}),"- 'shrink': denoise using shrink method. For more information see chapter 2 of ",(0,o.jsx)(r.code,{children:"a-MLforAM"}),"."]}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"d_ewma"}),(0,o.jsx)(r.td,{children:"float"}),(0,o.jsx)(r.td,{children:"The smoothing factor of ewma methods, by default 0.94"}),(0,o.jsx)(r.td,{children:"None"}),(0,o.jsx)(r.td,{children:"True"})]})]})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Type"}),(0,o.jsx)(r.th,{children:"Description"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Tuple[pd.DataFrame, Dict]"}),(0,o.jsx)(r.td,{children:"Tuple with weights and performance dictionary"})]})})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.portfolio.po.maxdecorr(symbols=["AAPL", "MSFT", "AMZN"])\n'})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"(        value\n AAPL  0.33444\n MSFT  0.24963\n AMZN  0.41593,\n {'Return': 0.2142767096699773,\n  'Volatility': 0.33184082287769623,\n  'Sharpe ratio': 0.6457213666835423})\n"})}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\np = openbb.portfolio.po.load(symbols_file_path="~/openbb_terminal/miscellaneous/portfolio_examples/allocation/60_40_Portfolio.xlsx")\nweights, performance = openbb.portfolio.po.maxdecorr(portfolio_engine=p)\n'})}),"\n",(0,o.jsx)(r.hr,{})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var o=t(5260),n=t(74848);function i(e){let{title:r}=e;return(0,n.jsx)(o.A,{children:(0,n.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>d});var o=t(96540);const n={},i=o.createContext(n);function s(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);