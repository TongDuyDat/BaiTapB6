const User = require('./index').db('demo').collection('User');
const ObjectId= require('mongodb').ObjectId;


const save= async({name,photos,address,friends,retionsip,follows})=>{
    const result= await User.insertOne({name,photos,address,friends,retionsip,follows});
    return result.ops[0];
};
const getAll =async()=>{
    const cursor =await User.find();
    return cursor.toArray();
}
const getById =async(id)=>{
    return await User.findOne({_id:ObjectId(id)}); 
}
const update =async(id,{name,photos,address,friends,retionsip,follows})=>{
    const result= await User.replaceOne({_id:ObjectId()},{name,photos,address,friends,retionsip,follows});
    return result.ops[0];
}
const removeById = async(id)=>{
    await User.deleteOne({_id:ObjectId(id)});
}
module.exports = {getAll,getById,removeById,save,update};
