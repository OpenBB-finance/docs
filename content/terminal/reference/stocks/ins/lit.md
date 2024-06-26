---
title: lit
description: This Docusaurus page provides access to the latest insider trading information.
  With the lit function, users can limit the number of data rows to display and view
  pertinent details like trade date, ticker, company name, insider name, title, trade
  type, price, qty, owned, diff own and value.
keywords:
- Insider trading
- OpenInsider
- lit function
- data rows
- trade date
- company name
- insider name
- title
- trade type
- price
- qty
- owned
- diff own
- value
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ins/lit - Reference | OpenBB Terminal Docs" />

Print latest insider trading. [Source: OpenInsider]

### Usage

```python
lit [-l LIMIT]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Limit of datarows to display | 10 | True | None |


---

## Examples

```python
2022 Feb 16, 07:58 (🦋) /stocks/ins/ $ lit
                                                                                Insider Data
┏━━━━┳━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━━━┳━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━┳━━━━━━━━━━┳━━━━━━━━━━━━━━┓
┃ X  ┃ Filing Date ┃ Trade Date ┃ Ticker ┃ Company Name      ┃ Insider Name         ┃ Title      ┃ Trade Type   ┃ Price  ┃ Qty        ┃ Owned     ┃ Diff Own ┃ Value        ┃
┡━━━━╇━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━━━╇━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━╇━━━━━━━━━━╇━━━━━━━━━━━━━━┩
│ M  │ 2022-02-16  │ 2022-02-09 │ ZIVO   │ Zivo Bioscience,  │ Maggiore Christopher │ Dir, 10%   │ P - Purchase │ $3.72  │ +91,334    │ 803,105   │ +13%     │ +$340,098    │
│    │ 06:02:09    │            │        │ Inc.              │ D.                   │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ RSVR   │ Reservoir Media,  │ Richmond Hill        │ May be     │ P - Purchase │ $6.75  │ +136,364   │ 136,364   │ New      │ +$920,717    │
│    │ 21:57:01    │            │        │ Inc.              │ Investments, LLC     │ deemed a   │              │        │            │           │          │              │
│    │             │            │        │                   │                      │ 10% owner  │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ RSVR   │ Reservoir Media,  │ Richmond Hill        │ May be     │ P - Purchase │ $6.75  │ +58,441    │ 58,441    │ New      │ +$394,588    │
│    │ 21:56:17    │            │        │ Inc.              │ Capital Partners, LP │ deemed a   │              │        │            │           │          │              │
│    │             │            │        │                   │                      │ 10% owner  │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ KNTE   │ Kinnate Biopharma │ Gordon Carl L        │ Dir        │ P - Purchase │ $10.17 │ +195,700   │ 4,043,629 │ +5%      │ +$1,989,446  │
│    │ 21:51:12    │            │        │ Inc.              │                      │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ M  │ 2022-02-15  │ 2022-02-11 │ KNTE   │ Kinnate Biopharma │ Orbimed Advisors LLC │ Dir        │ P - Purchase │ $10.17 │ +195,700   │ 4,043,629 │ +5%      │ +$1,989,446  │
│    │ 21:42:44    │            │        │ Inc.              │                      │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ DM │ 2022-02-15  │ 2022-02-14 │ RSVR   │ Reservoir Media,  │ Cook Stephen M.      │ Dir        │ P - Purchase │ $7.29  │ +41,510    │ 1,057,171 │ +4%      │ +$302,565    │
│    │ 21:32:18    │            │        │ Inc.              │                      │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ D  │ 2022-02-15  │ 2022-02-14 │ BVS    │ Bioventus Inc.    │ D'Adamio Anthony     │ SVP, GC    │ S - Sale+OE  │ $11.99 │ -1,294     │ 18,672    │ -6%      │ -$15,513     │
│    │ 21:31:03    │            │        │                   │                      │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ DM │ 2022-02-15  │ 2022-02-11 │ AREN   │ Arena Group       │ B. Riley Financial,  │ 10%        │ P - Purchase │ $8.26  │ +1,977,982 │ 5,411,514 │ +58%     │ +$16,329,921 │
│    │ 21:30:53    │            │        │ Holdings, Inc.    │ Inc.                 │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ D  │ 2022-02-15  │ 2022-02-14 │ BVS    │ Bioventus Inc.    │ Anglum Gregory O.    │ SVP, CFO   │ S - Sale+OE  │ $11.99 │ -1,294     │ 55,013    │ -2%      │ -$15,518     │
│    │ 21:27:43    │            │        │                   │                      │            │              │        │            │           │          │              │
├────┼─────────────┼────────────┼────────┼───────────────────┼──────────────────────┼────────────┼──────────────┼────────┼────────────┼───────────┼──────────┼──────────────┤
│ D  │ 2022-02-15  │ 2022-02-14 │ BVS    │ Bioventus Inc.    │ Nosenzo John         │ Chief      │ S - Sale+OE  │ $11.99 │ -534       │ 43,370    │ -1%      │ -$6,401      │
│    │ 21:17:44    │            │        │                   │                      │ Commercial │              │        │            │           │          │              │
│    │             │            │        │                   │                      │ Officer    │              │        │            │           │          │              │
└────┴─────────────┴────────────┴────────┴───────────────────┴──────────────────────┴────────────┴──────────────┴────────┴────────────┴───────────┴──────────┴──────────────┘
D: Derivative transaction in filing (usually option exercise)
M: Multiple transactions in filing; earliest reported transaction date & weighted average transaction price
```
---
