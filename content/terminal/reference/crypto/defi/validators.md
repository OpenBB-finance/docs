---
title: validators
description: The 'validators' documentation page provides detailed insights into Terra
  validators, including how to sort and display data related to each validator. The
  information includes Validator Name, Tokens Amount, Voting Power, Commission Rate,
  Status, and Uptime.
keywords:
- validators
- Terra validators
- crypto
- tokens amount
- voting power
- commission rate
- validator status
- uptime
- Terra
- Defi
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="crypto/defi/validators - Reference | OpenBB Terminal Docs" />

Displays information about terra validators. [Source: https://fcd.terra.dev/swagger]

### Usage

```python
validators [-l LIMIT] [-s {validatorName,tokensAmount,votingPower,commissionRate,status,uptime}] [-r]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number of validators to show | 10 | True | None |
| sortby | Sort by given column. Default: votingPower | votingPower | True | validatorName, tokensAmount, votingPower, commissionRate, status, uptime |
| reverse | Data is sorted in descending order by default. Reverse flag will sort it in an ascending way. Only works when raw data is displayed. | False | True | None |


---

## Examples

```python
2022 Feb 15, 06:36 (🦋) /crypto/defi/ $ validators
┌──────────────────────────────────────────────┬─────────────────────┬───────────────┬────────────────┬───────────────────┬────────┬──────────┐
│ Account address                              │ Validator name      │ Tokens amount │ Voting power % │ Commission rate % │ Status │ Uptime % │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra1259cmu5zyklsdkmgstxhwqpe0utfe5hhyygjdc │ Orion.Money         │ 21.9M         │ 7.20           │ 5.00              │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra15zcjduavxc5mkp8qcqs9eyhwlqwdlrzy6anwpg │ B-Harvest           │ 17.9M         │ 5.88           │ 5.00              │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra123gn6j23lmexu0qx5qhmgxgunmjcqsx8g5ueq2 │ Staking Fund        │ 15.7M         │ 5.17           │ 10.00             │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra1v5hrqlv8dqgzvy0pwzqzg0gxy899rm4kdn0jp4 │ DokiaCapital        │ 10.3M         │ 3.38           │ 5.00              │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra1kprce6kc08a6l03gzzh99hfpazfjeczfpd6td0 │ Certus One          │ 9M            │ 2.96           │ 10.00             │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra1p54hc4yy2ajg67j645dn73w3378j6k05v52cnk │ hashed              │ 7.7M          │ 2.53           │ 10.00             │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra1va2ew92dtkhffduswr83elf3nfvl4xg48rguwl │ NOD Games           │ 7.4M          │ 2.44           │ 0.00              │ active │ 99.99    │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra175hhkyxmkp8hf2zrzka7cnn7lk6mudtv4nsp2x │ DSRV - CHAISCAN.com │ 6.7M          │ 2.22           │ 10.00             │ active │ 100.00   │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra162892yn0tf8dxl8ghgneqykyr8ufrwmcs6vft5 │ Luna Maximalists    │ 6.5M          │ 2.14           │ 20.00             │ active │ 99.98    │
├──────────────────────────────────────────────┼─────────────────────┼───────────────┼────────────────┼───────────────────┼────────┼──────────┤
│ terra1h6rf7y2ar5vz64q8rchz5443s3tqnswrpxe69f │ Staked              │ 6.3M          │ 2.08           │ 10.00             │ active │ 100.00   │
└──────────────────────────────────────────────┴─────────────────────┴───────────────┴────────────────┴───────────────────┴────────┴──────────┘
```
---
