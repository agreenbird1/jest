// 返回的是一个 promise，则会等待 resolve 状态
// 如果返回 reject 状态，当前测试用例 fail
test("the data is promise data", () => {
  // 当然也可以使用 async/await 来获得返回的值
  // return/await expect(fetchData()).resolves.toBe("promise data"); // 或者
  return fetchData().then((data) => {
    expect(data).toBe("promise data");
  });
});

function fetchData() {
  return new Promise((resolve, reject) => {
    // 会一直的等待 3 秒，一直到 promise resolve 为止
    setTimeout(() => resolve("promise data"), 3000);
  });
}
