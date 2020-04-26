<template>
    <div class="editResume">
        <div>
             <div style="text-align:center;padding:0px 10px;width:100%;"> 编辑标题</div>
             <div style="text-align:center;padding:10px 10px;width:100%;"> 
                <input v-model="title" class="text" type="text" />
                 <!-- <router-link :to="{name:'articles',params:{articleId:passage.id}}">{{passage.name}}</router-link> -->
             </div>
        </div>
        <vue-editor class="editor" v-model="content"></vue-editor>
        <button class="btn" @click="saveText()">
            提交
        </button>
    </div>   
</template>
<script type="text/babel">
    import { VueEditor } from "vue2-editor";
    import home from "./home";
    import viewResume from "./viewResume";
    import api from '@/fetch/api';
    export default {
        name: 'editResume',
        components: {
            VueEditor
        },

        data() {
            return {
                // title:null,
                // content: this.passage.content,
                passage:[],
                title: "",
                content:'',
                articleId: '',
            }
        },
        mounted(){
            //如果传入了id,说明是修改文章。没有id，是新文章
            // const articleId = this.$route.params.articleId;
            const { articleId } = this.$route.params;
            console.log(articleId);
            if(articleId){
                this.articleId = articleId;
                this.getOneArticle(articleId);  
            }else{
                this.newArticle();
            }
        },
        // created(){
        // this.getOneArticle();
        // },
        methods: {
            getOneArticle(articleId){
                api.oneArticleFront(articleId).then(res=>{
                    switch (res.code){
                        case '200':
                        this.passage = res.data;
                        console.log(res.data);
                        //再拿到数据之后再进行ueditor的初始化操作，否则会出错
                        this.title=res.data.name;
                        this.content=res.data.content;
                        break;
                        case '400':
                        console.log('请求数据错误！');
                        break;
                    }
                },err=>{
                    console.log(err);
                })
            },
            newArticle(){
                this.$router.push({name:'home',params:{}});
            },
            saveText() {              
                // var strHTML=document.getElementById("name").value;
                // // var strHTML_name=document.getElementById("textname").value;

                // 接口 this.content 传入
                const data={
                    title:this.title,
                    content:this.content,
                    namePath:this.namePath,
                    id: this.articleId
                }
                api.saveArticleBack(data).then(res=>{
                    switch(res.code){
                        case '200':
                            alert('保存成功！');
                            console.log(data);
                            break;
                         case '400':
                            alert('服务器开小差了，保存失败！');
                            break;
                    }
                    },err=>{
                        console.log(err);
                    })
            },
        }
    }
</script>

<style>
    .editResume 
        .editor {
            position: relative;
            margin: 0 auto;
            max-width: 80vw;
        }

        .ql-container {
            max-height: 500px;
        }
        
        .btn {
            margin-top: 30px;
            margin-left: 200px;
            height: 30px;
            width: 100px;
        }

        .text {
            text-align:center;
            height: 40px;
            width: 300px;

        }
</style>
