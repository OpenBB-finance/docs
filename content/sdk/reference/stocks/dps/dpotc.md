---
title: dpotc
description: Documentation for dpotc and dpotc_chart, functions in the OpenBB Finance
  library for retrieving and visualizing Dark Pools (ATS) and OTC (Non-ATS) data from
  FINRA. Includes parameters and source code.
keywords:
- dpotc
- FINRA data
- Dark Pools (ATS) Data
- OTC (Non-ATS) Data
- dpotc_chart
- barchart
- matplotlib
- Export dataframe data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks.dps.dpotc - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get all FINRA data associated with a ticker

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_model.py#L293)]

```python
openbb.stocks.dps.dpotc(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker to get data from | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame] | Dark Pools (ATS) Data, OTC (Non-ATS) Data |
---

</TabItem>
<TabItem value="view" label="Chart">

Display barchart of dark pool (ATS) and OTC (Non ATS) data. [Source: FINRA]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/dark_pool_shorts/finra_view.py#L27)]

```python
openbb.stocks.dps.dpotc_chart(symbol: str, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker | None | False |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (2 axes are expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
