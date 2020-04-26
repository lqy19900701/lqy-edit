
<template>
    <div class="viewResume">
        <div>
             <div style="text-align:center;padding:10px 20px;width:100%;"><h1> 目录列表</h1></div>
             <!-- <button v-on:click="fetchData">提交</button> -->
             <!-- <div style="text-align:center;padding:0px 10px;width:100%;"> {{this.name}}</div> -->
           
        </div>
        
        <div class="article" v-for='passage in passages' :key='passage.id'>
            <div class="title" style="text-align:center;padding:10px 10px;width:100%;">
			    <router-link :to="{name:'articles',params:{articleId:passage.id}}">{{passage.name}}</router-link>
			    <!-- <router-link to='/editResume'><a href="/eidtResume">编辑</a></router-link> -->
                <!-- <a href="/eidtResume" @click="toEdit(passage)">编辑</a> -->
                <!-- <a href="#" @click="downloadTitle(passage.namePath)">{{passage.name}}</a> -->
                <a href="#" @click="toEdit(passage.id)">编辑</a>
			</div>
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
                this.namePath=this.passages.namePath;
            },err=>{
                console.log(err);
            });
            var path=this.passages.namePath;
            download(path);
        },
        toEdit(id){
            this.$router.push({name:'editResume',params:{articleId: id}})
            // this.$router.push({name:'editResume',params:{id}})
        },
        // downloadTitle(namePath){
        //     // this.$router.push({name:'editResume',params:{articleId: id}})
        //     api.saveAs
        // },
    }
}
</script>
