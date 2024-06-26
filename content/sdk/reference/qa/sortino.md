---
title: sortino
description: Documentation on the use of the Sortino Ratio function within the OpenBB
  Quantitative Analysis Code. It includes the Python source code along with details
  of parameters for calculating and plotting the Sortino ratio.
keywords:
- Sortino Ratio
- Source Code
- Quantitative Analysis
- Charts
- Python Dataframes
- Financial Metrics
- Risk-Adjusted Performance
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="qa.sortino - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Calculates the sortino ratio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L562)]

```python
openbb.qa.sortino(data: pd.DataFrame, target_return: float = 0, window: float = 252, adjusted: bool = False)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe | None | False |
| target_return | float | target return of the asset | 0 | True |
| window | float | length of the rolling window | 252 | True |
| adjusted | bool | adjust the sortino ratio | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | sortino ratio |
---

</TabItem>
<TabItem value="view" label="Chart">

Plots the sortino ratio

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L1181)]

```python
openbb.qa.sortino_chart(data: pd.DataFrame, target_return: float, window: float, adjusted: bool)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | selected dataframe | None | False |
| target_return | float | target return of the asset | None | False |
| window | float | length of the rolling window | None | False |
| adjusted | bool | adjust the sortino ratio | None | False |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
