const Koa= require('Koa');
const bodyParser =require("body-parser");
const UserRoutes= require('./routes/Uesr.routes');
const app=new Koa();
app.use(bodyParser());
app.use(UserRoutes.routes()).use(UserRoutes.allowedMethods());
app.listen(3000)
console.log("Đã chạy");
