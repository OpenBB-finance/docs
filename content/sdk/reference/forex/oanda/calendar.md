---
title: calendar
description: Provides a comprehensive guide on the Oanda calendar functionality in
  the OpenBB finance package. Details include how to request data of significant events,
  parameters for currency pair and days, model and view interfaces, and corresponding
  source code.
keywords:
- oanda
- forex
- calendar
- events
- data
- currency pair
- advance
- model
- view
- chart
- OpenBB-finance
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forex.oanda.calendar - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Request data of significant events calendar.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L645)]

```python
openbb.forex.oanda.calendar(days: int = 14, instrument: Optional[str] = None)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | Union[str, None] | The loaded currency pair, by default None | None | True |
| days | int | Number of days in advance | 14 | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Union[pd.DataFrame, bool] | Calendar events data or False |
---

</TabItem>
<TabItem value="view" label="Chart">

View calendar of significant events.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L383)]

```python
openbb.forex.oanda.calendar_chart(instrument: str, days: int = 7)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| instrument | str | The loaded currency pair | None | False |
| days | int | Number of days in advance | 7 | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
