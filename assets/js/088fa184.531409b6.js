"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75723],{22394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(74848),s=t(28453),a=t(94331);const i={title:"clean",description:"This documentation details how to use OpenBBTerminal's 'clean' function to clean up NaNs in a pandas DataFrame. It outlines the parameters, return values, and available methods for filling and dropping NaN values.",keywords:["econometrics","clean data","NaN handling","machine learning","dataset cleaning","fill method","drop method","data pre-processing"]},d=void 0,c={id:"sdk/reference/econometrics/clean",title:"clean",description:"This documentation details how to use OpenBBTerminal's 'clean' function to clean up NaNs in a pandas DataFrame. It outlines the parameters, return values, and available methods for filling and dropping NaN values.",source:"@site/content/sdk/reference/econometrics/clean.md",sourceDirName:"sdk/reference/econometrics",slug:"/sdk/reference/econometrics/clean",permalink:"/openbb-docs/sdk/reference/econometrics/clean",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/econometrics/clean.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"clean",description:"This documentation details how to use OpenBBTerminal's 'clean' function to clean up NaNs in a pandas DataFrame. It outlines the parameters, return values, and available methods for filling and dropping NaN values.",keywords:["econometrics","clean data","NaN handling","machine learning","dataset cleaning","fill method","drop method","data pre-processing"]},sidebar:"tutorialSidebar",previous:{title:"bpag",permalink:"/openbb-docs/sdk/reference/econometrics/bpag"},next:{title:"coint",permalink:"/openbb-docs/sdk/reference/econometrics/coint"}},l={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"econometrics.clean - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Clean up NaNs from the dataset"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/econometrics_model.py#L65",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.econometrics.clean(dataset: pd.DataFrame, fill: str = "", drop: str = "", limit: Optional[int] = None)\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"dataset"}),(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"The dataset you wish to clean"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"fill"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsxs)(n.td,{children:["The method of filling NaNs. Choose from:",(0,r.jsx)("br",{}),"rfill, cfill, rbfill, cbfill, rffill, cffill"]}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"drop"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsxs)(n.td,{children:["The method of dropping NaNs. Choose from:",(0,r.jsx)("br",{}),"rdrop, cdrop"]}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"limit"}),(0,r.jsx)(n.td,{children:"int"}),(0,r.jsx)(n.td,{children:"The maximum limit you wish to apply that can be forward or backward filled"}),(0,r.jsx)(n.td,{children:"None"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"Dataframe with cleaned up data"})]})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),s=t(74848);function a(e){let{title:n}=e;return(0,s.jsx)(r.A,{children:(0,s.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(96540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);