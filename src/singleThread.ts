// Call Stack > Micro Task Queue > Macro Task Queue

// Event Loop
// 1.Call Stack
console.log("start");

// Event Loop
// Macro Task Queue
// 4.Call Stack
setTimeout(() => {
  console.log("timeout");
}, 0);

// Event Loop
// Micro Task Queue
// 3.Call Stack
Promise.resolve("promise").then((res) => {
  console.log(res);
});

// Event Loop
// 2.Call Stack
console.log("end");
