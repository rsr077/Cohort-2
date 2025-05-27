interface user {
  firstName: string;
  lastName: string;
  email: string;
   age: string;
}

function isLegal(user: User) {
if( user.age > 18) {
  return true;
}else {
  return false;
}
}
