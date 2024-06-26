---
title: team
description: This page provides documentation on functions used to retrieve and visualize
  information about the team behind a specific cryptocurrency. These functions provide
  details on individuals and organizations involved in the coin selected, with options
  for exporting the data.
keywords:
- cryptocurrency
- team information
- data visualization
- OpenBB crypto
- crypto team analysis
- Python functions
- export data
- crypto due diligence
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto.dd.team - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Returns coin team

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_model.py#L419)]

```python
openbb.crypto.dd.team(symbol: str)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check team | None | False |


---

## Returns

| Type | Description |
| ---- | ----------- |
| Tuple[pd.DataFrame, pd.DataFrame] | Individuals,<br/>Organizations |
---

</TabItem>
<TabItem value="view" label="Chart">

Prints table showing coin team

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/due_diligence/messari_view.py#L556)]

```python
openbb.crypto.dd.team_chart(symbol: str, export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| symbol | str | Crypto symbol to check coin team | None | False |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
