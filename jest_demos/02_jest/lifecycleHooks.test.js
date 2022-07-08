beforeAll(()=> {  // 同理对应 afterAll
  console.log("beforeAll 只运行一次，在所有测试之前");
})

beforeEach(()=> { // 同理对应 afterEach
  console.log("beforeEach 运行多次，在每个测试之前");
})

describe("A 组件", () => {
  test("1 功能", () => {
    expect(2).toBe(2);
  });
  test("2 功能", () => {
    expect(2).toBe(2);
  });
});