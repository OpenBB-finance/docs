---
title: redditsent
description: Discover how to use the redditsent function to perform sentiment analysis
  on Reddit about a specific ticker or company. Learn to adjust search parameters
  like sorting type, subreddits, post limit, time period, and more for a comprehensive
  Reddit search.
keywords:
- redditsent
- sentiment analysis
- Reddit
- search sorting
- company search
- subreddits
- posts limit
- time period
- full search
- graphic display
- table of sentiment values
---

import HeadTitle from '@site/src/components/General/HeadTitle.tsx';

<HeadTitle title="stocks/ba/redditsent - Reference | OpenBB Terminal Docs" />

Determine general Reddit sentiment about a ticker. [Source: Reddit]

### Usage

```python
redditsent [-s {relevance,hot,top,new,comments}] [-c COMPANY] [--subreddits SUBREDDITS] [-l LIMIT] [-t {hour,day,week,month,year,all}] [--full] [-g] [-d]
```

---

## Parameters

| Name | Description | Default | Optional | Choices |
| ---- | ----------- | ------- | -------- | ------- |
| sort | search sorting type | relevance | True | relevance, hot, top, new, comments |
| company | explicit name of company to search for, will override ticker symbol | None | True | None |
| subreddits | comma-separated list of subreddits to search | all | True | None |
| limit | how many posts to gather from each subreddit | 10 | True | None |
| time | time period to get posts from -- all, year, month, week, or day; defaults to week | week | True | hour, day, week, month, year, all |
| full_search | enable comprehensive search | False | True | None |
| graphic | display graphic | True | True | None |
| display | Print table of sentiment values | False | True | None |


---

## Examples

```python
txt
redditsent -c Google --subreddits tech,stocks --full
Searching through subreddits for posts.
100%|█████████████████████████████████████████████████████████████████████████| 2/2 [00:0100:00,  1.84it/s]
Analyzing each post...
100%|███████████████████████████████████████████████████████████████████████| 10/10 [00:0400:00,  2.07it/s]
Sentiment Analysis for Google is 0.7552
```
---
