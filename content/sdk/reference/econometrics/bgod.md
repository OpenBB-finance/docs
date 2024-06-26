---
title: bgod
description: This page provides documentation for bgod and bgod_chart methods of OpenBB.
  The bgod method calculates test statistics for autocorrelation in an OLS model,
  and bgod_chart displays the Breusch-Godfrey autocorrelation test.
keywords:
- bgod
- bgod_chart
- autocorrelation
- Breusch-Godfrey Test
- OLS model
- statistics
- data analysis
- econometrics
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="econometrics.bgod - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Calculate test statistics for autocorrelation

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_model.py#L525)]

```python
openbb.econometrics.bgod(model: pd.DataFrame, lags: int = 3)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | OLS model that has been fit. | None | False |
| lags | int | The amount of lags. | 3 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Test results from the Breusch-Godfrey Test |
---

</TabItem>
<TabItem value="view" label="Chart">

Show Breusch-Godfrey autocorrelation test

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/econometrics/regression_view.py#L141)]

```python
openbb.econometrics.bgod_chart(model: statsmodels.regression.linear_model.RegressionResultsWrapper, lags: int = 3, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| model | OLS Model | OLS model that has been fit. | None | False |
| lags | int | The amount of lags included. | 3 | True |
| export | str | Format to export data |  | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
