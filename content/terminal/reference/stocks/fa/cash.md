---
title: cash
description: This documentation describes the 'cash' script which prints a complete
  cash flow statement over time. It covers features including options for quarterly
  or annual views, detailed financial factors such as accounts payable and net income,
  and usage of the command-line interface. The data source is mentioned as Alpha Vantage.
keywords:
- cash flow statement
- quarterly cash flow
- annual cash flow
- accounts payable
- accounts receivable
- net income
- operating cash flow
- investing activities
- financing activities
- Alpha Vantage source
- Stock financial analysis
- Command-line interface usage
- Docusaurus page metadata
- Parameter choices for cash script
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/fa/cash - Reference | OpenBB Terminal Docs" />

Prints a complete cash flow statement over time. This can be either quarterly or annually. The following fields are expected: Accepted date, Accounts payables, Accounts receivables, Acquisitions net, Capital expenditure, Cash at beginning of period, Cash at end of period, Change in working capital, Common stock issued, Common stock repurchased, Debt repayment, Deferred income tax, Depreciation and amortization, Dividends paid, Effect of forex changes on cash, Filling date, Final link, Free cash flow, Inventory, Investments in property plant and equipment, Link, Net cash provided by operating activities, Net cash used for investing activities, Net cash used provided by financing activities, Net change in cash, Net income, Operating cash flow, Other financing activities, Other investing activities, Other non cash items, Other working capital, Period, Purchases of investments, Sales maturities of investments, Stock based compensation. [Source: Alpha Vantage]

### Usage

```python
cash [-l LIMIT] [-q] [-r] [-p column]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| limit | Number of latest years/quarters. | 5 | True | None |
| b_quarter | Quarter fundamental data flag. | False | True | None |
| ratios | Shows percentage change of values. | False | True | None |
| plot | Rows to plot. (-1 represents invalid data) | None | True | net_income, depreciation_&_amortisation, deferred_income_taxes, stock-based_compensation, change_in working_capital, accounts_receivable, inventory, accounts_payable, other_working_capital, other_non-cash_items, net_cash_provided_by_operating_activities, investments_in_property_plant_and_equipment, acquisitions_net, purchases_of_investments, sales/maturities_of_investments, other_investing_activities, net_cash_used_for_investing_activities, debt_repayment, common_stock_issued, common_stock_repurchased, dividends_paid, other_financing_activities, net_cash_used_provided_by_(used_for)_financing_activities, net_change_in_cash, cash_at_beginning_of_period, cash_at_end_of_period, operating_cash_flow, capital_expenditure, free_cash_flow |


---

## Examples

```python
2022 Feb 16, 04:52 (🦋) /stocks/fa/ $ cash -l 4
                                                FB Balance Sheet
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃                                                           ┃ 2018-12-31 ┃ 2019-12-31 ┃ 2020-12-31 ┃ 2021-12-31 ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ reportedCurrency                                          │ USD        │ USD        │ USD        │ USD        │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ operatingCashflow                                         │ 29.274 B   │ 36.314 B   │ 38.747 B   │ 57.683 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForOperatingActivities                            │ 1 M        │ 914 M      │ 1.222 B    │ 1.421 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromOperatingActivities                           │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInOperatingLiabilities                              │ 1.057 B    │ 9.123 B    │ -1.312 B   │ 5.909 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInOperatingAssets                                   │ 2.741 B    │ 1.873 B    │ 1.411 B    │ 5.209 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ depreciationDepletionAndAmortization                      │ 4.315 B    │ 5.741 B    │ 6.862 B    │ 7.967 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ capitalExpenditures                                       │ 13.915 B   │ 15.102 B   │ 15.115 B   │ 18.567 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInReceivables                                       │ 1.892 B    │ 1.961 B    │ 1.512 B    │ 3.110 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInInventory                                         │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ profitLoss                                                │ 22.112 B   │ 18.485 B   │ 29.146 B   │ 39.370 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ cashflowFromInvestment                                    │ -11.603 B  │ -19.864 B  │ -30.059 B  │ -7.570 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ cashflowFromFinancing                                     │ -15.572 B  │ -7.299 B   │ -10.292 B  │ -50.728 B  │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromRepaymentsOfShortTermDebt                     │ 500 M      │ -223 M     │ 24 M       │ 14 M       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForRepurchaseOfCommonStock                        │ 12.879 B   │ 4.202 B    │ 6.272 B    │ 44.537 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForRepurchaseOfEquity                             │ 12.879 B   │ 4.202 B    │ 6.272 B    │ 44.537 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForRepurchaseOfPreferredStock                     │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ dividendPayout                                            │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ dividendPayoutCommonStock                                 │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ dividendPayoutPreferredStock                              │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromIssuanceOfCommonStock                         │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromIssuanceOfPreferredStock                      │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromRepurchaseOfEquity                            │ -12.879 B  │ -4.202 B   │ -6.272 B   │ -44.537 B  │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromSaleOfTreasuryStock                           │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInCashAndCashEquivalents                            │ 2.099 B    │ 9.151 B    │ -1.604 B   │ -615 M     │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInExchangeRate                                      │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ netIncome                                                 │ 22.112 B   │ 18.485 B   │ 29.146 B   │ 39.370 B   │
└───────────────────────────────────────────────────────────┴────────────┴────────────┴────────────┴────────────┘

