function delayedCalls(fn: () => void) {
     setTimeout(fn, 1000);
}

 delayedCalls(function () {
  console.log("hi there")
 })
