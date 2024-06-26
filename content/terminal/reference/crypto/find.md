---
title: find
description: 'Use our coin search tool to find similar coins by name, symbol, or id
  across different platforms like CoinGecko, Binance, Coinbase and CoinPaprika. If
  you don''t remember the exact name or id of a crypto coin, you can use this tool
  for your search. Provide your search query and choose the searching key: symbol,
  id or name of coin. You can limit the number of records displayed and move over
  coins using pagination.'
keywords:
- coin search
- cryptocurrency
- crypto search tool
- find coin by symbol
- find coin by id
- Bitcoin
- CoinGecko
- Binance
- CoinPaprika
- Coinbase
- search query
- pagination mechanism
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto /find - Reference | OpenBB Terminal Docs" />

Find similar coin by name, symbol, or id. If you don't remember exact name or id of the Coin at CoinGecko, Binance, Coinbase or CoinPaprika you can use this command to display coins with similar name, symbol or id to your search query. Example of usage: coin name is something like "polka". So I can try: find -c polka -k name -t 25 It will search for coin that has similar name to polka and display top 25 matches. -c, --coin stands for coin - you provide here your search query -k, --key it's a searching key. You can search by symbol, id or name of coin -l, --limit it displays top N number of records. coins: Shows list of coins available on CoinGecko, CoinPaprika and Binance.If you provide name of coin then in result you will see ids of coins with best match for all mentioned services. If you provide "ALL" in your coin search query, then all coins will be displayed. To move over coins you can use pagination mechanism with skip, top params. E.g. coins ALL --skip 100 --limit 30 then all coins from 100 to 130 will be displayed. By default skip = 0, limit = 10. If you won't provide source of the data everything will be displayed (CoinGecko, CoinPaprika, Binance). If you want to search only in given source then use --source flag. E.g. if you want to find coin with name uniswap on CoinPaprika then use: coins uniswap --source cp --limit 10

### Usage

```python
find -c COIN [-k {id,symbol,name}] [-l LIMIT] [-s SKIP]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| coin | Symbol Name or Id of Coin | None | False | None |
| key | Specify by which column you would like to search: symbol, name, id | symbol | True | id, symbol, name |
| limit | Number of records to display | 10 | True | None |
| skip | Skip n of records | 0 | True | range(1, 300) |


---

## Examples

```python
2022 Feb 15, 07:52 (🦋) /crypto/ $ find -c btc
                                 Similar Coins
┌───────┬────────┬──────────────────────────────┬──────────────────────────────┐
│ index │ symbol │ id                           │ name                         │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 0     │ btc    │ bitcoin                      │ Bitcoin                      │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 1     │ zbtc   │ zetta-bitcoin-hashrate-token │ Zetta Bitcoin Hashrate Token │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 2     │ xbtc   │ dforce-btc                   │ dForce BTC                   │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 2     │ xbtc   │ synthetic-btc                │ Synthetic BTC                │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 2     │ xbtc   │ wrapped-bitcoin-stacks       │ Wrapped Bitcoin-Stacks       │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 3     │ xbtc   │ dforce-btc                   │ dForce BTC                   │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 3     │ xbtc   │ synthetic-btc                │ Synthetic BTC                │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 3     │ xbtc   │ wrapped-bitcoin-stacks       │ Wrapped Bitcoin-Stacks       │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 4     │ xbtc   │ dforce-btc                   │ dForce BTC                   │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 4     │ xbtc   │ synthetic-btc                │ Synthetic BTC                │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 4     │ xbtc   │ wrapped-bitcoin-stacks       │ Wrapped Bitcoin-Stacks       │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 5     │ wbtc   │ wrapped-bitcoin              │ Wrapped Bitcoin              │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 5     │ wbtc   │ wrapped-btc-wormhole         │ Wrapped BTC (Wormhole)       │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 6     │ wbtc   │ wrapped-bitcoin              │ Wrapped Bitcoin              │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 6     │ wbtc   │ wrapped-btc-wormhole         │ Wrapped BTC (Wormhole)       │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 7     │ vbtc   │ venus-btc                    │ Venus BTC                    │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 8     │ ubtc   │ united-bitcoin               │ United Bitcoin               │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 9     │ tbtc   │ t-bitcoin                    │ τBitcoin                     │
├───────┼────────┼──────────────────────────────┼──────────────────────────────┤
│ 9     │ tbtc   │ tbtc                         │ tBTC                         │
└───────┴────────┴──────────────────────────────┴──────────────────────────────┘

      Similar Coins
┌───────┬───────┬───────┐
│ index │ id    │ name  │
├───────┼───────┼───────┤
│ 0     │ tbtc  │ tBTC  │
├───────┼───────┼───────┤
│ 1     │ sbtc  │ sBTC  │
├───────┼───────┼───────┤
│ 2     │ wwbtc │ wWBTC │
├───────┼───────┼───────┤
│ 3     │ tzbtc │ tzBTC │
├───────┼───────┼───────┤
│ 4     │ nhbtc │ nHBTC │
├───────┼───────┼───────┤
│ 5     │ bxbtc │ bxBTC │
└───────┴───────┴───────┘
```
---
