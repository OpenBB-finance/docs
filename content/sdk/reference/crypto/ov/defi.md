---
title: defi
description: This documents discusses useful functionalities for understanding global
  Decentralized Finances. The content includes source code, parameters, and the returns.
keywords:
- Decentralized Finances
- cryptocurrency
- CoinGecko
- parameters
- returns
- dataframe
- defi
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto.ov.defi - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Get global statistics about Decentralized Finances [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_model.py#L514)]

```python
openbb.crypto.ov.defi()
```

---

## Parameters

This function does not take any parameters.

---

## Returns

| Type | Description |
| ---- | ----------- |
| pd.DataFrame | Metric, Value |
---

</TabItem>
<TabItem value="view" label="Chart">

Shows global statistics about Decentralized Finances. [Source: CoinGecko]

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/cryptocurrency/overview/pycoingecko_view.py#L301)]

```python
openbb.crypto.ov.defi_chart(export: str = "")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| export | str | Export dataframe data to csv,json,xlsx file |  | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
