import * as R from 'ramda'
import * as R_ from 'ramda-extension'


/**
 * Use R.__ in gt, gte, lt, lte
 * R: more practical and readable
 */
R.gt(R.__, 5)(1); // false
R.gt(R.__, 5)(10); // true
R.gt(5)(1); // true
R.gt(5)(10); // false

/**
 * Constants for examples
 */
const Special = {
  'FOO': 'foo',
  'BAR': 'bar',
};
const arrSimple = ['foo', 'bar', 'jan', 'feb', 'mar'];
const arrNumbers = [1, 34, 12, 67, -24, 128, 4, 0, 41];
const arrPersons = [
  { name: 'John', age: 23, sex: 'm' },
  { name: 'Hana', age: 35, sex: 'w' },
  { name: 'Steve', age: 15, sex: 'm' },
  { name: 'Adam', age: 55, sex: 'm' },
  { name: 'Eva', age: 18, sex: 'w' },
];

/**
 * Encode Input char or special character
 * @return number / alphabet / unknown / special
 */
const encodeInput = R.pipe(
  R.toUpper,
  R.cond([
    [R.contains(R.__, R.keys(Special)), R.prop(R.__, Special)],
    [R.test(/[0-9]/), R.always('number')],
    [R.test(/[A-Z]/), R.always('alphabet')],
    [R.T, R.always('unknown')],
  ])
);
encodeInput('foo'); // special
encodeInput('4'); // number
encodeInput('$'); // unknown

/**
 * nonNegative
 * @return true / false
 */
const nonNegative = R.clamp(0, Infinity);
nonNegative(1); // true
nonNegative(-1); // false

/**
 * Array examples
 */
const mapNames = R.map(R.prop('name'));
mapNames(arrPersons);

const findObjectByPropValue = (prop, value, arr) => R.find(R.propEq(prop, value), arr);
findObjectByPropValue('name', 'John', arrPersons);

const sortArray = R.sortWith([
  R.descend(R.prop('sex')),
  R.ascend(R.prop('age')),
]);
sortArray(arrPersons);

const sumValuesInObjectArray = R.o(
  R.reduce(add, 0),
  R.map(R.prop('age'))
);
sumValuesInObjectArray(arrPersons);

const sumValuesInObjectArrayWithCustomLogic = R.o(
  R.reduce(R.add, 0),
  R.map(R.converge(
    R.subtract,
    [R.prop('age'), (v) => R.length(R.prop('name', v))],
  )),
);
sumValuesInObjectArrayWithCustomLogic(arrPersons);
