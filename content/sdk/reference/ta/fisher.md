---
title: fisher
description: Documentation page about Fisher Transform, a technical analysis indicator
  used in finance. Detailed explanation on how to implement and use the Fisher Transform
  indicator using the OpenBB library, with guides on parameters and returns for function
  calls.
keywords:
- Fisher Transform
- technical analysis
- OpenBB library
- OHLC prices
- indicator window
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="ta.fisher - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Fisher Transform

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_model.py#L165)]

```python
openbb.ta.fisher(data: pd.DataFrame, window: int = 14)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| window | int | Length for indicator window | 14 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Dataframe of technical indicator |
---

</TabItem>
<TabItem value="view" label="Chart">

Plots Fisher Indicator

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/technical_analysis/momentum_view.py#L406)]

```python
openbb.ta.fisher_chart(data: pd.DataFrame, window: int = 14, symbol: str = "", export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe of OHLC prices | None | False |
| window | int | Length of window | 14 | True |
| symbol | str | Ticker string |  | True |
| export | str | Format to export data |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (3 axes are expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
