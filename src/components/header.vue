<template>
<div id="myHeader">
<mt-header title="dong音乐?">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
</div>
</template>
<style>
  #myHeader{
  position:fixed;
  top:0;
  width:100%;
  z-index:1000;
  }
  #myHeader h1{
    font-size:18px;
    line-height: 40px;
  }
  #myHeader .mint-header{
    background:#000;
  }
</style>

