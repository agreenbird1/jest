const { sum } = require("./demo");

expect(sum(2, 3)).toBe(5);
test("sum(2, 3)的结果应该是5", () => expect(sum(2, 3)).toBe(5));

// 手动实现
// expect 称之为断言函数：断定一个结果为我期待的真实的结果。
function expect(result) {
  return {
    toBe(expectedResult) {
      if (result === expectedResult) console.log("expect successfully!");
      else
        console.error(
          `error! expect received ${expectedResult}, but received ${result}`
        );
    },
  };
}

// 测试用例
function test(log, cb) {
  try {
    cb();
  } catch (error) {
    console.error(log);
  }
}
