"use strict";
const http = require("http"),
      fs = require("fs"),
      path = require("path"),
      url = require("url"),
      mysql=require("mysql"),
      express = require('express'),
      backApi = require('./routes/backApi'),
      frontApi = require('./routes/frontApi'),
      bodyParser = require('body-parser'),
      vue = require("vue"),
      cors = require('cors');//cors解决跨境
 
// import axios from 'axios';
//const app=express();
 // 获取当前目录
//  var root = path.resolve();
//  // 创建服务器
//  var sever = http.createServer(function(request,response){
//      var pathname = url.parse(request.url).pathname;
//      var filepath = path.join(root,pathname);
//      // 获取文件状态
//      fs.stat(filepath,function(err,stats){
//        if(err){
//             // 发送404响应
//           response.writeHead(404);
//             response.end("404 Not Found.");,
//         }else{
//             // 发送200响应
//             response.writeHead(200);
//             //var db=new dbSelect();
//             // response是一个writeStream对象，fs读取html后，可以用pipe方法直接写入
//             fs.createReadStream(filepath).pipe(response);
//             //response.end();
//         }
//         response.end();
//     });
//  });

 const app = express();
 app.use(cors());

//  app.use(cors({
//     origin:['http://localhost:8888'],
//     methods:['GET','POST'],
//     alloweHeaders:['Conten-Type', 'Authorization']
//    // alloweHeaders:['*']
// }));

 //采用设置所有均可访问的方法解决跨域问题

 app.all("*", function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
  
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  
    if (req.method == 'OPTIONS') {
  
      res.send(200);
  
    } else {
  
      next();
  
    }
  
  });

 
 //中间件

 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 //解析application/json
 
 app.use(bodyParser.json({ limit: '10mb' }));
//解析 application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({limit:'50mb',extended: true }))
 //app.use('/api',newsApi);




//route设置,拦截器在前，route在后。这两者之间位置不能搞混。
app.use('/api/frontApi',frontApi);
app.use('/api/backApi',backApi);

app.use(express.static(path.join(__dirname, 'public')));
// sever.use('/api/newsApi',newsApi)

// sever.listen(8888);
// app.axios.get('/api/test',(req,res,next)=>{
//     res.json({
//         data: '后台返回结果 getArticle'
//       })
// })


//这是一个测试接口

app.listen(8888);
 console.log('Sever is running at 8888端口...');
module.exports = app;