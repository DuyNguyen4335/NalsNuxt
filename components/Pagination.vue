<template>
    <div>
        <nav aria-label="Page navigation example" v-if="totalPage !== 0">
            <ul class="pagination justify-content-center">
                <li class="page-item" v-bind:class="page===1? 'disabled' : '' ">
                    <!-- <button class="page-link">Previous</button> -->
                    <nuxt-link class="page-link" v-bind:to="getLinkPagination(page-1)" tag="button">Previous</nuxt-link>
                </li>
                <li class="page-item" v-for="(item,index) in pageDisplay" v-bind:key="index" v-bind:class="item===page? 'active' : ''">
                    <!-- <button class="page-link">
                        {{ item }}
                    </button> -->
                    <nuxt-link class="page-link" v-bind:to="getLinkPagination(item)" tag="button">{{item}}</nuxt-link>
                </li>
                <li class="page-item" :class="page === totalPage ? 'disabled' : ''">
                    <!-- <button class="page-link">Next</button> -->
                    <nuxt-link class="page-link" v-bind:to="getLinkPagination(page + 1)" tag="button">Next</nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    name : 'pagination',
    computed : {
        ...mapGetters(['page', 'totalPage']),
        pageDisplay(){
            const page = this.page;
            const totalPage = this.totalPage;
            const pageDisplay = []
            if (page - 2 > 0 && page + 2 <= totalPage) {
                let i = page - 2;
                let j = page + 2;
                for (i; i <= j; i++) {
                pageDisplay.push(i)
                }
                console.log("co vao day 1");
            } else if (page - 2 <= 0 && page + 2 > totalPage) {
                for (let i = 1; i <= totalPage; i++) {
                pageDisplay.push(i)
                }
            } else if (page - 2 <= 0 && page + 2 <= totalPage) {
                const max = totalPage < 5 ? totalPage : 5
                for (let i = 1; i <= max; i++) {
                pageDisplay.push(i)
                }
            } else {
                const min = totalPage - 4 > 1 ? totalPage - 4 : 1
                for (let i = min; i <= totalPage; i++) {
                pageDisplay.push(i)
                }
            }
            return pageDisplay;
        }
    },
    methods : {
        ...mapActions(['changePage']),
        getLinkPagination(item){
            return {
                name: '',
                query: {
                    page : item
                }
            }
        }
    }
}
</script>
<style>
    .disabled {
        pointer-events: none;
    }
</style>