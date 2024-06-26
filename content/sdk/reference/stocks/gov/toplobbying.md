---
title: toplobbying
description: This page provides details on the 'toplobbying' functionality of the
  OpenBBTerminal software, including the Quiverquant model and view. The page offers
  a guide on how to present top lobbying tickers based on total money spent and guides
  on retrieving corporate lobbying details using Python.
keywords:
- Corporate Lobbying
- Top Lobbying
- Lobbying Tickers
- Government
- Quiverquant model
- Quiverquant view
- Source Code
- Data frame
- Chart
- Raw data
- Export data
- External axes
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks.gov.toplobbying - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Corporate lobbying details

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_model.py#L358)]

```python
openbb.stocks.gov.toplobbying()
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | DataFrame of top corporate lobbying |
---

</TabItem>
<TabItem value="view" label="Chart">

Top lobbying tickers based on total spent

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/government/quiverquant_view.py#L622)]

```python
openbb.stocks.gov.toplobbying_chart(limit: int = 10, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| limit | int | Number of tickers to show | 10 | True |
| raw | bool | Show raw data | False | True |
| export |  | Format to export data |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
