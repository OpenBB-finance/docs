---
title: th
description: This page provides a detailed description and source code for two main
  features provided by OpenBB-finance. These are the functionalities to acquire token
  historical transactions data and display information about token history. The page
  further provides detailed explanations for parameters required for both functions
  and what each function returns.
keywords:
- OpenBB-finance
- token historical transactions
- Ethplorer
- cryptocurrency
- onchain
- coding
- dataframe
- token balance
- python function
- parameters
- returns
- string
- integer
- boolean
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto.onchain.th - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get info about token historical transactions. [Source: Ethplorer]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L489)]

```python
openbb.crypto.onchain.th(address: str, sortby: str = "timestamp", ascend: bool = False)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token e.g. 0xf3db5fa2c66b7af3eb0c0b782510816cbe4813b8 | None | False |
| sortby | str | Key to sort by. | timestamp | True |
| ascend | str | Sort in descending order. | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with token historical transactions. |
---

</TabItem>
<TabItem value="view" label="Chart">

Display info about token history. [Source: Ethplorer]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_view.py#L276)]

```python
openbb.crypto.onchain.th_chart(address: str, limit: int = 10, sortby: str = "timestamp", ascend: bool = False, hash_: bool = False, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Token balance e.g. 0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984 | None | False |
| limit | int | Limit of transactions. Maximum 100 | 10 | True |
| sortby | str | Key to sort by. | timestamp | True |
| ascend | str | Sort in descending order. | False | True |
| hash_ | bool, | Flag to show transaction hash. | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
