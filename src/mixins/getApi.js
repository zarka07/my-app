import axios from 'axios'
//import { Store } from 'vuex'
import store from '../store'
export default{
    
    methods:{
        
        async get(path, cb = null){
            store.dispatch("loader/showLoader")
            console.log('showLoader')
            return await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + path)
                .then(response => cb!==null?cb(response):response)
                .finally(() => {
                    store.dispatch('loader/hideLoader')
                    console.log('hideLoader')
                })
        },
        /*async getPost(id){
            
            const Response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + '/' + this.id);
            this.post = Response.data;
        },
        async getComments(id){
            
            const Response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + '/' + this.id + '/comments');
            this.comments = Response.data;
        }*/
    }
}