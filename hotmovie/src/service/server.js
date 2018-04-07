let express=require("express");
let app= express();
app.listen(8080,function () {
    console.log("listening on port 8080");
});

//中间件
let session=require("express-session");
let bodyParser=require("body-parser");
app.use(session({
    resave:true,
    saveUninitialized:true,
    secret:"hotmovie"
}));
app.use(bodyParser.json());

//跨域设置
app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials",true);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

//个人中心接口
let userList=[];
let crypto=require("crypto");
//注册接口
app.post("/reg",function (req,res) {
    let {username,password}=req.body;
    let user=userList.length&&userList.find((item=>{
        return item.username===username;
    }));
    if (user){
        res.json({user:null,msg:"对不起，用户已经存在",success:"",err:1})
    }else {
        password=crypto.createHash("md5").update(password).digest("base64");
        userList.push({username,password});
        res.json({user:null,msg:"",success:"恭喜你注册成功",err:0})
    }

});
//登录接口
app.post("/login",function (req,res) {
    let {username,password}=req.body;
    password=crypto.createHash("md5").update(password).digest("base64");
    let user=userList.find(item=>(item.username===username)&&(item.password===password));
    if (user){
        req.session.user=username;
        res.json({user:username,msg:"",success:"恭喜你登录成功",err:0})
    }else {
        res.json({user:null,msg:"用户名或密码错误",success:"",err:1})
    }
});
//验证接口
app.get("/validate",function (req,res) {
    res.json({user:req.session.user,msg:"",success:"",err:0})
});