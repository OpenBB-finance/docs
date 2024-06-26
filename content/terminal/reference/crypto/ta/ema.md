---
title: ema
description: Page providing details about the Exponential Moving Average (EMA), a
  crucial tool in technical analysis. Explains the comparison between EMA and Simple
  Moving Average, along with usage and parameters.
keywords:
- Exponential Moving Average
- technical analysis
- Simple Moving Average
- cumulative calculation
- responsive to changes
- parameters
- Window lengths
- offset
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/ta/ema - Reference | OpenBB Terminal Docs" />

The Exponential Moving Average is a staple of technical analysis and is used in countless technical indicators. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. However, the Exponential Moving Average is a cumulative calculation, including all data. Past values have a diminishing contribution to the average, while more recent values have a greater contribution. This method allows the moving average to be more responsive to changes in the data.

### Usage

```python
ema [-l N_LENGTH] [-o N_OFFSET]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window lengths. Multiple values indicated as comma separated values. | 20, 50 | True | None |
| n_offset | offset | 0 | True | range(0, 100) |

![ema](https://user-images.githubusercontent.com/46355364/154310578-6f4a51a8-3667-497c-9c50-7ff16e256fb6.png)

---
