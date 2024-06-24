"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[38135],{61413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=r(74848),n=r(28453),s=r(94331),i=r(18228),o=r(19365);const l={title:"normality",description:"Learn about normality statistics and their significance in data analysis.  Discover different techniques such as kurtosis, skewness, Jarque-Bera, Shapiro-Wilk,  and Kolmogorov-Smirnov for evaluating normality in time series data. Explore how  these tests can help determine if a data sample follows a normal distribution.",keywords:["normality statistics","kurtosis","skewness","Jarque-Bera","Shapiro-Wilk","Kolmogorov-Smirnov","time series data","target column","normality tests"]},u=void 0,c={id:"platform/reference/quantitative/normality",title:"normality",description:"Learn about normality statistics and their significance in data analysis.  Discover different techniques such as kurtosis, skewness, Jarque-Bera, Shapiro-Wilk,  and Kolmogorov-Smirnov for evaluating normality in time series data. Explore how  these tests can help determine if a data sample follows a normal distribution.",source:"@site/content/platform/reference/quantitative/normality.md",sourceDirName:"platform/reference/quantitative",slug:"/platform/reference/quantitative/normality",permalink:"/platform/reference/quantitative/normality",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/quantitative/normality.md",tags:[],version:"current",frontMatter:{title:"normality",description:"Learn about normality statistics and their significance in data analysis.  Discover different techniques such as kurtosis, skewness, Jarque-Bera, Shapiro-Wilk,  and Kolmogorov-Smirnov for evaluating normality in time series data. Explore how  these tests can help determine if a data sample follows a normal distribution.",keywords:["normality statistics","kurtosis","skewness","Jarque-Bera","Shapiro-Wilk","Kolmogorov-Smirnov","time series data","target column","normality tests"]},sidebar:"tutorialSidebar",previous:{title:"capm",permalink:"/platform/reference/quantitative/capm"},next:{title:"summary",permalink:"/platform/reference/quantitative/summary"}},d={},h=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function m(e){const t={code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{title:"quantitative/normality - Reference | OpenBB Platform Docs"}),"\n","\n",(0,a.jsx)(t.p,{children:"Get Normality Statistics."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Kurtosis"}),": whether the kurtosis of a sample differs from the normal distribution."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Skewness"}),": whether the skewness of a sample differs from the normal distribution."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Jarque-Bera"}),": whether the sample data has the skewness and kurtosis matching a normal distribution."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Shapiro-Wilk"}),": whether a random sample comes from a normal distribution."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Kolmogorov-Smirnov"}),": whether two underlying one-dimensional probability distributions differ."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"from openbb import obb\n# Get Normality Statistics.\nstock_data = obb.equity.price.historical(symbol='TSLA', start_date='2023-01-01', provider='fmp').to_df()\nobb.quantitative.normality(data=stock_data, target='close')\nobb.quantitative.normality(target='close', data=[{'date': '2023-01-02', 'open': 110.0, 'high': 120.0, 'low': 100.0, 'close': 115.0, 'volume': 10000.0}, {'date': '2023-01-03', 'open': 165.0, 'high': 180.0, 'low': 150.0, 'close': 172.5, 'volume': 15000.0}, {'date': '2023-01-04', 'open': 146.67, 'high': 160.0, 'low': 133.33, 'close': 153.33, 'volume': 13333.33}, {'date': '2023-01-05', 'open': 137.5, 'high': 150.0, 'low': 125.0, 'close': 143.75, 'volume': 12500.0}, {'date': '2023-01-06', 'open': 132.0, 'high': 144.0, 'low': 120.0, 'close': 138.0, 'volume': 12000.0}, {'date': '2023-01-07', 'open': 128.33, 'high': 140.0, 'low': 116.67, 'close': 134.17, 'volume': 11666.67}, {'date': '2023-01-08', 'open': 125.71, 'high': 137.14, 'low': 114.29, 'close': 131.43, 'volume': 11428.57}, {'date': '2023-01-09', 'open': 123.75, 'high': 135.0, 'low': 112.5, 'close': 129.38, 'volume': 11250.0}])\n"})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(i.A,{children:(0,a.jsx)(o.A,{value:"standard",label:"standard",children:(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Name"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{children:"Description"}),(0,a.jsx)(t.th,{children:"Default"}),(0,a.jsx)(t.th,{children:"Optional"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"data"}),(0,a.jsx)(t.td,{children:"List[Data]"}),(0,a.jsx)(t.td,{children:"Time series data."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"target"}),(0,a.jsx)(t.td,{children:"str"}),(0,a.jsx)(t.td,{children:"Target column name."}),(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{children:"False"})]})]})]})})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : NormalityModel\n        Normality tests summary. See qa_models.NormalityModel for details.\n"})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var a=r(34164);const n={tabItem:"tabItem_Ymn6"};var s=r(74848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>s});r(96540);var a=r(5260),n=r(74848);function s(e){let{title:t}=e;return(0,n.jsx)(a.A,{children:(0,n.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>w});var a=r(96540),n=r(34164),s=r(23104),i=r(56347),o=r(205),l=r(57485),u=r(31682),c=r(89466);function d(e){return function(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=p({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(92303);const v={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var x=r(74848);function g(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),{pathname:d}=(0,i.zy)(),h=e=>{const t=e.currentTarget,r=u.indexOf(t),n=l[r].value;n!==a&&(c(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:l.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:m,onClick:h,...s,className:(0,n.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",v.tabItem,s?.className,{"border-b-2 pointer-events-none":a===t,"border-b-2 text-[#669dcb] border-[#669dcb]":a===t&&d.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&d.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&d.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":a===t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":a!==t&&d.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":a!==t&&d.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:n}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=f(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>o});var a=r(96540);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);