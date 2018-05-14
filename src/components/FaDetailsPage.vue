<template>
  <div id="FaDetailsPage">
    <div @click="sss">
      我是詳情頁
    </div>
    <div></div>
  </div>

</template>
<script>
    import Vue from 'vue'
    export default {
        data() {
            return {}
        },
      props: {
        childParm: Object
      },
        methods: {
           sss(){
               console.log(this.$route.query.id)
           }
        },
        mounted() {

        },

        created() {

        }
    }
</script>
<style lang="less">

</style>
