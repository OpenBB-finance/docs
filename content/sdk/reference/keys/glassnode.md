---
title: glassnode
description: This documentation page provides a detailed guide on how to set the Glassnode
  API key using the openbb.keys.glassnode method in the OpenBB Python library. It
  includes a breakdown of parameters, return values, and a code example for easy comprehension.
keywords:
- Glassnode
- API key
- Environment variable
- Jupyter notebook
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="keys.glassnode - Reference | OpenBB SDK Docs" />

Set Glassnode key.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1780)]

```python
openbb.keys.glassnode(key: str, persist: bool = False, show_output: bool = False)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| persist | bool | If False, api key change will be contained to where it was changed. For example, a Jupyter notebook session.<br/>If True, api key change will be global, i.e. it will affect terminal environment variables.<br/>By default, False. | False | True |
| show_output | bool | Display status string or not. By default, False. | False | True |


---

## Returns

| Type | Description |
| ---- | ----------- |
| str | Status of key set |
---

## Examples

```python
from openbb_terminal.sdk import openbb
openbb.keys.glassnode(key="example_key")
```

---
