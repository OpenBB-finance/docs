---
title: season
description: The page provides details on the 'openbb.forecast.season_chart' function.
  This function is used to plot seasonality from a dataset. It includes information
  about the parameters, the return value, and a link to the source code.
keywords:
- openbb.forecast.season_chart
- season chart
- plot seasonality
- dataset
- dataframe
- time lag
- max lag
- confidence interval
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forecast.season - Reference | OpenBB SDK Docs" />

Plot seasonality from a dataset

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_view.py#L120)]

```python
openbb.forecast.season_chart(data: pd.DataFrame, column: str = "close", export: str = "", m: Optional[int] = None, max_lag: int = 24, alpha: float = 0.05, external_axes: Optional[List[axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | The dataframe to plot | None | False |
| column | str | The column of the dataframe to analyze | close | True |
| export | str | Format to export image |  | True |
| m | Optional[int] | Optionally, a time lag to highlight on the plot. Default is none. | None | True |
| max_lag | int | The maximal lag order to consider. Default is 24. | 24 | True |
| alpha | float | The confidence interval to display. Default is 0.05. | 0.05 | True |
| external_axes | Optional[List[plt.axes]] | External axes to plot on | None | True |


---

## Returns

This function does not return anything

---
