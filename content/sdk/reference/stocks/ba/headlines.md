---
title: headlines
description: The website page provides detailed documentation on how to use sentiment
  analysis with FinBrain's API on a company's stock. It offers instructions on extracting
  sentiment from headlines and visualizing sentiment trends through charts.
keywords:
- sentiment analysis
- FinBrain's API
- stock analysis
- data visualization
- OpenBBTerminal documentation
- behavioural analysis
- stock sentiment
- Stock market data
- Open-source software
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks.ba.headlines - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Gets Sentiment analysis provided by FinBrain's API [Source: finbrain].

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_model.py#L15)]

```python
openbb.stocks.ba.headlines(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Empty if there was an issue with data retrieval |
---

</TabItem>
<TabItem value="view" label="Chart">

Plots Sentiment analysis from FinBrain. Prints table if raw is True. [Source: FinBrain]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/common/behavioural_analysis/finbrain_view.py#L36)]

```python
openbb.stocks.ba.headlines_chart(symbol: str, raw: bool = False, export: str = "", external_axes: Optional[List[matplotlib.axes._axes.Axes]] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Ticker symbol to get the sentiment analysis from | None | False |
| raw | False | Display raw table data | False | True |
| export | str | Format to export data |  | True |
| external_axes | Optional[List[plt.Axes]] | External axes (1 axis is expected in the list), by default None | None | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
