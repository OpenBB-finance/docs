---
title: raw
description: Documentation page for raw function, which is used to output raw data
  to the console. Explains its usage, parameters, along with examples.
keywords:
- Documentation
- raw function
- Console Output
- Data Sorting
- Programming Parameter Explanation
- Python Sorting
- Command examples
- Data Representation
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forex/qa/raw - Reference | OpenBB Terminal Docs" />

Print raw data to console

### Usage

```python
raw [-l LIMIT] [-r] [-s {open,high,low,close,adjclose,volume,date_id,oc_high,oc_low,returns,logret}]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number to show | 20 | True | None |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |
| sortby | The column to sort by | None | True | open, high, low, close, adjclose, volume, date_id, oc_high, oc_low, returns, logret |


---

## Examples

```python
2022 Feb 16, 11:05 (🦋) /stocks/qa/ $ raw
        Raw Data
┏━━━━━━━━━━━━┳━━━━━━━━━━┓
┃            ┃ Adjclose ┃
┡━━━━━━━━━━━━╇━━━━━━━━━━┩
│ 2022-01-19 │ 995.650  │
├────────────┼──────────┤
│ 2022-01-20 │ 996.270  │
├────────────┼──────────┤
│ 2022-01-21 │ 943.900  │
├────────────┼──────────┤
│ 2022-01-24 │ 930.000  │
├────────────┼──────────┤
│ 2022-01-25 │ 918.400  │
├────────────┼──────────┤
│ 2022-01-26 │ 937.410  │
├────────────┼──────────┤
│ 2022-01-27 │ 829.100  │
├────────────┼──────────┤
│ 2022-01-28 │ 846.350  │
├────────────┼──────────┤
│ 2022-01-31 │ 936.720  │
├────────────┼──────────┤
│ 2022-02-01 │ 931.250  │
├────────────┼──────────┤
│ 2022-02-02 │ 905.660  │
├────────────┼──────────┤
│ 2022-02-03 │ 891.140  │
├────────────┼──────────┤
│ 2022-02-04 │ 923.320  │
├────────────┼──────────┤
│ 2022-02-07 │ 907.340  │
├────────────┼──────────┤
│ 2022-02-08 │ 922.000  │
├────────────┼──────────┤
│ 2022-02-09 │ 932.000  │
├────────────┼──────────┤
│ 2022-02-10 │ 904.550  │
├────────────┼──────────┤
│ 2022-02-11 │ 860.000  │
├────────────┼──────────┤
│ 2022-02-14 │ 875.760  │
├────────────┼──────────┤
│ 2022-02-15 │ 922.430  │
└────────────┴──────────┘
```
---
