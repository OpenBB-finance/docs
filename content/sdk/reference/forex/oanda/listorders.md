---
title: listorders
description: Detailed documentation page explaining how to request the orders list
  from Oanda using OpenBB's terminal. It covers both Model and Chart methods, each
  with separate tabs explaining the parameters needed.
keywords:
- Oanda
- orders list
- Forex
- API documentation
- order_state
- order_count
- accountID
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="forex.oanda.listorders - Reference | OpenBB SDK Docs" />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="model" label="Model" default>

Request the orders list from Oanda.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_model.py#L225)]

```python
openbb.forex.oanda.listorders(order_state: str = "PENDING", order_count: int = 0, accountID: str = "REPLACE_ME")
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| order_state | str | Filter orders by a specific state ("PENDING", "CANCELLED", etc.) | PENDING | True |
| order_count | int | Limit the number of orders to retrieve | 0 | True |
| accountID | str | Oanda account ID, by default cfg.OANDA_ACCOUNT | REPLACE_ME | True |


---

## Returns

This function does not return anything

---

</TabItem>
<TabItem value="view" label="Chart">

List order history.

Source Code: [[link](https://github.com/OpenBB-finance/OpenBBTerminal/tree/main/openbb_terminal/forex/oanda/oanda_view.py#L153)]

```python
openbb.forex.oanda.listorders_chart(accountID: str, order_state: str = "PENDING", order_count: int = 0)
```

---

## Parameters

| Name | Type | Description | Default | Optional |
| ---- | ---- | ----------- | ------- | -------- |
| accountID | str | Oanda user account ID | None | False |
| order_state | str | Filter orders by a specific state ("PENDING", "CANCELLED", etc.) | PENDING | True |
| order_count | int | Limit the number of orders to retrieve | 0 | True |


---

## Returns

This function does not return anything

---

</TabItem>
</Tabs>
