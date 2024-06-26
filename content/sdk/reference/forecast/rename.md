---
title: rename
description: The rename function in openbb.forecast allows the renaming of a column
  in a dataframe. Contains details on parameters, returns and a link to the source
  code.
keywords:
- rename column
- dataframe
- openbb forecast
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forecast.rename - Reference | OpenBB SDK Docs" />

Rename a column in a dataframe

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forecast/forecast_model.py#L477)]

```python
openbb.forecast.rename(data: pd.DataFrame, old_column: str, new_column: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | The dataframe to have a column renamed | None | False |
| old_column | str | The column that will have its name changed | None | False |
| new_column | str | The name to update to | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | The dataframe with the renamed column |
---
