"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74641],{31680:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=i(74848),t=i(28453),a=i(94331);const l={title:"Installation and Updates",sidebar_position:1,description:"This page provides comprehensive insights about installing and updating the OpenBB Terminal. It discusses system requirements, installation process, common errors and their solutions. Information about updating the OpenBB Terminal through different methods is also covered.",keywords:["OpenBB Terminal installation","Updating OpenBB Terminal","System requirements for OpenBB Terminal","Installation errors with OpenBB Terminal","Python pip installation","Microsoft Visual C++","Homebrew installation","libomp","Conda installation issue"]},r=void 0,o={id:"terminal/faqs/installation_updates",title:"Installation and Updates",description:"This page provides comprehensive insights about installing and updating the OpenBB Terminal. It discusses system requirements, installation process, common errors and their solutions. Information about updating the OpenBB Terminal through different methods is also covered.",source:"@site/content/terminal/faqs/installation_updates.md",sourceDirName:"terminal/faqs",slug:"/terminal/faqs/installation_updates",permalink:"/terminal/faqs/installation_updates",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/faqs/installation_updates.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,sidebarPosition:1,frontMatter:{title:"Installation and Updates",sidebar_position:1,description:"This page provides comprehensive insights about installing and updating the OpenBB Terminal. It discusses system requirements, installation process, common errors and their solutions. Information about updating the OpenBB Terminal through different methods is also covered.",keywords:["OpenBB Terminal installation","Updating OpenBB Terminal","System requirements for OpenBB Terminal","Installation errors with OpenBB Terminal","Python pip installation","Microsoft Visual C++","Homebrew installation","libomp","Conda installation issue"]},sidebar:"tutorialSidebar",previous:{title:"FAQs",permalink:"/terminal/faqs/"},next:{title:"Launching",permalink:"/terminal/faqs/launching"}},d={},c=[{value:"Installation and Updates",id:"installation-and-updates",level:2},{value:"PyPi Nightly",id:"pypi-nightly",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.A,{title:"Installation and Updates - Faqs | OpenBB Terminal Docs"}),"\n",(0,s.jsx)(n.h2,{id:"installation-and-updates",children:"Installation and Updates"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How much hard drive space is required?"}),(0,s.jsx)(n.p,{children:"An installation will use approximately 4-5 GB of space, with additional storage required for optional machine learning models."})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"What is the minimum version of Windows or MacOS required to install the OpenBB Terminal?"}),(0,s.jsx)(n.p,{children:"The OpenBB Terminal installation packages are compatible with:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Windows 10 or later."}),"\n",(0,s.jsx)(n.li,{children:"MacOS Monterey or later."}),"\n"]}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Machines which are not compatible with the installer packages may be able to install from the source code."]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"How do I update my installation to the latest version?"}),(0,s.jsx)(n.p,{children:"The terminal is constantly being updated with new features and bug fixes. The process for updating will vary by the installation type:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As of version 2.4.1, the Windows installer has an option for uninstalling the existing prior to updating."}),"\n",(0,s.jsx)(n.li,{children:"For other installer versions, uninstall the previous version (uninstall.exe for Windows, delete the Application folder on MacOS); then, download the latest version and reinstall. User settings and data will remain."}),"\n",(0,s.jsxs)(n.li,{children:["For a ",(0,s.jsx)(n.code,{children:"pip"})," installation, when a new version is published: ",(0,s.jsx)(n.code,{children:"pip install -U openbb[all]"})]}),"\n",(0,s.jsx)(n.li,{children:"Upgrade a cloned version of the GitHub repo with:"}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"git fetch\ngit pull\npoetry install -E all\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Notes:"})," If the cloned repository is a fork, pull from: ",(0,s.jsx)(n.code,{children:"git pull origin main"})," or ",(0,s.jsx)(n.code,{children:"git pull origin develop"}),". If there are changes locally to the files that conflict with the incoming changes from GitHub, stash them before pulling from main with ",(0,s.jsx)(n.code,{children:"git stash"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"pypi-nightly",children:"PyPi Nightly"}),"\n",(0,s.jsx)(n.p,{children:"The nightly build can be installed with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"pip install openbb-terminal-nightly[all]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": This version may not be stable and should not be used in a production setting."]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:'"Microsoft Visual C++ 14.0 or greater is required"'}),(0,s.jsxs)(n.p,{children:["Download and install ",(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"C++ Build Tools"}),", restart the machine, then try again."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ceb57be0-6dae-42f2-aca6-bf62ce7d6135",alt:"image"})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/f8aef8fc-a080-4164-bd36-460714ec44f3",alt:"image"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Error: failed building wheel for bt"}),(0,s.jsx)(n.p,{children:'There may be an additional message that is printed from this error, stating: "Microsoft Visual C++ 14.0 or greater is required. Get it with "Microsoft C++ Build Tools".'}),(0,s.jsxs)(n.p,{children:["Download and install it. ",(0,s.jsx)(n.a,{href:"https://visualstudio.microsoft.com/visual-cpp-build-tools/",children:"https://visualstudio.microsoft.com/visual-cpp-build-tools/"})]}),(0,s.jsx)(n.p,{children:"Mac and Linux users may also encounter a similar error because a C++ compiler is not installed. Install Homebrew:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n'})}),(0,s.jsx)(n.p,{children:"Then run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"brew install gcc\nbrew install cmake\n"})})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Miniconda3 will not install on ARM/Linux Raspberry Pi machines."}),(0,s.jsxs)(n.p,{children:["Refer to this issue on the Conda ",(0,s.jsx)(n.a,{href:"https://github.com/conda/conda/issues/10723",children:"GitHub"})," page."]})]}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{mdxType:"summary",children:"Error: Library not loaded: '/usr/local/opt/libomp/lib/libomp.dylib'"}),(0,s.jsx)(n.p,{children:"This error is resolved by installing libomp from Homebrew:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"brew install libomp\n"})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},94331:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var s=i(5260),t=i(74848);function a(e){let{title:n}=e;return(0,t.jsx)(s.A,{children:(0,t.jsx)("title",{children:n})})}},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);