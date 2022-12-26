//  const sum = require('./sum')
//  test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
//    expect(sum(4, 6)).not.toBe(11);
// });

// const object = require('./object');
// test('object name is ravi', () => {
//   expect(object()).toEqual({ name: "ravi" });
// })

// const callbackfunction = require('./callbackfunction');
// test('callback fun pass and with same result', (done) => {
//   function fun(data){
//     try{
//        expect(data).toBe('hello ravi');
//        done();
//     }catch(err){
//       done(err)
//     }
//   }
//   callbackfunction(fun);
// })

// const promise = require('./promise');
// test('promise test', () => {
//   return promise().then((data) => expect(data).toBe('done'))
// })

// const asyncawait = require('./asyncawait');
// test('asyncawait test', async() => {
//   let data = await asyncawait();
//   expect(data).toBe("hello resolved")
// })

// const common = require('./beforeEach/common');
// const uncommon = require('./beforeEach/uncommon') 

// beforeEach(()=>{   it will always run before run any test in  this case it runs 2 times
//   console.log("hello beforeEach")
// });

// test('test common', () => {
//   expect(common()).toBe("common")
// })

// test('test uncommon', ()=>{
//   expect(uncommon()).toBe("uncommon")
// })

// const reverseString = require('./reverseString')
// test('test reverse string', () => {
//   expect(reverseString("hello")).toEqual("olleh")
// });

// const capatalizeString = require('./capatalizeString')
// test('capital first letter of a string', () => {
//   expect(capatalizeString("hello")).toEqual("H")
// })

// const { add, sub, mul, div } = require('./calculator')
// test('add', () => {
//   expect(add(3, 4)).toBe(7);
// })
// test("sub", () => {
//   expect(sub(4 , 4)).toBe(0);
// });
// test("mul", () => {
//   expect(mul(3 ,4)).toBe(12);
// });
// test("div", () => {
//   expect(div(12, 4)).toBe(3);
// });

// const analyzeArray = require('./analyzeArray')
// test('analyze array', () => {
//   expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
//     min: 1,
//     max: 8,
//     length: 6,
//   });
// })


