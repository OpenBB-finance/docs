---
title: dtvl
description: This page of the documentation provides information about OpenBB's dtvl
  model and view functions. The model function returns details about the historical
  Total Value Locked (TVL) of a specified DeFi protocol, while the view function allows
  for the plotting of TVL data across various decentralized applications (dApps).
keywords:
- dtvl model
- dtvl view
- DeFi protocol
- historical TVL
- decentralized applications
- dApps
- crypto
- dataframe
- matplotlib
- export data
- function parameters
- digital assets
- crypto analytics
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto.defi.dtvl - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Returns information about historical tvl of a defi protocol.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_model.py#L124)]

```python
openbb.crypto.defi.dtvl(protocol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| protocol | str | Name of the protocol | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Historical tvl |
---

</TabItem>
<TabItem value="view" label="Chart">

Plots historical TVL of different dApps

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/defi/llama_view.py#L131)]

```python
openbb.crypto.defi.dtvl_chart(dapps: str = "", export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| dapps | str | dApps to search historical TVL. Should be split by , e.g.: anchor,sushiswap,pancakeswap |  | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
