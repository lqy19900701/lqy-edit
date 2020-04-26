// const http = require("http"),
//       fs = require("fs"),
//       path = require("path"),
//       url = require("url"),
//       mysql=require("mysql"),
//       express = require('express'),
//       newsApi = require('./api'),
//       vue=require("vue");
// const app = express();

// var connection = mysql.createConnection({      //创建mysql实例
//     host:'127.0.0.1',
//     port:'3306',
//     user:'root',
//     password:'root',
//     database:'yuaneditor'
// });
// connection.connect();
// var sql = 'SELECT * FROM nameedit';
// var str = " ";
// connection.query(sql, function (err,result) {
//     if(err){
//         console.log('[SELECT ERROR]:',err.message);
//     }
//     str = JSON.stringify(result);
//     //数据库查询的数据保存在result中，但浏览器并不能直接读取result中的结果，因此需要用JSON进行解析
//     //console.log(result);   //数据库查询结果返回到result中
//     console.log(str);
// });
// app.get('/',function (req,res) {
//     res.send(str);  //服务器响应请求
// });
// connection.end();
// app.listen(3000,function () {    ////监听3000端口
//     console.log('Server running at 3000 port');
// });
