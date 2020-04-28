// module.exports = {
//     mysql: {
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'yuaneditor',
//     port: '3306'
//     }
// }

let mysql=require('mysql');

// 创建连接池，效率更高，不需要每次操作数据库都创建连接
let pool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'yuaneditor',
    port:3306,
    connectionLimit:50,//允许连接数
    multipleStatements : true,  //是否允许执行多条sql语句
    timezone:"08:00" //大坑，必须加这一句，否则时间不对劲
})

//封装数据库sql请求操作，返回的是一个包含对象的数组
let Query=( sql , ...params )=>{
    return new Promise(function(resolve,reject){
        //从连接池中拿一条链接
        pool.getConnection(function(err,connection){
           if(err){
               return reject(err);
           }
           connection.query( sql , params , function(error,res){
               // console.log(res);
               connection.release();
               if(error){
                   return  reject(error);
               }
               resolve(res);
           });
       });
   });
};

//获取所有文章（完成）
let allArticleFront=function(){
    let sql=`
    select
        id,name,namePath
    from
        article
    order by
        id asc
    `;
    return sql;
}
 // 获取一篇文章
 let oneArticleFront=function(id){
    let sql=`
    select
        *
    from
        article
    where
    id='${id}'
    `;

    return sql;
}


    //更新文章
    let updateArticle=function(passage){
        // set global innodb_lock_wait_timeout=60
        let sql=`
        update
            article
        set
            name='${passage.title}',
            content='${passage.content}'
        where
            id='${passage.id}';
        `;
        return sql;
    }

    //创建一篇文章
    let createArticle=function(passage){
        let sql=`
        insert into
            article (name,content,namePath)
        values
            ('${passage.title}','${passage.content}','${passage.namePath}');
        `;
        return sql;
    }

    module.exports={
        Query,
    
        updateArticle,
        createArticle,
    
        allArticleFront,
        oneArticleFront,
     }