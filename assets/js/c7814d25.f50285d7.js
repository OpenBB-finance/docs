"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86767],{11925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>a});var s=n(74848),i=n(28453),l=n(94331);const r={title:"Discovery",description:"Documentation for the OpenBB SDK Disc module. The Disc module provides programmatic access for Python to navigate the OpenBB Terminal, examples of functions and modules aimed at stock trading operations.",keywords:["OpenBB SDK Disc","programmatic access","stock trading","terminal menus","code completion","IPO dates"," Penny Stocks","Top Gainers","Tech Stocks","Secure filings","Earnings Growth"]},c=void 0,d={id:"sdk/data-available/stocks/discovery",title:"Discovery",description:"Documentation for the OpenBB SDK Disc module. The Disc module provides programmatic access for Python to navigate the OpenBB Terminal, examples of functions and modules aimed at stock trading operations.",source:"@site/content/sdk/data-available/stocks/discovery.md",sourceDirName:"sdk/data-available/stocks",slug:"/sdk/data-available/stocks/discovery",permalink:"/sdk/data-available/stocks/discovery",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/data-available/stocks/discovery.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,frontMatter:{title:"Discovery",description:"Documentation for the OpenBB SDK Disc module. The Disc module provides programmatic access for Python to navigate the OpenBB Terminal, examples of functions and modules aimed at stock trading operations.",keywords:["OpenBB SDK Disc","programmatic access","stock trading","terminal menus","code completion","IPO dates"," Penny Stocks","Top Gainers","Tech Stocks","Secure filings","Earnings Growth"]},sidebar:"tutorialSidebar",previous:{title:"Dark Pools and Short Data",permalink:"/sdk/data-available/stocks/dark-pool-shorts"},next:{title:"Fundamental Analysis",permalink:"/sdk/data-available/stocks/fundamental-analysis"}},o={},a=[{value:"How to Use",id:"how-to-use",level:2},{value:"Examples",id:"examples",level:2},{value:"filings",id:"filings",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.A,{title:"Discovery - Stocks - Intros - Usage | OpenBB SDK Docs"}),"\n",(0,s.jsxs)(t.p,{children:["The Disc module provides programmatic access to the commands from within the OpenBB Terminal. Import the OpenBB SDK module, and then access the functions similarly to how the Terminal menus are navigated. The code completion will be activated upon entering ",(0,s.jsx)(t.code,{children:"."}),", after, ",(0,s.jsx)(t.code,{children:"openbb.disc"}),"\n\u200b"]}),"\n",(0,s.jsx)(t.h2,{id:"how-to-use",children:"How to Use"}),"\n",(0,s.jsx)(t.p,{children:"\u200b\nThe examples provided below will assume that the following import block is included at the beginning of the Python script or Notebook file:\n\u200b"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u200b\nA brief description below highlights the main Functions and Modules available in the ETF SDK"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Path"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.filings"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Feed of new filings to the SEC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.pipo"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Past IPO Dates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.active"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Stocks with Highest Trade Volumes"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.gainers"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Latest Top Gainers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.asc"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Small Caps with Earnings Growth Above 25%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.lowfloat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Stocks with Under 10M Shares Float"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.fipo"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Future IPO Dates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.upcoming"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Upcoming Earnings Release Dates"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.trending"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Trending News"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.ulc"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Potentially Undervalued Large Cap Stocks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.arkord"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Orders of ARK Investment Management LLC"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.hotpenny"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Hot Penny Stocks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.gtech"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Tech Stocks with Earnings Growth Over 25%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.losers"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Show Top Losers"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.ugs"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Undervalueds with Earnings Growth Over 25%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.rtat"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Top 10 Retail Traded Stocks"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"openbb.stocks.disc.dividends"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Function"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"Screener Overview"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Alternatively you can print the contents of the Disc SDK with:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"help(openbb.stocks.disc)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.h2,{id:"filings",children:"filings"}),"\n",(0,s.jsx)(t.p,{children:"Get the most-recent form submissions to the SEC."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"filings = openbb.stocks.disc.filings()\nfilings.head(3)\n"})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Date"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Ticker"}),(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"CIK"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Form Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Title"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"URL"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2023-01-12 14:09:25"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"CYBN"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1833141"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6-K"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6-K - CYBIN INC. (0001833141) (Filer)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.sec.gov/Archives/edgar/data/1833141/000162828023000949/0001628280-23-000949-index.htm",children:"https://www.sec.gov/Archives/edgar/data/1833141/000162828023000949/0001628280-23-000949-index.htm"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2023-01-12 13:39:25"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RYAOF"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1038683"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6-K"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6-K - RYANAIR HOLDINGS PLC (0001038683) (Filer)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.sec.gov/Archives/edgar/data/1038683/000165495423000350/0001654954-23-000350-index.htm",children:"https://www.sec.gov/Archives/edgar/data/1038683/000165495423000350/0001654954-23-000350-index.htm"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2023-01-12 13:39:25"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"RYAAY"}),(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1038683"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6-K"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6-K - RYANAIR HOLDINGS PLC (0001038683) (Filer)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:(0,s.jsx)(t.a,{href:"https://www.sec.gov/Archives/edgar/data/1038683/000165495423000350/0001654954-23-000350-index.htm",children:"https://www.sec.gov/Archives/edgar/data/1038683/000165495423000350/0001654954-23-000350-index.htm"})})]})]})]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"\n### pipo\n\nGives information on companies that recently had an IPO (Initial Public Offering)\n\n```python\nopenbb.stocks.disc.pipo()\n```\n\n|    | Past       | Exchange       | Name                           | Number of Shares   | Price     | Status    | symbol   | Total Shares Value   |\n|---:|:-----------|:---------------|:-------------------------------|:-------------------|:----------|:----------|:---------|:---------------------|\n|  0 | 2022-11-22 | NASDAQ Capital | Adamas One Corp.               | 7165904.0          | 4.50-5.00 | expected  | JEWL     | 38192020.0           |\n|  1 | 2022-11-21 |                | Solta Medical Corp             |                    |           | withdrawn |          |                      |\n|  2 | 2022-11-18 |                | MGO Global Inc.                |                    |           | filed     | MGOL     | 8625000.0            |\n|  3 | 2022-11-18 |                | CytoMed Therapeutics Pte. Ltd. |                    |           | filed     | GDTC     | 15000000.0           |\n|  4 | 2022-11-18 |                | BKV Corp                       |                    |           | filed     | BKV      | 100000000.0          |\n|  5 | 2022-11-18 |                | Coya Therapeutics, Inc.        |                    |           | filed     | COYA     | 17250000.0           |\n\n### gainers\n\nShows stocks with the biggest percent change in daily growth\n\n```python\nopenbb.stocks.disc.gainers()\n```\n\n|    | Symbol   | Name                                            |   Price (Intraday) |   Change | % Change   | Volume   | Avg Vol (3 month)   | Market Cap   | PE Ratio (TTM)   |\n|---:|:---------|:------------------------------------------------|-------------------:|---------:|:-----------|:---------|:--------------------|:-------------|:-----------------|\n|  0 | MPCFF    | Metro Pacific Investments Corporation           |             0.1021 |   0.0273 | +36.50%    | 20000    | 24674               | 2.963B       | 10.21            |\n|  1 | JBARF    | Julius B\xe4r Gruppe AG                            |            56.66   |  11.5    | +25.47%    | 47922    | 276                 | 14.48B       | 12.26            |\n|  2 | BURL     | Burlington Stores, Inc.                         |           189.96   |  32.32   | +20.50%    | 5.369M   | 1.431M              | 12.451B      | 75.38            |\n|  3 | PSNY     | Polestar Automotive Holding UK PLC              |             7.82   |   1.33   | +20.49%    | 8.878M   | 2.611M              | 16.495B      | 4.25             |\n|  4 | AEO      | American Eagle Outfitters, Inc.                 |            15.36   |   2.36   | +18.15%    | 18.426M  | 6.448M              | 2.877B       | 16.52            |\n|  5 | MMS      | Maximus, Inc.                                   |            70.34   |   9.8    | +16.19%    | 1.016M   | 380221              | 4.259B       | 23.45            |\n|  6 | MRTX     | Mirati Therapeutics, Inc.                       |            86.11   |  11.57   | +15.52%    | 5.41M    | 857355              | 4.959B       |                  |\n|  7 | WMG      | Warner Music Group Corp.                        |            31.09   |   4.11   | +15.23%    | 3.496M   | 1.209M              | 16.007B      | 37.91            |\n|  8 | TIAOF    | Telecom Italia S.p.A.                           |             0.2477 |   0.0317 | +14.68%    | 20000    | 37835               | 5.578B       |                  |\n|  9 | MANU     | Manchester United plc                           |            14.94   |   1.91   | +14.66%    | 5.253M   | 500920              | 2.436B       |                  |\n| 10 | BBY      | Best Buy Co., Inc.                              |            79.88   |   9.05   | +12.78%    | 17.487M  | 3.047M              | 17.983B      | 10.69            |\n| 11 | SGIOY    | Shionogi & Co., Ltd.                            |            13.8    |   1.55   | +12.65%    | 217546   | 253257              | 16.545B      | 20.0             |\n| 12 | DKS      | DICK'S Sporting Goods, Inc.                     |           117.76   |  10.82   | +10.12%    | 6.403M   | 1.735M              | 9.326B       | 10.14            |\n| 13 | BCDRF    | Banco Santander, S.A.                           |             2.85   |   0.25   | +9.62%     | 1.001M   | 230746              | 49.706B      | 5.09             |\n| 14 | EE       | Excelerate Energy, Inc.                         |            30      |   2.63   | +9.61%     | 842088   | 466600              | 3.248B       | 16.39            |\n| 15 | URBN     | Urban Outfitters, Inc.                          |            27.8    |   2.27   | +8.89%     | 7.168M   | 2.121M              | 2.562B       | 11.26            |\n| 16 | WHITF    | Whitehaven Coal Limited                         |             6.2    |   0.5    | +8.77%     | 39639    | 62464               | 5.762B       | 4.37             |\n| 17 | LINRF    | Liontown Resources Limited                      |             1.5    |   0.12   | +8.70%     | 36150    | 4637                | 3.295B       | 150.0            |\n| 18 | MBLY     | Mobileye Global Inc.                            |            29.55   |   2.33   | +8.56%     | 1.327M   | 1.848M              | 23.837B      |                  |\n| 19 | A        | Agilent Technologies, Inc.                      |           156.86   |  11.72   | +8.07%     | 3.468M   | 1.406M              | 46.437B      | 35.81            |\n| 20 | FUTU     | Futu Holdings Limited                           |            54.39   |   3.99   | +7.92%     | 4.094M   | 2.489M              | 7.995B       | 27.61            |\n| 21 | SYM      | Symbotic Inc.                                   |            10.77   |   0.79   | +7.92%     | 442139   | 215487              | 5.983B       |                  |\n| 22 | KAEPF    | The Kansai Electric Power Company, Incorporated |             8.36   |   0.6    | +7.73%     | 21794    | 5106                | 7.93B        | 17.79            |\n| 23 | HL       | Hecla Mining Company                            |             5.17   |   0.37   | +7.71%     | 11.242M  | 8.056M              | 3.134B       | 172.33           |\n| 24 | RKLIF    | Rentokil Initial plc                            |             6.52   |   0.47   | +7.68%     | 29704    | 3911                | 16.434B      | 36.23            |\n\n\u200b\n\n### rtat\n\nShows information on how retail investors are trading a particular ticker\n\n```python\nopenbb.stocks.disc.rtat()\n```\n\n|      | Date       | Ticker   |   Activity |   Sentiment |\n|-----:|:-----------|:---------|-----------:|------------:|\n|    0 | 2022-11-22 | TSLA     |     0.0681 |           1 |\n|    1 | 2022-11-22 | TQQQ     |     0.0159 |          -2 |\n|    2 | 2022-11-22 | SQQQ     |     0.0219 |           0 |\n|    3 | 2022-11-22 | SPY      |     0.0387 |           1 |\n|    4 | 2022-11-22 | QQQ      |     0.019  |          -1 |\n|    5 | 2022-11-22 | NVDA     |     0.0427 |          -3 |\n|    6 | 2022-11-22 | META     |     0.0137 |          -1 |\n|    7 | 2022-11-22 | AMZN     |     0.0333 |          -1 |\n|    8 | 2022-11-22 | AMD      |     0.0317 |          -3 |\n|    9 | 2022-11-22 | AAPL     |     0.0307 |          -5 |\n|   10 | 2022-11-21 | TSLA     |     0.0763 |           0 |\n|   11 | 2022-11-21 | TQQQ     |     0.0169 |           1 |\n|   12 | 2022-11-21 | SQQQ     |     0.0249 |          -3 |\n|   13 | 2022-11-21 | SPY      |     0.0354 |           2 |\n|   14 | 2022-11-21 | QQQ      |     0.0203 |           2 |\n|   15 | 2022-11-21 | NVDA     |     0.0312 |          -3 |\n|   16 | 2022-11-21 | DIS      |     0.0367 |           1 |\n|   17 | 2022-11-21 | AMZN     |     0.035  |           0 |\n|   18 | 2022-11-21 | AMD      |     0.0275 |          -1 |\n|   19 | 2022-11-21 | AAPL     |     0.0322 |          -3 |\n|   20 | 2022-11-18 | TSLA     |     0.0621 |          -1 |\n|   21 | 2022-11-18 | TQQQ     |     0.0246 |          -1 |\n|   22 | 2022-11-18 | SQQQ     |     0.0274 |          -1 |\n|   23 | 2022-11-18 | SPY      |     0.0456 |           1 |\n|   24 | 2022-11-18 | QQQ      |     0.0235 |          -3 |\n|   25 | 2022-11-18 | NVDA     |     0.0376 |          -5 |\n|   26 | 2022-11-18 | META     |     0.0141 |           3 |\n|   27 | 2022-11-18 | AMZN     |     0.0338 |           0 |\n|   28 | 2022-11-18 | AMD      |     0.0379 |           0 |\n|   29 | 2022-11-18 | AAPL     |     0.0403 |          -3 |\n|   30 | 2022-11-17 | TSLA     |     0.0563 |          -1 |\n"})})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var s=n(5260),i=n(74848);function l(e){let{title:t}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const i={},l=s.createContext(i);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);