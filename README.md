# throttle-debounce

Minimal Throttle function.

## Install

```sh
npm install tiny-throttle --save
```

## Usage

```js
import throttle from 'tiny-throttle';

throttle(200, callback);
throttle(200, callback, false); // without trailing call

```
