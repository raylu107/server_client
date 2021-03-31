const user={}


const insertUser=(id,name)=>{
    user[name]=id;
    return;
}

const updateUser=(id,name)=>{
    user[name]=id;
    return;
}

const removeUser=(name)=>{
    delete user[name]
}

const getUser=(name)=>{
    return user[name]
}

const getUsers=()=>{
    return user
}

module.exports={
    insertUser,
    updateUser,
    removeUser,
    getUser,
    getUsers
}