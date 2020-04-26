// 引入路由
const router=require('express').Router();
//引入封装好的数据库操作
let db=require('../db.js');

//前台接口

//获取所有文章的接口
router.get('/allArticle',(req,res)=>{
    let sql=db.allArticleFront();
    console.log('前端获取所有文章');
    db.Query(sql).then(data=>{
        res.send({"code":"200","data":data});
    },err=>{
        res.send({"code":"400","err":"服务器开小差了"});
    })
});


  //根据id获取单篇文章的接口
router.get('/oneArticle',(req,res)=>{
    let id=req.query.id;
    let sql=db.oneArticleFront(id);
    console.log('获取单篇文章');
    db.Query(sql).then(data=>{
        res.send({"code":"200","data":data[0]});
    },err=>{
        res.send({"code":"400","err":"服务器开小差了"});
    })
});

  module.exports=router;