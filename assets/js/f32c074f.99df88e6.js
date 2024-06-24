"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77874],{98589:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>j,frontMatter:()=>d,metadata:()=>x,toc:()=>c});var i=l(74848),n=l(28453),s=l(94331);const d={title:"ETF",description:"This guide introduces the ETF menu, in the OpenBB Terminal. The features provide methods for searching and comparing funds across the ETF universe.",keywords:["ETF","overview","holdings","weights","news","compare companies","discovery","technical indicators","forecasting","export to Excel","exchange traded funds","stock market","financial tool","portfolio","stock chart","Vanguard Total Stock Market Index Fund","VTI","load ETF","ETF chart","trendlines"]},r=void 0,x={id:"terminal/menus/etf",title:"ETF",description:"This guide introduces the ETF menu, in the OpenBB Terminal. The features provide methods for searching and comparing funds across the ETF universe.",source:"@site/content/terminal/menus/etf.md",sourceDirName:"terminal/menus",slug:"/terminal/menus/etf",permalink:"/openbb-docs/terminal/menus/etf",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/etf.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"ETF",description:"This guide introduces the ETF menu, in the OpenBB Terminal. The features provide methods for searching and comparing funds across the ETF universe.",keywords:["ETF","overview","holdings","weights","news","compare companies","discovery","technical indicators","forecasting","export to Excel","exchange traded funds","stock market","financial tool","portfolio","stock chart","Vanguard Total Stock Market Index Fund","VTI","load ETF","ETF chart","trendlines"]},sidebar:"tutorialSidebar",previous:{title:"Economy",permalink:"/openbb-docs/terminal/menus/economy"},next:{title:"Fixed Income",permalink:"/openbb-docs/terminal/menus/fixedincome"}},h={},c=[{value:"Usage",id:"usage",level:2},{value:"Search",id:"search",level:3},{value:"Load",id:"load",level:3},{value:"Overview",id:"overview",level:3},{value:"Holdings",id:"holdings",level:3},{value:"Compare",id:"compare",level:3},{value:"Disc",id:"disc",level:3}];function g(t){const e={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.A,{title:"ETF - Menus | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(e.p,{children:"The ETF menu features provide methods for searching and comparing funds across the ETF universe."}),"\n",(0,i.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(e.p,{children:["Enter by typing ",(0,i.jsx)(e.code,{children:"etf"})," from the main menu of the Terminal, or with the absolute path:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"/etf\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f50269a8-8ebc-4ef9-bd37-4c9e15774005",alt:"Screenshot 2023-11-02 at 5 43 12\u202fPM"})}),"\n",(0,i.jsx)(e.h3,{id:"search",children:"Search"}),"\n",(0,i.jsxs)(e.p,{children:["Find ETFs by fuzzy query using the ",(0,i.jsx)(e.code,{children:"search"})," command."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"/etf search --name SPDR S&P\n"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/984e0cbb-bced-4610-8a55-3262fdf8ea2a",alt:"Screenshot 2023-11-02 at 5 50 19\u202fPM"})}),"\n",(0,i.jsx)(e.h3,{id:"load",children:"Load"}),"\n",(0,i.jsxs)(e.p,{children:["Use the ",(0,i.jsx)(e.code,{children:"load"})," command to place a symbol into memory."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"/etf/load xhb\n"})}),"\n",(0,i.jsx)(e.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"overview"})," shows a table of general statistics."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"/etf/load xhb/overview\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"XHB"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Assets"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$1.21B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Expense Ratio"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.35%"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"PE Ratio"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"11.24"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Shares Out"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Dividend (ttm)"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$0.74"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Dividend Yield"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.99%"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Ex-Dividend Date"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Sep 18, 2023"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Volume"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"8,880,265"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Open"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"75.04"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Previous Close"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"73.82"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"52-Week Low"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"54.10"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"52-Week High"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"85.13"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Beta"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Holdings"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"37"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"holdings",children:"Holdings"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"holdings"})," command provides a current view of the loaded ETF."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"/etf/load xhb/holdings\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Symbol"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"% Of Etf"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Shares"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"WSM"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Williams-Sonoma, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"4.50%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"321673"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CSL"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Carlisle Companies Incorporated"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"4.35%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"183841"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"LII"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Lennox International Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"4.12%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"119330"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MAS"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Masco Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.99%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"821783"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TT"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Trane Technologies plc"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.98%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"224389"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"PHM"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"PulteGroup, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.92%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"572445"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"ALLE"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Allegion plc"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.92%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"427461"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"LEN"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Lennar Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.87%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"389388"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"DHI"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"D.R. Horton, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.83%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"393696"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"FND"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Floor & Decor Holdings, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.78%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"493049"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TOL"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Toll Brothers, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.76%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"571043"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"HD"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"The Home Depot, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.72%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"140504"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"NVR"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"NVR, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.70%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7339"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"JCI"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Johnson Controls International plc"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.68%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"805731"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"LOW"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Lowe's Companies, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.55%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"199799"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TPX"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Tempur Sealy International, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.51%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"942711"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"WMS"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Advanced Drainage Systems, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.50%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"351760"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CARR"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Carrier Global Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.50%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"787745"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"OC"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Owens Corning"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.41%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"323306"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"BLDR"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Builders FirstSource, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.34%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"330150"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AOS"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"A. O. Smith Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.33%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"511883"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"FBIN"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Fortune Brands Innovations, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.17%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"609787"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TREX"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Trex Company, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2.79%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"532594"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"BLD"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TopBuild Corp."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2.64%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"123797"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TMHC"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Taylor Morrison Home Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2.07%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"580878"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"TPH"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Tri Pointe Homes, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.39%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"596693"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MHO"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"M/I Homes, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.39%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"181673"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MDC"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"M.D.C. Holdings, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.26%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"356746"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"IBP"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Installed Building Products, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.21%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"116492"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GRBK"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Green Brick Partners, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.03%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"285076"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"LGIH"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"LGI Homes, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.02%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"116166"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"SKY"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Skyline Champion Corporation"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.01%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"185257"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CVCO"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Cavco Industries, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.76%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"32610"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"CCS"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Century Communities, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.67%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"117325"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"DFH"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Dream Finders Homes, Inc."}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.27%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"146550"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"STATE STREET INSTITUTIONAL LIQ"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.09%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"922512"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"-"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"US DOLLAR"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"-2.36%"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"-25351025"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"compare",children:"Compare"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"compare"})," command accepts a comma-separated list of symbols for comparing overview metrics."]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"compare -e xhb,pkb,rez,homz\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"}}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"XHB"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"PKB"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"REZ"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"HOMZ"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Assets"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$1.21B"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$208.81M"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$590.71M"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$33.85M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Expense Ratio"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.35%"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.60%"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.48%"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.30%"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"PE Ratio"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"11.24"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"9.23"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"21.51"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"10.42"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Shares Out"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Dividend (ttm)"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$0.74"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$0.23"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$2.20"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"$0.80"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Dividend Yield"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.99%"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"0.45%"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3.43%"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2.30%"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Ex-Dividend Date"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Sep 18, 2023"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Sep 18, 2023"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Sep 26, 2023"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Oct 17, 2023"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Volume"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"8,880,265"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"13,224"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"48,825"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"3,926"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Open"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"75.04"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"50.59"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"63.05"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"33.90"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Previous Close"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"73.82"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"49.83"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"62.31"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"33.47"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"52-Week Low"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"54.10"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"37.54"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"60.64"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"29.89"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"52-Week High"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"85.13"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"57.25"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"78.33"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"40.68"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Beta"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"n/a"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Holdings"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"37"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"32"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"43"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"102"})]})]})]}),"\n",(0,i.jsx)(e.h3,{id:"disc",children:"Disc"}),"\n",(0,i.jsxs)(e.p,{children:["The ",(0,i.jsx)(e.code,{children:"disc"})," sub-menu has the movers of the day."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"gainers"}),"\n",(0,i.jsx)(e.li,{children:"decliners"}),"\n",(0,i.jsx)(e.li,{children:"active"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-console",children:"/etf/disc/gainers\n"})}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{style:{textAlign:"left"}}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Price"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"Chg"}),(0,i.jsx)(e.th,{style:{textAlign:"right"},children:"%Chg"}),(0,i.jsx)(e.th,{style:{textAlign:"left"},children:"Vol"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Regional Banks Bull 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"53.11"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.74"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"17.06"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2.4M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AXS 2X Innovation ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"51.02"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.38"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"16.91"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"165.0K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"T-Rex 2X Long Tesla Daily Target ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"19.8"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.29"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"13.08"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"177.6K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GraniteShares 1.5x Long Coinbase Daily ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"11.94"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.38"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"13.07"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"244.7K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MicroSectors U.S. Big Banks Index 3X Leveraged ETN"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"13"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.44"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"12.46"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.4M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"AdvisorShares MSOS 2x Daily ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.72"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.3"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"12.4"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"371.6K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Homebuilders & Supplies Bull 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"53.53"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5.02"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"10.35"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"716.9K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GraniteShares 1.75x Long TSLA Daily ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"21.3"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.99"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"10.31"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"78.2K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily South Korea Bull 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.45"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.57"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"9.69"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"447.4K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily TSLA Bull 1.5X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"12.41"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.06"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"9.34"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"14.7M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Valkyrie Bitcoin Miners ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"10.59"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.9"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"9.29"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"232.1K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily S&P 500 High Beta Bull 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"22.96"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.91"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"9.07"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"332.5K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"MicroSectors Oil & Gas Exp. & Prod. 3x Leveraged ETN"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"41.87"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.405"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8.85"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"209.5K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Real Estate Bull 3x Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.78"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.55"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8.83"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.9M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Retail Bull 3x Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"5.53"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.44"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8.64"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"607.1K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"ARK Innovation ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"38.28"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.97"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8.41"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"28.6M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Small Cap Bull 3x Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"24.94"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.86"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"8.06"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"22.6M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"GraniteShares 1.25x Long Tesla Daily ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"15.06"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.1015"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.89"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"66.9K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"ProShares UltraPro Russell2000"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"29.24"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"2.1"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.74"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"2.0M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Consumer Discretionary Bull 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"24.23"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.73"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.69"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"58.6K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"VanEck Digital Transformation ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.13"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"0.43"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.54"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"263.3K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"ARK Next Generation Internet ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"55.72"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.77"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.26"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"410.6K"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Financial Bull 3x Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"58.32"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"3.86"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.09"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"1.0M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Direxion Daily Semiconductor Bull 3X Shares"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"17.08"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.13"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"7.08"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"90.0M"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"Ark Fintech Innovation ETF"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"19.43"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"1.25"}),(0,i.jsx)(e.td,{style:{textAlign:"right"},children:"6.88"}),(0,i.jsx)(e.td,{style:{textAlign:"left"},children:"561.6K"})]})]})]})]})}function j(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,i.jsx)(e,{...t,children:(0,i.jsx)(g,{...t})}):g(t)}},94331:(t,e,l)=>{l.d(e,{A:()=>s});l(96540);var i=l(5260),n=l(74848);function s(t){let{title:e}=t;return(0,n.jsx)(i.A,{children:(0,n.jsx)("title",{children:e})})}},28453:(t,e,l)=>{l.d(e,{R:()=>d,x:()=>r});var i=l(96540);const n={},s=i.createContext(n);function d(t){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:d(t.components),i.createElement(s.Provider,{value:e},t.children)}}}]);