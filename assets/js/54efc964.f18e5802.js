"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26228],{87860:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>C,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=t(74848),o=t(28453),s=t(94331);const c={title:"cr",description:"A content focused on the 'cr' command line tool usage and its parameters, which provides crypto interest rates from numerous platforms, for various cryptocurrencies. Core parameters include selection of interest rate type, specific cryptocurrencies, and platforms.",keywords:["cryptocurrency","crypto interest rates","cryptocurrency platforms","borrow interest rate","supply interest rate","crypto supply and borrow rates","cr command line","cryptocurrency parameters"]},i=void 0,a={id:"terminal/reference/crypto/ov/cr",title:"cr",description:"A content focused on the 'cr' command line tool usage and its parameters, which provides crypto interest rates from numerous platforms, for various cryptocurrencies. Core parameters include selection of interest rate type, specific cryptocurrencies, and platforms.",source:"@site/content/terminal/reference/crypto/ov/cr.md",sourceDirName:"terminal/reference/crypto/ov",slug:"/terminal/reference/crypto/ov/cr",permalink:"/openbb-docs/terminal/reference/crypto/ov/cr",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ov/cr.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"cr",description:"A content focused on the 'cr' command line tool usage and its parameters, which provides crypto interest rates from numerous platforms, for various cryptocurrencies. Core parameters include selection of interest rate type, specific cryptocurrencies, and platforms.",keywords:["cryptocurrency","crypto interest rates","cryptocurrency platforms","borrow interest rate","supply interest rate","crypto supply and borrow rates","cr command line","cryptocurrency parameters"]},sidebar:"tutorialSidebar",previous:{title:"contracts",permalink:"/openbb-docs/terminal/reference/crypto/ov/contracts"},next:{title:"defi",permalink:"/openbb-docs/terminal/reference/crypto/ov/defi"}},C={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function R(e){const r={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{title:"crypto/ov/cr - Reference | OpenBB Terminal Docs"}),"\n",(0,n.jsx)(r.p,{children:"Displays crypto {borrow,supply} interest rates for cryptocurrencies across several platforms. You can select rate type with --type {borrow,supply} You can display only N number of platforms with --limit parameter."}),"\n",(0,n.jsx)(r.h3,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-python",children:"cr [-t {borrow,supply}] [-c CRYPTOS] [-p PLATFORMS]\n"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Name"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Default"}),(0,n.jsx)(r.th,{children:"Optional"}),(0,n.jsx)(r.th,{children:"Choices"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"type"}),(0,n.jsx)(r.td,{children:"Select interest rate type"}),(0,n.jsx)(r.td,{children:"supply"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"borrow, supply"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"cryptos"}),(0,n.jsx)(r.td,{children:"Cryptocurrencies to search interest rates for separated by comma. Default: BTC,ETH,USDT,USDC. Options: ZRX,BAT,REP,ETH,SAI,BTC,XRP,LTC,EOS,BCH,XMR,DOGE,USDC,USDT,BSV,NEO,ETC,OMG,ZEC,BTG,SAN,DAI,UNI,WBTC,COMP,LUNA,UST,BUSD,KNC,LEND,LINK,MANA,MKR,SNX,SUSD,TUSD,eCRV-DAO,HEGIC,YFI,1INCH,CRV-IB,CRV-HBTC,BOOST,CRV-sBTC,CRV-renBTC,CRV-sAave,CRV-oBTC,CRV-pBTC,CRV-LUSD,CRV-BBTC,CRV-tBTC,CRV-FRAX,CRV-yBUSD,CRV-COMP,CRV-GUSD,yUSD,CRV-3pool,CRV-TUSD,CRV-BUSD,CRV-DUSD,CRV-UST,CRV-mUSD,sUSD,CRV-sUSD,CRV-LINK,CRV-USDN,CRV-USDP,CRV-alUSD,CRV-Aave,CRV-HUSD,CRV-EURS,RAI,CRV-triCrypto,CRV-Pax,CRV-USDT,CRV-USDK,CRV-RSV,CRV-3Crypto,GUSD,PAX,USD,ILK,BNB,PAXG,ADA,FTT,SOL,SRM,RAY,XLM,SUSHI,CRV,BAL,AAVE,MATIC,GRT,ENJ,USDP,IOST,AMP,PERP,SHIB,ALICE,ALPHA,ANKR,ATA,AVA,AXS,BAKE,BAND,BNT,BTCST,CELR,CFX,CHR,COS,COTI,CTSI,DUSK,EGLD,ELF,FET,FLOW,FTM,INJ,IOTX,MDX,NEAR,OCEAN,ONT,POLS,REEF,WRX,XEC,XTZ,XVS,ZIL,DOT,FIL,TRX,CAKE,ADX,FIRO,SXP,ATOM,IOTA,AKRO,AUDIO,BADGER,CVC,DENT,DYDX,FORTH,GNO,HOT,LPT,LRC,NKN,NMR,NU,OGN,OXT,POLY,QNT,RLC,RSR,SAND,SKL,STMX,STORJ,TRB,UMA,DPI,VSP,CHSB,EURT,GHST,3CRV,CRVRENWBTC,MIR-UST UNI LP,ALCX,ALUSD,USDP3CRV,RENBTC,YVECRV,CVX,USDTTRC20,AUD,HKD,GBP,EUR,HUSD,HT,DASH,EURS,AVAX,BTT,GALA,ILV,APE"}),(0,n.jsx)(r.td,{children:"BTC,ETH,USDT,USDC"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"ZRX, BAT, REP, ETH, SAI, BTC, XRP, LTC, EOS, BCH, XMR, DOGE, USDC, USDT, BSV, NEO, ETC, OMG, ZEC, BTG, SAN, DAI, UNI, WBTC, COMP, LUNA, UST, BUSD, KNC, LEND, LINK, MANA, MKR, SNX, SUSD, TUSD, eCRV-DAO, HEGIC, YFI, 1INCH, CRV-IB, CRV-HBTC, BOOST, CRV-sBTC, CRV-renBTC, CRV-sAave, CRV-oBTC, CRV-pBTC, CRV-LUSD, CRV-BBTC, CRV-tBTC, CRV-FRAX, CRV-yBUSD, CRV-COMP, CRV-GUSD, yUSD, CRV-3pool, CRV-TUSD, CRV-BUSD, CRV-DUSD, CRV-UST, CRV-mUSD, sUSD, CRV-sUSD, CRV-LINK, CRV-USDN, CRV-USDP, CRV-alUSD, CRV-Aave, CRV-HUSD, CRV-EURS, RAI, CRV-triCrypto, CRV-Pax, CRV-USDT, CRV-USDK, CRV-RSV, CRV-3Crypto, GUSD, PAX, USD, ILK, BNB, PAXG, ADA, FTT, SOL, SRM, RAY, XLM, SUSHI, CRV, BAL, AAVE, MATIC, GRT, ENJ, USDP, IOST, AMP, PERP, SHIB, ALICE, ALPHA, ANKR, ATA, AVA, AXS, BAKE, BAND, BNT, BTCST, CELR, CFX, CHR, COS, COTI, CTSI, DUSK, EGLD, ELF, FET, FLOW, FTM, INJ, IOTX, MDX, NEAR, OCEAN, ONT, POLS, REEF, WRX, XEC, XTZ, XVS, ZIL, DOT, FIL, TRX, CAKE, ADX, FIRO, SXP, ATOM, IOTA, AKRO, AUDIO, BADGER, CVC, DENT, DYDX, FORTH, GNO, HOT, LPT, LRC, NKN, NMR, NU, OGN, OXT, POLY, QNT, RLC, RSR, SAND, SKL, STMX, STORJ, TRB, UMA, DPI, VSP, CHSB, EURT, GHST, 3CRV, CRVRENWBTC, MIR-UST UNI LP, ALCX, ALUSD, USDP3CRV, RENBTC, YVECRV, CVX, USDTTRC20, AUD, HKD, GBP, EUR, HUSD, HT, DASH, EURS, AVAX, BTT, GALA, ILV, APE"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"platforms"}),(0,n.jsx)(r.td,{children:"Platforms to search interest rates in separated by comma. Default: BlockFi,Ledn,SwissBorg,Youhodler. Options: MakerDao,Compound,Poloniex,Bitfinex,dYdX,CompoundV2,Linen,Hodlonaut,InstaDapp,Zerion,Argent,DeFiSaver,MakerDaoV2,Ddex,AaveStable,AaveVariable,YearnFinance,BlockFi,Nexo,CryptoCom,Soda,Coinbase,SaltLending,Ledn,Bincentive,Inlock,Bitwala,Zipmex,Vauld,Delio,Yield,Vesper,Reflexer,SwissBorg,MushroomsFinance,ElementFi,Maple,CoinRabbit,WirexXAccounts,Youhodler,YieldApp,NotionalFinance,IconFi"}),(0,n.jsx)(r.td,{children:"BlockFi,Ledn,SwissBorg,Youhodler"}),(0,n.jsx)(r.td,{children:"True"}),(0,n.jsx)(r.td,{children:"MakerDao, Compound, Poloniex, Bitfinex, dYdX, CompoundV2, Linen, Hodlonaut, InstaDapp, Zerion, Argent, DeFiSaver, MakerDaoV2, Ddex, AaveStable, AaveVariable, YearnFinance, BlockFi, Nexo, CryptoCom, Soda, Coinbase, SaltLending, Ledn, Bincentive, Inlock, Bitwala, Zipmex, Vauld, Delio, Yield, Vesper, Reflexer, SwissBorg, MushroomsFinance, ElementFi, Maple, CoinRabbit, WirexXAccounts, Youhodler, YieldApp, NotionalFinance, IconFi"})]})]})]}),"\n",(0,n.jsx)(r.hr,{})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(R,{...e})}):R(e)}},94331:(e,r,t)=>{t.d(r,{A:()=>s});t(96540);var n=t(5260),o=t(74848);function s(e){let{title:r}=e;return(0,o.jsx)(n.A,{children:(0,o.jsx)("title",{children:r})})}},28453:(e,r,t)=>{t.d(r,{R:()=>c,x:()=>i});var n=t(96540);const o={},s=n.createContext(o);function c(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);