function cube(n) {
  return n * n * n;
}

function answer(a,callback){
  console.log(callback);
  return callback(a);

}
console.log(answer(2  , function (n) {
  return n * n;
}))
console.log(answer(2,cube))