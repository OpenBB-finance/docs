"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86766],{24612:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>l});var n=s(74848),r=s(28453),i=s(94331);const a={title:"popular",description:"This page contains a python function to get popular tickers from a list of subreddits. The function leverages the OpenBB.Finance Terminal to analyze the behavioral analysis of posts from Reddit.",keywords:["OpenBB.Finance Terminal","Reddit ticker analysis","Python function","Behavioral analysis","Popular tickers","Subreddits","Post analysis","DataFrames"]},o=void 0,d={id:"sdk/reference/stocks/ba/popular",title:"popular",description:"This page contains a python function to get popular tickers from a list of subreddits. The function leverages the OpenBB.Finance Terminal to analyze the behavioral analysis of posts from Reddit.",source:"@site/content/sdk/reference/stocks/ba/popular.md",sourceDirName:"sdk/reference/stocks/ba",slug:"/sdk/reference/stocks/ba/popular",permalink:"/openbb-docs/sdk/reference/stocks/ba/popular",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/reference/stocks/ba/popular.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,frontMatter:{title:"popular",description:"This page contains a python function to get popular tickers from a list of subreddits. The function leverages the OpenBB.Finance Terminal to analyze the behavioral analysis of posts from Reddit.",keywords:["OpenBB.Finance Terminal","Reddit ticker analysis","Python function","Behavioral analysis","Popular tickers","Subreddits","Post analysis","DataFrames"]},sidebar:"tutorialSidebar",previous:{title:"messages",permalink:"/openbb-docs/sdk/reference/stocks/ba/messages"},next:{title:"queries",permalink:"/openbb-docs/sdk/reference/stocks/ba/queries"}},c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.A,{title:"stocks.ba.popular - Reference | OpenBB SDK Docs"}),"\n",(0,n.jsx)(t.p,{children:"Get popular tickers from list of subreddits [Source: reddit]."}),"\n",(0,n.jsxs)(t.p,{children:["Source Code: [",(0,n.jsx)(t.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/reddit_model.py#L145",children:"link"}),"]"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'openbb.stocks.ba.popular(limit: int = 10, post_limit: int = 50, subreddits: str = "")\n'})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Name"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Optional"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"Number of top tickers to get"}),(0,n.jsx)(t.td,{children:"10"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"post_limit"}),(0,n.jsx)(t.td,{children:"int"}),(0,n.jsx)(t.td,{children:"How many posts to analyze in each subreddit"}),(0,n.jsx)(t.td,{children:"50"}),(0,n.jsx)(t.td,{children:"True"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"subreddits"}),(0,n.jsx)(t.td,{children:"str"}),(0,n.jsx)(t.td,{children:"String of comma separated subreddits."}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"True"})]})]})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pd.DataFrame"}),(0,n.jsx)(t.td,{children:"DataFrame of top tickers from supplied subreddits"})]})})]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},94331:(e,t,s)=>{s.d(t,{A:()=>i});s(96540);var n=s(5260),r=s(74848);function i(e){let{title:t}=e;return(0,r.jsx)(n.A,{children:(0,r.jsx)("title",{children:t})})}},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>o});var n=s(96540);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);