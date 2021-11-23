import axios from 'axios'
//import store from '../store'
export default{
    
    methods:{
        
        async get(path, cb = null){
            this.$store.dispatch('loader/SHOW_LOADER')
            console.log('SHOW_LOADER')
            return await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + path)
                .then(response => cb!==null?cb(response):response)
                .finally(() => {
                    this.$store.dispatch('loader/HIDE_LOADER')
                    console.log('HIDE_LOADER')
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