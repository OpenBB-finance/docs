---
title: cusum
description: This page provides a detailed explanation on the usage, parameters and
  functionality of the Cumulative Sum Algorithm (CUSUM) used for detecting abrupt
  changes in data.
keywords:
- cusum
- cumulative sum algorithm
- data change detection
- threshold
- drift
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="economy/qa/cusum - Reference | OpenBB Terminal Docs" />

Cumulative sum algorithm (CUSUM) to detect abrupt changes in data

### Usage

```python
cusum [-t THRESHOLD] [-d DRIFT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| threshold | threshold | 0.007999992370605469 | True | None |
| drift | drift | 0.0039999961853027345 | True | None |

![cusum](https://user-images.githubusercontent.com/46355364/154306207-d68f53f4-2f9a-4c1a-8e0e-b83d49938759.png)

---
