---
title: vwap
description: This page provides documentation on Volume Weighted Average Price (vwap)
  which measures the average typical price by volume. It shows usage, parameters,
  and examples specific to the analysis of stock data, with an example featuring the
  GOOGL stock.
keywords:
- vwap
- Volume Weighted Average Price
- intraday charts
- general direction
- parameters
- examples
- stocks
- analysis
- offset
- GOOGL stock
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ta/vwap - Reference | OpenBB Terminal Docs" />

The Volume Weighted Average Price that measures the average typical price by volume. It is typically used with intraday charts to identify general direction.

### Usage

```python
vwap [-o N_OFFSET] [--start START] [--end END]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_offset | offset | 0 | True | None |
| start | Starting date to select | None | True | None |
| end | Ending date to select | None | True | None |


---

## Examples

```python
2022 Feb 16, 11:36 (🦋) /stocks/ta/ $ load GOOGL -i 1

Loading Intraday 1min GOOGL stock with starting period 2022-02-10 for analysis.

Datetime: 2022 Feb 16 11:36
Timezone: America/New_York
Currency: USD
Market:   CLOSED

2022 Feb 16, 11:36 (🦋) /stocks/ta/ $ vwap
```
![vwap](https://user-images.githubusercontent.com/46355364/154312502-9377c57c-6e34-42a6-b021-674e7d4561dd.png)

---
