"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[59991],{41247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=t(74848),o=t(28453),a=t(94331);const s={title:"valuation",description:"This is a documentation page about the openbb.economy.valuation function from OpenBB that uses Finviz data to get group valuation data. It allows for sorting by column and in ascending order, returning these results in a dataframe.",keywords:["group valuation data","finance sector","performance data","sort by column","ascending order","Finviz","GitHub","dataframe"]},i=void 0,d={id:"sdk/reference/economy/valuation",title:"valuation",description:"This is a documentation page about the openbb.economy.valuation function from OpenBB that uses Finviz data to get group valuation data. It allows for sorting by column and in ascending order, returning these results in a dataframe.",source:"@site/content/sdk/reference/economy/valuation.md",sourceDirName:"sdk/reference/economy",slug:"/sdk/reference/economy/valuation",permalink:"/openbb-docs/sdk/reference/economy/valuation",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/economy/valuation.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"valuation",description:"This is a documentation page about the openbb.economy.valuation function from OpenBB that uses Finviz data to get group valuation data. It allows for sorting by column and in ascending order, returning these results in a dataframe.",keywords:["group valuation data","finance sector","performance data","sort by column","ascending order","Finviz","GitHub","dataframe"]},sidebar:"tutorialSidebar",previous:{title:"usbonds",permalink:"/openbb-docs/sdk/reference/economy/usbonds"},next:{title:"ycrv",permalink:"/openbb-docs/sdk/reference/economy/ycrv"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{title:"economy.valuation - Reference | OpenBB SDK Docs"}),"\n",(0,r.jsx)(n.p,{children:"Get group (sectors, industry or country) valuation data. [Source: Finviz]"}),"\n",(0,r.jsxs)(n.p,{children:["Source Code: [",(0,r.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/economy/finviz_model.py#L66",children:"link"}),"]"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:'openbb.economy.valuation(group: str = "sector", sortby: str = "Name", ascend: bool = True)\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Default"}),(0,r.jsx)(n.th,{children:"Optional"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"group"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Group by category. Available groups can be accessed through get_groups()."}),(0,r.jsx)(n.td,{children:"sector"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sortby"}),(0,r.jsx)(n.td,{children:"str"}),(0,r.jsx)(n.td,{children:"Column to sort by"}),(0,r.jsx)(n.td,{children:"Name"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ascend"}),(0,r.jsx)(n.td,{children:"bool"}),(0,r.jsx)(n.td,{children:"Flag to sort in ascending order"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pd.DataFrame"}),(0,r.jsx)(n.td,{children:"dataframe with valuation/performance data"})]})})]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var r=t(5260),o=t(74848);function a(e){let{title:n}=e;return(0,o.jsx)(r.A,{children:(0,o.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(96540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);