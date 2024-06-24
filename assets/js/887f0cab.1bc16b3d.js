"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53794],{18818:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=n(74848),r=n(28453),d=n(94331);const i={title:"reddit",description:"The documentation page provides information on how to set Reddit API keys using openbb_terminal's Python SDK. It lays out detailed procedures to establish Reddit's client id and client secret for authentication. The page also explains defaults and optional parameters including user credentials and options for API key persistence.",keywords:["Reddit API","openbb keys","Reddit client id","Reddit client secret","Reddit authentication","openbb_terminal","Python SDK","API setting","API key","User credentials","Jupyter notebook","Environment variables","Status string"]},l=void 0,a={id:"sdk/reference/keys/reddit",title:"reddit",description:"The documentation page provides information on how to set Reddit API keys using openbb_terminal's Python SDK. It lays out detailed procedures to establish Reddit's client id and client secret for authentication. The page also explains defaults and optional parameters including user credentials and options for API key persistence.",source:"@site/content/sdk/reference/keys/reddit.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/reddit",permalink:"/sdk/reference/keys/reddit",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/keys/reddit.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"reddit",description:"The documentation page provides information on how to set Reddit API keys using openbb_terminal's Python SDK. It lays out detailed procedures to establish Reddit's client id and client secret for authentication. The page also explains defaults and optional parameters including user credentials and options for API key persistence.",keywords:["Reddit API","openbb keys","Reddit client id","Reddit client secret","Reddit authentication","openbb_terminal","Python SDK","API setting","API key","User credentials","Jupyter notebook","Environment variables","Status string"]},sidebar:"tutorialSidebar",previous:{title:"quandl",permalink:"/sdk/reference/keys/quandl"},next:{title:"rh",permalink:"/sdk/reference/keys/rh"}},o={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.A,{title:"keys.reddit - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(t.p,{children:"Set Reddit key"}),"\n",(0,s.jsxs)(t.p,{children:["Source Code: [",(0,s.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L942",children:"link"}),"]"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"openbb.keys.reddit(client_id: str, client_secret: str, password: str, username: str, useragent: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Name"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Optional"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"client_id"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Client ID"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"client_secret"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Client secret"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"password"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"User password"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"username"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"User username"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"useragent"}),(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"User useragent"}),(0,s.jsx)(t.td,{children:"None"}),(0,s.jsx)(t.td,{children:"False"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"persist"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsxs)(t.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,s.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,s.jsx)("br",{}),"By default, False."]}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"show_output"}),(0,s.jsx)(t.td,{children:"bool"}),(0,s.jsx)(t.td,{children:"Display status string or not. By default, False."}),(0,s.jsx)(t.td,{children:"False"}),(0,s.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"str"}),(0,s.jsx)(t.td,{children:"Status of key set"})]})})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\nopenbb.keys.reddit(\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'client_id="example_id",\n        client_secret="example_secret",\n        password="example_password",\n        username="example_username",\n        useragent="example_useragent"\n    )\n'})}),"\n",(0,s.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>d});n(96540);var s=n(5260),r=n(74848);function d(e){let{title:t}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var s=n(96540);const r={},d=s.createContext(r);function i(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);