import axios from 'axios'
import router from '../router/'

// // axios 配置
// axios.defaults.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8;';
// //axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// //    /api这个位置在config/index.js里面设置了代理，指向 localhost:8081/api这个后台地址
// axios.defaults.baseURL = 'http://localhost:8888/api/';


export function fetchPost(url, params,config) {
    console.log(params)
    return new Promise((resolve, reject) => {
        axios.post(url, params,config)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}
export function fetchGet(url, paramObj) {
    return new Promise((resolve, reject) => {
         let param={params:paramObj}
           axios.get(url, param)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export default{
    //后台接口
    oneArticleBack(articleId){
		let params={
			articleId,
		};
		return fetchGet('/backApi/getOneArticle',params);
    },
    //前台接口
    allArticleFront(){
		let params={
		};
		return fetchGet('/frontApi/allArticle',params);
    },
    
    // 获取单篇文章接口
	oneArticleFront(id){
		let params={
			id,
		}
		return fetchGet('/frontApi/oneArticle',params);
    },
    //后台保存文章的接口(完成)
    saveArticleBack(params){
		return fetchPost('/backApi/saveArticle',params)
    },
    
    // dowanArticleBack(namePath)
    // {
        
    // },
    // saveAsBack(data)
    // {
    //     return fetchPost('/backApi/saveArticle',params)
    //     var winSave=window.open();
    //     winSave.document.open("text","gb2312");  
    //     winSave.document.write(data);  
    //     winSave.document.execCommand("SaveAs",true,"strHTML_name.txt");
    //     winSave.document.execCommand("SaveAs");
    //     window.location.href="#"  ;
    //     winSave.close();  
    // },
}

