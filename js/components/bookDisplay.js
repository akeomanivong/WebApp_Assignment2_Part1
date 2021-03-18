app.component('book-display',{
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink">{{this.bookObj.volumeInfo.title}}</a>
        <img :src="this.bookObj.volumeInfo.imageLinks.thumbnail" style="width:150px;height:200px;"/>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.authors != undefined">Author(s): {{this.bookObj.volumeInfo.authors.toString()}} </li>
        <!--li class="list-group-item" v-if="this.bookObj.volumeInfo.authors != undefined" v-for="author in this.bookObj.volumeInfo.authors">Author: {{author}}</li-->
        <!--li class="list-group-item" v-if="this.bookObj.volumeInfo.authors != undefined">{{this.bookObj.volumeInfo.authors}}</li-->
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.publisher != undefined">{{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}}</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.pageCount != undefined">{{this.bookObj.volumeInfo.pageCount}} pages</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.description != undefined">{{this.bookObj.volumeInfo.description}} pages</li>
        <li class="list-group-item" v-if="this.bookObj.volumeInfo.averageRating != undefined">Average Rating: {{this.bookObj.volumeInfo.averageRating}}</li>
        </ul>`,
    computed:{
            bookObj(){
                if(this.book != null){
                    return JSON.parse(this.book)
                }
                else{
                    return null;
                }
            }
    }


})