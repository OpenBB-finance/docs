---
title: ctb
description: This page provides a detailed overview on how to show the cost to borrow
  of stocks using the ctb function. It includes usage, parameters, and examples, helping
  users to effectively retrieve and manage data.
keywords:
- ctb function
- cost to borrow
- stock data
- Interactive Broker
- record retrieval
- data management
- Stocksera
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/dps/ctb - Reference | OpenBB Terminal Docs" />

Show cost to borrow of stocks. [Source: Stocksera/Interactive Broker]

### Usage

```python
ctb [-n NUMBER] [--raw]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| number | Number of records to retrieve. | 20 | True | None |
| raw | Print raw data. | False | True | None |


---

## Examples

```python
2022 Apr 07, 09:47 (�) /stocks/dps/ $ ctb
      Highest Cost to Borrow
┌─────────┬───────────┬───────────┐
│ Symbol  │ Fees      │ Available │
├─────────┼───────────┼───────────┤
│ PIK     │ 457.4402% │ 7000      │
├─────────┼───────────┼───────────┤
│ EVTL    │ 413.7294% │ 10000     │
├─────────┼───────────┼───────────┤
│ CELZ    │ 330.9411% │ 100000    │
├─────────┼───────────┼───────────┤
│ DRCT    │ 304.9628% │ 300000    │
├─────────┼───────────┼───────────┤
│ MYNZ    │ 291.8163% │ 3000      │
├─────────┼───────────┼───────────┤
│ DCFC    │ 279.0673% │ 10000     │
├─────────┼───────────┼───────────┤
│ FGFPP   │ 278.422%  │ 8000      │
├─────────┼───────────┼───────────┤
│ ZTEK    │ 250.0307% │ 75000     │
├─────────┼───────────┼───────────┤
│ FRGE    │ 245.1883% │ 700       │
├─────────┼───────────┼───────────┤
│ SATL    │ 240.7341% │ 500       │
├─────────┼───────────┼───────────┤
│ ARMR    │ 240.5414% │ 5000      │
├─────────┼───────────┼───────────┤
│ PILL    │ 223.538%  │ 55000     │
├─────────┼───────────┼───────────┤
│ ARQQ    │ 217.3978% │ 3000      │
├─────────┼───────────┼───────────┤
│ NRSN    │ 216.9888% │ 6000      │
├─────────┼───────────┼───────────┤
│ ZIONL   │ 215.2871% │ 35000     │
├─────────┼───────────┼───────────┤
│ BLBX    │ 213.441%  │ 15000     │
├─────────┼───────────┼───────────┤
│ WINSF   │ 212.907%  │ 10000     │
├─────────┼───────────┼───────────┤
│ SKYH    │ 206.7746% │ 25000     │
├─────────┼───────────┼───────────┤
│ SOHON   │ 205.1096% │ 40000     │
├─────────┼───────────┼───────────┤
│ MH PRA  │ 202.1235% │ 100000    │
└─────────┴───────────┴───────────┘
```
---
