# Number to Words Converter | APIVerve API Tutorial

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build](https://img.shields.io/badge/Build-Passing-brightgreen.svg)]()
[![HTML](https://img.shields.io/badge/HTML-5-e34c26)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-f7df1e)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![APIVerve | Number to Words](https://img.shields.io/badge/APIVerve-Number_to_Words-purple)](https://apiverve.com/marketplace/numbertowords?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial)

A simple web app that converts numbers to their written word form. Supports decimals, ordinals, and provides detailed digit information.

![Screenshot](https://raw.githubusercontent.com/apiverve/number-to-words-html-tutorial/main/screenshot.jpg)

---

### Get Your Free API Key

This tutorial requires an APIVerve API key. **[Sign up free](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial)** - no credit card required.

---

## Features

- Convert any number to words
- Supports decimal numbers
- Shows ordinal form (first, second, etc.)
- Digit breakdown
- Beautiful purple gradient theme
- No build tools required
- Single HTML file

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/apiverve/number-to-words-html-tutorial.git
   cd number-to-words-html-tutorial
   ```

2. **Add your API key**

   Open `index.html` and find this line:
   ```javascript
   const API_KEY = 'your-api-key-here';
   ```
   Replace with your actual API key.

3. **Open in browser**

   Double-click `index.html` or serve it with any web server:
   ```bash
   npx serve .
   ```

## Project Structure

```
number-to-words-html-tutorial/
├── index.html          # Complete app (HTML + CSS + JS)
├── screenshot.jpg      # Preview image
├── LICENSE             # MIT license
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

## How It Works

1. User enters a number
2. JavaScript calls the API directly
3. API returns number in words plus extras
4. Display all conversion data

### The API Call

```javascript
const response = await fetch(`https://api.apiverve.com/v1/numbertowords?number=975.07`, {
  method: 'GET',
  headers: {
    'x-api-key': API_KEY
  }
});
```

## API Reference

**Endpoint:** `GET https://api.apiverve.com/v1/numbertowords`

**Query Parameters:**

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `number` | number | Yes | The number to convert |

**Example Response:**

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "number": 975.07,
    "words": "nine hundred seventy-five point zero seven",
    "ordinal": "nine hundred seventy-fifth point zero seven",
    "numberOfDigits_numeric": 3,
    "numberOfDigits_words": "three",
    "eachNumber": [
      "nine",
      "seven",
      "five"
    ],
    "afterDecimal": {
      "number": "07",
      "words": [
        "zero",
        "seven"
      ],
      "numberOfDigits_numeric": 2,
      "numberOfDigits_words": "two"
    },
    "locale": "en-US"
  }
}
```

## Response Fields

| Field | Description |
|-------|-------------|
| `words` | Full number in words |
| `ordinal` | Ordinal form (e.g., "first", "forty-second") |
| `numberOfDigits_numeric` | Count of digits as number |
| `numberOfDigits_words` | Count of digits in words |
| `eachNumber` | Array of each digit in words |
| `afterDecimal` | Decimal portion details (if applicable) |
| `locale` | Language locale used |

## Example Conversions

| Number | Words |
|--------|-------|
| 42 | forty-two |
| 1000000 | one million |
| 3.14159 | three point one four one five nine |
| 2025 | two thousand twenty-five |
| 1st | first |

## Customization Ideas

- Add copy to clipboard
- Support multiple languages
- Currency formatting
- Check writing helper
- Text-to-speech output
- Batch conversions

## Related APIs

Explore more APIs at [APIVerve](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial):

- [Words to Numbers](https://apiverve.com/marketplace/wordstonumbers?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial) - Reverse conversion
- [Roman Numeral Converter](https://apiverve.com/marketplace/romannumeralconverter?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial) - Convert to Roman numerals
- [Currency Converter](https://apiverve.com/marketplace/currencyconverter?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial) - Convert currencies

## License

MIT - see [LICENSE](LICENSE)

## Links

- [Get API Key](https://dashboard.apiverve.com?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial) - Sign up free
- [APIVerve Marketplace](https://apiverve.com/marketplace?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial) - Browse 300+ APIs
- [Number to Words API](https://apiverve.com/marketplace/numbertowords?utm_source=github&utm_medium=tutorial&utm_campaign=number-to-words-html-tutorial) - API details
