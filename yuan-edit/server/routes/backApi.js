var express = require('express');
var router = express.Router();
var db=require('../db');
// var EventProxy=require('eventproxy');
// var proxy=new EventProxy();

// //连接数据库
// var db=mysql.createConnection(models.mysql);
// db.connect();


// var jsonWrite = function (res, ret) {
//     if (typeof ret === 'undefined') {
//         res.json({
//             code: '1', msg: '操作失败'
//         });
//     }
//     else {
//         res.json(
//             ret
//         );
//     }
// };

//增加文章接口
router.post('/saveArticle',(req,res)=>{
    let id=req.body.id;
    let passage=req.body;
    // 如果id存在，那么执行更新操作
    if(id){
        console.log('id存在，执行更新操作！')
        // var status="write";

        let sql=db.updateArticle(passage);
        db.Query(sql).then(data=>{
            res.send({"code":"200","data":"更新成功！"});
        },err=>{
            res.send({"code":"400"});
            console.log(err);
        })
    }
    // 如果req.body的id不存在，说明是一篇新的文章,执行插入操作;
    else{
        // var winSave=window.open();
        // winSave.document.open("text","gb2312");  
        // winSave.document.write(passage);  
        // winSave.document.execCommand("SaveAs",true,"strHTML_name.txt");
        // winSave.document.execCommand("SaveAs");
        // window.location.href="#"  ;
        // winSave.close();  

        let sql=db.createArticle(passage);
        db.Query(sql).then(data=>{
            res.send({"code":"200","data":data});
        },err=>{
            res.send({"code":"400"});
            console.log(err);
        })
        console.log('id不存在，执行插入操作！')
    }
})

//测试路由
router.get('/test',(req,res)=>{
    db.Query('select * from article').then(data=>{
        console.log(data);
        res.send('测试路由');
    },err=>{
        console.log(err);
    });
})



  //获取单篇文章内容
router.get('/getOneArticle',(req,res)=>{
    //id是数字，不用解码
    let param=req.query.articleId;
    let sql=db.queryOneArticle(param);

    db.Query(sql).then(data=>{
        console.log(data);
        res.send({"code":"200","data":data});
        console.log('完成');
    },err=>{
        res.send({"code":"400"});
        console.log(err);
    })
})


module.exports = router;