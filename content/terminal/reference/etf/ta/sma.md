---
title: sma
description: This page provides information on Simple Moving Average (SMA), a tool
  for trend identification and data filtering. It details SMA's usage and parameters
  like n_length and n_offset.
keywords:
- Simple Moving Average
- sma
- Moving Average
- trend identification
- data filtering
- n_length
- n_offset
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/ta/sma - Reference | OpenBB Terminal Docs" />

Moving Averages are used to smooth the data in an array to help eliminate noise and identify trends. The Simple Moving Average is literally the simplest form of a moving average. Each output value is the average of the previous n values. In a Simple Moving Average, each value in the time period carries equal weight, and values outside of the time period are not included in the average. This makes it less responsive to recent changes in the data, which can be useful for filtering out those changes.

### Usage

```python
sma [-l N_LENGTH] [-o N_OFFSET]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window lengths. Multiple values indicated as comma separated values. | 20, 50 | True | None |
| n_offset | offset | 0 | True | None |

![sma](https://user-images.githubusercontent.com/46355364/154311791-5b130d08-55bd-406b-a68e-914a733c5191.png)

---
