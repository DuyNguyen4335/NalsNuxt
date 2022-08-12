<template>
  <div class="container">
      <h1 class="text-center">dsfsdfasd</h1>
      <span>Ngày đăng: 11</span>
      <hr>
      <div class="single-content">
          <p>content</p>
          <img src="" alt="">
      </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    data() {
        return {
            postId : this.$route.params.slug
        }
    },
    created() {
        this.actGetPostDetailById(this.postId);
    },
    validate(context) {
        if(!Number(context.params.slug)){
            return false;
        }
        return true;
    },
    methods : {
        ...mapActions(['actGetPostDetailById']),
        // fetchDataPostDetail(){
        //     this.actGetPostDetailById(this.postId).then(res => {
        //         if(!res.ok){
        //             this.$route.push('/');
        //         }
        //     })
        // }
    }
}
</script>
<style>

</style>