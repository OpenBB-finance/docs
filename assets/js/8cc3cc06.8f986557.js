"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[86638],{89803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(74848),s=t(28453),r=t(94331),o=t(69396);const a={title:"Routines for Power Users",sidebar_position:5,description:"This documentation guides on running automated workflows in OpenBB by introducing variables and arguments for routines. Explains about input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",keywords:["automated workflows","routines","arguments","variables","relative time keywords","internal script variables","loops","batch execution","OpenBBTutorial","Technical Analysis","Stock Tickers","Running Scripts","Executing Commands"]},l=void 0,c={id:"terminal/usage/routines/routines-for-power-users",title:"Routines for Power Users",description:"This documentation guides on running automated workflows in OpenBB by introducing variables and arguments for routines. Explains about input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",source:"@site/content/terminal/usage/routines/routines-for-power-users.md",sourceDirName:"terminal/usage/routines",slug:"/terminal/usage/routines/routines-for-power-users",permalink:"/openbb-docs/terminal/usage/routines/routines-for-power-users",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/usage/routines/routines-for-power-users.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,sidebarPosition:5,frontMatter:{title:"Routines for Power Users",sidebar_position:5,description:"This documentation guides on running automated workflows in OpenBB by introducing variables and arguments for routines. Explains about input variables, relative time keyword variables, internal script variables and creating loops for batch execution.",keywords:["automated workflows","routines","arguments","variables","relative time keywords","internal script variables","loops","batch execution","OpenBBTutorial","Technical Analysis","Stock Tickers","Running Scripts","Executing Commands"]},sidebar:"tutorialSidebar",previous:{title:"Routine Macro Recorder",permalink:"/openbb-docs/terminal/usage/routines/routine-macro-recorder"},next:{title:"Community Routines",permalink:"/openbb-docs/terminal/usage/routines/community-routines"}},d={},h=[{value:"Input Variables",id:"input-variables",level:2},{value:"Example",id:"example",level:3},{value:"Set Variables",id:"set-variables",level:2},{value:"Variables Example",id:"variables-example",level:3},{value:"Relative Time Keyword Variables",id:"relative-time-keyword-variables",level:2},{value:"Relative Time Example",id:"relative-time-example",level:3},{value:"Foreach Loop",id:"foreach-loop",level:2},{value:"Loop Examples",id:"loop-examples",level:3}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.A,{title:"Routines for Power Users - Routines - Usage | OpenBB Terminal Docs"}),"\n","\n",(0,i.jsx)(o.A,{youtubeLink:"https://www.youtube.com/embed/zhbX5tTmyPw?si=5XzbbhgiCFsTmbDo",videoLegend:"Short video on what power users can do with routines"}),"\n",(0,i.jsx)(n.h2,{id:"input-variables",children:"Input Variables"}),"\n",(0,i.jsxs)(n.p,{children:["When utilizing basic routines capabilities, users had to create separate routines for each specific ticker, such as ",(0,i.jsx)(n.code,{children:"my_due_diligence_AAPL.openbb"})," or ",(0,i.jsx)(n.code,{children:"my_due_diligence_TSLA.openbb"}),". This approach was suboptimal, considering that we had control over reading these scripts and they were meant to be used within our ecosystem."]}),"\n",(0,i.jsxs)(n.p,{children:["To address this limitation, we introduced the concept of arguments, inspired by the Perl language. These arguments are variables referenced within the ",(0,i.jsx)(n.code,{children:".openbb"})," script as ",(0,i.jsx)(n.code,{children:"$ARGV"})," or ",(0,i.jsx)(n.code,{children:"$ARGV[0]"}),", ",(0,i.jsx)(n.code,{children:"$ARGV[1]"}),", and so on. They are provided in the terminal when running ",(0,i.jsx)(n.code,{children:"exe"})," by adding the ",(0,i.jsx)(n.code,{children:"--input"})," flag, followed by the variables separated by commas."]}),"\n",(0,i.jsxs)(n.p,{children:["For instance, if a routine file called ",(0,i.jsx)(n.code,{children:"script_with_input.openbb"})," had the following format:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/5b0f558e-ace0-423d-a3db-b6369755cffb",alt:"image"})}),"\n",(0,i.jsxs)(n.p,{children:["And we run it in the terminal with ",(0,i.jsx)(n.code,{children:"exe \u2014file script_with_input.openbb \u2014input MSFT"}),", what would be run would be ",(0,i.jsx)(n.code,{children:"stocks/load MSFT --start 2015-01-01/ta/ema -l 20,50,100,200"})," and so you could use the same routine for multiple tickers - ",(0,i.jsx)(n.strong,{children:"making it a more powerful automated workflow"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For instance, the example below shows how you can run the same script for MSFT but also TSLA ticker."}),"\n",(0,i.jsx)(n.p,{children:"And we run it in the terminal with exe \u2014file script_with_input.openbb \u2014input MSFT, what would be run would be stocks/load MSFT --start 2015-01-01/ta/ema -l 20,50,100,200 and so you could use the same routine for multiple tickers - making it a more powerful automated workflow."}),"\n",(0,i.jsxs)(n.p,{children:["For instance, the example below shows how you can run the same script for ",(0,i.jsx)(n.code,{children:"MSFT"})," but also ",(0,i.jsx)(n.code,{children:"TSLA"})," ticker."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/8a744571-59b9-4293-bdd7-5dd6e2c8eef3",alt:"image"})}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["Let's look into the following routine (the file can be downloaded ",(0,i.jsx)(n.a,{href:"https://www.dropbox.com/s/usooz6y29r1xldb/routines_template_with_inputs.openbb?dl=1",children:"here"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# This script requires you to use arguments. This can be done with the following:\n# exe --file routines_template_with_inputs.openbb -i TSLA,AAPL,MSFT\n\n# Go to the stocks menu\nstocks\n\n# Load a ticker, given the argument used. E.g. -i TSLA\nload $ARGV[0]\n\n# Enter the Technical Analysis (ta) menu\nta\n\n# Show the fibonacci retracement levels\nfib\n\n# Enter the comparison analysis (ca) menu\n../ca\n\n# Set two extra tickers based on the arguments used. E.g. -i TSLA,AAPL,MSFT\nadd $ARGV[1],$ARGV[2]\n\n# Plot the historical prices\nhistorical\n\n# Return to home\nhome\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This script includes ",(0,i.jsx)(n.code,{children:"$ARGV[0]"}),", ",(0,i.jsx)(n.code,{children:"$ARGV[1]"})," and ",(0,i.jsx)(n.code,{children:"$ARGV[2]"}),". This means that the script requires you to submit three arguments. In this case, they refer to ",(0,i.jsx)("a",{href:"https://www.investopedia.com/ask/answers/12/what-is-a-stock-ticker.asp",target:"_blank",rel:"noreferrer noopener",children:"stock tickers"}),". Therefore, like the script also says, you can include these arguments with ",(0,i.jsx)(n.code,{children:"-i"})," or ",(0,i.jsx)(n.code,{children:"--input"})," followed by three tickers (e.g. ",(0,i.jsx)(n.code,{children:"/exe routines_template_with_inputs.openbb -i TSLA,AAPL,MSFT"}),"). Resulting in the following,"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/46355364/223207706-42995834-577f-4747-8185-42a016f441d9.png",alt:"OpenBB Script with Input"})}),"\n",(0,i.jsxs)(n.p,{children:["Note: Make sure you saved this script in the ",(0,i.jsx)(n.code,{children:"~/OpenBBUserData/routines/"})," folder else you are not able to execute it."]}),"\n",(0,i.jsx)(n.h2,{id:"set-variables",children:"Set Variables"}),"\n",(0,i.jsxs)(n.p,{children:["In addition to enabling users to run scripts with external variables using the keyword ",(0,i.jsx)(n.code,{children:"ARGV"}),", we also support the use of internal variables within the script. These variables are defined by starting with the ",(0,i.jsx)(n.code,{children:"$"})," character."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/c0cc6e1e-b87c-46f4-8c94-539408745433",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"Which has the following output:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/77060dfc-216e-490f-af72-3d4af5642e0f",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"Note that the variable can have a single element or can be constituted by an array where elements are separated using a comma \u201c,\u201d."}),"\n",(0,i.jsx)(n.h3,{id:"variables-example",children:"Variables Example"}),"\n",(0,i.jsx)(n.p,{children:"Example of the script below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Set date variable\n$DATE = 2022-01-01\n\n# Set list of tickers to iterate\n$TICKERS = AAPL,MSFT\n\n# dive into stocks\nstocks\n\n# candle chart for first ticker\nload $TICKERS[0] --start $DATE/candle\n\n# candle chart for second ticker\nload $TICKERS[1] --start $DATE[0]/candle\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that a variable can be declared as a single argument ",(0,i.jsx)(n.code,{children:"$DATE = 2022-01-01"})," but it can also be declared as a list ",(0,i.jsx)(n.code,{children:"$TICKERS = AAPL,MSFT"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["When declared as a list, the user needs to use the indexing to access the element of interest, i.e. if interested in ",(0,i.jsx)(n.code,{children:"MSFT"})," then ",(0,i.jsx)(n.code,{children:"$TICKERS[1]"})," should be used."]}),"\n",(0,i.jsxs)(n.p,{children:["When a single element is defined, then the user can access it through the variable name or indexing the first position equally, i.e. ",(0,i.jsx)(n.code,{children:"$DATE"})," = ",(0,i.jsx)(n.code,{children:"$DATE[0]"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that slicing is also possible, and the same convention as python is utilized. If the user has defined inputs ",(0,i.jsx)(n.code,{children:"AAPL,MSFT,TSLA,NVDA,GOOG"})," then by selecting ",(0,i.jsx)(n.code,{children:"$ARGV[1:3]"})," the tickers ",(0,i.jsx)(n.code,{children:"MSFT,TSLA"})," are selected."]}),"\n",(0,i.jsx)(n.h2,{id:"relative-time-keyword-variables",children:"Relative Time Keyword Variables"}),"\n",(0,i.jsx)(n.p,{children:"In addition to the powerful variables discussed earlier, OpenBB also supports the usage of relative keywords, particularly for working with dates. These relative keywords provide flexibility when specifying dates about the current day. There are four types of relative keywords:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"AGO"}),": Denotes a time in the past relative to the present day. Valid examples include ",(0,i.jsx)(n.code,{children:"$365DAYSAGO"}),", ",(0,i.jsx)(n.code,{children:"$12MONTHSAGO"}),", ",(0,i.jsx)(n.code,{children:"$1YEARSAGO"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"FROMNOW"}),": Denotes a time in the future relative to the present day. Valid examples include ",(0,i.jsx)(n.code,{children:"$365DAYSFROMNOW"}),", ",(0,i.jsx)(n.code,{children:"$12MONTHSFROMNOW"}),", ",(0,i.jsx)(n.code,{children:"$1YEARSFROMNOW"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LAST"}),": Refers to the last specific day of the week or month that has occurred. Valid examples include ",(0,i.jsx)(n.code,{children:"$LASTMONDAY"}),", ",(0,i.jsx)(n.code,{children:"$LASTJUNE"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"NEXT"}),": Refers to the next specific day of the week or month that will occur. Valid examples include ",(0,i.jsx)(n.code,{children:"$NEXTFRIDAY"}),", ",(0,i.jsx)(n.code,{children:"$NEXTNOVEMBER"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The result will be a date with the conventional date associated with OpenBB, i.e. ",(0,i.jsx)(n.code,{children:"YYYY-MM-DD"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"relative-time-example",children:"Relative Time Example"}),"\n",(0,i.jsxs)(n.p,{children:["By picking on the previous example, we can add to the load ",(0,i.jsx)(n.code,{children:"--start"})," argument the keyword ",(0,i.jsx)(n.code,{children:"$18MONTHSAGO"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/e0e9b4a2-3d8d-4f72-8029-55f009dc15ee",alt:"image"})}),"\n",(0,i.jsx)(n.p,{children:"This will result in the following output:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/25267873/78d6235e-15a1-47cb-a99c-19694b6af0d9",alt:"image"})}),"\n",(0,i.jsx)(n.h2,{id:"foreach-loop",children:"Foreach Loop"}),"\n",(0,i.jsx)(n.p,{children:"Finally, what scripting language would this be if there were no loops? For this, we were inspired by MatLab. The loops in OpenBB utilize the foreach and end convention, allowing for iteration through a list of variables or arguments to execute a sequence of commands."}),"\n",(0,i.jsx)(n.p,{children:"To create a foreach loop, you need to follow these steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create the loop header using the syntax: ",(0,i.jsx)(n.code,{children:"foreach $$VAR in X"})," where ",(0,i.jsx)(n.code,{children:"X"})," represents either an argument or a list of variables. It's worth noting that you can choose alternative names for the ",(0,i.jsx)(n.code,{children:"$$VAR"})," variable, as long as the ",(0,i.jsx)(n.code,{children:"$$"})," convention is maintained."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Insert the commands you wish to repeat on the subsequent lines."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Conclude the loop with the keyword ",(0,i.jsx)(n.code,{children:"end"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"loop-examples",children:"Loop Examples"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Iterates through ARGV elements from position 1 onwards\nforeach $$VAR in $ARGV[1:]\n    load $$VAR --start $DATES[0] --end $DATES[1]/dps/psi/..\nend\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Loops through all $ARGV variables\nFOREACH $$SOMETHING in $ARGV\n    load $$SOMETHING --start $DATE[0]/ins/stats/..\n end\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Iterates through ARGV elements in position 1,2\nforeach $$VAR in $ARGV[1:3]\n    load $$VAR --start 2022-01-01\n    ba\n    regions\n    ..\nEND\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Loops through PLTR and BB\nforeach $$X in PLTR,BB\n    load $$X --start $LASTJANUARY\n    candle\nEND\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},94331:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var i=t(5260),s=t(74848);function r(e){let{title:n}=e;return(0,s.jsx)(i.A,{children:(0,s.jsx)("title",{children:n})})}},69396:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(96540),s=t(23174),r=t(74848);function o(e){let{youtubeLink:n,videoLegend:t="Tutorial video"}=e;const[o,a]=(0,i.useState)(!0);return(0,r.jsxs)("div",{style:{textAlign:"center"},children:[(0,r.jsxs)("div",{className:"flex flex-col sm:flex-row items-center justify-center",children:[(0,r.jsx)("p",{children:t}),(0,r.jsx)("div",{style:{transform:"scale(0.7)"},children:(0,r.jsx)(s.Toggle,{isOn:o,handleChange:()=>a(!o)})})]}),o&&(0,r.jsx)("div",{style:{position:"relative",paddingBottom:"56.25%",height:"0",overflow:"hidden",maxWidth:"100%"},children:(0,r.jsx)("iframe",{id:n,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%",display:"block",margin:"0 auto"},src:n,title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})]})}},23174:(e,n,t)=>{e.exports=t(49793)},49793:(e,n,t)=>{var i,s=(i=t(96540))&&"object"==typeof i&&"default"in i?i.default:i;!function(e,n){void 0===n&&(n={});var t=n.insertAt;if("undefined"!=typeof document){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===t&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}("/* The switch - the box around the slider */\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n\n/* Hide default HTML checkbox */\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: '';\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196f3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196f3;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  -ms-transform: translateX(26px);\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n"),n.Toggle=function(e){return s.createElement("label",{"data-testid":"Toggle-label",className:"switch"},s.createElement("input",{checked:e.isOn,"data-testid":"Toggle",onChange:e.handleChange,type:"checkbox"}),s.createElement("span",{className:"slider round"}))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(96540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);