"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32332],{1253:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=t(74848),a=t(28453),i=t(94331),s=t(18228),d=t(19365);const l={title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",keywords:["geographic revenue data","revenue per geography","Python function","documentation page","symbol parameter","period parameter","structure parameter","provider parameter","returns","results","metadata","data","date","geographic segment","Americas","Europe","Greater China","Japan","Rest of Asia Pacific"]},o=void 0,c={id:"platform/reference/equity/fundamental/revenue_per_geography",title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",source:"@site/content/platform/reference/equity/fundamental/revenue_per_geography.md",sourceDirName:"platform/reference/equity/fundamental",slug:"/platform/reference/equity/fundamental/revenue_per_geography",permalink:"/openbb-docs/platform/reference/equity/fundamental/revenue_per_geography",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/platform/reference/equity/fundamental/revenue_per_geography.md",tags:[],version:"current",frontMatter:{title:"revenue_per_geography",description:"Learn about the revenue per geography data with the geographic revenue  data Python function in this documentation page. Understand the symbol, period,  structure, and provider parameters. Explore the returns, results, metadata, and  the data structure including the date, geographic segment, and revenue by region  (Americas, Europe, Greater China, Japan, Rest of Asia Pacific).",keywords:["geographic revenue data","revenue per geography","Python function","documentation page","symbol parameter","period parameter","structure parameter","provider parameter","returns","results","metadata","data","date","geographic segment","Americas","Europe","Greater China","Japan","Rest of Asia Pacific"]},sidebar:"tutorialSidebar",previous:{title:"reported_financials",permalink:"/openbb-docs/platform/reference/equity/fundamental/reported_financials"},next:{title:"revenue_per_segment",permalink:"/openbb-docs/platform/reference/equity/fundamental/revenue_per_segment"}},u={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function p(e){const r={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/fundamental/revenue_per_geography - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(r.p,{children:"Get the revenue geographic breakdown for a given company over time."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"from openbb import obb\nobb.equity.fundamental.revenue_per_geography(symbol='AAPL', provider='fmp')\nobb.equity.fundamental.revenue_per_geography(symbol='AAPL', period='annual', structure='flat', provider='fmp')\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period"}),(0,n.jsx)(r.td,{children:"Literal['quarter', 'annual']"}),(0,n.jsx)(r.td,{children:"Time period of the data to return."}),(0,n.jsx)(r.td,{children:"annual"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"structure"}),(0,n.jsx)(r.td,{children:"Literal['hierarchical', 'flat']"}),(0,n.jsx)(r.td,{children:"Structure of the returned data."}),(0,n.jsx)(r.td,{children:"flat"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"symbol"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"Symbol to get data for."}),(0,n.jsx)(r.td,{}),(0,n.jsx)(r.td,{children:"False"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period"}),(0,n.jsx)(r.td,{children:"Literal['quarter', 'annual']"}),(0,n.jsx)(r.td,{children:"Time period of the data to return."}),(0,n.jsx)(r.td,{children:"annual"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"structure"}),(0,n.jsx)(r.td,{children:"Literal['hierarchical', 'flat']"}),(0,n.jsx)(r.td,{children:"Structure of the returned data."}),(0,n.jsx)(r.td,{children:"flat"}),(0,n.jsx)(r.td,{children:"True"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"provider"}),(0,n.jsx)(r.td,{children:"Literal['fmp']"}),(0,n.jsx)(r.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(r.td,{children:"None"}),(0,n.jsx)(r.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[RevenueGeographic]\n        Serializable results.\n\n    provider : Optional[Literal['fmp']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(d.A,{value:"standard",label:"standard",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period_ending"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_period"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The fiscal period of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_year"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The fiscal year of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filing_date"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The filing date of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"geographic_segment"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Dictionary of the revenue by geographic segment."})]})]})]})}),(0,n.jsx)(d.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"period_ending"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The end date of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_period"}),(0,n.jsx)(r.td,{children:"str"}),(0,n.jsx)(r.td,{children:"The fiscal period of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"fiscal_year"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"The fiscal year of the reporting period."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"filing_date"}),(0,n.jsx)(r.td,{children:"date"}),(0,n.jsx)(r.td,{children:"The filing date of the report."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"geographic_segment"}),(0,n.jsx)(r.td,{children:"int"}),(0,n.jsx)(r.td,{children:"Dictionary of the revenue by geographic segment."})]})]})]})})]})]})}function f(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},19365:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(34164);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function s(e){let{children:r,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:r})}},94331:(e,r,t)=>{t.d(r,{A:()=>i});t(96540);var n=t(5260),a=t(74848);function i(e){let{title:r}=e;return(0,a.jsx)(n.A,{children:(0,a.jsx)("title",{children:r})})}},18228:(e,r,t)=>{t.d(r,{A:()=>_});var n=t(96540),a=t(34164),i=t(23104),s=t(56347),d=t(205),l=t(57485),o=t(31682),c=t(89466);function u(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??u(t);return function(e){const r=(0,o.X)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const a=(0,s.W6)(),i=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const r=new URLSearchParams(a.location.search);r.set(i,e),a.replace({...a.location,search:r.toString()})}),[i,a])]}function x(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:i}))),[o,u]=f({queryString:t,groupId:a}),[x,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,i]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),j=(()=>{const e=o??x;return p({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{j&&l(j)}),[j]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,i]),tabValues:i}}var m=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var g=t(74848);function b(e){let{className:r,block:t,selectedValue:n,selectValue:d,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:u}=(0,s.zy)(),h=e=>{const r=e.currentTarget,t=o.indexOf(r),a=l[t].value;a!==n&&(c(r),d(a))},p=e=>{let r=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:r,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:p,onClick:h,...i,className:(0,a.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",j.tabItem,i?.className,{"border-b-2 pointer-events-none":n===r,"border-b-2 text-[#669dcb] border-[#669dcb]":n===r&&u.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==r&&u.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==r&&u.startsWith("/terminal")}),children:t??r},r)}))})}function v(e){let{lazy:r,children:t,selectedValue:a}=e;if(t=Array.isArray(t)?t:[t],r){const e=t.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=x(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",j.tabList),children:[(0,g.jsx)(b,{...e,...r}),(0,g.jsx)(v,{...e,...r})]})}function _(e){const r=(0,m.A)();return(0,g.jsx)(y,{...e},String(r))}},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>d});var n=t(96540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);