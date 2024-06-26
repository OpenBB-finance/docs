---
title: panel
description: The documentation page provides a comprehensive guide to performing regression
  analysis on Panel Data using the 'panel' command in Python. It includes information
  about the usage, command parameters and the type of regression analysis you can
  perform.
keywords:
- panel data regression
- data analysis
- regression analysis
- Pooled OLS
- Random Effects
- Between OLS
- Fixed Effects
- First Difference OLS
- entity effects
- time effects
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="econometrics /panel - Reference | OpenBB Terminal Docs" />

Performs regression analysis on Panel Data. There are a multitude of options to select from to fit the needs of restrictions of the dataset.

### Usage

```python
panel -d DEPENDENT -i INDEPENDENT [-r {pols,re,bols,fe,fdols,POLS,RE,BOLS,FE,FDOLS}] [-e] [-t]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| dependent | The dependent variable on the regression you would like to perform | None | False | None |
| independent | The independent variables on the regression you would like to perform. E.g. wage_panel.married,wage_panel.union | None | False | None |
| type | The type of regression you wish to perform. This can be either pols (Pooled OLS), re (Random Effects), bols (Between OLS), fe (Fixed Effects) or fdols (First Difference OLS) | pols | True | pols, re, bols, fe, fdols, POLS, RE, BOLS, FE, FDOLS |
| entity_effects | Using this command creates entity effects, which is equivalent to including dummies for each entity. This is only used within Fixed Effects estimations (when type is set to 'fe') | False | True | None |
| time_effects | Using this command creates time effects, which is equivalent to including dummies for each time. This is only used within Fixed Effects estimations (when type is set to 'fe') | False | True | None |

---
