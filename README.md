# nano-throttle

Minimal throttle function with trailing call support. 
102 bytes (minified and gzipped)
[Size Limit] controls the size

[Size Limit]:   https://github.com/ai/size-limit

## Install

```sh
npm install nano-throttle --save
```

## Usage

```js
import throttle from 'nano-throttle';

throttle(callback, ms);
throttle(callback, ms, false); // without trailing call

```
