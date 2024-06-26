---
title: hcorr
description: The page presents a correlation heatmap 'hcorr' based on historical price
  comparison between similar companies. This tool assists in understanding and visualizing
  stock market trends.
keywords:
- hcorr
- correlation heatmap
- price comparison
- historical data
- stock market trends
- financial tools
- data visualization
- type_candle
- display_full_matrix
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ca/hcorr - Reference | OpenBB Terminal Docs" />

Correlation heatmap based on historical price comparison between similar companies.

### Usage

```python
hcorr [-t {o,h,l,c,a}] [-s START] [--display-full-matrix]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| type_candle | Candle data to use: o-open, h-high, l-low, c-close, a-adjusted close, r-returns. | a | True | o, h, l, c, a |
| start | The starting date (format YYYY-MM-DD) of the stock | 2021-11-24 | True | None |
| display_full_matrix | Display all matrix values, rather than masking off half. | False | True | None |

![hcorr](https://user-images.githubusercontent.com/46355364/154073186-45336f5f-85e1-4cb9-9307-9694295b1f80.png)

---
