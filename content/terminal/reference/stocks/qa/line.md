---
title: line
description: Learn how to create a line plot of selected data with the option to highlight
  specific datetimes using vertical line markers and scatter markers. You can also
  plot with y on the log scale.
keywords:
- line plot
- data visualization
- plotting data
- scatter markers
- vertical line markers
- log scale
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/qa/line - Reference | OpenBB Terminal Docs" />

Show line plot of selected data or highlight specific datetimes.

### Usage

```python
line [--log] [--ml ML] [--ms MS]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| log | Plot with y on log scale | False | True | None |
| ml | Draw vertical line markers to highlight certain events |  | True | None |
| ms | Draw scatter markers to highlight certain events |  | True | None |

![line](https://user-images.githubusercontent.com/46355364/154307397-9c2e9325-bce6-494d-994f-a6d7db798798.png)

---
