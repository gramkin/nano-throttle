# nano-throttle

Minimal throttle function with trailing call support. 
87 bytes (minified and gzipped)
[Size Limit] controls the size

[Size Limit]:   https://github.com/ai/size-limit

## Install

```sh
npm install nano-throttle --save
```

## Usage

```js
import throttle from 'nano-throttle';

throttle(milliseconds, callback);
throttle(milliseconds, callback, false); // without trailing call

```
