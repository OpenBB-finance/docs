---
title: summary
description: This page pertains to the summary statistics command used in Python for
  data analysis. The command provides a comprehensive summary of various statistical
  parameters for a given dataset, offering insight into data distribution and patterns.
keywords:
- summary statistics
- data analysis
- statistics
- data summary
- data distribution
- data interpretation
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/qa/summary - Reference | OpenBB Terminal Docs" />

Summary statistics

### Usage

```python
summary
```

---

## Parameters

This command has no parameters



---

## Examples

```python
2022 Feb 16, 11:16 (🦋) /stocks/qa/ $ summary

                                                 Summary Statistics
┏━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━┳━━━━━━━━━━┓
┃       ┃ open     ┃ high     ┃ low      ┃ close    ┃ adjclose ┃ volume              ┃ returns ┃ logret  ┃ logprice ┃
┡━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━╇━━━━━━━━━━┩
│ count │ 760.000  │ 760.000  │ 760.000  │ 760.000  │ 760.000  │ 760.000             │ 760.000 │ 760.000 │ 760.000  │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ mean  │ 203.131  │ 205.470  │ 200.350  │ 202.963  │ 202.963  │ 18581311.316        │ -0.000  │ -0.000  │ 5.288    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ std   │ 44.546   │ 44.825   │ 44.020   │ 44.497   │ 44.497   │ 10992756.504        │ 0.025   │ 0.025   │ 0.224    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ min   │ 112.630  │ 114.200  │ 108.700  │ 111.790  │ 111.790  │ 5523000.000         │ -0.133  │ -0.143  │ 4.717    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ 10%   │ 152.144  │ 153.973  │ 150.186  │ 151.635  │ 151.635  │ 9561170.000         │ -0.030  │ -0.030  │ 5.021    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ 25%   │ 171.659  │ 174.392  │ 169.912  │ 171.858  │ 171.858  │ 12144500.000        │ -0.012  │ -0.013  │ 5.147    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ 50%   │ 199.905  │ 202.325  │ 197.335  │ 200.000  │ 200.000  │ 15985100.000        │ 0.000   │ 0.000   │ 5.298    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ 75%   │ 229.373  │ 231.640  │ 226.552  │ 229.478  │ 229.478  │ 21443775.000        │ 0.014   │ 0.014   │ 5.436    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ 90%   │ 265.203  │ 268.028  │ 262.522  │ 265.506  │ 265.506  │ 28987730.000        │ 0.029   │ 0.029   │ 5.582    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ max   │ 313.500  │ 319.320  │ 308.910  │ 317.140  │ 317.140  │ 141830000.000       │ 0.104   │ 0.099   │ 5.759    │
├───────┼──────────┼──────────┼──────────┼──────────┼──────────┼─────────────────────┼─────────┼─────────┼──────────┤
│ var   │ 1984.325 │ 2009.289 │ 1937.717 │ 1979.969 │ 1979.969 │ 120840695549911.328 │ 0.001   │ 0.001   │ 0.050    │
└───────┴──────────┴──────────┴──────────┴──────────┴──────────┴─────────────────────┴─────────┴─────────┴──────────┘
```
---