"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39295],{72527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var a=t(74848),i=t(28453),o=t(94331),s=t(69396);const l={title:"Overlay Financial Data",sidebar_position:3,description:"Guide to improve financial data comparison and visualization using the 'hold on' command in OpenBBTerminal. Covers overlaying data on the same axes, customizing chart legends and titles, analyzing FAANG companies and GDP/CPI data, and more.",keywords:["hold on command","overlay financial data","same axis plotting","customizing charts","financial data comparison","MatLab","financial charts","FAANG companies","CPI","GDP","data visualization"]},r=void 0,d={id:"terminal/usage/routines/overlay-financial-data",title:"Overlay Financial Data",description:"Guide to improve financial data comparison and visualization using the 'hold on' command in OpenBBTerminal. Covers overlaying data on the same axes, customizing chart legends and titles, analyzing FAANG companies and GDP/CPI data, and more.",source:"@site/content/terminal/usage/routines/overlay-financial-data.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/overlay-financial-data",permalink:"/terminal/usage/routines/overlay-financial-data",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/routines/overlay-financial-data.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1719309708e3,sidebarPosition:3,frontMatter:{title:"Overlay Financial Data",sidebar_position:3,description:"Guide to improve financial data comparison and visualization using the 'hold on' command in OpenBBTerminal. Covers overlaying data on the same axes, customizing chart legends and titles, analyzing FAANG companies and GDP/CPI data, and more.",keywords:["hold on command","overlay financial data","same axis plotting","customizing charts","financial data comparison","MatLab","financial charts","FAANG companies","CPI","GDP","data visualization"]},sidebar:"tutorialSidebar",previous:{title:"Introduction to Routines",permalink:"/terminal/usage/routines/introduction-to-routines"},next:{title:"Routine Macro Recorder",permalink:"/terminal/usage/routines/routine-macro-recorder"}},c={},h=[{value:"Hold on command",id:"hold-on-command",level:2},{value:"Customizing Charts",id:"customizing-charts",level:2},{value:"Example as a Pipeline of Commands",id:"example-as-a-pipeline-of-commands",level:3},{value:"Example as a Routine",id:"example-as-a-routine",level:3},{value:"Known Issues",id:"known-issues",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.A,{title:"Overlay financial data - Routines - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,a.jsx)(s.A,{youtubeLink:"https://www.youtube.com/embed/GZ20uk4o2Nk?si=vxeA-CxSUq85R_zj",videoLegend:"Short video on how to use hold on command to overlay financial data"}),"\n",(0,a.jsx)(n.h2,{id:"hold-on-command",children:"Hold on command"}),"\n",(0,a.jsxs)(n.p,{children:["Often analysts want to be able to overlay financial data. This is possible through the introduction of the ",(0,a.jsx)(n.code,{children:"hold on"})," command."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"hold"})," functionality is available to allow users to overlay multiple datasets onto the same chart axes. This is useful for comparing datasets, or for plotting multiple datasets that share the same x-axis. This guide will walk through the functionalities and the recommended workflow."]}),"\n",(0,a.jsxs)(n.p,{children:["Drawing inspiration from MatLab, the ",(0,a.jsx)(n.code,{children:"hold"})," function is used to toggle the holding state of the current figure. Unlike MatLab, this function needs to be called before calling any function that charts. The hold state can be turned on, from any terminal menu, by running:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"hold on\n"})}),"\n",(0,a.jsx)(n.p,{children:"By default, new plots will be placed on a new axis, meaning comparing the magnitude values can be tricky. If you wish to plot subsequent figures on the same axis, you can use the sameaxis argument:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"hold on --sameaxis\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once the hold state is turned on, any terminal command with a plot will not be shown until the hold is turned off. To turn off the hold state, and see the combined figure, run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"hold off\n"})}),"\n",(0,a.jsx)(n.p,{children:"An example workflow is as follows. What this will do is plot the CPI and the GDP of the United States on the same axis."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"/economy/hold on\ngdp -c united_states\ncpi -c united_states\nhold off\n"})}),"\n",(0,a.jsx)(n.p,{children:"Which outputs:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/18151143/a3b1f09e-1a64-4af0-a5a2-070590d848e1",alt:"hold on ex1"})}),"\n",(0,a.jsxs)(n.p,{children:["To demonstrate, the ",(0,a.jsx)(n.code,{children:"--sameaxis"})," argument, we can run the previous commands, but starting with ",(0,a.jsx)(n.code,{children:"hold on --sameaxis"}),". Because GDP is being measured by USD-per-capita (OECD), and CPI is a function of percent, we will only see CPI as a flat line."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/18151143/43219ca7-126b-4782-bd95-5fa8967e0c6c",alt:"hold on ex2"})}),"\n",(0,a.jsx)(n.h2,{id:"customizing-charts",children:"Customizing Charts"}),"\n",(0,a.jsxs)(n.p,{children:["A chart is only as good as its labelling. In the previous example, we can see that the legends reflected the command paths used, but not the arguments. If we added a second country, we would not be able to tell which line is which country. In order to avoid this confusion, when the hold state is on, every function comes with a ",(0,a.jsx)(n.code,{children:"--legend"})," argument."]}),"\n",(0,a.jsxs)(n.p,{children:["Text following the, ",(0,a.jsx)(n.code,{children:"--legend"}),", argument is passed into the legend when the chart is created.  If a command is run without the, ",(0,a.jsx)(n.code,{children:"--legend"}),", argument, it will default to using the command location. In rare cases, a legend may not appear due to it not being defined in the functions ",(0,a.jsx)(n.code,{children:"view"})," file.  In this case, please raise a ",(0,a.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose",children:"GitHub issue"})," so the team can address it."]}),"\n",(0,a.jsxs)(n.p,{children:["An additional customization is the chart title.  This can be specified by adding the ",(0,a.jsx)(n.code,{children:"--title"})," argument to the hold off functionality.  To exemplify these capabilities, we can plot an income statement item from many companies.  We will examine FAANG companies and plot their revenues on the same axis, over the last forty quarters."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"/stocks/fa/hold on --sameaxis\nincome -t AAPL -q -l 40 --plot revenue --legend AAPL Revenue\nincome -t META -q -l 40 --plot revenue --legend META\nincome -t AMZN -q -l 40 --plot revenue\nincome -t GOOG -q -l 40 --plot revenue --legend GOOG\nincome -t NFLX -q -l 40 --plot revenue --legend netflix\nhold off --title FAANG Revenues 10 Year\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/18151143/793d8309-6e49-42ca-b9bd-ff0dad9da959",alt:"hold on custom"})}),"\n",(0,a.jsx)(n.h3,{id:"example-as-a-pipeline-of-commands",children:"Example as a Pipeline of Commands"}),"\n",(0,a.jsx)(n.p,{children:"The following pipeline of commands is the equivalent."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-console",children:"/stocks/fa/hold on --sameaxis/income -t AAPL -q -l 40 --plot revenue --legend AAPL Revenue/income -t META -q -l 40 --plot revenue --legend META/income -t AMZN -q -l 40 --plot revenue/income -t GOOG -q -l 40 --plot revenue --legend GOOG/income -t NFLX -q -l 40 --plot revenue --legend netflix/hold off --title FAANG Revenues 10 Year\n"})}),"\n",(0,a.jsx)(n.h3,{id:"example-as-a-routine",children:"Example as a Routine"}),"\n",(0,a.jsxs)(n.p,{children:["Or, a user can create a routine that can be run with the, ",(0,a.jsx)(n.code,{children:"/exe"}),", command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"    $STOCKS=AAPL,AMZN,MSFT,TSLA,GOOG\n\n    stocks\n    fa\n    hold on --sameaxis\n\n    foreach $$tick in $STOCKS:\n        income -t $$tick -l 40 -q --plot revenue --legend $$tick revenue\n    end\n\n    hold off--title FAANG Revenues 10 Year\n"})}),"\n",(0,a.jsx)(n.h3,{id:"known-issues",children:"Known Issues"}),"\n",(0,a.jsx)(n.p,{children:"Unfortunately, there are some known issues with the hold functionality. These are being worked on, and will be addressed in future releases. The following are known issues:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["When plotting charts, if the x axes are not the same, there may be an undesired result. For example, if looking at the ",(0,a.jsx)(n.code,{children:"fixedincome/ycrv"})," function, the x axes is a number in years, so trying to plot a date along x will not work."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Candle charts are not supported within the hold state. A work around to plot a close value would be to navigate to ",(0,a.jsx)(n.code,{children:"qa/pick Close/line"}),", which will plot a line chart."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Figures that have subplots on their own are not supported. This functionality is meant to overlay data on the same axes, so if there are multiple subplots, it is not supported. An example would be a function like ",(0,a.jsx)(n.code,{children:"ta/macd"}),". The TA functions already have a multiple indicator functionality, ",(0,a.jsx)(n.code,{children:"ta/multi"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Running a single plot in the hold state messes with the figure layout and does not give the desired margin."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Time series data of varying frequencies may not produce smooth visuals."}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(5260),i=t(74848);function o(e){let{title:n}=e;return(0,i.jsx)(a.A,{children:(0,i.jsx)("title",{children:n})})}},69396:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(96540),i=t(23174),o=t(74848);function s(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[s,l]=(0,a.useState)(!0);return(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,o.jsx)("p",{children:t}),(0,o.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,o.jsx)(i.Toggle,{isOn:s,handleChange:()=>l(!s)})})]}),s&&(0,o.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,t)=>{e.exports=t(49793)},49793:(e,n,t)=>{var a,i=(a=t(96540))&&"object"==typeof a&&"default"in a?a.default:a;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===t&&a.firstChild?a.insertBefore(i,a.firstChild):a.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return i.createElement("label",{"data-testid":"Toggle-label",className:"switch"},i.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),i.createElement("span",{className:"slider round"}))}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(96540);const i={},o=a.createContext(i);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);