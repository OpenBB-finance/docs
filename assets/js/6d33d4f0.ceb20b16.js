"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51193],{64613:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(74848),i=t(28453),o=t(94331);const a={title:"property",description:"This documentation defines the usage, parameters, and examples for the 'property' function. This function helps in creating a portfolio that is weighted based on a selected property. It includes risk measure options, nan fill methods, risk-free rates, significance levels, and more to optimize the portfolio. The description helps in understanding the function's implementation for portfolio management.",keywords:["portfolio optimization","property weighting","risk measures","yfinance data","log returns","return frequency","risk-free rate","outliers","CVaR","EVaR","CDaR","EDaR","nan fill method","historic period","significance level","long allocation"]},s=void 0,l={id:"terminal/reference/portfolio/po/property",title:"property",description:"This documentation defines the usage, parameters, and examples for the 'property' function. This function helps in creating a portfolio that is weighted based on a selected property. It includes risk measure options, nan fill methods, risk-free rates, significance levels, and more to optimize the portfolio. The description helps in understanding the function's implementation for portfolio management.",source:"@site/content/terminal/reference/portfolio/po/property.md",sourceDirName:"terminal/reference/portfolio/po",slug:"/terminal/reference/portfolio/po/property",permalink:"/terminal/reference/portfolio/po/property",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/portfolio/po/property.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,frontMatter:{title:"property",description:"This documentation defines the usage, parameters, and examples for the 'property' function. This function helps in creating a portfolio that is weighted based on a selected property. It includes risk measure options, nan fill methods, risk-free rates, significance levels, and more to optimize the portfolio. The description helps in understanding the function's implementation for portfolio management.",keywords:["portfolio optimization","property weighting","risk measures","yfinance data","log returns","return frequency","risk-free rate","outliers","CVaR","EVaR","CDaR","EDaR","nan fill method","historic period","significance level","long allocation"]},sidebar:"tutorialSidebar",previous:{title:"plot",permalink:"/terminal/reference/portfolio/po/plot"},next:{title:"relriskparity",permalink:"/terminal/reference/portfolio/po/relriskparity"}},d={},c=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.A,{title:"portfolio/po/property - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(r.p,{children:"Returns a portfolio that is weighted based on selected property."}),"\n",(0,n.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"property -pr PROPERTY [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION] [--name NAME]\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"}),(0,n.jsx)(r.th,{children:"Choices"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"s_property"}),(0,n.jsx)(r.td,{children:"Property info to weight. Use one of yfinance info options."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"previousClose, regularMarketOpen, twoHundredDayAverage, trailingAnnualDividendYield, payoutRatio, volume24Hr, regularMarketDayHigh, navPrice, averageDailyVolume10Day, totalAssets, regularMarketPreviousClose, fiftyDayAverage, trailingAnnualDividendRate, open, toCurrency, averageVolume10days, expireDate, yield, algorithm, dividendRate, exDividendDate, beta, circulatingSupply, regularMarketDayLow, priceHint, currency, trailingPE, regularMarketVolume, lastMarket, maxSupply, openInterest, marketCap, volumeAllCurrencies, strikePrice, averageVolume, priceToSalesTrailing12Months, dayLow, ask, ytdReturn, askSize, volume, fiftyTwoWeekHigh, forwardPE, fromCurrency, fiveYearAvgDividendYield, fiftyTwoWeekLow, bid, dividendYield, bidSize, dayHigh, annualHoldingsTurnover, enterpriseToRevenue, beta3Year, profitMargins, enterpriseToEbitda, 52WeekChange, morningStarRiskRating, forwardEps, revenueQuarterlyGrowth, sharesOutstanding, fundInceptionDate, annualReportExpenseRatio, bookValue, sharesShort, sharesPercentSharesOut, heldPercentInstitutions, netIncomeToCommon, trailingEps, lastDividendValue, SandP52WeekChange, priceToBook, heldPercentInsiders, shortRatio, sharesShortPreviousMonthDate, floatShares, enterpriseValue, fundFamily, threeYearAverageReturn, lastSplitFactor, legalType, lastDividendDate, morningStarOverallRating, earningsQuarterlyGrowth, pegRatio, lastCapGain, shortPercentOfFloat, sharesShortPriorMonth, impliedSharesOutstanding, fiveYearAverageReturn, regularMarketPrice"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_measure"}),(0,n.jsx)(r.td,{children:"Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns"}),(0,n.jsx)(r.td,{children:"MV"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"nan_fill_method"}),(0,n.jsx)(r.td,{children:"Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points"}),(0,n.jsx)(r.td,{children:"time"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"linear, time, nearest, zero, slinear, quadratic, cubic, barycentric"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"historic_period"}),(0,n.jsx)(r.td,{children:"Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset"}),(0,n.jsx)(r.td,{children:"3y"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"start_period"}),(0,n.jsx)(r.td,{children:"Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"end_period"}),(0,n.jsx)(r.td,{children:"End date to get yfinance data from. Must be in 'YYYY-MM-DD' format"}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"log_returns"}),(0,n.jsx)(r.td,{children:"If use logarithmic or arithmetic returns to calculate returns"}),(0,n.jsx)(r.td,{children:"False"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"return_frequency"}),(0,n.jsx)(r.td,{children:"Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns"}),(0,n.jsx)(r.td,{children:"d"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"d, w, m"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"max_nan"}),(0,n.jsx)(r.td,{children:"Max percentage of nan values accepted per asset to be considered in the optimization process"}),(0,n.jsx)(r.td,{children:"0.05"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"threshold_value"}),(0,n.jsx)(r.td,{children:"Value used to replace outliers that are higher to threshold in absolute value"}),(0,n.jsx)(r.td,{children:"0.3"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"risk_free"}),(0,n.jsx)(r.td,{children:"Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual"}),(0,n.jsx)(r.td,{children:"0.02924"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"significance_level"}),(0,n.jsx)(r.td,{children:"Significance level of CVaR, EVaR, CDaR and EDaR"}),(0,n.jsx)(r.td,{children:"0.05"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"long_allocation"}),(0,n.jsx)(r.td,{children:"Amount to allocate to portfolio"}),(0,n.jsx)(r.td,{children:"1"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"name"}),(0,n.jsx)(r.td,{children:"Save portfolio with personalized or default name"}),(0,n.jsx)(r.td,{children:"PROPERTY_0"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"None"})]})]})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"2022 Apr 05, 15:02 (\ud83e\udd8b) /portfolio/po/ $ property -pr trailingEps\n\n [3 Years] Weighted Portfolio based on trailingEps\n\n     Weights\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503      \u2503 Value   \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 AAPL \u2502  6.36 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AMZN \u2502 68.58 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 BA   \u2502 -7.56 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 FB   \u2502 14.57 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 MSFT \u2502  9.93 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 T    \u2502  2.92 % \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 TSLA \u2502  5.18 % \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\nAnnual (by 252) expected return: 33.74%\nAnnual (by \u221a252) volatility: 30.25%\nSharpe ratio: 1.1094\n"})}),"\n",(0,n.jsx)(r.hr,{})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>o});t(96540);var n=t(5260),i=t(74848);function o(e){let{title:r}=e;return(0,i.jsx)(n.A,{children:(0,i.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>s});var n=t(96540);const i={},o=n.createContext(i);function a(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);