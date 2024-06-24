"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[46481],{39809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>j,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(74848),s=r(28453),i=r(94331),a=r(18228),d=r(19365);const o={title:"expo",description:"The page explores the functionalities and parameters of the 'expo' model and 'chart' functions used in Probabilistic Exponential Smoothing forecasting. These functions take data as input and perform operations like backtesting, retraining historical and prediction. Source code links are also shared.",keywords:["Exponential Smoothing forecasting","expo model function","expo chart function","Probabilistic forecasting","data series operations","parameters"]},l=void 0,c={id:"sdk/reference/forecast/expo",title:"expo",description:"The page explores the functionalities and parameters of the 'expo' model and 'chart' functions used in Probabilistic Exponential Smoothing forecasting. These functions take data as input and perform operations like backtesting, retraining historical and prediction. Source code links are also shared.",source:"@site/content/sdk/reference/forecast/expo.md",sourceDirName:"sdk/reference/forecast",slug:"/sdk/reference/forecast/expo",permalink:"/sdk/reference/forecast/expo",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/forecast/expo.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"expo",description:"The page explores the functionalities and parameters of the 'expo' model and 'chart' functions used in Probabilistic Exponential Smoothing forecasting. These functions take data as input and perform operations like backtesting, retraining historical and prediction. Source code links are also shared.",keywords:["Exponential Smoothing forecasting","expo model function","expo chart function","Probabilistic forecasting","data series operations","parameters"]},sidebar:"tutorialSidebar",previous:{title:"ema",permalink:"/sdk/reference/forecast/ema"},next:{title:"export",permalink:"/sdk/reference/forecast/export"}},h={},u=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Parameters",id:"parameters-1",level:2},{value:"Returns",id:"returns-1",level:2}];function x(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"forecast.expo - Reference | OpenBB SDK Docs"}),"\n","\n",(0,n.jsxs)(a.A,{children:[(0,n.jsxs)(d.A,{value:"model",label:"Model",default:!0,children:[(0,n.jsx)(t.p,{children:"Performs Probabilistic Exponential Smoothing forecasting"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/expo_model.py#L34",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forecast.expo(data: Union[pd.Series, pd.DataFrame], target_column: str = "close", trend: str = "A", seasonal: str = "A", seasonal_periods: int = 7, dampen: str = "F", n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"Union[pd.Series, np.ndarray]"}),(0,n.jsx)(t.td,{children:"Input data."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_column"}),(0,n.jsx)(t.td,{children:"Optional[str]:"}),(0,n.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trend"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Trend component.  One of [N, A, M]",(0,n.jsx)("br",{}),"Defaults to ADDITIVE."]}),(0,n.jsx)(t.td,{children:"A"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seasonal"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Seasonal component.  One of [N, A, M]",(0,n.jsx)("br",{}),"Defaults to ADDITIVE."]}),(0,n.jsx)(t.td,{children:"A"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seasonal_periods"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsxs)(t.td,{children:["Number of seasonal periods in a year (7 for daily data)",(0,n.jsx)("br",{}),"If not set, inferred from frequency of the series."]}),(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dampen"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Dampen the function"}),(0,n.jsx)(t.td,{children:"F"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_predict"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to forecast"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_window"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Size of sliding window from start of timeseries and onwards"}),(0,n.jsx)(t.td,{children:"0.85"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_horizon"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to forecast when backtesting and retraining historical"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Tuple[List[TimeSeries], List[TimeSeries], List[TimeSeries], Optional[Union[float, ndarray]], ExponentialSmoothing]"}),(0,n.jsxs)(t.td,{children:["Adjusted Data series,",(0,n.jsx)("br",{}),"List of historical fcast values,",(0,n.jsx)("br",{}),"List of predicted fcast values,",(0,n.jsx)("br",{}),"Optional[float] - precision,",(0,n.jsx)("br",{}),"Fit Prob. Expo model object."]})]})})]}),(0,n.jsx)(t.hr,{})]}),(0,n.jsxs)(d.A,{value:"view",label:"Chart",children:[(0,n.jsx)(t.p,{children:"Display Probabilistic Exponential Smoothing forecast"}),(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/expo_view.py#L20",children:"link"}),"]"]}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.forecast.expo_chart(data: Union[pd.DataFrame, pd.Series], target_column: str = "close", dataset_name: str = "", trend: str = "A", seasonal: str = "A", seasonal_periods: int = 7, dampen: str = "F", n_predict: int = 5, start_window: float = 0.85, forecast_horizon: int = 5, export: str = "", residuals: bool = False, forecast_only: bool = False, start_date: Optional[datetime.datetime] = None, end_date: Optional[datetime.datetime] = None, naive: bool = False, export_pred_raw: bool = False, external_axes: Optional[List[axes]] = None)\n'})}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"parameters-1",children:"Parameters"}),(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"data"}),(0,n.jsx)(t.td,{children:"Union[pd.Series, np.array]"}),(0,n.jsx)(t.td,{children:"Data to forecast"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"False"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dataset_name str"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"The name of the ticker to be predicted"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_column"}),(0,n.jsx)(t.td,{children:"Optional[str]:"}),(0,n.jsx)(t.td,{children:'Target column to forecast. Defaults to "close".'}),(0,n.jsx)(t.td,{children:"close"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"trend"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Trend component.  One of [N, A, M]",(0,n.jsx)("br",{}),"Defaults to ADDITIVE."]}),(0,n.jsx)(t.td,{children:"A"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seasonal"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsxs)(t.td,{children:["Seasonal component.  One of [N, A, M]",(0,n.jsx)("br",{}),"Defaults to ADDITIVE."]}),(0,n.jsx)(t.td,{children:"A"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"seasonal_periods"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsxs)(t.td,{children:["Number of seasonal periods in a year",(0,n.jsx)("br",{}),"If not set, inferred from frequency of the series."]}),(0,n.jsx)(t.td,{children:"7"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"dampen"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Dampen the function"}),(0,n.jsx)(t.td,{children:"F"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"n_predict"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to forecast"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_window"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Size of sliding window from start of timeseries and onwards"}),(0,n.jsx)(t.td,{children:"0.85"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_horizon"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of days to forecast when backtesting and retraining historical"}),(0,n.jsx)(t.td,{children:"5"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"export"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Format to export data"}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"residuals"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to show residuals for the model. Defaults to False."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"forecast_only"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsx)(t.td,{children:"Whether to only show dates in the forecasting range. Defaults to False."}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"start_date"}),(0,n.jsx)(t.td,{children:"Optional[datetime]"}),(0,n.jsx)(t.td,{children:"The starting date to perform analysis, data before this is trimmed. Defaults to None."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"end_date"}),(0,n.jsx)(t.td,{children:"Optional[datetime]"}),(0,n.jsx)(t.td,{children:"The ending date to perform analysis, data after this is trimmed. Defaults to None."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"naive"}),(0,n.jsx)(t.td,{children:"bool"}),(0,n.jsxs)(t.td,{children:["Whether to show the naive baseline. This just assumes the closing price will be the same",(0,n.jsx)("br",{}),"as the previous day's closing price. Defaults to False."]}),(0,n.jsx)(t.td,{children:"False"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"external_axes"}),(0,n.jsx)(t.td,{children:"Optional[List[plt.axes]]"}),(0,n.jsx)(t.td,{children:"External axes to plot on"}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),(0,n.jsx)(t.hr,{}),(0,n.jsx)(t.h2,{id:"returns-1",children:"Returns"}),(0,n.jsx)(t.p,{children:"This function does not return anything"}),(0,n.jsx)(t.hr,{})]})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>a});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function a(e){let{children:t,hidden:r,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,a),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),i=r(23104),a=r(56347),d=r(205),o=r(57485),l=r(31682),c=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function u(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function x(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=u(e),[a,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[l,h]=j({queryString:r,groupId:s}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),m=(()=>{const e=l??p;return x({value:e,tabValues:i})?e:null})();(0,d.A)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=r(92303);const m={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:d,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),{pathname:h}=(0,a.zy)(),u=e=>{const t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),d(s))},x=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:o.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:x,onClick:u,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",m.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(v,{...e,...t})]})}function T(e){const t=(0,f.A)();return(0,b.jsx)(y,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);