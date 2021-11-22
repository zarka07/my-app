import axios from 'axios'
export const getApi = {
    
    methods:{
        async get(){
            const response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL);
            this.posts = response.data;
    
        },
        async getPost(id){
            this.id=id;
            const Response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + '/' + this.id);
            this.post = Response.data;
        },
        async getComments(id){
            this.id=id;
            const Response = await axios
                .get(process.env.VUE_APP_API_ENDPOINT_URL + '/' + this.id + '/comments');
            this.comments = Response.data;
        }
    }
}