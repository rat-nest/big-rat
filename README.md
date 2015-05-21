big-rat
=======
Arbitrary precision rational number arithmetic

# Example


#### Program

```javascript
var rat = require('big-rat')

//Construct a pair of rational numbers;
//   a = 1/10
//   b = 2/10
var a = rat(1, 10)
var b = rat(2, 10)

//Compute their sum
var add = require('big-rat/add')
var c = add(a, b)

//Print out sum
var toString = require('big-rat/to-string')
console.log('a+b=', toString(c))

//And also convert to a number
var toFloat = require('big-rat/to-float')
console.log('exact rational result:', toFloat(c))

//For comparison, here is the same computation performed with floats
var x = 0.1
var y = 0.2
console.log('approximate float result:', x + y)
```

#### Output

```
a+b= 3/10
exact rational result: 0.3
approximate float result: 0.30000000000000004
```

# Install

```
npm i big-rat
```

# API

#### `var r = require('big-rat')(n[, d])`
Constructs a rational number as the quotient n/d

* `n` is the numerator.  Can be a float, string, bignum or rational
* `d` is the denominator (optional, default `1`)

**Returns** A rational number

#### `var f = require('big-rat/to-float')(r)`
Rounds a rational number to the closest representable float

* `r` is a big rat

**Returns** The closest floating point number to `r`

#### `var s = require('big-rat/to-string')(r)`
Converts a big rat into a string

* `r` is a big rat

**Returns** A string representing `r`

#### `var b = require('big-rat/is-rat')(r)`
Test if an object is a big-rat

* `r` is any variable

**Returns** `true` if `r` is a big rat

#### `var c = require('big-rat/add')(a, b)`

#### `var c = require('big-rat/sub')(a, b)`

#### `var c = require('big-rat/mul')(a, b)`

#### `var c = require('big-rat/div')(a, b)`

#### `var c = require('big-rat/recip')(a)`

#### `var c = require('big-rat/min')(a, b)`

#### `var c = require('big-rat/max')(a, b)`

#### `var c = require('big-rat/equals')(a, b)`

#### `var c = require('big-rat/cmp')(a, b)`

# License

(c) 2015 MIT License
