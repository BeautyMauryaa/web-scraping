# Web Scraping with Python

A collection of small Python experiments for learning how to fetch webpages, parse HTML, select page elements, extract JavaScript-related content, download images, and save extracted data as CSV or JSON.

This repository is a learning collection rather than one single scraper. Some scripts target specific public pages and may need updates as those websites change.

## Examples in this repository

- `firstscraping.py` — extracts quotes from Quotes to Scrape
- `basicscrapin.py` — fetches and prints formatted HTML
- `extractelement.py` — uses Selenium to inspect and search a page
- `downloadingimages.py` / `extractingimages.py` — experiments with image extraction
- `convertcsvtojson.py` — converts `bbc_headlines.csv` to `bbc_headlines.json`
- `bbc_headlines.csv` and `bbc_headlines.json` — example output data

Other scripts cover selectors, links, page source, and specific JavaScript-driven content.

## Tech stack

- Python 3
- Requests
- Beautiful Soup
- pandas (for CSV/JSON data conversion)
- Selenium and webdriver-manager (for browser automation examples)

## Setup

Create and activate a virtual environment:

```bash
python -m venv .venv
```

**Windows PowerShell**
```powershell
.\.venv\Scripts\Activate.ps1
```

**macOS / Linux**
```bash
source .venv/bin/activate
```

Install the dependencies:

```bash
pip install -r requirements.txt
```

Run one script at a time from the repository root. For example:

```bash
python firstscraping.py
python basicscrapin.py
python convertcsvtojson.py
```

Some scripts use Selenium and may open a browser. Website structure can change, so a script may need selectors or URL updates to work.

## Responsible use

- Check a website's terms, robots.txt, and access policies before collecting data.
- Prefer public pages and low request rates; do not bypass logins, access controls, CAPTCHAs, or paywalls.
- Avoid collecting personal or sensitive information.
- Use appropriate timeouts and error handling when adapting these examples.

## Status

These are educational examples. Not every script is a generalized or production-ready scraper; inspect the target URL and code before running.

## Author

**Beauty Mauryaa** · [GitHub](https://github.com/BeautyMauryaa)
