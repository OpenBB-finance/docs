---
title: regions
description: This page provides detailed instructions on how to utilize the regions
  functions from OpenBB finance terminal to retrieve and visualize stock interests
  by region using Google API. The documentation covers the parameters, return types,
  and source code for the functionalities.
keywords:
- Docusaurus
- SEO metadata
- regions
- google api
- stock's interest
- openbb.stocks.ba.regions
- openbb.stocks.ba.regions_chart
- ticker symbol
- dataframe
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks.ba.regions - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get interest by region from google api [Source: google].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_model.py#L44)]

```python
openbb.stocks.ba.regions(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to look at | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of interest by region |
---

</TabItem>
<TabItem value="view" label="Chart">

Plots bars of regions based on stock's interest. [Source: Google].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/google_view.py#L156)]

```python
openbb.stocks.ba.regions_chart(symbol: str, limit: int = 5, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol | None | False |
| limit | int | Number of regions to show | 5 | True |
| export | str | Format to export data |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
