interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}
declare function isLegal(user: User): boolean;
declare const user1: User;
