````markdown
# ID Generator Module

A simple, flexible JavaScript module to generate unique IDs with customizable length, character set, and optional prefix.

---

## Features

- Generate random IDs of any length  
- Use custom character sets (e.g., alphanumeric, numeric-only, hex, etc.)  
- Add optional prefixes to IDs for better organization or identification  
- Lightweight and dependency-free  
- Written as an ES module for modern JavaScript environments  

---

## Installation

Simply copy the `idGenerator.js` file into your project or import it directly if hosted.

---

## Usage

### Import the module

```js
import { generateId } from "./idGenerator.js";
````

### Generate IDs with default parameters

```js
generateId();  
// Example output: "aZ8pQ9"
```

### Generate an ID with custom length

```js
generateId(8);  
// Example output: "Rk2xQ1Bv"
```

### Generate an ID with custom characters

```js
generateId(8, "1234567890");  
// Example output: "59273018"
```

### Generate an ID with prefix

```js
generateId(8, "1234567890", "Demo_");  
// Example output: "Demo_59273018"
```

### Generate with default length and prefix

```js
generateId(undefined, undefined, "Demo_");  
// Example output: "Demo_aZ8pQ9"
```

---

## API

### `generateId(length = 6, chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", prefix = "")`

| Parameter | Type   | Description                         | Default                                                            |
| --------- | ------ | ----------------------------------- | ------------------------------------------------------------------ |
| length    | Number | Length of the generated ID          | `6`                                                                |
| chars     | String | Characters to use for ID generation | `"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"` |
| prefix    | String | String to prepend before the ID     | `""` (empty string — no prefix)                                    |

**Returns:** A string containing the generated unique ID.

---

## Notes

* If you pass `undefined` to any parameter, the function uses its default value.
* The character set should not be empty; otherwise, the generated ID will be an empty string.
* This module is intended for generating simple unique IDs for UI elements, tokens, or non-cryptographic use cases.

---

## License

MIT License — free to use and modify.

---

## Author

Mohammad Amin
[GitHub](https://github.com/mohamad-slime)

---
````