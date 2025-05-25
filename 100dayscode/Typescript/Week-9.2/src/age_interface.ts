interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
	if (user.age > 18) {
		return true;
	} else {
		return false;
	}
}

// Test the function
const user1: User = {
	firstName: "Rajeev",
	lastName: "Singh",
	email: "rajeev@example.com",
	age: 15
};

console.log(isLegal(user1)); // Output: true

