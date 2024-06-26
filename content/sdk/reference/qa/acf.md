---
title: acf
description: This page provides a detailed description and source code of acf - an
  OpenBB function used to plot Auto and Partial Auto Correlation of returns and change
  in returns. One can understand how to use the function, its parameters, and view
  examples of its use.
keywords:
- auto correlation
- quantitive analysis
- quantitative_analysis.qa_view.py
- plots
- openbb.qa.acf
- codes
- parameters
- returns
- examples
- stocks.load
- GitHub source code
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="qa.acf - Reference | OpenBB SDK Docs" />

Plots Auto and Partial Auto Correlation of returns and change in returns

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L372)]

```python
openbb.qa.acf(data: pd.DataFrame, target: str, symbol: str = "", lags: int = 15, external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe to look at | None | False |
| target | str | Data column to look at | None | False |
| symbol | str | Name of dataset |  | True |
| lags | int | Max number of lags to look at | 15 | True |
| external_axes | Optional[List[plt.Axes]] | External axes (4 axes are expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

## Examples

```python
from openbb_terminal.sdk import openbb
df = openbb.stocks.load("AAPL")
openbb.qa.acf(data=df, target="Adj Close")
```

---
