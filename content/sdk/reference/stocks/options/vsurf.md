---
title: vsurf
description: A documentation page that guides how to use vsurf method which gets the
  IV surface for calls and puts for stock ticker symbol and how to utilize vsurf_chart
  to display the vol surface. Includes source code, data types and defaults.
keywords:
- Docusaurus
- vSurf
- vSurf_Chart
- IV Surface
- vol surface
- options
- ticker symbol
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks.options.vsurf - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Gets IV surface for calls and puts for ticker

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_model.py#L371)]

```python
openbb.stocks.options.vsurf(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Stock ticker symbol to get | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of DTE, Strike and IV |
---

</TabItem>
<TabItem value="view" label="Chart">

Display vol surface

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/stocks/options/yfinance_view.py#L1128)]

```python
openbb.stocks.options.vsurf_chart(symbol: str, export: str = "", z: str = "IV", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get surface for | None | False |
| export | str | Format to export data |  | True |
| z | str | The variable for the Z axis | IV | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
