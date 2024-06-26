---
title: spos
description: This documentation page provides a detailed guide on spos function under
  the OpenBB package. Learn how to get net short position and plot net short position
  with source codes and parameters clearly listed.
keywords:
- spos
- net short position
- plotting
- Source Code
- parameters
- chart
- Stockgrid
- Stock data
- Data Visualization
- Data Export
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks.dps.spos - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get net short position. [Source: Stockgrid]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_model.py#L165)]

```python
openbb.stocks.dps.spos(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to get data from | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Net short position |
---

</TabItem>
<TabItem value="view" label="Chart">

Plot net short position. [Source: Stockgrid]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/stockgrid_view.py#L247)]

```python
openbb.stocks.dps.spos_chart(symbol: str, limit: int = 84, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock to plot for | None | False |
| limit | int | Number of last open market days to show | 84 | True |
| raw | bool | Flag to print raw data instead | False | True |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
