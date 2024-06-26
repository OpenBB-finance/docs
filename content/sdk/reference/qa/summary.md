---
title: summary
description: This page contains documentation for methods of calculating and displaying
  summary statistics in the OpenBB Terminal. Tab sections divide the page into different
  functionalities, including a model overview and a chart view of summary statistics.
  Details for parameters, return values, and links to the original source code are
  provided for each method.
keywords:
- summary statistics
- quantitative analysis
- OpenBB.qa
- summary_chart
- export data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="qa.summary - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Print summary statistics

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_model.py#L25)]

```python
openbb.qa.summary(data: pd.DataFrame)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | Dataframe to get summary statistics for | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Summary statistics |
---

</TabItem>
<TabItem value="view" label="Chart">

Prints table showing summary statistics

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/quantitative_analysis/qa_view.py#L53)]

```python
openbb.qa.summary_chart(data: pd.DataFrame, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| data | pd.DataFrame | DataFrame to get statistics of | None | False |
| export | str | Format to export data |  | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
