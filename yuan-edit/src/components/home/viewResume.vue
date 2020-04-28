
<template>
    <div class="viewResume">
        <div>
            <div style="text-align:center;padding:10px 10px;width:100%;"><h1> 目录列表</h1></div>
             <!-- <button v-on:click="fetchData">提交</button> -->
             <!-- <div style="text-align:center;padding:0px 10px;width:100%;"> {{this.name}}</div> -->
           
        </div>
    
        <table chlass="table" id="table" style="text-align:center;padding:10px 10px;width:100%;border:1px solid #a8aeb2; " >
            <thead>
                <tr>
                    <th>编号</th>
                    <th>标题</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr class="article" v-for='passage in passages' :key='passage.id' >
                    <td>{{passage.id}}</td>
                    <!-- <td><a href="${passage.namePath}" download="消愁.txt">{{passage.id}}</a></td> -->
                    <td><router-link :to="{name:'articles',params:{articleId:passage.id}}"><a href="/articles">{{passage.name}}</a></router-link></td>
                    <td><a href="#" @click="toEdit(passage.id)">编辑</a></td>
                </tr>
            </tbody >
        </table>
        <div  style="text-align:center;padding:10px 10px;width:100%;">
            <button class="btn" @click="goback()">返回</button>
        </div>
    </div>  
</template>

<script>
import api from '@/fetch/api';
export default {
    name: 'viewResume',

    data(){
        return {                
            name:'',
            namePath:'',
            passages:[],
         }
     },
     created(){
        this.fetchData();
    },
    methods:{
        fetchData(){
            
            api.allArticleFront().then(res=>{
                console.log('获取文章成功');
                this.passages=res.data;
                console.log(this.passages);
                this.namePath=this.passage.namePath;
            },err=>{
                console.log(err);
            });
            var path=this.namePath;
        },
        toEdit(id){
            this.$router.push({name:'editResume',params:{articleId: id}})
            // this.$router.push({name:'editResume',params:{id}})
         },
        // downLoad(name){
        //     // this.$router.push({name:'editResume',params:{articleId: id}})
        //     var url2 = `./static/articles/${name}.txt`;
        //     d1.href = url2;
        //     dl.download =`${dl}.txt`;
	  	//     //必须点击否则不会下载
        //     dl.click();
        // },
        goback(){
                this.$router.push({name:'home'})
        },
        
    }
}
</script>

<style>
    .viewResume 

        
        .btn {
            margin-top: 30px;
            margin-left: 200px;
            height: 30px;
            width: 100px;
        }
                
        .table {
            min-height: 25px;
            line-height: 25px;
            text-align: center;
            border-collapse: collapse;
            border:1px solid #a8aeb2;

        }

</style>