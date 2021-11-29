import axios from 'axios'
//import { Store } from 'vuex'
import store from '../store'
export default{
    
    methods:{
        
        async get(path, cb = null){
            store.dispatch("loader/showLoader")
            return await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + path)
                .then(response => cb!==null?cb(response.data):response.data)
                .catch(error => {
                    if(error.response.status){
                        const statusCode = error.response.status
                        switch (statusCode) {
                            case 400:
                            case 404:
                                this.$store.dispatch("error/showError", statusCode)
                                break;
                            case 401:  
                            case 403:
                                alert('$t("Errors.403")')
                                //Auth.logout()
                                //this.$router.push({name:"auth"})
                                break;
                            case 422:
                                this.$store.dispatch("error/showError", statusCode)
                                //this.$router.push({name:"auth"})
                                break;
                            case 500:
                            case 501:
                            case 502:
                            case 503:
                            case 504:
                            case 505:
                                this.$store.dispatch("error/showError", statusCode)
                                this.$router.go(-1)
                                break;
                            default:
                                error({
                                statusCode,
                                })
                        }       
                    }
                })
                .finally(() => {
                    store.dispatch('loader/hideLoader')
                    //console.log('hideLoader')
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