"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90170],{7514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(74848),s=n(28453),r=n(94331);const a={title:"line",description:"The page describes the 'line' function of the OpenBB library, used for displaying line plots of data. It provides the source code link and details the parameters, usage, and examples of the function within the domain of quantitative analysis and data visualization using Python.",keywords:["line plot","quantitative analysis","data visualization","pd.Series","matplotlib","datetime"]},d=void 0,l={id:"sdk/reference/qa/line",title:"line",description:"The page describes the 'line' function of the OpenBB library, used for displaying line plots of data. It provides the source code link and details the parameters, usage, and examples of the function within the domain of quantitative analysis and data visualization using Python.",source:"@site/content/sdk/reference/qa/line.md",sourceDirName:"sdk/reference/qa",slug:"/sdk/reference/qa/line",permalink:"/openbb-docs/sdk/reference/qa/line",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/qa/line.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"line",description:"The page describes the 'line' function of the OpenBB library, used for displaying line plots of data. It provides the source code link and details the parameters, usage, and examples of the function within the domain of quantitative analysis and data visualization using Python.",keywords:["line plot","quantitative analysis","data visualization","pd.Series","matplotlib","datetime"]},sidebar:"tutorialSidebar",previous:{title:"kurtosis",permalink:"/openbb-docs/sdk/reference/qa/kurtosis"},next:{title:"normality",permalink:"/openbb-docs/sdk/reference/qa/normality"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"qa.line - Reference | OpenBB SDK Docs"}),"\n",(0,i.jsx)(t.p,{children:"Display line plot of data"}),"\n",(0,i.jsxs)(t.p,{children:["Source Code: [",(0,i.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L938",children:"link"}),"]"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'openbb.qa.line(data: pd.Series, title: str = "", log_y: bool = True, markers_lines: Optional[List[datetime.datetime]] = None, markers_scatter: Optional[List[datetime.datetime]] = None, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)\n'})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"data"}),(0,i.jsx)(t.td,{children:"pd.Series"}),(0,i.jsx)(t.td,{children:"Data to plot"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"False"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"title"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Title for plot"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"log_y"}),(0,i.jsx)(t.td,{children:"bool"}),(0,i.jsx)(t.td,{children:"Flag for showing y on log scale"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"markers_lines"}),(0,i.jsx)(t.td,{children:"Optional[List[datetime]]"}),(0,i.jsx)(t.td,{children:"List of dates to highlight using vertical lines"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"markers_scatter"}),(0,i.jsx)(t.td,{children:"Optional[List[datetime]]"}),(0,i.jsx)(t.td,{children:"List of dates to highlight using scatter"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"export"}),(0,i.jsx)(t.td,{children:"str"}),(0,i.jsx)(t.td,{children:"Format to export data"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"True"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"external_axes"}),(0,i.jsx)(t.td,{children:"Optional[List[plt.Axes]]"}),(0,i.jsx)(t.td,{children:"External axes (1 axis is expected in the list), by default None"}),(0,i.jsx)(t.td,{children:"None"}),(0,i.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(t.p,{children:"This function does not return anything"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\ndf = openbb.stocks.load("AAPL")\nopenbb.qa.line(data=df["Adj Close"])\n'})}),"\n",(0,i.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(5260),s=n(74848);function r(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>d});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);