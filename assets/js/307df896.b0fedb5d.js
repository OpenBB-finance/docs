"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7880],{45635:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>a,metadata:()=>o,toc:()=>x});var n=r(74848),s=r(28453),i=r(94331),d=r(18228),l=r(19365);const a={title:"consensus",description:"Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure.",keywords:["Price target consensus data","equity estimates consensus","symbol parameter","provider parameter","results attribute","provider attribute","warnings attribute","chart attribute","metadata attribute","data table","target_high column","target_low column","target_consensus column","target_median column"]},c=void 0,o={id:"platform/reference/equity/estimates/consensus",title:"consensus",description:"Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure.",source:"@site/content/platform/reference/equity/estimates/consensus.md",sourceDirName:"platform/reference/equity/estimates",slug:"/platform/reference/equity/estimates/consensus",permalink:"/platform/reference/equity/estimates/consensus",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/platform/reference/equity/estimates/consensus.md",tags:[],version:"current",frontMatter:{title:"consensus",description:"Learn how to access and use the Price Target Consensus functionality  in your application. Explore the available parameters and understand the returned  data structure.",keywords:["Price target consensus data","equity estimates consensus","symbol parameter","provider parameter","results attribute","provider attribute","warnings attribute","chart attribute","metadata attribute","data table","target_high column","target_low column","target_consensus column","target_median column"]},sidebar:"tutorialSidebar",previous:{title:"analyst_search",permalink:"/platform/reference/equity/estimates/analyst_search"},next:{title:"forward_ebitda",permalink:"/platform/reference/equity/estimates/forward_ebitda"}},h={},x=[{value:"Examples",id:"examples",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Data",id:"data",level:2}];function u(e){const t={code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"equity/estimates/consensus - Reference | OpenBB Platform Docs"}),"\n","\n",(0,n.jsx)(t.p,{children:"Get consensus price target and recommendation."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"from openbb import obb\nobb.equity.estimates.consensus(symbol='AAPL', provider='fmp')\nobb.equity.estimates.consensus(symbol='AAPL,MSFT', provider='yfinance')\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry_group_number"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The Zacks industry group number."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"Union[str, List[str]]"}),(0,n.jsx)(t.td,{children:"Symbol to get data for. Multiple items allowed for provider(s): fmp, intrinio, tmx, yfinance."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"provider"}),(0,n.jsx)(t.td,{children:"Literal['fmp', 'intrinio', 'tmx', 'yfinance']"}),(0,n.jsx)(t.td,{children:"The provider to use, by default None. If None, the priority list configured in the settings is used. Default priority: f, m, p."}),(0,n.jsx)(t.td,{children:"None"}),(0,n.jsx)(t.td,{children:"True"})]})]})]})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",metastring:"wordwrap",children:"OBBject\n    results : List[PriceTargetConsensus]\n        Serializable results.\n\n    provider : Optional[Literal['fmp', 'intrinio', 'tmx', 'yfinance']]\n        Provider name.\n\n    warnings : Optional[List[Warning_]]\n        List of warnings.\n\n    chart : Optional[Chart]\n        Chart object.\n\n    extra : Dict[str, Any]\n        Extra info.\n"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data",children:"Data"}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(l.A,{value:"standard",label:"standard",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The company name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"High target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Low target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Consensus target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_median"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Median target of the price target consensus."})]})]})]})}),(0,n.jsx)(l.A,{value:"fmp",label:"fmp",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The company name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"High target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Low target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Consensus target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_median"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Median target of the price target consensus."})]})]})]})}),(0,n.jsx)(l.A,{value:"intrinio",label:"intrinio",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The company name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"High target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Low target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Consensus target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_median"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Median target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"standard_deviation"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"The standard deviation of target price estimates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_anaylsts"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The total number of target price estimates in consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"raised"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of analysts that have raised their target price estimates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lowered"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The number of analysts that have lowered their target price estimates."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"most_recent_date"}),(0,n.jsx)(t.td,{children:"date"}),(0,n.jsx)(t.td,{children:"The date of the most recent estimate."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"industry_group_number"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"The Zacks industry group number."})]})]})]})}),(0,n.jsx)(l.A,{value:"tmx",label:"tmx",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The company name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"High target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Low target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Consensus target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_median"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Median target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_upside"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Percent of upside, as a normalized percent."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total_analysts"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Total number of analyst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"buy_ratings"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of buy ratings."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sell_ratings"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of sell ratings."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hold_ratings"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of hold ratings."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"consensus_action"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Consensus action."})]})]})]})}),(0,n.jsx)(l.A,{value:"yfinance",label:"yfinance",children:(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"symbol"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Symbol representing the entity requested in the data."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"name"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"The company name"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_high"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"High target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_low"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Low target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_consensus"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Consensus target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"target_median"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Median target of the price target consensus."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"recommendation"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Recommendation - buy, sell, etc."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"recommendation_mean"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Mean recommendation score where 1 is strong buy and 5 is strong sell."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"number_of_analysts"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of analysts providing opinions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"current_price"}),(0,n.jsx)(t.td,{children:"float"}),(0,n.jsx)(t.td,{children:"Current price of the stock."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"currency"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"Currency the stock is priced in."})]})]})]})})]})]})}function j(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>d});r(96540);var n=r(34164);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function d(e){let{children:t,hidden:r,className:d}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,d),hidden:r,children:t})}},94331:(e,t,r)=>{r.d(t,{A:()=>i});r(96540);var n=r(5260),s=r(74848);function i(e){let{title:t}=e;return(0,s.jsx)(n.A,{children:(0,s.jsx)("title",{children:t})})}},18228:(e,t,r)=>{r.d(t,{A:()=>T});var n=r(96540),s=r(34164),i=r(23104),d=r(56347),l=r(205),a=r(57485),c=r(31682),o=r(89466);function h(e){return function(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}function x(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??h(r);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:r}=e;const s=(0,d.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,a.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=x(e),[d,a]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,h]=j({queryString:r,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,o.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),f=(()=>{const e=c??p;return u({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&a(f)}),[f]);return{selectedValue:d,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=r(92303);const f={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb"};var b=r(74848);function g(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),{pathname:h}=(0,d.zy)(),x=e=>{const t=e.currentTarget,r=c.indexOf(t),s=a[r].value;s!==n&&(o(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("_group-tab list-none -ml-7 my-6 overflow-auto"),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:u,onClick:x,...i,className:(0,s.A)("font-bold tracking-widest w-fit px-3 inline-flex py-1 uppercase border-b text-lg cursor-pointer",f.tabItem,i?.className,{"border-b-2 pointer-events-none":n===t,"border-b-2 text-[#669dcb] border-[#669dcb]":n===t&&h.startsWith("/terminal"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/sdk"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/sdk"),"border-b-2 text-[#FB923C] border-[#FB923C]":n===t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#ffd4b1] hover:border-[#ffd4b1]":n!==t&&h.startsWith("/platform"),"border-grey-400 text-grey-400 hover:text-[#abd2f1] hover:border-[#abd2f1]":n!==t&&h.startsWith("/terminal")}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;if(r=Array.isArray(r)?r:[r],t){const e=r.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function v(e){const t=p(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,b.jsx)(g,{...e,...t}),(0,b.jsx)(y,{...e,...t})]})}function T(e){const t=(0,m.A)();return(0,b.jsx)(v,{...e},String(t))}},28453:(e,t,r)=>{r.d(t,{R:()=>d,x:()=>l});var n=r(96540);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);