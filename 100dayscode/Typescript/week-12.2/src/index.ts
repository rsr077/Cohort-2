
interface User {
name: string;
age:number;
id: number;
email:string;
}

   type UserProfile = Pick<User, 'name'| 'email'>

   const displyUserPoroffi(user: UserProfile) => {
    console.log(`Name: ${user.name}, Email ${user.email}`)
   }
