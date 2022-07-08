// Your test suite must contain at least one test.
// 每一个测试文件都需要至少一个 test 函数，即 test 用例
// 此文件用于介绍 jest 全局 api

// test("global api test", () => {
//   console.log("global 1");
// });

// it 其实就是 test 用例的别名！
// 使用时候尽量保持使用名称的统一
// it("global api test", () => {
//   console.log("global 1");
// });

// 调用 only 方法后，只有该测试用例会生效
// it.only("it only", () => {
  // 大（小）于 大（小）于等于 等匹配机制都存在
//   expect(4).toBe(4); // 同时 toBe 只能匹配数字和字符串和布尔值等简单的值
//   expect(5).toBeGreaterThan(4);
//   expect(3).toBeLessThan(4);

//   // 判断字符串
//   expect("string match").toMatch("string match")

//   // 判断对象
//   expect({ name: "tqt" }).toEqual({ name: "tqt" });
// });

// creates a block that groups together several related tests
// 创建一个块，用于对一组测试用例进行分类
describe("A 组件", () => {
  test("1 功能", () => {
    expect(2).toBe(2);
  });
  test("2 功能", () => {
    expect(2).toBe(2);
  });
});

const myBeverage = {
  delicious: true,
  sour: false,
};

// 单独测试一个对象，将其测试功能属性
describe('my beverage', () => {
  test('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
