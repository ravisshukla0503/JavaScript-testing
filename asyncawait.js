/** @format */

function asyncawait() {
  return new Promise((res, rej) => {
    res("hello resolved");
  });
}

module.exports = asyncawait;
