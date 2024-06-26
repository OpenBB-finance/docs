---
title: ef
description: Detailed instructions on using the 'ef' function in portfolio optimization.
  This function plots random portfolios based on their risk and returns, providing
  visualization of the efficient frontier. It includes parameters for risk measures,
  nan filling methods, financial dataset periods, return calculations, and outlier
  handling.
keywords:
- ef function
- portfolio risk and return
- efficient frontier
- portfolio optimization
- risk measures
- random portfolios
- CVaR
- EVaR
- Maximum Drawdown
- Mean Absolute Deviation
- nan_fill_method
- financial dataset
- yfinance data
- risk-free rate
- logarithmic returns
- return frequency
- outlier threshold
- simulation parameters
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="portfolio/po/ef - Reference | OpenBB Terminal Docs" />

This function plots random portfolios based on their risk and returns and shows the efficient frontier.

### Usage

```python
ef [-vs SHORT_ALLOCATION] [-n AMOUNT_PORTFOLIOS] [-se RANDOM_SEED] [-t] [--no_plot] [-rm {MV,MAD,MSV,FLPM,SLPM,CVaR,EVaR,WR,ADD,UCI,CDaR,EDaR,MDD}] [-mt METHOD] [-p PERIOD] [-s START_PERIOD] [-e END_PERIOD] [-lr] [--freq {d,w,m}] [-mn MAX_NAN] [-th THRESHOLD_VALUE] [-r RISK_FREE] [-a SIGNIFICANCE_LEVEL] [-v LONG_ALLOCATION]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| short_allocation | Amount to allocate to portfolio in short positions | 0.0 | True | None |
| amount_portfolios | Number of portfolios to simulate | 100 | True | None |
| random_seed | Seed used to generate random portfolios | 123 | True | None |
| tangency | Adds the optimal line with the risk-free asset | False | True | None |
| plot_tickers | Whether or not to plot the tickers for the assets provided | True | True | None |
| risk_measure | Risk measure used to optimize the portfolio. Possible values are: 'MV' : Variance 'MAD' : Mean Absolute Deviation 'MSV' : Semi Variance (Variance of negative returns) 'FLPM' : First Lower Partial Moment 'SLPM' : Second Lower Partial Moment 'CVaR' : Conditional Value at Risk 'EVaR' : Entropic Value at Risk 'WR' : Worst Realization 'ADD' : Average Drawdown of uncompounded returns 'UCI' : Ulcer Index of uncompounded returns 'CDaR' : Conditional Drawdown at Risk of uncompounded returns 'EDaR' : Entropic Drawdown at Risk of uncompounded returns 'MDD' : Maximum Drawdown of uncompounded returns | MV | True | MV, MAD, MSV, FLPM, SLPM, CVaR, EVaR, WR, ADD, UCI, CDaR, EDaR, MDD |
| nan_fill_method | Method used to fill nan values in time series, by default time. Possible values are: 'linear': linear interpolation 'time': linear interpolation based on time index 'nearest': use nearest value to replace nan values 'zero': spline of zeroth order 'slinear': spline of first order 'quadratic': spline of second order 'cubic': spline of third order 'barycentric': builds a polynomial that pass for all points | time | True | linear, time, nearest, zero, slinear, quadratic, cubic, barycentric |
| historic_period | Period to get yfinance data from. Possible frequency strings are: 'd': means days, for example '252d' means 252 days 'w': means weeks, for example '52w' means 52 weeks 'mo': means months, for example '12mo' means 12 months 'y': means years, for example '1y' means 1 year 'ytd': downloads data from beginning of year to today 'max': downloads all data available for each asset | 3y | True | 1d, 5d, 1mo, 3mo, 6mo, 1y, 2y, 5y, 10y, ytd, max |
| start_period | Start date to get yfinance data from. Must be in 'YYYY-MM-DD' format |  | True | None |
| end_period | End date to get yfinance data from. Must be in 'YYYY-MM-DD' format |  | True | None |
| log_returns | If use logarithmic or arithmetic returns to calculate returns | False | True | None |
| return_frequency | Frequency used to calculate returns. Possible values are: 'd': for daily returns 'w': for weekly returns 'm': for monthly returns | d | True | d, w, m |
| max_nan | Max percentage of nan values accepted per asset to be considered in the optimization process | 0.05 | True | None |
| threshold_value | Value used to replace outliers that are higher to threshold in absolute value | 0.3 | True | None |
| risk_free | Risk-free rate of borrowing/lending. The period of the risk-free rate must be annual | 0.02924 | True | None |
| significance_level | Significance level of CVaR, EVaR, CDaR and EDaR | 0.05 | True | None |
| long_allocation | Amount to allocate to portfolio | 1 | True | None |


---

## Examples

```python
2022 Apr 05, 15:03 (🦋) /portfolio/po/ $ ef
```
![Frontier](https://user-images.githubusercontent.com/61527316/161860003-e8b8ae93-ce8c-4e06-bad2-59c100f09325.png)

---
