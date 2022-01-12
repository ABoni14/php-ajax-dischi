const app = new Vue({
el: "#app",
data: {
    apiUrl: "http://localhost:8888/php-ajax-dischi/server.php",
    database: "./server.php",
    discs: [],
    genres: [],
    select: "all"
    },

mounted(){
    this.getApi();
},

methods: {
    getApi(){ 
        axios.get(this.database)
        .then(r =>{
            this.discs = r.data;
            this.discs.forEach(disc =>{
                if (!this.genres.includes(disc.genre)){    
                    this.genres.push(disc.genre);
                }
        })
        .catch(e =>{
            console.log(e);
        })
    }, 
    )}}    
})