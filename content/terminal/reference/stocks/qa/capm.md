---
title: capm
description: The capm page offers detailed information on analysing a stock's risk
  in comparison to the market risk. Learn to use the 'capm' command and understand
  Beta, Systematic Risk, and Unsystematic Risk in stock analysis.
keywords:
- capm
- stock risk
- market risk
- beta
- systematic risk
- unsystematic risk
- stock analysis
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/qa/capm - Reference | OpenBB Terminal Docs" />

Provides detailed information about a stock's risk compared to the market risk.

### Usage

```python
capm
```

---

## Parameters

This command has no parameters



---

## Examples

```python
2022 Feb 16, 11:01 (🦋) /stocks/qa/ $ load tsla

Loading Daily TSLA stock with starting period 2019-02-11 for analysis.

Datetime: 2022 Feb 16 11:02
Timezone: America/New_York
Currency: USD
Market:   CLOSED


2022 Feb 16, 11:02 (🦋) /stocks/qa/ $ capm
Beta:                   2.02
Systematic Risk:        23.09%
Unsystematic Risk:      76.91%
```
---
