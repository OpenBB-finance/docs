---
title: tv
description: This section of the page is a guide on using the function to display
  token volume on different Decentralized Exchanges. It includes parameters such as
  the currency of the displayed trade amount and options to sort data.
keywords:
- decentralized exchanges
- token volume
- ERC20 token
- trade amount
- sort by column
- data sorting
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/onchain/tv - Reference | OpenBB Terminal Docs" />

Display token volume on different Decentralized Exchanges. [Source: https://graphql.bitquery.io/]

### Usage

```python
tv -c COIN [-vs {ETH,USD,BTC,USDT}] [-l LIMIT] [-s {exchange,trades,tradeAmount}] [-r]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| coin | ERC20 token symbol or address. | None | False | None |
| vs | Currency of displayed trade amount. | USD | True | ETH, USD, BTC, USDT |
| limit | display N number records | 10 | True | None |
| sortby | Sort by given column. | trades | True | exchange, trades, tradeAmount |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |

---
