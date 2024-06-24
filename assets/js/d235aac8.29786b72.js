"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74862],{32377:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(74848),a=i(28453),r=i(94331);const s={title:"Advanced Routines",sidebar_position:5,description:"This page provides guidance on creating and running advanced workflows in the OpenBB Platform CLI by introducing variables and arguments for routines. It explains input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",keywords:["automated workflows","routines","arguments","variables","relative time keywords","internal script variables","loops","batch execution","Tutorial","Running Scripts","Executing Commands"]},o=void 0,l={id:"cli/routines/advanced-routines",title:"Advanced Routines",description:"This page provides guidance on creating and running advanced workflows in the OpenBB Platform CLI by introducing variables and arguments for routines. It explains input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",source:"@site/content/cli/routines/advanced-routines.md",sourceDirName:"cli/routines",slug:"/cli/routines/advanced-routines",permalink:"/openbb-docs/cli/routines/advanced-routines",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/cli/routines/advanced-routines.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,sidebarPosition:5,frontMatter:{title:"Advanced Routines",sidebar_position:5,description:"This page provides guidance on creating and running advanced workflows in the OpenBB Platform CLI by introducing variables and arguments for routines. It explains input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",keywords:["automated workflows","routines","arguments","variables","relative time keywords","internal script variables","loops","batch execution","Tutorial","Running Scripts","Executing Commands"]},sidebar:"tutorialSidebar",previous:{title:"Routine Macro Recorder",permalink:"/openbb-docs/cli/routines/routine-macro-recorder"},next:{title:"Introduction",permalink:"/openbb-docs/bot/"}},d={},c=[{value:"Input Variables",id:"input-variables",level:2},{value:"Example",id:"example",level:3},{value:"Set Variables",id:"set-variables",level:2},{value:"Internal Variables Example",id:"internal-variables-example",level:3},{value:"Relative Time Keyword Variables",id:"relative-time-keyword-variables",level:2},{value:"Relative Time Example",id:"relative-time-example",level:3},{value:"Foreach Loop",id:"foreach-loop",level:2},{value:"Loop Example",id:"loop-example",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.A,{title:"Advanced Routines - Routines | OpenBB Platform CLI Docs"}),"\n",(0,t.jsx)(n.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,t.jsxs)(n.p,{children:["Arguments are variables referenced within the ",(0,t.jsx)(n.code,{children:".openbb"})," script as ",(0,t.jsx)(n.code,{children:"$ARGV"})," or ",(0,t.jsx)(n.code,{children:"$ARGV[0]"}),", ",(0,t.jsx)(n.code,{children:"$ARGV[1]"}),", and so on. They are provided in the CLI when running ",(0,t.jsx)(n.code,{children:"exe"})," by adding the ",(0,t.jsx)(n.code,{children:"--input"})," flag, followed by the variables separated by commas."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"# This script requires you to use arguments. This can be done with the following:\n# exe --file routines_template_with_input.openbb -i TSLA\n# Replace the name of the file with your file.\n\n# Navigate to the menu\n/equity/price\n\n# Load the data and display a chart\nhistorical --symbol $ARGV --chart\n"})}),"\n",(0,t.jsx)(n.h2,{id:"set-variables",children:"Set Variables"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to external variables using the keyword, ",(0,t.jsx)(n.code,{children:"ARGV"}),", internal variables can be defined with the, ",(0,t.jsx)(n.code,{children:"$"}),", character."]}),"\n",(0,t.jsx)(n.p,{children:"Note that the variable can have a single element or can be constituted by an array where elements are separated using a comma \u201c,\u201d."}),"\n",(0,t.jsx)(n.h3,{id:"internal-variables-example",children:"Internal Variables Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"# Example routine with internal variables.\n\n$TICKERS = XLE,XOP,XLB,XLI,XLP,XLY,XHE,XLV,XLF,KRE,XLK,XLC,XLU,XLRE\n\n/equity\n\nprice\n\nhistorical --symbol $TICKERS --provider yfinance --start_date 2024-01-01 --chart\n\nhome\n"})}),"\n",(0,t.jsx)(n.h2,{id:"relative-time-keyword-variables",children:"Relative Time Keyword Variables"}),"\n",(0,t.jsx)(n.p,{children:"In addition to the powerful variables discussed earlier, OpenBB also supports the usage of relative keywords, particularly for working with dates. These relative keywords provide flexibility when specifying dates about the current day. There are four types of relative keywords:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"AGO"}),": Denotes a time in the past relative to the present day. Valid examples include ",(0,t.jsx)(n.code,{children:"$365DAYSAGO"}),", ",(0,t.jsx)(n.code,{children:"$12MONTHSAGO"}),", ",(0,t.jsx)(n.code,{children:"$1YEARSAGO"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"FROMNOW"}),": Denotes a time in the future relative to the present day. Valid examples include ",(0,t.jsx)(n.code,{children:"$365DAYSFROMNOW"}),", ",(0,t.jsx)(n.code,{children:"$12MONTHSFROMNOW"}),", ",(0,t.jsx)(n.code,{children:"$1YEARSFROMNOW"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LAST"}),": Refers to the last specific day of the week or month that has occurred. Valid examples include ",(0,t.jsx)(n.code,{children:"$LASTMONDAY"}),", ",(0,t.jsx)(n.code,{children:"$LASTJUNE"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"NEXT"}),": Refers to the next specific day of the week or month that will occur. Valid examples include ",(0,t.jsx)(n.code,{children:"$NEXTFRIDAY"}),", ",(0,t.jsx)(n.code,{children:"$NEXTNOVEMBER"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The result will be a date with the conventional date associated with OpenBB, i.e. ",(0,t.jsx)(n.code,{children:"YYYY-MM-DD"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"relative-time-example",children:"Relative Time Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"$TICKERS = XLE,XOP,XLB,XLI,XLP,XLY,XHE,XLV,XLF,KRE,XLK,XLC,XLU,XLRE\n\n/equity\n\nprice\n\nhistorical --symbol $TICKERS --provider yfinance --start_date $3MONTHSAGO --chart\n\n..\n\ncalendar\n\nearnings --start_date $NEXTMONDAY --end_date $NEXTFRIDAY --provider nasdaq\n\nhome\n"})}),"\n",(0,t.jsx)(n.h2,{id:"foreach-loop",children:"Foreach Loop"}),"\n",(0,t.jsx)(n.p,{children:"Finally, what scripting language would this be if there were no loops? For this, we were inspired by MatLab. The loops in OpenBB utilize the foreach and end convention, allowing for iteration through a list of variables or arguments to execute a sequence of commands."}),"\n",(0,t.jsx)(n.p,{children:"To create a foreach loop, you need to follow these steps:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create the loop header using the syntax: ",(0,t.jsx)(n.code,{children:"foreach $$VAR in X"})," where ",(0,t.jsx)(n.code,{children:"X"})," represents either an argument or a list of variables. It's worth noting that you can choose alternative names for the ",(0,t.jsx)(n.code,{children:"$$VAR"})," variable, as long as the ",(0,t.jsx)(n.code,{children:"$$"})," convention is maintained."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Insert the commands you wish to repeat on the subsequent lines."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Conclude the loop with the keyword ",(0,t.jsx)(n.code,{children:"end"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"loop-example",children:"Loop Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"# Iterates through ARGV elements.\nforeach $$VAR in $ARGV[1:]\n    /equity/fundamental/filings --symbol $$VAR --provider sec\nend\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},94331:(e,n,i)=>{i.d(n,{A:()=>r});i(96540);var t=i(5260),a=i(74848);function r(e){let{title:n}=e;return(0,a.jsx)(t.A,{children:(0,a.jsx)("title",{children:n})})}},28453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var t=i(96540);const a={},r=t.createContext(a);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);