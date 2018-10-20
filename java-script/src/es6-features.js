const args = process.argv.slice(2);

const log = (...e) => console.log(...e);
const divider = (e) => log(`--- ${e} ---`);
const showOne = args[0] !== 'all';

divider('ES6 jk-sandbox');

const parts = {
  1: '[1] Block-Scoped Functions',
  2: '[2] Arrow Functions and default values',
  3: '[3] Rest and Spread',
  4: '[4] Template Literals',
  5: '[5] Binary & Octal Literals',
};


switch (args[0]) {
  case 'all': log('Running all');
  case '1': divider(parts[1]); // ----------------------------------- Block-Scoped Functions
    {
      function foo () { return 1 }
      log(foo() === 1);
      {
        function foo () { return 2 }
        log(foo() === 2);
      }
      log(foo() === 1);
    }

    if (showOne) { break; }
  case '2': divider(parts[2]); // ----------------------------------- Arrow Functions
    const arrowFunction = (value = 2) => value * value;
    log(arrowFunction());
    log(arrowFunction(3));

    if (showOne) { break; }
  case '3': divider(parts[3]); // ----------------------------------- Parameters
    function f (x, y, ...a) {
      log(x, y, a);
      log([x, y, ...a]);
    }
    f(1, 2, "hello", true, 7);

    if (showOne) { break; }
  case '4': divider(parts[4]); // ----------------------------------- Template Literals
    const stringInterpolation = `This is ${4} inserting values ${12}`;
    const myTag = (strings, ...values) => {
      log(strings);
      log(values);
    };
    myTag`Testing ${12} my tag ${'value2'}${null}`;

    if (showOne) { break; }

  case '5': divider(parts[5]); // ----------------------------------- Binary & Octal Literals
    log(0b111110111 === parseInt("111110111", 2));
    log(0o767 === parseInt("767", 8));

    if (showOne) { break; }
  default:
    console.log('Missing correct option, start with \'all\' or \'[Number]\'');
    break;
}
