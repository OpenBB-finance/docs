"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[65546],{58856:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var s=t(74848),i=t(28453),r=t(94331);const o={title:"similar_dfs",description:"The similar_dfs function in OpenBB is documented on this page. This function is used for generating dataframes for similar companies by taking inputs such as a ticker symbol, the output from the yfinance.info function and the number of similar companies to produce. The option of filtering based on market cap is also provided. Going through this documentation provides valuable information to understand the use and functioning of the similar_dfs function.",keywords:["similar_dfs","dataframes","similar companies","stocks","fundamental analysis","yfinance.info function","ticker symbol","market cap"]},a=void 0,d={id:"sdk/reference/stocks/fa/similar_dfs",title:"similar_dfs",description:"The similar_dfs function in OpenBB is documented on this page. This function is used for generating dataframes for similar companies by taking inputs such as a ticker symbol, the output from the yfinance.info function and the number of similar companies to produce. The option of filtering based on market cap is also provided. Going through this documentation provides valuable information to understand the use and functioning of the similar_dfs function.",source:"@site/content/sdk/reference/stocks/fa/similar_dfs.md",sourceDirName:"sdk/reference/stocks/fa",slug:"/sdk/reference/stocks/fa/similar_dfs",permalink:"/sdk/reference/stocks/fa/similar_dfs",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/sdk/reference/stocks/fa/similar_dfs.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922553e4,frontMatter:{title:"similar_dfs",description:"The similar_dfs function in OpenBB is documented on this page. This function is used for generating dataframes for similar companies by taking inputs such as a ticker symbol, the output from the yfinance.info function and the number of similar companies to produce. The option of filtering based on market cap is also provided. Going through this documentation provides valuable information to understand the use and functioning of the similar_dfs function.",keywords:["similar_dfs","dataframes","similar companies","stocks","fundamental analysis","yfinance.info function","ticker symbol","market cap"]},sidebar:"tutorialSidebar",previous:{title:"shrs",permalink:"/sdk/reference/stocks/fa/shrs"},next:{title:"splits",permalink:"/sdk/reference/stocks/fa/splits"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function f(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.A,{title:"stocks.fa.similar_dfs - Reference | OpenBB SDK Docs"}),"\n",(0,s.jsx)(n.p,{children:"Get dataframes for similar companies"}),"\n",(0,s.jsxs)(n.p,{children:["Source Code: [",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/fundamental_analysis/dcf_model.py#L468",children:"link"}),"]"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"openbb.stocks.fa.similar_dfs(symbol: str, info: Dict[str, Any], n: int, no_filter: bool = False)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Optional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"symbol"}),(0,s.jsx)(n.td,{children:"str"}),(0,s.jsx)(n.td,{children:"The ticker symbol to create a dataframe for"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"into"}),(0,s.jsx)(n.td,{children:"Dict[str,Any]"}),(0,s.jsx)(n.td,{children:"The dictionary produced from the yfinance.info function"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"n"}),(0,s.jsx)(n.td,{children:"int"}),(0,s.jsx)(n.td,{children:"The number of similar companies to produce"}),(0,s.jsx)(n.td,{children:"None"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"no_filter"}),(0,s.jsx)(n.td,{children:"bool"}),(0,s.jsx)(n.td,{children:"True means that we do not filter based on market cap"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]})]})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"List[str, pd.DataFrame]"}),(0,s.jsx)(n.td,{children:"A list of similar companies"})]})})]}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var s=t(5260),i=t(74848);function r(e){let{title:n}=e;return(0,i.jsx)(s.A,{children:(0,i.jsx)("title",{children:n})})}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(96540);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);