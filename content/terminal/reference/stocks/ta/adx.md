---
title: adx
description: Discover the purpose and usage of the ADX (Average Directional Index),
  a Welles Wilder style moving average of the Directional Movement Index. Learn to
  interpret the ADX values to determine the strength of a trend.
keywords:
- ADX
- Welles Wilder
- Average Directional Index
- Directional Movement Index
- ADX interpretation
- ADX parameters
- ADX usage
- Trend strength
- Trend analysis
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ta/adx - Reference | OpenBB Terminal Docs" />

The ADX is a Welles Wilder style moving average of the Directional Movement Index (DX). The values range from 0 to 100, but rarely get above 60. To interpret the ADX, consider a high number to be a strong trend, and a low number, a weak trend.

### Usage

```python
adx [-l N_LENGTH] [-s N_SCALAR] [-d N_DRIFT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length | length | 14 | True | None |
| n_scalar | scalar | 100 | True | None |
| n_drift | drift | 1 | True | None |

![adx](https://user-images.githubusercontent.com/46355364/154309667-c67f6078-822f-452d-9853-ffffa9172670.png)

---
