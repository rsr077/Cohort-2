"use strict";
function AllUsre(user1, user2, user3) {
    return user1.age + user2.age + user3.age;
}
const ans = AllUsre({ name: "rajev", age: 20 }, { name: "rajev", age: 20 }, { name: "rajev", age: 20 });
console.log(ans);
