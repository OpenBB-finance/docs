---
title: candle
description: This documentation is for the 'candle' function used to show loaded fx
  data. It provides usage details, parameters explanations and choices, including
  plotly, sort, reverse, raw, trendlines, moving averages, and more, along with a
  graphical presentation.
keywords:
- candle function
- loaded fx data
- interactive plotly chart
- sort data
- reverse flag
- raw data
- trendlines
- moving average
- log scale
- fx data visualization
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forex/candle - Reference | OpenBB Terminal Docs" />

Show candle for loaded fx data

### Usage

```python
candle [-p] [--sort {adjclose,open,close,high,low,volume,logret}] [-r] [--raw] [-t] [--ma MOV_AVG] [--log]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| plotly | Flag to show interactive plotly chart | True | True | None |
| sort | Choose a column to sort by. Only works when raw data is displayed. |  | True | adjclose, open, close, high, low, volume, logret |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |
| raw | Shows raw data instead of chart. | False | True | None |
| trendlines | Flag to add high and low trends to candle | False | True | None |
| mov_avg | Add moving average in number of days to plot and separate by a comma. Value for ma (moving average) keyword needs to be greater than 1. | None | True | None |
| logy | Plot with y axis on log scale | False | True | None |

![candle](https://user-images.githubusercontent.com/46355364/154029283-2e5e472b-4c2b-4e88-8fbe-f6a0925898b8.png)

---
