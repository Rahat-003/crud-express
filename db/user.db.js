/*
    firstName
    lastName
    department
    id
*/


export let users = [];

export const findUser = (id)=>{
    const curUser = users.find((obj) => {
        return obj.id === id;
      });
    
    return curUser;
}


export const deleteUserFromDB = (id)=>{    
    users = users.filter((user) => {
        return user.id !== id;
    });
}