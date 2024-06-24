"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67857],{67756:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=n(74848),a=n(28453),r=n(94331);const i={title:"hist",description:"This page provides a detailed guide on the usage of the 'openbb.qa.hist' function from OpenBB. This function is utilized for plotting histograms of data, particularly from a Pandas DataFrame. It also includes parameters, returns, and examples for a better understanding.",keywords:["Histogram","Quantitative Analysis","Data Visualization","Pandas DataFrame","openbb.qa.hist function"]},d=void 0,o={id:"sdk/reference/qa/hist",title:"hist",description:"This page provides a detailed guide on the usage of the 'openbb.qa.hist' function from OpenBB. This function is utilized for plotting histograms of data, particularly from a Pandas DataFrame. It also includes parameters, returns, and examples for a better understanding.",source:"@site/content/sdk/reference/qa/hist.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/hist",permalink:"/openbb-docs/sdk/reference/qa/hist",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/qa/hist.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"hist",description:"This page provides a detailed guide on the usage of the 'openbb.qa.hist' function from OpenBB. This function is utilized for plotting histograms of data, particularly from a Pandas DataFrame. It also includes parameters, returns, and examples for a better understanding.",keywords:["Histogram","Quantitative Analysis","Data Visualization","Pandas DataFrame","openbb.qa.hist function"]},sidebar:"tutorialSidebar",previous:{title:"es",permalink:"/openbb-docs/sdk/reference/qa/es"},next:{title:"kurtosis",permalink:"/openbb-docs/sdk/reference/qa/kurtosis"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"qa.hist - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Plots histogram of data"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L82",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'openbb.qa.hist(data: pd.DataFrame, target: str, symbol: str = "", bins: int = 15, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"data"}),(0,s.jsx)(t.td,{children:"pd.DataFrame"}),(0,s.jsx)(t.td,{children:"Dataframe to look at"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"target"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Data column to get histogram of the dataframe"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"symbol"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Name of dataset"}),(0,s.jsx)(t.td,{}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"bins"}),(0,s.jsx)(t.td,{children:"int"}),(0,s.jsx)(t.td,{children:"Number of bins in histogram"}),(0,s.jsx)(t.td,{children:"15"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"external_axes"}),(0,s.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,s.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.qa.hist(data=df, target="Adj Close")\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var s=n(5260),a=n(74848);function r(e){let{title:t}=e;return(0,a.jsx)(s.A,{children:(0,a.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);