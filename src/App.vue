<template>
  <div id="app" v-listenerScorll>
    <i class="bg" :style="fbackgroud"></i>    
    <myAudio :msg="msg" v-show="myAudioShow"></myAudio>
    <myHeader v-show="myAudioShow"></myHeader>
    <router-view :msg="msg">
    </router-view>
    <myTabbar></myTabbar>
  </div>
</template>
<script>
import './css/animate.css'
import myHeader from './components/header.vue'
import myTabbar from './components/tabbar.vue'
import mySwipe from './components/swipe.vue'
import myHot from './components/hotmodule.vue'
import myAudio from './components/audio.vue'

export default {
  name: 'app',
  mounted:function(){
    var _this=this
     //原生标签只能绑定原生事件  自定义标签可以绑定自定义事件
     var timer=null;
     var prevY=0;
     var curY=0;
     window.addEventListener("scroll",function(){
        curY=document.body.scrollTop;
        clearTimeout(timer)
        timer=setTimeout(function(){
          if(curY-prevY > 100){
            _this.myAudioShow=false;
          }else{
            _this.myAudioShow=true;
          }
          prevY=curY
        },50)
     })
  },
  directives:{
    listenerScorll:{
      bind:function(val,binding){
        console.log(val)
        console.log(binding)
      }
    }
  }
  ,
  data() {
    return {
      msg: {
        url: '',   //父子组件之间通讯要用对象来传值才能双向改变
        img: '',
        musicid: '',
        playBtn: "paused",
        progressWidth: 0,
        duration: "0:00",
        currentTime: "0:00",
      },
      myAudioShow:true  
    }
  },
  methods: {
    },
  computed: {
    fbackgroud:function(){
      return "background-image:url("+this.msg.img+")"
    }
  }
  ,
  components: {
    myHeader: myHeader,
    myTabbar: myTabbar,
    mySwipe: mySwipe,
    myHot: myHot,
    myAudio:myAudio
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px 0 55px 0;
position:relative;
}
#app .bg{
 position:absolute;
 left: 0;
 right: 0;
 top:0;
 bottom: 0;
 background-color: #000;
  background-repeat: no-repeat;
  background-size:cover;
  -webkit-filter: blur(65px);
  filter: blur(65px); 
  opacity: .7; 
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
