<template>
    <div class="home">
        <div>
             <div style="text-align:center;padding:0px 10px;width:100%;"> 标题</div>
             <div style="text-align:center;padding:10px 10px;width:100%;"> 
                <input id="t1" v-model="title" class="text" type="text" />
             </div>
        </div>
        <vue-editor class="editor" v-model="content"></vue-editor>
        <button class="btn" @click="saveText()">
            提交
        </button>
        <!-- <input type="file" id="files" ref="refFile" style="display: none" v-on:change="fileLoad"> -->

        <router-link class="btn" to='/viewResume'><a href="/viewResume">查看目录</a></router-link>    
    </div>   
</template>
<script type="text/babel">
    import { VueEditor } from "vue2-editor";
    import api from '@/fetch/api';
    export default {
        name: 'home',
        components: {
            VueEditor
        },

        data() {
            return {
                title: "",
                content:'',
                namePath:"",
            }
        },

        methods: {
            // clickLoad()
            // {
            //      // this.$refs.refFile.dispatchEvent(new MouseEvent('click'))

            //     //   window.open("./static");
            //     //   frame.document.execCommand('SaveAs');
            //     let content=new Blob([JSON.stringify(this.passage)])
            //     document.execCommand('SaveAs');
            //     this.saveText();
            // },
            // fileLoad(){

            //     //const selectedFile=document.getElementById('files').files[0];
            //     // const selectedFile = this.$refs.refFile.files[0];

            //     // var name=selectedFile.name;
            //     // var reader=new FileReader();
            //     // reader.readAsText(selectedFile);
            //     // reader.onload = function() {
            //     //     console.log(this.result);
            //     // }
            //     // this.namePath=this.getURL(selectedFile);
            //     // console.log(this.namePath);
            //     //window.open();
            //     //frame.document.execCommand('SaveAs');
            //     this.saveText();
            // },
            // getObjectURL (file) {
            //     let url = null ;
            //     if (window.createObjectURL!=undefined) { // basic
            //     url = window.createObjectURL(file) ;
            //     }else if (window.webkitURL!=undefined) { // webkit or chrome
            //     url = window.webkitURL.createObjectURL(file) ;
            //     }else if (window.URL!=undefined) { // mozilla(firefox)
            //     url = window.URL.createObjectURL(file) ;
            //     }
            //     return url ;
            // },

            saveText() {              
                const article = `标题：${this.title}——内容：${this.content}`;
                let content=new Blob([JSON.stringify(article)]);
                let urlObject = window.URL || window.webkitURL || window;
                let url = urlObject.createObjectURL(content);
                //生成<a></a>DOM元素
	  	        let el = document.createElement('a')
	  	        //链接赋值
	  	        el.href = url
                 // el.download ="todo文件导出.txt"
                el.download =`${this.title}.txt`;
	  	        //必须点击否则不会下载
                el.click();
                this.namePath = url+`/${this.title}.txt`  		
	  	        //移除链接释放资源		
	            urlObject.revokeObjectURL(url);
                const data={
                    title:this.title,
                    content:this.content,
                    namePath:this.namePath,
                    id: ''
                }
                console.log(data);
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

            
      //   createDir (path) {
      //      if (!fs.existsSync(path)) {
      //         if (fs.mkdirSync(path)) {
      //       return false
      //      }
      //    }
      //   return true
      //  },

        }
    }
</script>

<style>
    .home 
        .editor {
            position: relative;
            margin: 0 auto;
            max-width: 80vw;
            height: auto;
        }

        .ql-container {
            max-height: auto;
        }
        
        .btn {
            margin-top: 30px;
            text-align:center;
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
