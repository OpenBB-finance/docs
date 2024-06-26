---
title: twitter
description: This page explains how to set a Twitter API key in OpenBB Terminal, including
  a detailed explanation of parameters and example code. Learn how to use OpenBB to
  interact with Twitter's API.
keywords:
- Twitter API
- API key
- Coding examples
- Jupyter notebook
- openbb keys twitter
- Environment variables
- API secret
- API token
- persist
- show_output
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="keys.twitter - Reference | OpenBB SDK Docs" />

Set Twitter key

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/keys_model.py#L1132)]

```python
openbb.keys.twitter(key: str, secret: str, access_token: str, persist: bool = False, show_output: bool = False)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| key | str | API key | None | False |
| secret | str | API secret | None | False |
| access_token | str | API token | None | False |
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
openbb.keys.twitter(
```

```
key="example_key",
        secret="example_secret",
        access_token="example_access_token"
    )
```
---
