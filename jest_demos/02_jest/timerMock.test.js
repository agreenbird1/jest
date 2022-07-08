function fetchData() {
  return new Promise((resolve, reject) => {
    // 会一直的等待 3 秒，一直到 promise resolve 为止
    setTimeout(() => resolve("promise data"), 3000);
  });
}

// mock 定时器
jest.useFakeTimers()

test("timer mock", () => {
  // 断言声明此处至少会出现一次断言的调用
  // 如果没有，则代表此次测试失败
  expect.assertions(1);
  fetchData().then((res) => {
    expect(res).toBe("promise data");
  });
  // 快进所有定时器，直接到结束
  jest.runAllTimers()
});
