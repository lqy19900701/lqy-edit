<template>
    <div class="home">
        <div>
             <div style="text-align:center;padding:0px 10px;width:100%;"> 标题</div>
             <div style="text-align:center;padding:10px 10px;width:100%;"> 
                <input id="t1" v-model="title" class="text" type="text" />
             </div>
        </div>
        <vue-editor class="editor" id="ue2" v-model="content"></vue-editor>
        <button class="btn" @click="saveText()">
            提交
        </button>
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
                passage:[],
                title: "",
                content:'',
            }
        },

        methods: {
            saveText() {              
                // var strHTML=document.getElementById("name").value;
                // // var strHTML_name=document.getElementById("textname").value;

                // var winSave=window.open();
                // winSave.document.open("text","gb2312");  
                // winSave.document.write(data);  
                // winSave.document.execCommand("SaveAs",true,"strHTML_name.txt");
                // winSave.document.execCommand("SaveAs");
                // window.location.href="#"  ;
                // winSave.close();  
                // 接口 this.content 传入
                // this.passage.namePath = "E://Project//vueInit-master//newfile//news.txt";
                // this.passage.title="我很好";
                // this.passage.content="我很好——奋斗";this.passage
                // api.saveAsBack(data);
               // this.$refs.refFile.dispatchEvent(new MouseEvent('click'))

                var namePath="E://Project//YuanEditor//yuan-edit//static";
                const data={
                    title:this.title,
                    content:this.content,
                    namePath:namePath,
                    id: ''
                }
                console.log(data);
                
                // console.log(data);
                
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
