<template>
    <div class="articles">
        <div style="text-align:center;padding:0px 10px;width:100%;"><label id="t1" type="text" /> {{passage.name}}</div>
        <div style="text-align:center;padding:10px 10px;width:100%; "> 
              <span v-html="passage.content"> {{passage.content}}</span>
        </div>
        <button class="btn" @click="goback()">
            返回
        </button>
        <button class="btn" @click="downloadArticle()">
            下载
        </button>
    </div>   
</template>

<style>
    .articles 
   
        .btn {
            margin-top: 30px;
            margin-left: 200px;
            height: 30px;
            width: 100px;
        }

</style>

<script type="text/babel">
    import viewResume from "./viewResume";
    import api from '@/fetch/api';
    export default {
        name: 'articles',
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
        created(){
            //如果传入了id,说明是修改文章。没有id，是新文章
            // const articleId = this.$route.params.articleId;
            const { articleId } = this.$route.params;
            console.log(articleId);
            if(articleId){
                this.articleId = articleId;
                this.getOneArticle(articleId);  
            }else{
                this.goback();
            }
        },
        
        methods: {
            getOneArticle(articleId){
                api.oneArticleFront(articleId).then(res=>{
                    switch (res.code){
                        case '200':
                        this.passage = res.data;
                        console.log(res.data);
                        //再拿到数据之后再进行ueditor的初始化操作，否则会出错
                        this.passage.name=res.data.name;
                        this.passage.content=res.data.content;
                        break;
                        case '400':
                        console.log('请求数据错误！');
                        break;
                    }
                },err=>{
                    console.log(err);
                })
            },
            goback(){
                this.$router.push({name:'viewResume'})
            },
            downloadArticle(){
                const article = `标题：${this.passage.name}——内容：${this.passage.content}`;
                let content=new Blob([JSON.stringify(article)]);
                let urlObject = window.URL || window.webkitURL || window;
                let url = urlObject.createObjectURL(content);
                //生成<a></a>DOM元素
	  	        let el = document.createElement('a')
	  	        //链接赋值
	  	        el.href = url
                 // el.download ="todo文件导出.txt"
                el.download =`${this.passage.name}.txt`;
	  	        //必须点击否则不会下载
                el.click();	
	  	        //移除链接释放资源		
	            urlObject.revokeObjectURL(url);
            }

        }
    }
</script>
