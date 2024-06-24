"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27656],{54272:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var t=i(74848),o=i(28453),s=i(94331),a=i(69396);const r={title:"The Pipeline of Commands",sidebar_position:1,description:"This page provides a detailed explanation of the OpenBB Terminal command pipeline. The tutorial video and walkthrough guides users in automating their investment research process by using single commands, and sequences of commands, to manipulate and study data.",keywords:["Hub","Routine","Community Routines","Terminal","Architecture","EXE","Script","Single command","Pipeline of commands","Command sequence","Automate investment research","Tutorial video","GME's dark pool data","Technical Analysis","Moving Average Convergence/Divergence indicator","Stock price loaded","Exponential moving average indicator","Price vs Short interest"]},d=void 0,l={id:"terminal/usage/routines/pipeline-of-commands",title:"The Pipeline of Commands",description:"This page provides a detailed explanation of the OpenBB Terminal command pipeline. The tutorial video and walkthrough guides users in automating their investment research process by using single commands, and sequences of commands, to manipulate and study data.",source:"@site/content/terminal/usage/routines/pipeline-of-commands.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/pipeline-of-commands",permalink:"/openbb-docs/terminal/usage/routines/pipeline-of-commands",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/routines/pipeline-of-commands.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719231287e3,sidebarPosition:1,frontMatter:{title:"The Pipeline of Commands",sidebar_position:1,description:"This page provides a detailed explanation of the OpenBB Terminal command pipeline. The tutorial video and walkthrough guides users in automating their investment research process by using single commands, and sequences of commands, to manipulate and study data.",keywords:["Hub","Routine","Community Routines","Terminal","Architecture","EXE","Script","Single command","Pipeline of commands","Command sequence","Automate investment research","Tutorial video","GME's dark pool data","Technical Analysis","Moving Average Convergence/Divergence indicator","Stock price loaded","Exponential moving average indicator","Price vs Short interest"]},sidebar:"tutorialSidebar",previous:{title:"Routines",permalink:"/openbb-docs/terminal/usage/routines/"},next:{title:"Introduction to Routines",permalink:"/openbb-docs/terminal/usage/routines/introduction-to-routines"}},c={},m=[{value:"Single Command",id:"single-command",level:2},{value:"Pipeline of Commands",id:"pipeline-of-commands",level:2},{value:"Step-by-Step Explanation",id:"step-by-step-explanation",level:3}];function p(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.A,{title:"The Pipeline of Commands - Routines - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,t.jsx)(a.A,{youtubeLink:"https://www.youtube.com/embed/j0yZ9BMKulk?si=_CuDhd19pUs_mFDs",videoLegend:"Short video on pipeline of commands"}),"\n",(0,t.jsx)(n.h2,{id:"single-command",children:"Single Command"}),"\n",(0,t.jsx)(n.p,{children:"If you have a good understanding of the Terminal's architecture, you will recognize that commands and menus are organized in the form of a tree."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/a5f10833-9693-4b39-9491-b431919db828",alt:"image"})}),"\n",(0,t.jsxs)(n.p,{children:["If the intention is to explore an equity, enter at base of the menu (",(0,t.jsx)(n.code,{children:"/stocks/"}),"), then browse or navigate towards the point of interest - for example, Dark Pools (",(0,t.jsx)(n.code,{children:"/stocks/dps"}),")."]}),"\n",(0,t.jsx)(n.p,{children:"While all the information is in one place, having to type one command at a time is far from optimal."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/41737800-7c60-48ad-a43d-814016d81762",alt:"image"})}),"\n",(0,t.jsx)(n.h2,{id:"pipeline-of-commands",children:"Pipeline of Commands"}),"\n",(0,t.jsx)(n.p,{children:"One of the main objectives of the OpenBB Terminal was the ability to automate a user's investment research workflow - not just a single command, but the complete process.  This is where the pipeline of commands comes in,  running a sequence of commands."}),"\n",(0,t.jsx)(n.p,{children:"The example above can be recreated by running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/load GME/dps/psi\n"})}),"\n",(0,t.jsx)(n.p,{children:"Which looks like:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c21c5452-5a67-4384-851c-d2801b60f8cd",alt:"image"})}),"\n",(0,t.jsx)(n.p,{children:"Another example is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/load GME/dps/psi/../fa/pt/income/../ins/stats\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/61db4010-bdc2-4851-9e47-79fb4425b816",alt:"image"})}),"\n",(0,t.jsx)(n.h3,{id:"step-by-step-explanation",children:"Step-by-Step Explanation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"/stocks/load amzn/ta/macd/ema -l 50,200/../dps/psi\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"stocks"})," - Go into ",(0,t.jsx)(n.code,{children:"stocks"})," menu"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"load amzn"})," - Load Amazon's stock inside stock menu"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ta"})," - Go into Technical Analysis (",(0,t.jsx)(n.code,{children:"ta"}),") menu"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"macd"})," - Run the moving average convergence/divergence indicator (",(0,t.jsx)(n.code,{children:"macd"}),") on the stock price loaded (i.e. ",(0,t.jsx)(n.code,{children:"amzn"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ema -l 50,200"})," - Run the exponential moving average indicator with windows of length 50 and 200 (",(0,t.jsx)(n.code,{children:"ema -l 50,200"}),") on the stock price loaded (i.e. ",(0,t.jsx)(n.code,{children:"amzn"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:".."})," - Go one menu up"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"dps"})," - Go into Dark pool and Short (",(0,t.jsx)(n.code,{children:"dps"}),") menu"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"psi"})," - Go into Price vs Short interest (",(0,t.jsx)(n.code,{children:"psi"}),") menu"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},94331:(e,n,i)=>{i.d(n,{A:()=>s});i(96540);var t=i(5260),o=i(74848);function s(e){let{title:n}=e;return(0,o.jsx)(t.A,{children:(0,o.jsx)("title",{children:n})})}},69396:(e,n,i)=>{i.d(n,{A:()=>a});var t=i(96540),o=i(23174),s=i(74848);function a(e){let{youtubeLink:n,videoLegend:i="Tutorial video"}=e;const[a,r]=(0,t.useState)(!0);return(0,s.jsxs)("div",{style:{textAlign:"center"},children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,s.jsx)("p",{children:i}),(0,s.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,s.jsx)(o.Toggle,{isOn:a,handleChange:()=>r(!a)})})]}),a&&(0,s.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,s.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,i)=>{e.exports=i(49793)},49793:(e,n,i)=>{var t,o=(t=i(96540))&&"object"==typeof t&&"default"in t?t.default:t;!function(e,n){void 0===n&&(n={});var i=n.insertAt;if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===i&&t.firstChild?t.insertBefore(o,t.firstChild):t.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return o.createElement("label",{"data-testid":"Toggle-label",className:"switch"},o.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),o.createElement("span",{className:"slider round"}))}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);