const {getAll,getById,removeById,save,update}= require('D:/LapTrinhFullStack/BaiTapB6/dal/user');

const createUser = async({name,photos,address,friends,retionsip,follows})=>{
    const user ={
        name,
        photos,
        address,
        friends,
        follows,
        retionsip
    }
    return await save(user);
}
const getUsers =async() => {
    return await getAll();
}
const getUser = async id =>{
    return await getById(id);
}
const deleteUser =async id=> {
    return await removeById(id);
}
const  updateUser = async id =>{
    return await update(id,{name,anh,address,friends,retionsip,follows});
}
module.exports ={
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}
