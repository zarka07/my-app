import axios from 'axios'
export default{
    
    methods:{
        
        async get(path, cb = null){
            return await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + path)
                .then(response => cb!==null?cb(response):response)
                
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