"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96697],{17628:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(74848),t=n(28453),a=n(94331);const s={title:"hrp",description:"This technical documentation page provides comprehensive instructions for using 'hrp', a Python command for creating a hierarchical risk parity portfolio. It includes detailed information on usage, parameters, and examples for building custom portfolios optimized for specific risk parameters. Tools like codependence matrix, covariance matrix, CVaR, Tail Gini and hierarchical clustering methodologies are explored in depth.",keywords:["hrp","hierarchical risk parity portfolio","portfolio optimization","risk management","codependence matrix","covariance matrix","risk measure","CVaR","Tail Gini","hierarchical clustering"]},d=void 0,o={id:"terminal/reference/portfolio/po/hrp",title:"hrp",description:"This technical documentation page provides comprehensive instructions for using 'hrp', a Python command for creating a hierarchical risk parity portfolio. It includes detailed information on usage, parameters, and examples for building custom portfolios optimized for specific risk parameters. Tools like codependence matrix, covariance matrix, CVaR, Tail Gini and hierarchical clustering methodologies are explored in depth.",source:"@site/content/terminal/reference/portfolio/po/hrp.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/hrp",permalink:"/openbb-docs/terminal/reference/portfolio/po/hrp",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/portfolio/po/hrp.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"hrp",description:"This technical documentation page provides comprehensive instructions for using 'hrp', a Python command for creating a hierarchical risk parity portfolio. It includes detailed information on usage, parameters, and examples for building custom portfolios optimized for specific risk parameters. Tools like codependence matrix, covariance matrix, CVaR, Tail Gini and hierarchical clustering methodologies are explored in depth.",keywords:["hrp","hierarchical risk parity portfolio","portfolio optimization","risk management","codependence matrix","covariance matrix","risk measure","CVaR","Tail Gini","hierarchical clustering"]},sidebar:"tutorialSidebar",previous:{title:"herc",permalink:"/openbb-docs/terminal/reference/portfolio/po/herc"},next:{title:"load",permalink:"/openbb-docs/terminal/reference/portfolio/po/load"}},l={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.A,{title:"portfolio/po/hrp - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(r.p,{children:"Builds a hierarchical risk parity portfolio"}),"\n",(0,i.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"hrp [-cd {pearson,spearman,abs_pearson,abs_spearman,distance,mutual_info,tail}] [-cv {hist,ewma1,ewma2,ledoit,oas,shrunk,gl,jlogo,fixed,spectral,shrink}] [-rm RISK-MEASURE] [-as CVAR_SIMULATIONS_LOSSES] [-b CVAR_SIGNIFICANCE] [-bs CVAR_SIMULATIONS_GAINS] [-lk LINKAGE] [-k AMOUNT_CLUSTERS] [-mk MAX_CLUSTERS] [-bi {KN,FD,SC,HGR}] [-at ALPHA_TAIL] [-lo LEAF_ORDER] [-de SMOOTHING_FACTOR_EWMA] [-mt METHOD] [-ct CATEGORIES] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Name"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Default"}),(0,i.jsx)(r.th,{children:"Optional"}),(0,i.jsx)(r.th,{children:"Choices"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"co_dependence"}),(0,i.jsx)(r.td,{children:"The codependence or similarity matrix used to build the distance metric and clusters. Possible values are: 'pearson': pearson correlation matrix 'spearman': spearman correlation matrix 'abs_pearson': absolute value of pearson correlation matrix 'abs_spearman': absolute value of spearman correlation matrix 'distance': distance correlation matrix 'mutual_info': mutual information codependence matrix 'tail': tail index codependence matrix"}),(0,i.jsx)(r.td,{children:"pearson"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"pearson, spearman, abs_pearson, abs_spearman, distance, mutual_info, tail"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"covariance"}),(0,i.jsx)(r.td,{children:"Method used to estimate covariance matrix. Possible values are 'hist': historical method 'ewma1': exponential weighted moving average with adjust=True 'ewma2': exponential weighted moving average with adjust=False 'ledoit': Ledoit and Wolf shrinkage method 'oas': oracle shrinkage method 'shrunk': scikit-learn shrunk method 'gl': graphical lasso method 'jlogo': j-logo covariance 'fixed': takes average of eigenvalues above max Marchenko Pastour limit 'spectral': makes zero eigenvalues above max Marchenko Pastour limit 'shrink': Lopez de Prado's book shrinkage method"}),(0,i.jsx)(r.td,{children:"hist"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"hist, ewma1, ewma2, ledoit, oas, shrunk, gl, jlogo, fixed, spectral, shrink"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"risk_measure"}),(0,i.jsx)(r.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'GMD' : Gini Mean Difference 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'VaR' : Value at Risk 'CVaR' : Conditional Value at Risk 'TG' : Tail Gini 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'RG' : Range 'CVRG' : CVaR Range 'TGRG' : Tail Gini Range 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'DaR' : Drawdown at Risk of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns 'ADD_Rel' : Average Drawdown of compounded returns 'UCI_Rel' : Ulcer Index of compounded returns 'DaR_Rel' : Drawdown at Risk of compounded returns 'CDaR_Rel' : Conditional Drawdown at Risk of compounded returns 'EDaR_Rel' : Entropic Drawdown at Risk of compounded returns 'MDD_Rel' : Maximum Drawdown of compounded returns"}),(0,i.jsx)(r.td,{children:"MV"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"MV, MAD, GMD, MSV, VaR, CVaR, TG, EVaR, RG, CVRG, TGRG, WR, FLPM, SLPM, MDD, ADD, DaR, CDaR, EDaR, UCI, MDD_Rel, ADD_Rel, DaR_Rel, CDaR_Rel, EDaR_Rel, UCI_Rel"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cvar_simulations_losses"}),(0,i.jsx)(r.td,{children:"Number of CVaRs used to approximate Tail Gini of losses. The default is 100"}),(0,i.jsx)(r.td,{children:"100"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cvar_significance"}),(0,i.jsx)(r.td,{children:"Significance level of CVaR and Tail Gini of gains. If empty it duplicates alpha"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"cvar_simulations_gains"}),(0,i.jsx)(r.td,{children:"Number of CVaRs used to approximate Tail Gini of gains. If empty it duplicates a_sim value"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"linkage"}),(0,i.jsx)(r.td,{children:"Linkage method of hierarchical clustering"}),(0,i.jsx)(r.td,{children:"single"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"single, complete, average, weighted, centroid, median, ward, dbht"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"amount_clusters"}),(0,i.jsx)(r.td,{children:"Number of clusters specified in advance"}),(0,i.jsx)(r.td,{children:"None"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"max_clusters"}),(0,i.jsx)(r.td,{children:"Max number of clusters used by the two difference gap statistic to find the optimal number of clusters. If k is empty this value is used"}),(0,i.jsx)(r.td,{children:"10"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"amount_bins"}),(0,i.jsx)(r.td,{children:"Number of bins used to calculate the variation of information"}),(0,i.jsx)(r.td,{children:"KN"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"KN, FD, SC, HGR"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"alpha_tail"}),(0,i.jsx)(r.td,{children:"Significance level for lower tail dependence index, only used when when codependence value is 'tail'"}),(0,i.jsx)(r.td,{children:"0.05"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"leaf_order"}),(0,i.jsx)(r.td,{children:"Indicates if the cluster are ordered so that the distance between successive leaves is minimal"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"smoothing_factor_ewma"}),(0,i.jsx)(r.td,{children:"Smoothing factor for ewma estimators"}),(0,i.jsx)(r.td,{children:"0.94"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"nan_fill_method"}),(0,i.jsx)(r.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,i.jsx)(r.td,{children:"time"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"categories"}),(0,i.jsx)(r.td,{children:"Show selected categories"}),(0,i.jsx)(r.td,{children:"ASSET_CLASS, COUNTRY, SECTOR, INDUSTRY"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"historic_period"}),(0,i.jsx)(r.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,i.jsx)(r.td,{children:"3y"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"start_period"}),(0,i.jsx)(r.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"end_period"}),(0,i.jsx)(r.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"log_returns"}),(0,i.jsx)(r.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,i.jsx)(r.td,{children:"False"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"return_frequency"}),(0,i.jsx)(r.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,i.jsx)(r.td,{children:"d"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"d, w, m"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"max_nan"}),(0,i.jsx)(r.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,i.jsx)(r.td,{children:"0.05"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"threshold_value"}),(0,i.jsx)(r.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,i.jsx)(r.td,{children:"0.3"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"risk_free"}),(0,i.jsx)(r.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,i.jsx)(r.td,{children:"0.02924"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"significance_level"}),(0,i.jsx)(r.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,i.jsx)(r.td,{children:"0.05"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"long_allocation"}),(0,i.jsx)(r.td,{children:"Amount to allocate to portfolio"}),(0,i.jsx)(r.td,{children:"1"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"name"}),(0,i.jsx)(r.td,{children:"Save portfolio with personalized or default name"}),(0,i.jsx)(r.td,{children:"_HRP0"}),(0,i.jsx)(r.td,{children:"True"}),(0,i.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-python",children:"2022 Apr 05, 14:20 (\ud83e\udd8b) /portfolio/po/ $ hrp\n\n [3 Years] Hierarchical risk parity portfolio using pearson codependence,\nsingle linkage and volatility as risk measure\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502 13.74 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 17.97 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502  5.74 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 10.29 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502 18.28 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502 27.57 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  6.37 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 28.03%\nAnnual (by \u221a252) volatility: 25.35%\nSharpe ratio: 1.0982\n"})}),"\n",(0,i.jsx)(r.hr,{})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,r,n)=>{n.d(r,{A:()=>a});n(96540);var i=n(5260),t=n(74848);function a(e){let{title:r}=e;return(0,t.jsx)(i.A,{children:(0,t.jsx)("title",{children:r})})}},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var i=n(96540);const t={},a=i.createContext(t);function s(e){const r=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(a.Provider,{value:r},e.children)}}}]);