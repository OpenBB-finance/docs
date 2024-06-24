"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70574],{10997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var n=r(74848),s=r(28453),a=r(94331),i=r(18228),o=r(19365);const l={title:"SHARE_STATISTICS",description:"Learn how to retrieve and analyze share statistics for a given company using the obb.equity.ownership.share_statistics API endpoint. This documentation provides details on the parameters, return values, and data structure.",keywords:["share statistics","company statistics","equity ownership","symbol","provider","data","free float","float shares","outstanding shares","source"]},c=void 0,d={id:"excel/reference/equity/ownership/share_statistics",title:"SHARE_STATISTICS",description:"Learn how to retrieve and analyze share statistics for a given company using the obb.equity.ownership.share_statistics API endpoint. This documentation provides details on the parameters, return values, and data structure.",source:"@site/content/excel/reference/equity/ownership/share_statistics.md",sourceDirName:"excel/reference/equity/ownership",slug:"/excel/reference/equity/ownership/share_statistics",permalink:"/openbb-docs/excel/reference/equity/ownership/share_statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/excel/reference/equity/ownership/share_statistics.md",tags:[],version:"current",frontMatter:{title:"SHARE_STATISTICS",description:"Learn how to retrieve and analyze share statistics for a given company using the obb.equity.ownership.share_statistics API endpoint. This documentation provides details on the parameters, return values, and data structure.",keywords:["share statistics","company statistics","equity ownership","symbol","provider","data","free float","float shares","outstanding shares","source"]},sidebar:"tutorialSidebar",previous:{title:"MAJOR_HOLDERS",permalink:"/openbb-docs/excel/reference/equity/ownership/major_holders"},next:{title:"EQUITY.PRICE",permalink:"/openbb-docs/excel/reference/equity/price/"}},u={},h=[{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Data",id:"data",level:2}];function p(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.A,{title:"EQUITY.OWNERSHIP.SHARE_STATISTICS | OpenBB Add-in for Excel Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get data about share float for a given company."}),"\n",(0,n.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:"=OBB.EQUITY.OWNERSHIP.SHARE_STATISTICS(symbol)\n"})}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-excel",children:'=OBB.EQUITY.OWNERSHIP.SHARE_STATISTICS("AAPL")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Required"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"symbol"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Text"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"Symbol to get data for."})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"True"})})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n","\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsx)(i.A,{children:(0,n.jsx)(o.A,{value:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"free_float"}),(0,n.jsx)(t.td,{children:"Percentage of unrestricted shares of a publicly-traded company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"float_shares"}),(0,n.jsx)(t.td,{children:"Number of shares available for trading by the general public."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"outstanding_shares"}),(0,n.jsx)(t.td,{children:"Total number of shares of a publicly-traded company."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"source"}),(0,n.jsx)(t.td,{children:"Source of the received data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"adjweightedavebasicdilutedsharesos"}),(0,n.jsx)(t.td,{children:"Total number of shares of a publicly-traded company, adjusted for splits."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"public_float"}),(0,n.jsx)(t.td,{children:"Aggregate market value of the shares of a publicly-traded company."})]})]})]})})})]})}function b(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var a=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(5260),s=r(74848);function a(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),a=r(23104),i=r(56347),o=r(205),l=r(57485),c=r(31682),d=r(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??u(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=b({queryString:r,groupId:s}),[f,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),m=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var v=r(74848);function y(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.a_)(),{pathname:u}=(0,i.zy)(),h=e=>{const t=e.currentTarget,r=c.indexOf(t),s=l[r].value;s!==n&&(d(t),o(s))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:p,onClick:h,...a,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,a?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&u.startsWith("/terminal")}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function T(e){const t=(0,x.A)();return(0,v.jsx)(g,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var n=r(96540);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);