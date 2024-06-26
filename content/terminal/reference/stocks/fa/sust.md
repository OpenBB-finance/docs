---
title: sust
description: This documentation page covers the usage of 'sust' command in fetching
  sustainability values of a company, useful for responsible investment decisions.
  All values are sourced from Yahoo Finance.
keywords:
- sust command
- sustainability values
- responsible investments
- Yahoo Finance
- ESG scores
- corporate sustainability
- investment tool
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/fa/sust - Reference | OpenBB Terminal Docs" />

Print sustainability values of the company. The following fields are expected: Palmoil, Controversialweapons, Gambling, Socialscore, Nuclear, Furleather, Alcoholic, Gmo, Catholic, Socialpercentile, Peercount, Governancescore, Environmentpercentile, Animaltesting, Tobacco, Total ESG, Highestcontroversy, ESG Performance, Coal, Pesticides, Adult, Percentile, Peergroup, Smallarms, Environmentscore, Governancepercentile, Militarycontract. [Source: Yahoo Finance]

### Usage

```python
sust
```

---

## Parameters

This command has no parameters



---

## Examples

```python
2022 Feb 16, 09:01 (🦋) /stocks/fa/ $ sust
         Ticker Sustainability
┏━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━┓
┃                        ┃ Value       ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━┩
│ Palm oil               │ False       │
├────────────────────────┼─────────────┤
│ Controversial weapons  │ False       │
├────────────────────────┼─────────────┤
│ Gambling               │ False       │
├────────────────────────┼─────────────┤
│ Social score           │ 16.16       │
├────────────────────────┼─────────────┤
│ Nuclear                │ False       │
├────────────────────────┼─────────────┤
│ Fur leather            │ False       │
├────────────────────────┼─────────────┤
│ Alcoholic              │ False       │
├────────────────────────┼─────────────┤
│ Gmo                    │ False       │
├────────────────────────┼─────────────┤
│ Catholic               │ False       │
├────────────────────────┼─────────────┤
│ Social percentile      │ None        │
├────────────────────────┼─────────────┤
│ Peer count             │ 37          │
├────────────────────────┼─────────────┤
│ Governance score       │ 9.61        │
├────────────────────────┼─────────────┤
│ Environment percentile │ None        │
├────────────────────────┼─────────────┤
│ Animal testing         │ False       │
├────────────────────────┼─────────────┤
│ Tobacco                │ False       │
├────────────────────────┼─────────────┤
│ Total esg              │ 28.54       │
├────────────────────────┼─────────────┤
│ Highest controversy    │ 3           │
├────────────────────────┼─────────────┤
│ Esg performance        │ AVG_PERF    │
├────────────────────────┼─────────────┤
│ Coal                   │ False       │
├────────────────────────┼─────────────┤
│ Pesticides             │ False       │
├────────────────────────┼─────────────┤
│ Adult                  │ False       │
├────────────────────────┼─────────────┤
│ Percentile             │ 55.73       │
├────────────────────────┼─────────────┤
│ Peer group             │ Automobiles │
├────────────────────────┼─────────────┤
│ Small arms             │ False       │
├────────────────────────┼─────────────┤
│ Environment score      │ 2.78        │
├────────────────────────┼─────────────┤
│ Governance percentile  │ None        │
├────────────────────────┼─────────────┤
│ Military contract      │ False       │
└────────────────────────┴─────────────┘
```
---
