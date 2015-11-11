'use strict';

import 'babel-polyfill'

import fs from 'fs';
import co from 'co';

const onerror = (err) => {
  // log any uncaught errors
  // co will not throw any errors you do not handle!!!
  // HANDLE ALL YOUR ERRORS!!!
  console.error(err.stack);
}

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

const read = (...args) => {
  args[0] = args[0].replace('\n', '');
  console.log(...args);
  return (cb) => fs.readFile(...args, cb);
};

co(function*(pre) {
  const PREFIX = './sample/'
  try {
    let a = yield read(PREFIX + 'sample1.txt', 'utf-8');
    let b = yield read(PREFIX + a, 'utf-8');
    let c = yield read(PREFIX + b, 'utf-8');
    console.log(a, b, c);
  } catch (err) {
    console.error(err);
  }
});
