"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// Test the function
const user1 = {
    firstName: "Rajeev",
    lastName: "Singh",
    email: "rajeev@example.com",
    age: 15
};
console.log(isLegal(user1)); // Output: true
