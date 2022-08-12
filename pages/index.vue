<template>
  <div>
    <b-card no-body class="overflow-hidden card-modify" v-for="item in getListPost" v-bind:key="item.id">
      <b-row no-gutters>
        <b-col md="2">
          <nuxt-link :to="'/'+item.id"><b-card-img v-bind:src="item.image.url" alt="Image" class="rounded-0"></b-card-img></nuxt-link>
        </b-col>
        <b-col md="10">
          <b-card-body v-bind:title="item.title">
            <b-card-text>
              {{item.content}}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
    <hr>
    <pagination />
  </div>
</template>

<script>
import Pagination from '../components/Pagination.vue';
import {mapActions, mapGetters} from 'vuex';
export default {
  name: 'IndexPage',
  created() {
    //this.actGetListPost();
    var currentPage = this.$route.query.page;
    var keySearch = this.$route.query.search;
    this.actGetListPost(currentPage, keySearch);
  },
  computed : {
    ...mapGetters(['getListPost'])
  },
  methods : {
    ...mapActions(['actGetListPost'])
  },
  components : {
    Pagination
  },
  watch : {
    '$route' (to, from) {
      var currentPage = to.query.page;
      var keySearch = to.query.search;
      this.actGetListPost(currentPage, keySearch);
    }
  }
}
</script>
<style>
  .card-modify:first-child {
    margin-top: 10px;
  }
  
  .card-modify:last-child {
    margin-bottom: 10px;
  }
</style>
