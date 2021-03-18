const { createApp, ref, computed } = Vue;
const app = createApp({
    data() {
        return{
            keyword: '',
            result: null,
            currentIndex: 0,
            notFirstPage: false,
            begin: false
        }
    },
    methods: {
        searchGoogleBooks(){
            this.begin = true;
            var txtSearch = document.querySelector("#txtSearch");
            if (txtSearch.value == "") {
                document.querySelector("#mainDiv").classList.add("hasError");
                document.querySelector("#mainDiv").innerHTML = "No search keyword provided..."
                return;
            }

            document.querySelector("#mainDiv").classList.remove("hasError");

            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=0&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        nextPage(){
            this.currentIndex = this.currentIndex + 20;
            this.notFirstPage = true;
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.currentIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        previousPage(){
            this.currentIndex = this.currentIndex - 20;
            if(this.currentIndex <= 0){
                this.notFirstPage = false;
            }
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex=" + this.currentIndex + "&maxResults=20")
                .then(response => response.json())
                .then(json => this.result = json)
        },
        reset() {
            this.keyword = '';
            this.result = null;
            this.currentIndex = 0;
            this.notFirstPage = false;
            this.begin = false;
        }
    }
});
app.mount('#app');