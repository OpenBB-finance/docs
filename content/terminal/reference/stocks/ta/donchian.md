---
title: donchian
description: This page provides in-depth details on Donchian Channels - an indicator
  formed by upper and lower bands around a midrange or median band, and how to use
  it with parameters in python.
keywords:
- Donchian Channels
- moving average calculations
- security price
- upper band
- lower band
- midrange
- median band
- parameters
- n_length_upper
- n_length_lower
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ta/donchian - Reference | OpenBB Terminal Docs" />

Donchian Channels are three lines generated by moving average calculations that comprise an indicator formed by upper and lower bands around a midrange or median band. The upper band marks the highest price of a security over N periods while the lower band marks the lowest price of a security over N periods. The area between the upper and lower bands represents the Donchian Channel.

### Usage

```python
donchian [-u N_LENGTH_UPPER] [-l N_LENGTH_LOWER]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| n_length_upper | length | 20 | True | None |
| n_length_lower | length | 20 | True | None |

![donchian](https://user-images.githubusercontent.com/46355364/154310472-6cd5805f-b87f-4668-85a1-3e5dd7267848.png)

---
