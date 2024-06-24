"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74103],{88988:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var i=r(74848),s=r(28453),n=r(94331);const a={title:"historical",description:"This documentation page provides the user with instructions on how to display futures historical data. Certain parameters like ticker data, start date, and expiry date can be specified to customize the output according to individual needs.",keywords:["display futures historical","futures timeseries","Ticker data","historical data","future expiry date"]},c=void 0,d={id:"terminal/reference/futures/historical",title:"historical",description:"This documentation page provides the user with instructions on how to display futures historical data. Certain parameters like ticker data, start date, and expiry date can be specified to customize the output according to individual needs.",source:"@site/content/terminal/reference/futures/historical.md",sourceDirName:"terminal/reference/futures",slug:"/terminal/reference/futures/historical",permalink:"/openbb-docs/terminal/reference/futures/historical",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/futures/historical.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"historical",description:"This documentation page provides the user with instructions on how to display futures historical data. Certain parameters like ticker data, start date, and expiry date can be specified to customize the output according to individual needs.",keywords:["display futures historical","futures timeseries","Ticker data","historical data","future expiry date"]},sidebar:"tutorialSidebar",previous:{title:"curve",permalink:"/openbb-docs/terminal/reference/futures/curve"},next:{title:"search",permalink:"/openbb-docs/terminal/reference/futures/search"}},o={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function u(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.A,{title:"futures /historical - Reference | OpenBB Terminal Docs"}),"\n",(0,i.jsx)(t.p,{children:"Display futures historical. [Source: YahooFinance]"}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"historical -t TICKER [-s START] [-e EXPIRY]\n"})}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default"}),(0,i.jsx)(t.th,{children:"Optional"}),(0,i.jsx)(t.th,{children:"Choices"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ticker"}),(0,i.jsx)(t.td,{children:"Future ticker to display timeseries separated by comma when multiple, e.g.: BLK,QI"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"False"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"start"}),(0,i.jsx)(t.td,{children:"Initial date. Default: 3 years ago"}),(0,i.jsx)(t.td,{children:"datetime.now() - timedelta(days=365)"}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"expiry"}),(0,i.jsx)(t.td,{children:"Select future expiry date with format YYYY-MM"}),(0,i.jsx)(t.td,{}),(0,i.jsx)(t.td,{children:"True"}),(0,i.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/25267873/196562549-1251b0fd-ca36-4e0f-bca6-b6bfe473effa.png",alt:"blk"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/25267873/196562627-79f9ffa1-8582-457c-91e8-5c18d6d4304f.png",alt:"Figure_31"})}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},94331:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var i=r(5260),s=r(74848);function n(e){let{title:t}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:t})})}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var i=r(96540);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);