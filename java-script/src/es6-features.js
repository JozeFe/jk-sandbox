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
  6: '[6] Enhanced Object Properties',
  7: '[7] Destructuring Assignment',
  8: '[8] Classes',
  9: '[9] Symbol Type',
  10: '[10] Iterator & For-Of Operator',
};


switch (args[0]) {
  case 'all': log('Running all');
  case '1': divider(parts[1]); // ----------------------------------- Block-Scoped Functions
    {
      function foo () { return 1 }
      log(foo() === 1); // true
      {
        function foo () { return 2 }
        log(foo() === 2); // true
      }
      log(foo() === 1); // true
    }

    if (showOne) { break; }
  case '2': divider(parts[2]); // ----------------------------------- Arrow Functions
    {
      const arrowFunction = (value = 2) => value * value;
      log(arrowFunction()); // 4
      log(arrowFunction(3)); // 9
    }
    if (showOne) { break; }
  case '3': divider(parts[3]); // ----------------------------------- Parameters
    {
      function f (x, y, ...a) {
        log(x, y, a); // 1 2 [ 'hello', true, 7 ]
        log([x, y, ...a]); // [ 1, 2, 'hello', true, 7 ]
      }
      f(1, 2, "hello", true, 7);
    }
    if (showOne) { break; }
  case '4': divider(parts[4]); // ----------------------------------- Template Literals
    {
      const stringInterpolation = `This is ${4} inserting values ${12}`;
      const myTag = (strings, ...values) => {
        log(strings); // [ 'Testing ', ' my tag ', '', '' ]
        log(values); // [ 12, 'value2', null ]
      };
      myTag`Testing ${12} my tag ${'value2'}${null}`;
    }

    if (showOne) { break; }
  case '5': divider(parts[5]); // ----------------------------------- Binary & Octal Literals
    {
      log(0b111110111 === parseInt("111110111", 2)); // true
      log(0o767 === parseInt("767", 8)); // true
    }
    if (showOne) { break; }
  case '6': divider(parts[6]); // ----------------------------------- Enhanced Object Properties
    {
      const x = 0, y = 0;
      obj = {
        y: y,  // Old
        x,     // Property Shorthand
        [ "baz" + y ]: 'baz0 value',// Computed Property Names
        foo (a, b) { log('foo') },  // Method Properties
        *gen (x) {                  // generator function
          yield x;
          yield x + x;
        },
      };
      const myGen = obj.gen(10);
      log(myGen.next().value); // 10
      log(myGen.next().value); // 20
      log(myGen.next().value); // undefined
      log(obj.baz0); // baz0 value
    }
    if (showOne) { break; }
  case '7': divider(parts[7]); // ----------------------------------- Destructuring Assignment
    {
      const list = [ 1, 2, 3 ];

      let [ a, , b ] = list; // assign from list
      log(`a=${a}, b=${b}`); // a=1, b=3

      [ b, a ] = [ a, b ]; // swap
      log(`a=${a}, b=${b}`); // a=3, b=1

      let [ , c, , d] = list; // assign form list with default
      log(`c=${c}, d=${d}`); // c=2, d=undefined

      const obj = { // destructuring
        x: 'xx',
        y: {
          z: 'zz',
        }
      };
      const { x, y: { z: renamed }, w = 'ww'} = obj;
      log(`x=${x}, renamed=${renamed}, w=${w}`); // x=xx, renamed=zz, w=ww
    }
    if (showOne) { break; }
  case '8': divider(parts[8]); // ----------------------------------- Classes
    {
      class Shape {
        constructor (id, x, y) {
          this.id = id;
          this.move(x, y);
        }
        move (x, y) {
          this.x = x;
          this.y = y;
        }
        toString () {
          return `ID: ${this.id} position=[${this.x},${this.y}]`;
        }
      }
      class Rectangle extends Shape {
        constructor (id, x, y, width, height) {
          super(id, x, y);
          this.width  = width;
          this.height = height;
        }
        toString () {
          return `Rectangle: w=${this.width} h=${this.height}, ${super.toString()}`
        }
      }
      const rectangle = new Rectangle('id1', 2, 3, 10, 20);
      log(rectangle.toString());
    }
    if (showOne) { break; }
  case '9': divider(parts[9]); // ----------------------------------- Symbol Type
    {
      log(Symbol("foo") !== Symbol("foo")); // true
      const foo = Symbol("foo");
      const bar = Symbol("bar");
      log(typeof foo === "symbol"); // true
      log(typeof bar === "symbol"); // true
      let obj = {};
      obj[foo] = "foo";
      obj[bar] = "bar";
      log(JSON.stringify(obj)); // {}
      log(Object.keys(obj)); // []
      log(Object.getOwnPropertyNames(obj)); // []
      log(Object.getOwnPropertySymbols(obj)); // [ Symbol(foo), Symbol(bar) ]
    }
    if (showOne) { break; }
  case '10': divider(parts[10]); // --------------------------------- Iterator & For-Of Operator
    {
      const fibonacci = {
        [Symbol.iterator]() {
          let pre = 0, cur = 1;
          return {
            next () {
              [ pre, cur ] = [ cur, pre + cur ]
              return { done: false, value: cur }
            }
          }
        }
      };
      let n;
      for (n of fibonacci) {
        if (n > 21)
          break;
      }
      log(n); // 34

      // try short
      const fibo = (n) => (n <= 1) ? 1 : fibo(n-1) + fibo(n-2);
      log(fibo(8)); // 34

      // generator function
      function* fiboGen (max, first = 1, second = 2) {
        while (second < max) {
          yield first;
          [first, second] = [second, first + second];
        }
      }
      let output = '';
      for (let i of fiboGen(50)) {
        output += `${i} `;
      }
      log(output) // 1 2 3 5 8 13 21
    }
    break;
  default:
    log('Missing correct option, start with \'all\' or \'[Number]\'');
    break;
}
