"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[98716],{96012:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=s(74848),i=s(28453),a=s(94331);const r={title:"Quantitative Analysis",description:"The page provides an overview of Quantitative Analysis in finance and its application in different asset classes like Crypto, Forex, and Stocks. It also highlights its usage in making profitable investment decisions, the use of terminal commands for analyzing data, and the export of data for further analysis.",keywords:["Quantitative analysis","Asset classes","Finance","Crypto","Forex","Stocks","Terminal","Financial quantitative analysis","Investment decisions","Statistics","Metrics","Risk","Investors","Quantifiable statistics","Command summary","Line chart","Target column","Observation window"]},l=void 0,o={id:"terminal/menus/common/qa",title:"Quantitative Analysis",description:"The page provides an overview of Quantitative Analysis in finance and its application in different asset classes like Crypto, Forex, and Stocks. It also highlights its usage in making profitable investment decisions, the use of terminal commands for analyzing data, and the export of data for further analysis.",source:"@site/content/terminal/menus/common/qa.md",sourceDirName:"terminal/menus/common",slug:"/terminal/menus/common/qa",permalink:"/openbb-docs/terminal/menus/common/qa",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/menus/common/qa.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"Quantitative Analysis",description:"The page provides an overview of Quantitative Analysis in finance and its application in different asset classes like Crypto, Forex, and Stocks. It also highlights its usage in making profitable investment decisions, the use of terminal commands for analyzing data, and the export of data for further analysis.",keywords:["Quantitative analysis","Asset classes","Finance","Crypto","Forex","Stocks","Terminal","Financial quantitative analysis","Investment decisions","Statistics","Metrics","Risk","Investors","Quantifiable statistics","Command summary","Line chart","Target column","Observation window"]},sidebar:"tutorialSidebar",previous:{title:"Common",permalink:"/openbb-docs/terminal/menus/common/"},next:{title:"Technical Analysis",permalink:"/openbb-docs/terminal/menus/common/ta"}},c={},d=[{value:"Usage",id:"usage",level:2},{value:"Summary",id:"summary",level:3},{value:"Line",id:"line",level:3},{value:"Beta",id:"beta",level:3},{value:"Pick",id:"pick",level:3},{value:"Rolling",id:"rolling",level:3},{value:"CDF",id:"cdf",level:3},{value:"Skew",id:"skew",level:3},{value:"CAPM",id:"capm",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.A,{title:"Quantitative Analysis - Common Menus | OpenBB Terminal Docs"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)("a",{href:"https://www.investopedia.com/terms/q/quantitativeanalysis.asp",target:"_blank",rel:"noreferrer noopener",children:"Quantitative analysis (QA)"})," in finance is an approach that emphasizes mathematical and statistical analysis to help determine the value of a financial asset, such as a stock or option. The ultimate goal of financial quantitative analysis is to use quantifiable statistics and metrics to assist investors in making profitable investment decisions. Quantitative analysis is different from qualitative analysis, which looks at factors such as how companies are structured, the makeup of their management teams, and what their strengths and weaknesses are."]}),"\n",(0,t.jsx)(n.p,{children:"The Quantitative Analysis menu is a common menu to three asset classes:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"/terminal/usage/intros/crypto/",target:"_blank",rel:"noreferrer noopener",children:"Crypto"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"/terminal/usage/intros/forex/",target:"_blank",rel:"noreferrer noopener",children:"Forex"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)("a",{href:"/terminal/usage/intros/stocks/",target:"_blank",rel:"noreferrer noopener",children:"Stocks"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/e191455f-e626-486b-ae22-4da8e9fd6811",alt:"Screenshot 2023-10-30 at 11 15 59\u202fAM"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["Enter the menu, through one of the asset classes listed above, by entering ",(0,t.jsx)(n.code,{children:"qa"})," in the Terminal. The ticker that is loaded before entering the menu will determine the timeframe for the analysis. To alter it, use the ",(0,t.jsx)(n.code,{children:"load"})," function and pick a new ",(0,t.jsx)(n.code,{children:"--start"})," and ",(0,t.jsx)(n.code,{children:"--end"})," for the observation window. The QA functions target a specified column of the data. By default, this is returns. Use the ",(0,t.jsx)(n.code,{children:"pick"})," command to chose a new target column."]}),"\n",(0,t.jsx)(n.p,{children:"The menu is divided into five categories of functions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Statistics"}),"\n",(0,t.jsx)(n.li,{children:"Rolling Metrics"}),"\n",(0,t.jsx)(n.li,{children:"Risk"}),"\n",(0,t.jsx)(n.li,{children:"Other"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"summary",children:"Summary"}),"\n",(0,t.jsxs)(n.p,{children:["A summary of exportable statistics is displayed with the command, ",(0,t.jsx)(n.code,{children:"summary"}),". The example here shows AAPL."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"stocks\nload aapl\nqa\nsummary\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/16fc2132-765e-4b1b-9461-8e365551b278",alt:"summary"})}),"\n",(0,t.jsx)(n.h3,{id:"line",children:"Line"}),"\n",(0,t.jsxs)(n.p,{children:["A simple line chart for the target column as a time-series is called with the ",(0,t.jsx)(n.code,{children:"line"})," command, for example the ",(0,t.jsx)(n.code,{children:"returns"})," column."]}),"\n",(0,t.jsx)(n.p,{children:"To use the same data and target column, enter:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"line\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f0407a98-f88b-4880-a2f4-53c2b0b62418",alt:"line"})}),"\n",(0,t.jsx)(n.h3,{id:"beta",children:"Beta"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"beta"})," command shows the beta of the loaded asset with respect to another.  Use the ",(0,t.jsx)(n.code,{children:"-r"})," parameter to select the asset to compare against."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"beta -r xlk\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4df72127-c766-4099-ba89-1eed0e274f4c",alt:"Screenshot 2023-10-30 at 11 48 31\u202fAM"})}),"\n",(0,t.jsx)(n.h3,{id:"pick",children:"Pick"}),"\n",(0,t.jsxs)(n.p,{children:["To select a different target, like log returns, use the ",(0,t.jsx)(n.code,{children:"pick"})," command."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"pick -t logret\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/93faab58-659b-45a0-aeaf-bed95cb511e3",alt:"Screenshot 2023-10-30 at 11 38 58\u202fAM"})}),"\n",(0,t.jsxs)(n.p,{children:["The choice will be reflected on-screen after the menu is refreshed, ",(0,t.jsx)(n.code,{children:"?"}),", ",(0,t.jsx)(n.code,{children:"h"}),", ",(0,t.jsx)(n.code,{children:"help"})," - with no command attached."]}),"\n",(0,t.jsx)(n.h3,{id:"rolling",children:"Rolling"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"rolling"})," command plots the rolling mean and standard deviation of the target column over a selectable window of time."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"pick -t close\nrolling --windows 30\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b0de1f0c-7e1d-4fad-9546-075b2024a8b3",alt:"Screenshot 2023-10-30 at 12 04 15\u202fPM"})}),"\n",(0,t.jsx)(n.h3,{id:"cdf",children:"CDF"}),"\n",(0,t.jsxs)(n.p,{children:["The Cumulative Distribution Function (",(0,t.jsx)(n.code,{children:"cdf"}),") displays the probabilities with quantiles."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"load aapl --start 2004-10-30 --monthly\npick -t returns\ncdf\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/54e84236-e730-4083-9e27-c3a44e84e3ee",alt:"Screenshot 2023-10-30 at 12 14 20\u202fPM"})}),"\n",(0,t.jsx)(n.h3,{id:"skew",children:"Skew"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"skew"})," command shows the asymmetric distribution over a specified window.  Adjust this window to suit the interval of data loaded.  With monthly data, a window of 12 represents one-year."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"skew\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f1e7e0e5-79fe-4ac7-8a4f-dbbb32793c50",alt:"Screenshot 2023-10-30 at 12 23 19\u202fPM"})}),"\n",(0,t.jsx)(n.h3,{id:"capm",children:"CAPM"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"capm"})," command uses the Fama French Factors to determine market risk against the loaded asset.  The output of this function is printed directly to the screen."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"capm\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"Beta:                   1.24\nSystematic Risk:        63.63%\nUnsystematic Risk:      36.37%\n"})})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,s)=>{s.d(n,{A:()=>a});s(96540);var t=s(5260),i=s(74848);function a(e){let{title:n}=e;return(0,i.jsx)(t.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);