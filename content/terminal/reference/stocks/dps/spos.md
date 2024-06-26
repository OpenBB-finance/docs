---
title: spos
description: An informative page that demonstrates the usage of the 'spos' command,
  exhibiting Net Short Vol. vs Position. It includes instructions on how to use the
  command, its parameters, and an illustrative image.
keywords:
- spos command
- Net Short Vol vs Position
- command usage
- parameters
- trading commands
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/dps/spos - Reference | OpenBB Terminal Docs" />

Shows Net Short Vol. vs Position. [Source: Stockgrid]

### Usage

```python
spos [-n NUM] [-r]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| num | Number of last open market days to show | 120 | True | None |
| raw | Flag to print raw data instead | False | True | None |

![spos](https://user-images.githubusercontent.com/46355364/154101511-fd2d65e9-69a6-46f3-aa78-77c032c6900d.png)

---
