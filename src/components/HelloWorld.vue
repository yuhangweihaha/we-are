<template>
  <div id="hello">
    <header class="header">
      <div class="imgs"></div>
      <ul>
        <li><router-link :to="{name:'daughter'}" tag="span">daughter</router-link></li>
        <li><router-link :to="{name:'Wife'}" tag="span">Wife</router-link> </li>
         <li><router-link :to="{name:'me'}" tag="span">me</router-link> </li>
         <li><router-link :to="{name:'Family'}" tag="span">Family</router-link> </li>
         <li><router-link :to="{name:'welove'}" tag="span">welove</router-link> </li>
         <li><router-link :to="{name:'Future'}" tag="span">Future</router-link> </li>
      </ul>
      <div class="jishe">
        <div class="ie1">
          <el-dropdown @command="handleCommand" trigger="click">
          <span class="el-dropdown-link">关注我们</span>
          <el-dropdown-menu class="uuu" slot="dropdown" style="padding: 0 30px;position: absolute; top: 51px; left: 903px;">
            <el-dropdown-item command=" q ">关注于航伟</el-dropdown-item>
            <el-dropdown-item command="b">关注边亚楠</el-dropdown-item>
          </el-dropdown-menu>
          </el-dropdown>
        </div>

        <!--<div><img src="../assets/images/phone.png" alt=""> 联系我们</div>-->
        <div class="ie1">
          <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">联系我们</span>
            <el-dropdown-menu class="uuu" slot="dropdown" style="padding: 0 30px;position: absolute; top: 51px; left: 903px;">
              <el-dropdown-item command=" q ">联系于航伟</el-dropdown-item>
              <el-dropdown-item command="b">联系边亚楠</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div>退出</div>
      </div>
    </header>
    <main class="main">

      <el-carousel style="margin-top: 30px;" :interval="4000" type="card" height="293px">
        <el-carousel-item v-for="(item,index) in images" :key="index">
          <h3 class="h3s"><img :src="item.src" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
      <div class="box">
          <div class="inner" id="on1">
            <span>欢迎来到我家</span>
          </div>
          <div class="inner" id="on2">
            <span>欢迎来到我家</span>
          </div>

      </div>
      <router-view class="wrap"></router-view>
    </main>
  </div>
</template>
<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        images:[
            {src:require("../assets/images/2.jpg")},
            {src:require("../assets/images/3.jpg")},
            {src:require("../assets/images/4.jpg")},
            {src:require("../assets/images/5.jpg")},
          ]
      }
    },
    methods: {
      handleCommand(command) {
        this.$message('hover on item ' + command);
      }
    }
  }
</script>

<style lang="less" scoped>
  * {
    margin: 0;
    padding: 0;
  }

  #hello {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: column;
  .header {
    width: 98.7%;
    margin-left: 0.65%;
    height: 70px;
    background: lightgoldenrodyellow;
    position: relative;
    font-family: PingFangSC-Medium;
    box-shadow: 0px 1px 15px rgba(238, 133, 0, 0.98) inset;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3000;

  }

  .header ul {
    width: 77%;
    height: 100%;
    float: right;
  }

  .header ul li {
    height: 100%;
    line-height: 70px;
    list-style-type: none;
    float: left;
    margin-left: 31px;
    cursor: pointer;
  }

  .jishe {
    width: 29%;
    height: 100%;
    position: absolute;
    right: 20px;
    display: flex;

  }

  .jishe div {
    flex: 1;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
  }

  .jishe div img {
    margin-top: 3px;
  }

  .imgs {
    width: 23%;
    height: 100%;
    background: url(../assets/images/1.png) no-repeat 36px -11px;
    position: absolute;
    left: 0;
    background-size: 210px 91px;
  }

  .aa {
    cursor: pointer;
  }

  .red {
    color: #EE8500;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #000;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
.ie1:nth-child(1){
   :nth-child(1){
     font-size: 16px;
     color: #f0c80b;
   }
}
  .ie1:nth-child(2){
  :nth-child(1){
    font-size: 16px;
    color: #f0c80b;
  }
  }
  #dropdown-menu-8931{
    background: aqua;
  }
  .main{
    width: 94%;
    margin-left: 3%;
    /*overflow:auto;*/
    flex: 1;
    margin-top: 60px;
    /*background: lawngreen;*/
  }

  }

</style>
<style>
  .uuu{
    /*left: 60.5px;*/
    margin-top:-30px;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .h3s img{
    height: 100%;
    width: 100%;
    background-size:40px 40px;
  }
  .box {
    display: flex;
  }

  .box .inner {
    width: 200px;
    height: 30px;
    line-height: 30px;
    font-size: 2em;
    font-family: sans-serif;
    font-weight: bold;
    white-space: nowrap;
    margin-bottom: 20px;
    overflow: hidden;
    margin-top: 30px;
  }

  .box .inner:first-child {
    background-color: indianred;
    color: darkred;
    transform-origin: left;
    transform: perspective(300px) rotateY(-67.3deg);
  }

  .box .inner:last-child {
    background-color: lightcoral;
    color: antiquewhite;
    transform-origin: right;
    transform: perspective(300px) rotateY(67.3deg);
  }

  .box .inner span {
    position: absolute;
    animation: marquee 5s linear infinite;
  }

  .box .inner:first-child span {
    animation-delay: 2.5s;
    left: -100%;
  }
#on1{
  margin-left: 33%;
}


  @keyframes marquee {
    from {
      left: 100%;
    }

    to {
      left: -100%;
    }
  }
</style>
