---
title: lcb
description: This page documents the usage of the lcb function, which is a Python
  command to print the latest cluster buys in the stock market. It includes details
  about the parameters used and provides examples of how to use it effectively. The
  information is sourced from OpenInsider.
keywords:
- lcb
- cluster buys
- openinsider
- python code
- code usage
- parameters
- data rows
- limit
- stock market
- stock data
- insider data
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ins/lcb - Reference | OpenBB Terminal Docs" />

Print latest cluster buys. [Source: OpenInsider]

### Usage

```python
lcb [-l LIMIT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of datarows to display | 10 | True | None |


---

## Examples

```python
2022 Feb 16, 07:52 (🦋) /stocks/ins/ $ lcb
                                                                                 Insider Data
┏━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━┓
┃ X  ┃ Filing Date ┃ Trade Date ┃ Ticker ┃ Company Name         ┃ Industry             ┃ Title ┃ Trade Type   ┃ Price  ┃ Qty         ┃ Owned      ┃ Diff Own ┃ Value         ┃
┡━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━━┩
│ DM │ 2022-02-15  │ 2022-02-11 │ RSVR   │ Reservoir Media,     │ Amusement &          │ 6     │ P - Purchase │ $6.79  │ +504,505    │ 15,285,695 │ +3%      │ +$3,426,335   │
│    │ 21:57:01    │            │        │ Inc.                 │ Recreation Services  │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ M  │ 2022-02-15  │ 2022-02-14 │ TWOU   │ 2U, Inc.             │ Prepackaged Software │ 3     │ P - Purchase │ $9.43  │ +179,522    │ 1,176,241  │ +18%     │ +$1,692,212   │
│    │ 20:47:47    │            │        │                      │                      │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ M  │ 2022-02-15  │ 2022-02-14 │ MTRX   │ Matrix Service Co    │ Special Trade        │ 3     │ P - Purchase │ $6.78  │ +29,800     │ 505,338    │ +6%      │ +$202,017     │
│    │ 17:18:30    │            │        │                      │ Contractors          │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ D  │ 2022-02-14  │ 2022-02-11 │ GHM    │ Graham Corp          │ General Industrial   │ 4     │ P - Purchase │ $9.15  │ +25,600     │ 155,113    │ +20%     │ +$234,160     │
│    │ 16:16:44    │            │        │                      │ Machinery &          │       │              │        │             │            │          │               │
│    │             │            │        │                      │ Equipment            │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ M  │ 2022-02-14  │ 2021-11-18 │ CTLP   │ Cantaloupe, Inc.     │ Calculating &        │ 3     │ P - Purchase │ $8.07  │ +129,297    │ 12,223,845 │ +1%      │ +$1,044,001   │
│    │ 16:14:49    │            │        │                      │ Accounting Machines  │       │              │        │             │            │          │               │
│    │             │            │        │                      │ (No Electronic       │       │              │        │             │            │          │               │
│    │             │            │        │                      │ Computers)           │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ DM │ 2022-02-14  │ 2022-02-11 │ FLXS   │ Flexsteel Industries │ Household Furniture  │ 3     │ P - Purchase │ $22.98 │ +22,977     │ 199,923    │ +13%     │ +$528,044     │
│    │ 13:09:00    │            │        │ Inc                  │                      │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ M  │ 2022-02-11  │ 2022-02-09 │ ASAN   │ Asana, Inc.          │ Prepackaged Software │ 2     │ P - Purchase │ $64.41 │ +12,625,661 │ 22,075,784 │ +134%    │ +$813,188,832 │
│    │ 18:50:54    │            │        │                      │                      │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ DM │ 2022-02-11  │ 2022-02-09 │ LOB    │ Live Oak Bancshares, │ State Commercial     │ 2     │ P - Purchase │ $63.98 │ +21,875     │ 1,353,036  │ +2%      │ +$1,399,565   │
│    │ 18:28:13    │            │        │ Inc.                 │ Banks                │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ M  │ 2022-02-10  │ 2022-02-08 │ ECAT   │ Blackrock Esg        │ Closed-End Funds     │ 3     │ P - Purchase │ $18.72 │ +61,879     │ 119,380    │ +108%    │ +$1,158,411   │
│    │ 15:12:22    │            │        │ Capital Allocation   │                      │       │              │        │             │            │          │               │
│    │             │            │        │ Trust                │                      │       │              │        │             │            │          │               │
├────┼─────────────┼────────────┼────────┼──────────────────────┼──────────────────────┼───────┼──────────────┼────────┼─────────────┼────────────┼──────────┼───────────────┤
│ D  │ 2022-02-09  │ 2022-02-07 │ CSII   │ Cardiovascular       │ Surgical & Medical   │ 3     │ P - Purchase │ $18.43 │ +6,067      │ 285,893    │ +2%      │ +$111,801     │
│    │ 16:45:18    │            │        │ Systems Inc          │ Instruments &        │       │              │        │             │            │          │               │
│    │             │            │        │                      │ Apparatus            │       │              │        │             │            │          │               │
└────┴─────────────┴────────────┴────────┴──────────────────────┴──────────────────────┴───────┴──────────────┴────────┴─────────────┴────────────┴──────────┴───────────────┘
D: Derivative transaction in filing (usually option exercise)
M: Multiple transactions in filing; earliest reported transaction date & weighted average transaction price
```
---