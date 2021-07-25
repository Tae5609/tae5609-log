## Tae5609 Log

Lightweight date with time logger for Node.js.

Dependencies:
[chalk](https://www.npmjs.com/package/cahlk)

## Installing Module

`npm i tae5609-log`

## Example
```
const tae5609log = require("tae5609-log");
tae5606log.setNormalColor("#78c7ff");
tae5606log.setErrorColor("#ff7878");
tae5606log.setWarnColor("#fffb78");

console.log(tae5609log.normal('<msg to log>'));
console.log(tae5609log.error('<error / issue>'));
console.log(tae5609log.warn('<warning>'));
```

## Method
setNormalColor(hex_color) : Set normal log color

setErrorColor(hex_color) : Set error log color

setWarnColor() : Set warn log color