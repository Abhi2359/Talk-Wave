export const getSender = (loggedUsers,users)=>{
return users[0].id === loggedUsers.id?users[1].name:users[0].name;
}