---
title: tv
description: 'This documentation provides coding references and details about two
  functions related to the OpenBB Crypto Onchain Decentralized Exchange: one function
  to get token volume and another to view and print this data. Available parameters
  and return types are also discussed.'
keywords:
- Decentralized Exchange
- Token Volume
- OpenBB Crypto Onchain
- ERC20 token symbol
- Trade amount currency
- Sort data
- Data ascending
- Parameter details
- Return types
- Source code
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto.onchain.tv - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get token volume on different Decentralized Exchanges. [Source: https://graphql.bitquery.io/]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_model.py#L513)]

```python
openbb.crypto.onchain.tv(symbol: str = "UNI", trade_amount_currency: str = "USD", sortby: str = "tradeAmount", ascend: bool = True)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ERC20 token symbol. | UNI | True |
| trade_amount_currency | str | Currency to display trade amount in. | USD | True |
| sortby | str | Key by which to sort data | tradeAmount | True |
| ascend | bool | Flag to sort data ascending | True | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Token volume on Decentralized Exchanges |
---

</TabItem>
<TabItem value="view" label="Chart">

Prints table showing token volume on different Decentralized Exchanges.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/bitquery_view.py#L160)]

```python
openbb.crypto.onchain.tv_chart(symbol: str = "WBTC", trade_amount_currency: str = "USD", limit: int = 10, sortby: str = "tradeAmount", ascend: bool = True, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | ERC20 token symbol or address | WBTC | True |
| trade_amount_currency | str | Currency of displayed trade amount. Default: USD | USD | True |
| limit | int | Number of records to display | 10 | True |
| sortby | str | Key by which to sort data | tradeAmount | True |
| ascend | bool | Flag to sort data ascending | True | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Token volume on different decentralized exchanges |
---

</TabItem>
</Tabs>