2022 Feb 16, 04:52 (🦋) /stocks/fa/ $ cash -l 4 -q
                                                FB Balance Sheet
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┳━━━━━━━━━━━━┓
┃                                                           ┃ 2021-03-31 ┃ 2021-06-30 ┃ 2021-09-30 ┃ 2021-12-31 ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━╇━━━━━━━━━━━━┩
│ reportedCurrency                                          │ USD        │ USD        │ USD        │ USD        │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ operatingCashflow                                         │ 12.242 B   │ 13.247 B   │ 14.090 B   │ 18.104 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForOperatingActivities                            │ 333 M      │ 6.650 B    │ 1.987 B    │ -7.549 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromOperatingActivities                           │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInOperatingLiabilities                              │ -1.787 B   │ 1.513 B    │ 2.180 B    │ 4.003 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInOperatingAssets                                   │ -378 M     │ 3.403 B    │ 797 M      │ 1.387 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ depreciationDepletionAndAmortization                      │ 1.972 B    │ 1.986 B    │ 1.995 B    │ 2.014 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ capitalExpenditures                                       │ 4.272 B    │ 4.612 B    │ 4.314 B    │ 5.369 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInReceivables                                       │ -849 M     │ 1.366 B    │ 555 M      │ 2.038 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInInventory                                         │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ profitLoss                                                │ 9.497 B    │ 10.394 B   │ 9.194 B    │ 10.285 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ cashflowFromInvestment                                    │ -4.874 B   │ -8.195 B   │ -330 M     │ 5.829 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ cashflowFromFinancing                                     │ -5.185 B   │ -8.549 B   │ -15.252 B  │ -21.742 B  │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromRepaymentsOfShortTermDebt                     │ -50 M      │ 53 M       │ 12 M       │ -1 M       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForRepurchaseOfCommonStock                        │ 3.939 B    │ 7.079 B    │ 13.458 B   │ 20.061 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForRepurchaseOfEquity                             │ 3.939 B    │ 7.079 B    │ 13.458 B   │ 20.061 B   │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ paymentsForRepurchaseOfPreferredStock                     │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ dividendPayout                                            │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ dividendPayoutCommonStock                                 │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ dividendPayoutPreferredStock                              │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromIssuanceOfCommonStock                         │ 0          │ 0          │ 0          │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromIssuanceOfLongTermDebtAndCapitalSecuritiesNet │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromIssuanceOfPreferredStock                      │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromRepurchaseOfEquity                            │ -3.939 B   │ -7.079 B   │ -13.458 B  │ -20.061 B  │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ proceedsFromSaleOfTreasuryStock                           │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInCashAndCashEquivalents                            │ 2.183 B    │ 12.254 B   │ 11.064 B   │ 2.191 B    │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ changeInExchangeRate                                      │ None       │ None       │ None       │ None       │
├───────────────────────────────────────────────────────────┼────────────┼────────────┼────────────┼────────────┤
│ netIncome                                                 │ 9.497 B    │ 10.394 B   │ 9.194 B    │ 10.285 B   │
└───────────────────────────────────────────────────────────┴────────────┴────────────┴────────────┴────────────┘
```
---
