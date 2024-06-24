"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[63955],{9702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=t(74848),i=t(28453);const a={title:"Basics",sidebar_position:1,description:"This page provides a detailed overview of using the OpenBB SDK - a tool that brings programmatic access to nearly all Terminal commands. Topics covered include installation, essential terminal command usage, working with Python environments, using Jupyter and various code editors, managing API keys, functionality, and navigation of the SDK. There are also specifics on using function inputs and responses, as well as dealing with plot themes and changing data sources. Support is offered via the support page, GitHub, and Discord.",keywords:["OpenBB SDK","Terminal commands","Installation","Python environment","Jupyter","Code Editors","API Keys","Programming","Conda","Pandas DataFrame","Python packages","Stocks","Screener preset","OpenBB Hub","VS Code"]},o=void 0,r={id:"sdk/usage/basics",title:"Basics",description:"This page provides a detailed overview of using the OpenBB SDK - a tool that brings programmatic access to nearly all Terminal commands. Topics covered include installation, essential terminal command usage, working with Python environments, using Jupyter and various code editors, managing API keys, functionality, and navigation of the SDK. There are also specifics on using function inputs and responses, as well as dealing with plot themes and changing data sources. Support is offered via the support page, GitHub, and Discord.",source:"@site/content/sdk/usage/basics.md",sourceDirName:"sdk/usage",slug:"/sdk/usage/basics",permalink:"/sdk/usage/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/sdk/usage/basics.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:1719232249e3,sidebarPosition:1,frontMatter:{title:"Basics",sidebar_position:1,description:"This page provides a detailed overview of using the OpenBB SDK - a tool that brings programmatic access to nearly all Terminal commands. Topics covered include installation, essential terminal command usage, working with Python environments, using Jupyter and various code editors, managing API keys, functionality, and navigation of the SDK. There are also specifics on using function inputs and responses, as well as dealing with plot themes and changing data sources. Support is offered via the support page, GitHub, and Discord.",keywords:["OpenBB SDK","Terminal commands","Installation","Python environment","Jupyter","Code Editors","API Keys","Programming","Conda","Pandas DataFrame","Python packages","Stocks","Screener preset","OpenBB Hub","VS Code"]},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/sdk/usage/"},next:{title:"Setting API Keys",permalink:"/sdk/usage/api-keys"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Importing the OpenBB SDK",id:"importing-the-openbb-sdk",level:2},{value:"Terminal Command Line",id:"terminal-command-line",level:3},{value:"Jupyter",id:"jupyter",level:3},{value:"Code Editors and IDEs",id:"code-editors-and-ides",level:3},{value:"Helpful VS Code Extensions",id:"helpful-vs-code-extensions",level:4},{value:"Navigation",id:"navigation",level:2},{value:"Docstrings",id:"docstrings",level:2},{value:"API Keys",id:"api-keys",level:2},{value:"Authorize With the OpenBB Hub",id:"authorize-with-the-openbb-hub",level:3},{value:"How to Use the SDK",id:"how-to-use-the-sdk",level:2},{value:"Function Inputs",id:"function-inputs",level:3},{value:"Function Responses",id:"function-responses",level:3},{value:"Passing Data Through",id:"passing-data-through",level:3},{value:"OpenBB Figure Objects",id:"openbb-figure-objects",level:3},{value:"Chart Themes",id:"chart-themes",level:3},{value:"Chart Cheat Sheet",id:"chart-cheat-sheet",level:3},{value:"Changing Data Sources",id:"changing-data-sources",level:3},{value:"Support, Bug Reports &amp; Feedback",id:"support-bug-reports--feedback",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The OpenBB SDK provides programmatic access to nearly all Terminal commands, allowing custom scripts and functions to power creations built on top of the core platform.  It is easy to use and as flexible as one's imagination.  The sections below will outline how to get started using it.  If it isn't already installed, follow the instructions to install via ",(0,s.jsx)(n.a,{href:"/terminal/installation/pypi",children:"PyPi (pip)"})," or from the ",(0,s.jsx)(n.a,{href:"/terminal/installation/source",children:"source code"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"importing-the-openbb-sdk",children:"Importing the OpenBB SDK"}),"\n",(0,s.jsx)(n.p,{children:"No additional software is required to use the OpenBB SDK, it can be consumed directly from the command line Terminal within the virtual environment created during the installation process."}),"\n",(0,s.jsx)(n.h3,{id:"terminal-command-line",children:"Terminal Command Line"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"obb"})," virtual environment has both ",(0,s.jsx)(n.code,{children:"python"})," and ",(0,s.jsx)(n.code,{children:"ipython"})," as methods for starting a new session from scratch."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Step 1: Activate the ",(0,s.jsx)(n.code,{children:"obb"})," virtual environment.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"conda activate obb"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"If this doesn't work, there may be an obvious reason why."}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The installation was not completed."}),"\n",(0,s.jsxs)(n.li,{children:["The terminal being used is different from the one which was used for installation.  For example, Miniconda was installed using ",(0,s.jsx)(n.code,{children:"CMD.exe"})," or ",(0,s.jsx)(n.code,{children:"Anaconda Prompt"}),", but the current terminal is PowerShell."]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Open the same terminal used for installation and activate the ",(0,s.jsx)(n.code,{children:"obb"})," environment, then enter:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"conda init --all --system\n"})}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Exit"})," and re-open.  Conda should now be callable from all terminal shell profiles."]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Step 2: Start a new Python or iPython session.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"python"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"ipython"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This will display a similar message to the one below."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:'(obb) Steves-MacBook-Pro:OpenBBTerminal steve$ python\nPython 3.10.8 | packaged by conda-forge | (main, Nov 22 2022, 08:25:13) [Clang 14.0.6 ] on darwin\nType "help", "copyright", "credits" or "license" for more information.\n>>> from openbb_terminal.sdk import openbb\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ipython"})," will look slightly different."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"(obb) Steves-MacBook-Pro:OpenBBTerminal steve$ ipython\nPython 3.10.8 | packaged by conda-forge | (main, Nov 22 2022, 08:25:13) [Clang 14.0.6 ]\nType 'copyright', 'credits' or 'license' for more information\nIPython 8.11.0 -- An enhanced Interactive Python. Type '?' for help.\n\nIn [1]: from openbb_terminal.sdk import openbb\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ipython"})," is a good choice for exploring and working on scripts without saving them as a new file, while the plain command line version, ",(0,s.jsx)(n.code,{children:"python"}),", is what a scripted ",(0,s.jsx)(n.code,{children:".py"})," file would use to run."]}),"\n",(0,s.jsx)(n.h3,{id:"jupyter",children:"Jupyter"}),"\n",(0,s.jsxs)(n.p,{children:["Jupyter is a code editor and IDE that runs in a web browser, served over localhost.  No additional installation steps are required to use it, in two flavours, ",(0,s.jsx)(n.code,{children:"notebook"})," and ",(0,s.jsx)(n.code,{children:"lab"}),".  Both are launched from the terminal command line, after activating the ",(0,s.jsx)(n.code,{children:"obb"})," virtual Python environment."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"conda activate obb\njupyter lab\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"conda activate obb\njupyter notebook\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will launch the Jupyter server and open a browser window with the application."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/4a289ef0-11af-4909-af7a-66fe97e9ffea",alt:"Jupyter Lab"})}),"\n",(0,s.jsxs)(n.p,{children:["There will be only one choice for the kernel, ",(0,s.jsx)(n.code,{children:"Python3 (ipykernel)"}),".  Click on, ",(0,s.jsx)(n.code,{children:"Select"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In the console window (or a new Notebook file) the OpenBB SDK is imported by entering:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-console",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Docstrings can be viewed in a pop-up with the key command, ",(0,s.jsx)(n.code,{children:"shift+tab"}),".  The contents of each module (similar to the menus in the OpenBB Terminal) can be browsed by hitting the ",(0,s.jsx)(n.code,{children:"tab"})," key."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/7cc04e49-57fe-4bbf-bb5e-4cfbdab62eaf",alt:"Jupyter Lab Import"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Contextual Help"})," window displays more details, and also previews DataFrames after they are assigned.  These tools are an excellent way to understand the structure of the SDK along with the syntax for each command and argument."]}),"\n",(0,s.jsx)(n.h3,{id:"code-editors-and-ides",children:"Code Editors and IDEs"}),"\n",(0,s.jsxs)(n.p,{children:["Regardless of the code editor of choice, the program must know that the ",(0,s.jsx)(n.code,{children:"obb"})," virtual Python environment exists.  The steps for setting it up will vary by platform, consult the manual for the specific editor.  VS Code is a recommended choice because it is free, flexible, and has integrations with GitHub and Jupyter, and has a plugin marketplace that can enhance a workspace with tools like GitHub Co-Pilot.  Some code editing and IDE suites will charge a subscription for Jupyter integrations, which make them less ideal."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Spyder is not recommended for installing or operating the OpenBB SDK."})}),"\n",(0,s.jsx)(n.h4,{id:"helpful-vs-code-extensions",children:"Helpful VS Code Extensions"}),"\n",(0,s.jsx)(n.p,{children:"Installing a few extensions in VS Code will improve the user experience and provide enhanced functionality."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python Extension Pack (Don Jayamanne)"}),"\n",(0,s.jsx)(n.li,{children:"Jupyter PowerToys (Microsoft)"}),"\n",(0,s.jsx)(n.li,{children:"Jupyter Notebook Renderers"}),"\n",(0,s.jsx)(n.li,{children:"Codeium"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Icons on the sidebar for Jupyter and Python provide quick access to the virtual environments, and a new notebook or interactive window are created with a mouse click."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/bf04c707-a591-47c8-a5e9-c4c0e60e302a",alt:"VS Code"})}),"\n",(0,s.jsx)(n.p,{children:"When opening a Notebook file, or a new interactive window, ensure that the correct environment is being used.  If the selected environment is not the one created during installation, the OpenBB SDK will not import."}),"\n",(0,s.jsx)(n.p,{children:"Click on the item in the top-right of the window to select or change the environment."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/0e4904cf-4ff7-4130-b965-30b3de140392",alt:"VS Code environment"})}),"\n",(0,s.jsx)(n.p,{children:"The OpenBB SDK is imported with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,s.jsx)(n.h2,{id:"navigation",children:"Navigation"}),"\n",(0,s.jsxs)(n.p,{children:["The layout of the OpenBB SDK is similar to the menus in the OpenBB Terminal, with each one represented as a module.  Instead of a ",(0,s.jsx)(n.code,{children:"/"})," in the path, it is ",(0,s.jsx)(n.code,{children:"."}),".  For example, ",(0,s.jsx)(n.code,{children:"openbb.stocks.gov"})," is the Government submodule of ",(0,s.jsx)(n.code,{children:"stocks"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ad3617fe-b84c-4bbd-9139-2563702849ba",alt:"Navigation"})}),"\n",(0,s.jsx)(n.p,{children:"The attributes for each module - and docstrings for a function - can also be printed directly to the screen, insert a question mark at the end of the string."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jupyterpython",children:"openbb.stocks.gov.contracts?\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": For a regular ",(0,s.jsx)(n.code,{children:"python"})," session, the syntax is: ",(0,s.jsx)(n.code,{children:"help(openbb.stocks.gov.contracts)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Signature:      openbb.stocks.gov.contracts(symbol: str, past_transaction_days: int = 10) -> pandas.core.frame.DataFrame\nCall signature: openbb.stocks.gov.contracts(*args: Any, **kwargs: Any) -> Any\nType:           get_contracts\nString form:    <openbb_terminal.stocks.government.quiverquant_model.Operation object at 0x2b57d0700>\nFile:           ~/GitHub/OpenBBTerminal/openbb_terminal/stocks/government/quiverquant_model.py\nDocstring:\nGet government contracts for ticker [Source: quiverquant.com]\n\nParameters\n----------\nsymbol: str\n    Ticker to get congress trading data from\npast_transaction_days: int\n    Number of days to get transactions for\n\nReturns\n-------\npd.DataFrame\n    Most recent transactions by members of U.S. Congress\n"})}),"\n",(0,s.jsx)(n.h2,{id:"docstrings",children:"Docstrings"}),"\n",(0,s.jsxs)(n.p,{children:["Docstrings are the SDK equivalent to the Terminal's ",(0,s.jsx)(n.code,{children:"--help"})," argument.  They contain information on the functions, its input parameters, and the type of data being returned.  The Contextual Help window, in Jupyter, is a very convenient way to keep this information on hand.  Referencing the docstrings will greatly reduce the need to consult the online documentation pages."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/ffbfcdec-c16e-41e7-8828-b099325910a5",alt:"Docstrings"})}),"\n",(0,s.jsx)(n.h2,{id:"api-keys",children:"API Keys"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"keys"})," module provides methods for managing access credentials to data sources.  If the API keys have already been set in a locally installed OpenBB Terminal application, no further action is required.  A new installation can be authorized using the OpenBB Hub, or they can be entered manually in the SDK.  For instructions on obtaining and authorizing each individual source, see the guide ",(0,s.jsx)(n.a,{href:"/sdk/usage//api-keys",children:"here"}),".  A key can be stored permanently, or only for the active session.  Use the ",(0,s.jsx)(n.code,{children:"persist"})," boolean argument to remember or forget it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'openbb.keys.fred(key= "REPLACE_WITH_YOUR_KEY", persist=True)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"authorize-with-the-openbb-hub",children:"Authorize With the OpenBB Hub"}),"\n",(0,s.jsxs)(n.p,{children:["API keys can be imported to the session by logging in to an ",(0,s.jsx)(n.a,{href:"https://my.openbb.co/app/sdk/api-keys",children:"OpenBB Hub account"}),".  The session can persist, if desired, otherwise they will be valid only for the current session.  We recommend connecting to Hub by generating a Personal Access Token.  Follow the ",(0,s.jsx)(n.a,{href:"https://my.openbb.co/app/sdk/api-keys",children:"link"}),', scroll to the bottom of the page, and click the "Generate" button.']}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/8c3988b4-cba9-4008-b8f3-04eef72878be",alt:"OpenBB Personal Access Token"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the generated token and enter as the value for the ",(0,s.jsx)(n.code,{children:"token"})," parameter, ignoring the email and password fields.  By default, the credentials will be forgotten when the SDK session is terminated."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jupyterpython",children:"openbb.login?\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Signature:\nopenbb.login(\n    email: str = '',\n    password: str = '',\n    token: str = '',\n    keep_session: bool = False,\n    silent: bool = False,\n)\nDocstring:\nLogin and load user info.\nIf there is a saved session it will be used (this can be achieved by `keep_session=True`).\nIf there's not a local session,\nthe user can use either email and password or the OpenBB Personal Access Token.\n\nParameters\n----------\nemail : str\n    The email.\npassword : str\n    The password.\ntoken : str\n    The OpenBB Personal Access Token.\nkeep_session : bool\n    Keep the session, i.e., next time the user logs in,\n    there is no need to enter the email and password or the token.\nsilent : bool\n    If True, the console print will be silent.\n\nExamples\n--------\n>>> from openbb_terminal.sdk import openbb\n>>> openbb.login(email=\"<your email>\", password=\"<your password>\")\nFile:      ~/GitHub/OpenBBTerminal/openbb_terminal/core/session/sdk_session.py\nType:      function\n"})}),"\n",(0,s.jsx)(n.p,{children:"Login with an access token with the syntax:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'openbb.login(token = "REPLACE_WITH_THE_PERSONAL_ACCESS_TOKEN")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The token can be revoked from the OpenBB Hub API Keys page, by clicking on the ",(0,s.jsx)(n.code,{children:"Regenerate"})," button, which will invalidate the current one."]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-use-the-sdk",children:"How to Use the SDK"}),"\n",(0,s.jsx)(n.p,{children:"The syntax examples provided assume that the SDK has already been imported."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.sdk import openbb\n"})}),"\n",(0,s.jsx)(n.h3,{id:"function-inputs",children:"Function Inputs"}),"\n",(0,s.jsx)(n.p,{children:"The majority of parameters accept a string as the input.  The docstrings will describe the expected inputs, but most will follow these general guidelines, unless otherwise stated:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["String values are surrounded by quotation marks, or a single apostrophe.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"the string"'}),", or ",(0,s.jsx)(n.code,{children:"'the string to enter'"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Some commands expect a list for the main input, and are contained within square brackets, with each item separated by a comma.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'["the first string", "the second string"]'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'openbb.stocks.quote(["SPY", "QQQ", "IWM", "AAPL", "MSFT", "TSLA", "GOOG", "META", "AMZN"])'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:['Dates are entered as a string, and follow the format: "YYYY-MM-DD".',"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'openbb.stocks.load("SPY", start_date="1994-01-01")'})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["When the expected input of a parameter is an integer or float value, they are entered without quotes.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"limit = 10"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Boolean arguments are always capitalized.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"True"}),"\n",(0,s.jsx)(n.li,{children:"False"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"function-responses",children:"Function Responses"}),"\n",(0,s.jsx)(n.p,{children:"Most data objects returned by functions are Pandas DataFrames, and the results will be printed without first assigning it to a variable."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'openbb.stocks.quote("SPY")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/cb932ee1-3a87-4744-81a5-840c452eac51",alt:"Data Response"})}),"\n",(0,s.jsxs)(n.p,{children:["The presentation of the responses will vary by platform, the sample above is from Jupyter Lab.  When the same function in the Terminal outputs a chart, the response is separated into the model and view components.  The SDK map will show two functions for the same command where the second has ",(0,s.jsx)(n.code,{children:"_chart"})," added on.  Using this second command will display the chart while the former returns the raw Pandas DataFrame."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/08bccaae-13f3-4fcd-857c-13cd30250492",alt:"Model and View"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'data = openbb.stocks.load("SPY", weekly = True)\nopenbb.ta.atr_chart(data, symbol = "SPY")\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the SDK session is from the command line (",(0,s.jsx)(n.code,{children:"python"})," or ",(0,s.jsx)(n.code,{children:"ipython"}),"), a window will open to display the chart.  Within an IDE, or Jupyter Notebook, they will be displayed inline and will not have the same toolbars."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/b668556b-27a5-49cc-989b-8d7de1e420e2",alt:"openbb.ta.atr_chart"})}),"\n",(0,s.jsx)(n.h3,{id:"passing-data-through",children:"Passing Data Through"}),"\n",(0,s.jsx)(n.p,{children:"Using the output of one function to feed another input will be a common workflow.  Basic operations do not require importing any Python packages.  The example below adds a new column, with the 20-day simple moving average, to the existing DataFrame."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'data = openbb.stocks.load(\'VOO\', start_date = "2022-05-15")\ndata["SMA"] = openbb.ta.sma(data = data["Close"], length = 20)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The code block below takes the top ten results from the ",(0,s.jsx)(n.code,{children:"unusual_volume"})," ",(0,s.jsx)(n.a,{href:"/sdk/menus/stocks/screener",children:"screener preset"}),", gets a single DataFrame with the daily returns for each ticker YTD, then identifies the date of the best performing day.  These operations will require importing the Pandas library to the session."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'import pandas as pd\n\nresults = openbb.stocks.screener.screener_data(\'unusual_volume\')\ntickers = results.sort_values(by = "Volume", ascending = False).head(10)["Ticker"].to_list()\nopenbb.stocks.quote(tickers)\nytd_returns = openbb.stocks.ca.hist(tickers, start_date = \'2023-01-01\', candle_type = \'r\')\ndate = ytd_returns.idxmax()\nreturns = ytd_returns.max()\nmax_returns = pd.concat([date,returns], axis = 1)\nmax_returns.columns = ["Date", "Returns"]\n\nmax_returns\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"}}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Date"}),(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Returns"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"GSIT"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-12 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2.10366"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"WISA"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-03-27 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.894737"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"LMFA"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-15 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.399731"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"OKE"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-05 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.0300176"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"GETR"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-12 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.450151"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"MMP"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-15 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.12994"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"ORMP"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-15 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.106007"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"MGOL"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-03-28 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.322957"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"TIVC"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-01-12 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.19"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"REAL"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"2023-05-08 00:00:00"}),(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0.191304"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"openbb-figure-objects",children:"OpenBB Figure Objects"}),"\n",(0,s.jsxs)(n.p,{children:["Functions returning a chart will have a boolean argument labeled, ",(0,s.jsx)(n.code,{children:"external_axes"}),".  When this is set as ",(0,s.jsx)(n.code,{children:"True"}),", and the function's output is assigned to a variable, a Plotly figure object is returned,  which can be manipulated accordingly.  Copy the block below to see all the parameters that can be set."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jupyterpython",children:'data = openbb.stocks.candle("SPY", external_axes = True)\ndata?\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://github.com/OpenBB-finance/OpenBBTerminal/assets/85772166/71f272f4-49eb-42c7-bd93-bd06f364ce32",alt:"OpenBB Figure"})}),"\n",(0,s.jsx)(n.p,{children:"Charts called from a command line session, will open a new window and appear the same as they are in the OpenBB Terminal application."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/233247951-e011fe2c-23a6-4518-bd17-3f43a9c2011a.png",alt:"OpenBB Terminal Charts"})}),"\n",(0,s.jsxs)(n.p,{children:["See the page ",(0,s.jsx)(n.a,{href:"/terminal/usage/basics#charts",children:"here"})," for a detailed explanation of the toolbar."]}),"\n",(0,s.jsxs)(n.p,{children:["To create an empty figure object, import the ",(0,s.jsx)(n.code,{children:"OpenBBFigure"})," class directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_terminal.core.plots import OpenBBFigure\nfig = OpenBBFigure()\n"})}),"\n",(0,s.jsx)(n.h3,{id:"chart-themes",children:"Chart Themes"}),"\n",(0,s.jsx)(n.p,{children:"Themes used by the charting and tables libraries are accessible in the SDK through a separate import statement."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from openbb_terminal import theme\n"})}),"\n",(0,s.jsx)(n.p,{children:"Print the path to the location of the style files with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"theme.plt_styles_available\n"})}),"\n",(0,s.jsx)(n.p,{children:"Set the charts theme as light or dark:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"theme.apply_style('light')\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"https://plotly.com/python/templates/",children:"Plotly documentation"})," for details on customizing style sheets."]}),"\n",(0,s.jsx)(n.h3,{id:"chart-cheat-sheet",children:"Chart Cheat Sheet"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/85772166/234313541-3d725e1c-ce48-4413-9267-b03571e0eccd.png",alt:"OpenBB Chart Cheat Sheet"})}),"\n",(0,s.jsx)(n.h3,{id:"changing-data-sources",children:"Changing Data Sources"}),"\n",(0,s.jsxs)(n.p,{children:["The source of the data can be specified - where more than one is available - by including the ",(0,s.jsx)(n.code,{children:"source"})," argument in the syntax."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'polygon = openbb.stocks.load("SPY", source = "Polygon")\neodhd = openbb.stocks.load("SPY", source = "EODHD")\nav = openbb.stocks.load("SPY", source = "AlphaVantage")\nintrinio = openbb.stocks.load("SPY", source = "Intrinio")\ndatabento = openbb.stocks.load("SPY", source = "DataBento")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"support-bug-reports--feedback",children:"Support, Bug Reports & Feedback"}),"\n",(0,s.jsxs)(n.p,{children:["Issues can be raised through the ",(0,s.jsx)(n.a,{href:"https://my.openbb.co/app/sdk/support",children:"support page"})," or on ",(0,s.jsx)(n.a,{href:"https://github.com/OpenBB-finance/OpenBBTerminal/issues/new/choose",children:"GitHub"}),".  You can also chat with the community on ",(0,s.jsx)(n.a,{href:"https://openbb.co/discord",children:"Discord"})," to find help or inspiration.  Feedback is always welcome."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);