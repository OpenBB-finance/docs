---
title: hma
description: The page covers the Hull Moving Average (HMA) - a moving average that
  is more responsive to current price activity while maintaining smoothness. It explains
  the usage, parameters (such as n_length and n_offset) and gives a visual representation.
keywords:
- Hull Moving Average
- HMA
- Moving Average
- price activity
- curve smoothness
- n_length
- n_offset
- algorithm parameters
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/ta/hma - Reference | OpenBB Terminal Docs" />

The Hull Moving Average solves the age old dilemma of making a moving average more responsive to current price activity whilst maintaining curve smoothness. In fact the HMA almost eliminates lag altogether and manages to improve smoothing at the same time.

### Usage

```python
hma [-l N_LENGTH] [-o N_OFFSET]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | Window lengths. Multiple values indicated as comma separated values. | 10, 20 | True | None |
| n_offset | offset | 0 | True | range(0, 100) |

![hma](https://user-images.githubusercontent.com/46355364/154310988-2e97c166-a3b9-49ae-abcd-2c1b37309072.png)

---
