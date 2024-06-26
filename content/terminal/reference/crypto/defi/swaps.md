---
title: swaps
description: This webpage displays the latest swaps done on Uniswap DEX. It allows
  users to sort crypto transactions in different ways as per their needs. It's useful
  for observing and analyzing recent cryptocurrency transactions.
keywords:
- Uniswap DEX
- crypto swaps
- cryptocurrency transactions
- defi data
- last crypto swaps
- uniswap transactions
- sort uniswap dex
- track uniswap swaps
- token exchange
- decoding uniswap
- uniswap analysis
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/defi/swaps - Reference | OpenBB Terminal Docs" />

Display last swaps done on Uniswap DEX. [Source: https://thegraph.com/en/]

### Usage

```python
pairs [-l LIMIT] [-s {Datetime,USD,From,To}] [-r]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number of records to display | 10 | True | None |
| sortby | Sort by given column. Default: timestamp | Datetime | True | Datetime, USD, From, To |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |


---

## Examples

```python
2022 Feb 15, 06:34 (🦋) /crypto/defi/ $ swaps
                               Last Uniswap Swaps
┌─────────────────────────────────────┬─────────┬────────┬─────────────────────┐
│ timestamp                           │ token0  │ token1 │ amountUSD           │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 989.8036910116636250215132843852658 │ SAITAMA │ WETH   │ 2022-02-15 12:34:21 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 96.90289143394234014296291034812848 │ WETH    │ RBIS   │ 2022-02-15 12:34:16 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 96.13166689256472937997500656514648 │ CRO     │ WETH   │ 2022-02-15 12:34:16 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 5870.220427980296531839870124291824 │ BASD    │ WETH   │ 2022-02-15 12:34:16 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 58.91252385247121053891350741753916 │ WETH    │ RIOT   │ 2022-02-15 12:34:21 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 3429.451646829620606429002872853048 │ STRONG  │ WETH   │ 2022-02-15 12:34:16 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 197.7374918341423326217509222074952 │ HEX     │ WETH   │ 2022-02-15 12:34:16 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 19.09615292253938809540600951822232 │ SAITAMA │ WETH   │ 2022-02-15 12:34:21 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 1550.329575065031856287197563619452 │ WETH    │ NFT    │ 2022-02-15 12:34:16 │
├─────────────────────────────────────┼─────────┼────────┼─────────────────────┤
│ 13146.79479655147014131543533949295 │ WETH    │ MIND   │ 2022-02-15 12:34:16 │
└─────────────────────────────────────┴─────────┴────────┴─────────────────────┘
```
---
