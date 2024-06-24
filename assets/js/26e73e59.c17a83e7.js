"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[42493],{38963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>x,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var c=n(74848),i=n(28453),o=n(94331);const a={title:"load",description:"Documentation on how to load and analyze crypto currency data using Python. The page explains how to use different data sources such as Yahoo Finance, ccxt, or cg, select exchanges and intervals, and query data by cryptocurrency symbols, start and end dates.",keywords:["crypto currency analysis","yahoo finance","ccxt","cg","exchange selection","data interval","load function","cryptocurrency symbol","quote currency"]},r=void 0,s={id:"terminal/reference/crypto/ta/load",title:"load",description:"Documentation on how to load and analyze crypto currency data using Python. The page explains how to use different data sources such as Yahoo Finance, ccxt, or cg, select exchanges and intervals, and query data by cryptocurrency symbols, start and end dates.",source:"@site/content/terminal/reference/crypto/ta/load.md",sourceDirName:"terminal/reference/crypto/ta",slug:"/terminal/reference/crypto/ta/load",permalink:"/openbb-docs/terminal/reference/crypto/ta/load",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenBB-finance/openbb-docs/edit/main/content/terminal/reference/crypto/ta/load.md",tags:[],version:"current",lastUpdatedBy:"Diogo Sousa",lastUpdatedAt:171922906e4,frontMatter:{title:"load",description:"Documentation on how to load and analyze crypto currency data using Python. The page explains how to use different data sources such as Yahoo Finance, ccxt, or cg, select exchanges and intervals, and query data by cryptocurrency symbols, start and end dates.",keywords:["crypto currency analysis","yahoo finance","ccxt","cg","exchange selection","data interval","load function","cryptocurrency symbol","quote currency"]},sidebar:"tutorialSidebar",previous:{title:"kc",permalink:"/openbb-docs/terminal/reference/crypto/ta/kc"},next:{title:"macd",permalink:"/openbb-docs/terminal/reference/crypto/ta/macd"}},d={},l=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}];function b(e){const t={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.A,{title:"crypto/ta/load - Reference | OpenBB Terminal Docs"}),"\n",(0,c.jsx)(t.p,{children:"Load crypto currency to perform analysis on. Yahoo Finance is used as default source. Other sources can be used such as 'ccxt' or 'cg' with --source. If you select 'ccxt', you can then select any exchange with --exchange. You can also select a specific interval with --interval."}),"\n",(0,c.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-python",children:"load -c COIN [-s START] [--exchange {aax,ascendex,bequant,bibox,bigone,binance,binancecoinm,binanceus,binanceusdm,bit2c,bitbank,bitbay,bitcoincom,bitfinex,bitfinex2,bitflyer,bitforex,bitget,bithumb,bitmart,bitmex,bitopro,bitpanda,bitrue,bitso,bitstamp,bitstamp1,bittrex,bitvavo,bkex,bl3p,btcalpha,btcbox,btcex,btcmarkets,btctradeua,btcturk,buda,bw,bybit,bytetrade,cex,coinbaseprime,coinbasepro,coincheck,coinex,coinfalcon,coinmate,coinone,coinspot,crex24,cryptocom,currencycom,delta,deribit,digifinex,eqonex,exmo,flowbtc,fmfwio,ftx,ftxus,gate,gateio,gemini,hitbtc,hitbtc3,hollaex,huobi,huobijp,huobipro,idex,independentreserve,indodax,itbit,kraken,kucoin,kucoinfutures,kuna,latoken,lbank,lbank2,liquid,luno,lykke,mercado,mexc,mexc3,ndax,novadax,oceanex,okcoin,okex,okex5,okx,paymium,phemex,poloniex,probit,qtrade,ripio,stex,therock,tidebit,tidex,timex,tokocrypto,upbit,wavesexchange,whitebit,woo,yobit,zaif,zb,zipmex,zonda}] [-e END] [-i {1,5,15,30,60,240,1440,10080,43200}] [--vs VS]\n"})}),"\n",(0,c.jsx)(t.hr,{}),"\n",(0,c.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,c.jsxs)(t.table,{children:[(0,c.jsx)(t.thead,{children:(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.th,{children:"Name"}),(0,c.jsx)(t.th,{children:"Description"}),(0,c.jsx)(t.th,{children:"Default"}),(0,c.jsx)(t.th,{children:"Optional"}),(0,c.jsx)(t.th,{children:"Choices"})]})}),(0,c.jsxs)(t.tbody,{children:[(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"coin"}),(0,c.jsx)(t.td,{children:"Coin to get. Must be coin symbol (e.g., btc, eth)"}),(0,c.jsx)(t.td,{children:"None"}),(0,c.jsx)(t.td,{children:"False"}),(0,c.jsx)(t.td,{children:"None"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"start"}),(0,c.jsx)(t.td,{children:"The starting date (format YYYY-MM-DD) of the crypto"}),(0,c.jsx)(t.td,{children:"2019-11-21"}),(0,c.jsx)(t.td,{children:"True"}),(0,c.jsx)(t.td,{children:"None"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"exchange"}),(0,c.jsx)(t.td,{children:"Exchange to search"}),(0,c.jsx)(t.td,{children:"binance"}),(0,c.jsx)(t.td,{children:"True"}),(0,c.jsx)(t.td,{children:"aax, ascendex, bequant, bibox, bigone, binance, binancecoinm, binanceus, binanceusdm, bit2c, bitbank, bitbay, bitcoincom, bitfinex, bitfinex2, bitflyer, bitforex, bitget, bithumb, bitmart, bitmex, bitopro, bitpanda, bitrue, bitso, bitstamp, bitstamp1, bittrex, bitvavo, bkex, bl3p, btcalpha, btcbox, btcex, btcmarkets, btctradeua, btcturk, buda, bw, bybit, bytetrade, cex, coinbaseprime, coinbasepro, coincheck, coinex, coinfalcon, coinmate, coinone, coinspot, crex24, cryptocom, currencycom, delta, deribit, digifinex, eqonex, exmo, flowbtc, fmfwio, ftx, ftxus, gate, gateio, gemini, hitbtc, hitbtc3, hollaex, huobi, huobijp, huobipro, idex, independentreserve, indodax, itbit, kraken, kucoin, kucoinfutures, kuna, latoken, lbank, lbank2, liquid, luno, lykke, mercado, mexc, mexc3, ndax, novadax, oceanex, okcoin, okex, okex5, okx, paymium, phemex, poloniex, probit, qtrade, ripio, stex, therock, tidebit, tidex, timex, tokocrypto, upbit, wavesexchange, whitebit, woo, yobit, zaif, zb, zipmex, zonda"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"end"}),(0,c.jsx)(t.td,{children:"The ending date (format YYYY-MM-DD) of the crypto"}),(0,c.jsx)(t.td,{children:"2022-11-25"}),(0,c.jsx)(t.td,{children:"True"}),(0,c.jsx)(t.td,{children:"None"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"interval"}),(0,c.jsx)(t.td,{children:"The interval of the crypto"}),(0,c.jsx)(t.td,{children:"1440"}),(0,c.jsx)(t.td,{children:"True"}),(0,c.jsx)(t.td,{children:"1, 5, 15, 30, 60, 240, 1440, 10080, 43200"})]}),(0,c.jsxs)(t.tr,{children:[(0,c.jsx)(t.td,{children:"vs"}),(0,c.jsx)(t.td,{children:"Quote currency (what to view coin vs). e.g., usdc, usdt, ... if source is ccxt, usd, eur, ... otherwise"}),(0,c.jsx)(t.td,{children:"usdt"}),(0,c.jsx)(t.td,{children:"True"}),(0,c.jsx)(t.td,{children:"None"})]})]})]}),"\n",(0,c.jsx)(t.hr,{})]})}function x(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(b,{...e})}):b(e)}},94331:(e,t,n)=>{n.d(t,{A:()=>o});n(96540);var c=n(5260),i=n(74848);function o(e){let{title:t}=e;return(0,i.jsx)(c.A,{children:(0,i.jsx)("title",{children:t})})}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var c=n(96540);const i={},o=c.createContext(i);function a(e){const t=c.useContext(o);return c.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),c.createElement(o.Provider,{value:t},e.children)}}}]);