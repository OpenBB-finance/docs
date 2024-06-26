---
title: hist
description: This page provides detailed information on how to retrieve and display
  information about balance historical transactions using OpenBB's crypto.onchain
  functionality. Learn how to use On-chain model's parameters to sort and limit transactions
  as required for Ethplorer, including the export of data.
keywords:
- OpenBB Crypto OnChain
- Blockchain balance
- Historical transactions
- OnChain Model
- OnChain View
- Ethplorer
- Balance historical transactions
- Sort by timestamp
- Sort in ascending order
- export dataframe to file
- Crypto
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto.onchain.hist - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get information about balance historical transactions. [Source: Ethplorer]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_model.py#L336)]

```python
openbb.crypto.onchain.hist(address: str, sortby: str = "timestamp", ascend: bool = True)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Blockchain balance e.g. 0x3cD751E6b0078Be393132286c442345e5DC49699 | None | False |
| sortby | str | Key to sort by. | timestamp | True |
| ascend | str | Sort in ascending order. | True | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame with balance historical transactions (last 100) |
---

</TabItem>
<TabItem value="view" label="Chart">

Display information about balance historical transactions. [Source: Ethplorer]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/onchain/ethplorer_view.py#L158)]

```python
openbb.crypto.onchain.hist_chart(address: str, limit: int = 10, sortby: str = "timestamp", ascend: bool = True, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| address | str | Ethereum blockchain balance e.g. 0x3cD751E6b0078Be393132286c442345e5DC49699 | None | False |
| limit | int | Limit of transactions. Maximum 100 | 10 | True |
| sortby | str | Key to sort by. | timestamp | True |
| ascend | str | Sort in ascending order. | True | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
