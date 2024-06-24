"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24737],{94366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=t(74848),r=t(28453),i=t(94331);const a={title:"cpanic",description:"This page contains detailed information regarding the cpanic function of OpenBB Terminal. It explains how to set the Cpanic key including parameters, results, and examples.",keywords:["Python SDK","API key management","cpanic function","environment variables","Jupyter notebook"]},c=void 0,l={id:"sdk/reference/keys/cpanic",title:"cpanic",description:"This page contains detailed information regarding the cpanic function of OpenBB Terminal. It explains how to set the Cpanic key including parameters, results, and examples.",source:"@site/content/sdk/reference/keys/cpanic.md",sourceDirName:"sdk/reference/keys",slug:"/sdk/reference/keys/cpanic",permalink:"/openbb-docs/sdk/reference/keys/cpanic",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/keys/cpanic.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"cpanic",description:"This page contains detailed information regarding the cpanic function of OpenBB Terminal. It explains how to set the Cpanic key including parameters, results, and examples.",keywords:["Python SDK","API key management","cpanic function","environment variables","Jupyter notebook"]},sidebar:"tutorialSidebar",previous:{title:"coinglass",permalink:"/openbb-docs/sdk/reference/keys/coinglass"},next:{title:"degiro",permalink:"/openbb-docs/sdk/reference/keys/degiro"}},d={},o=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Examples",id:"examples",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.A,{title:"keys.cpanic - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(n.p,{children:"Set Cpanic key."}),"\n",(0,s.jsxs)(n.p,{children:["Source Code: [",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1924",children:"link"}),"]"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"openbb.keys.cpanic(key: str, persist: bool = False, show_output: bool = False)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"key"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"API key"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"persist"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsxs)(n.td,{children:["If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.",(0,s.jsx)("br",{}),"If True, api key change will be global, i.e. it will affect terminal environment variables.",(0,s.jsx)("br",{}),"By default, False."]}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"show_output"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"Display status string or not. By default, False."}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"Status of key set"})]})})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from openbb_terminal.sdk import openbb\nopenbb.keys.cpanic(key="example_key")\n'})}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>i});t(96540);var s=t(5260),r=t(74848);function i(e){let{title:n}=e;return(0,r.jsx)(s.A,{children:(0,r.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);