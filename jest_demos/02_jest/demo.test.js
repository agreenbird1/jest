// commonjs
// const { sum, subtract } = require("./demo");

// // jest 会自动找到对应文件，以 .test.js 结尾的文件进行调用
// test("sum(2, 3)的结果应该是5", () => {
//   expect(sum(2, 3)).toBe(5);
// });
// test("subtract(2, 3)的结果应该是-1", () => {
//   expect(subtract(2, 3)).toBe(-1);
// });
// it("sum", () => {
//   expect(subtract(2, 3)).toBe(-1);
// });

// 使用 es 模块需要的依赖 babel-jest @babel/core @babel/preset-env
import { sum, subtract } from "./demo";

// jest 会自动找到对应文件，以 .test.js 结尾的文件进行调用
test("sum(2, 3)的结果应该是5", () => {
  expect(sum(2, 3)).toBe(5);
});
test("subtract(2, 3)的结果应该是-1", () => {
  expect(subtract(2, 3)).toBe(-1);
});
it("sum", () => {
  expect(subtract(2, 3)).toBe(-1);
});
