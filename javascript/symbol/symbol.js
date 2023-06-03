// 1. symbol不能使用new命令
// 2. instanceof的结果为false
// 3. symbol接受一个字符串作为参数
// 4. symbol值是唯一的，因为两个对象值不一样
// 5. 调用toString方法，输出的值也是唯一的

(function () {
  var root = this;

  var generateName = (function () {
    var postfix = 0;
    return function (descString) {
      postfix++;
      return '@@' + descString + '_' + postfix;
    }
  })()

  var SymbolPolyfill = function Symbol(description) {
    if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

    var descString = description === undefined ? undefined : String(description);

    var symbol = Object.create({
      toString: function() {
        return this.__Name__;
      },
    });

    Object.defineProperties(symbol, {
      '__Description__': {
        value: descString,
        writable: false,
        enumrable: false,
        configurable: false,
      },
      '__Name__': {
        value: generateName(descString),
        writable: false,
        enumerable: false,
        configurable: false
      }
    })

    return symbol; 
  }

  root.SymbolPolyfill = SymbolPolyfill;
})();

const a = SymbolPolyfill('foo');
const b = SymbolPolyfill('foo');
console.log(a===b);

var o = {};
o[a] = 'hello';
o[b] = 'hi';

console.log(o); // Object { "@@foo_1": "hello", "@@foo_2": "hi" }