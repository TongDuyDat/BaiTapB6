const {MongoClient}= require("mongodb");
const cilent=new MongoClient('mongodb://localhost:27017');
cilent.connect(err=>{
    if(err){
        console.error(err);
        process.exit(-1);
    }
    console.log("chạy thành công rồi nhá");
});
module.exports= cilent;
