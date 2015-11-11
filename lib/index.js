'use strict';

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onerror = function onerror(err) {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
};

// co(function *(){
//   // resolve multiple promises in parallel
//   var a = Promise.resolve(1);
//   var b = Promise.resolve(2);
//   var c = Promise.resolve(3);
//   var res = yield [a, b, c];
//   console.log(res);
//   // => [1, 2, 3]
// }).catch(onerror);
//
// // errors can be try/catched
// co(function *(){
//   try {
//     yield Promise.reject(new Error('boom'));
//   } catch (err) {
//     console.error(err.message); // "boom"
//  }
// }).catch(onerror);
//
// co(function* () {
//   var res = yield [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.resolve(3),
//   ];
//   console.log(res); // => [1, 2, 3]
// }).catch(onerror);
//
// co(function* () {
//   var res = yield {
//     1: Promise.resolve(1),
//     2: Promise.resolve(2),
//   };
//   console.log(res); // => { 1: 1, 2: 2 }
// }).catch(onerror);
//
// co(function* () {
//   return yield Promise.resolve(true);
// }).then((val) => {
//   console.log(val);
// }, (err) => {
//   console.error(err.stack);
// });
//
// const fn = co.wrap(function* (val) {
//   return yield Promise.resolve(val);
// });
//
// fn(true).then((val) => {
//   console.log(val);
// });

var read = function read() {
  var _console;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args[0] = args[0].replace('\n', '');
  (_console = console).log.apply(_console, args);
  return function (cb) {
    return _fs2.default.readFile.apply(_fs2.default, args.concat([cb]));
  };
};

(0, _co2.default)(regeneratorRuntime.mark(function _callee(pre) {
  var PREFIX, a, b, c;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        PREFIX = './sample/';
        _context.prev = 1;
        _context.next = 4;
        return read(PREFIX + 'sample1.txt', 'utf-8');

      case 4:
        a = _context.sent;
        _context.next = 7;
        return read(PREFIX + a, 'utf-8');

      case 7:
        b = _context.sent;
        _context.next = 10;
        return read(PREFIX + b, 'utf-8');

      case 10:
        c = _context.sent;

        console.log(a, b, c);
        _context.next = 17;
        break;

      case 14:
        _context.prev = 14;
        _context.t0 = _context['catch'](1);

        console.error(_context.t0);

      case 17:
      case 'end':
        return _context.stop();
    }
  }, _callee, this, [[1, 14]]);
}));