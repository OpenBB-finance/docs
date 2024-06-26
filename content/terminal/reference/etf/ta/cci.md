---
title: cci
description: The page describes the usage and parameters of CCI (Commodity Channel
  Index), a tool designed to detect beginning and ending market trends. It suggests
  how CCI values can indicate overbought or oversold conditions and potential price
  corrections.
keywords:
- Commodity Channel Index
- CCI
- market trends
- overbought conditions
- oversold conditions
- price correction
- CCI Parameters
- CCI usage
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="etf/ta/cci - Reference | OpenBB Terminal Docs" />

The CCI is designed to detect beginning and ending market trends. The range of 100 to -100 is the normal trading range. CCI values outside of this range indicate overbought or oversold conditions. You can also look for price divergence in the CCI. If the price is making new highs, and the CCI is not, then a price correction is likely.

### Usage

```python
cci [-l N_LENGTH] [-s N_SCALAR]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | length | 14 | True | None |
| n_scalar | scalar | 0.015 | True | None |

![cci](https://user-images.githubusercontent.com/46355364/154310079-808803ca-26dd-4d45-8a02-17e51230bf2d.png)

---
