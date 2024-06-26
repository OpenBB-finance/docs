---
title: pos
description: The 'pos' page holds the explanation and tutorial for retrieving dark
  pool short positions. The content includes usage, parameters with their detailed
  description, and an example in form of a table.
keywords:
- Dark pool short positions
- Python script usage
- Data parameters
- Data sorting
- Descending order
- Ascending order
- Display limit
- Command line tool example
- Volatility data
- Net short volume
- DP position
- Stock market parameters
- Stockgrid source
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/dps/pos - Reference | OpenBB Terminal Docs" />

Get dark pool short positions. [Source: Stockgrid]

### Usage

```python
pos [-l LIMIT] [-s {sv,sv_pct,nsv,nsv_dollar,dpp,dpp_dollar}] [-r]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of tickers to display. | 10 | True | None |
| sort_field | Field for which to sort by, where 'sv': Short Vol. [1M], 'sv_pct': Short Vol. %%, 'nsv': Net Short Vol. [1M], 'nsv_dollar': Net Short Vol. ($100M), 'dpp': DP Position [1M], 'dpp_dollar': DP Position ($1B) | dpp_dollar | True | sv, sv_pct, nsv, nsv_dollar, dpp, dpp_dollar |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |


---

## Examples

```python
2022 Feb 15, 08:51 (🦋) /stocks/dps/ $ pos
                                                      Data for: 2022-02-14
┌────────┬─────────────────┬──────────────┬─────────────────────┬────────────────────────┬──────────────────┬───────────────────┐
│ Ticker │ Short Vol. [1M] │ Short Vol. % │ Net Short Vol. [1M] │ Net Short Vol. ($100M) │ DP Position [1M] │ DP Position ($1B) │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ QQQ    │ 12.80           │ 66.45        │ 6.34                │ 22.02                  │ 117.89           │ 42.14             │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ AMD    │ 45.65           │ 66.50        │ 22.65               │ 25.88                  │ 171.23           │ 21.13             │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ SPY    │ 12.74           │ 53.08        │ 1.48                │ 6.49                   │ 42.46            │ 19.11             │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ NVDA   │ 12.36           │ 55.73        │ 2.54                │ 6.17                   │ 73.21            │ 18.07             │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ IWM    │ 3.33            │ 72.64        │ 2.07                │ 4.16                   │ 33.92            │ 6.74              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ LQD    │ 8.18            │ 83.55        │ 6.57                │ 8.13                   │ 52.24            │ 6.62              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ HYG    │ 8.20            │ 70.11        │ 4.70                │ 3.88                   │ 59.81            │ 5.04              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ NFLX   │ 1.28            │ 47.61        │ -0.13               │ -0.51                  │ 11.19            │ 4.76              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ SNAP   │ 13.34           │ 61.82        │ 5.10                │ 2.02                   │ 105.93           │ 4.34              │
├────────┼─────────────────┼──────────────┼─────────────────────┼────────────────────────┼──────────────────┼───────────────────┤
│ SMH    │ 1.04            │ 62.44        │ 0.41                │ 1.10                   │ 13.29            │ 3.67              │
└────────┴─────────────────┴──────────────┴─────────────────────┴────────────────────────┴──────────────────┴───────────────────┘
```
---
