<template>
  <div id="music" v-shows class="bounceInUp animated">
    <router-link to="/playing">
    </router-link>
    <img :src="msg.img" alt="">
    <div class="progress">
      <span :style="progress"></span>
      <b class="currentTime">{{ msg.currentTime }}</b>
      <b class="duration">{{ msg.duration }}</b>
    </div>
    <i class="play-btn" :class="msg.playBtn" @click="playCtrl($event)"></i>
    <audio :src="msg.url" id="musicbox" autoplay :data-musicid="msg.musicid" @timeupdate="timeupdate($event)"></audio>
  </div>
</template>
<script>
export default {
  props:['msg'],
  methods: {
        playCtrl: function ($event) {
      var _this = this
      var myAudio = document.querySelector("audio")
      if (myAudio.paused) {
        _this.msg.playBtn = 'paused'
        myAudio.play()
      } else {
        _this.msg.playBtn = 'play'
        myAudio.pause()
      }
    },
    timeupdate: function ($event) {
      var _this = this;
      var el = $event.target;
      el.addEventListener("timeupdate", function () {
        var m = parseInt(el.duration) / 60 > 0 ? parseInt(parseInt(el.duration) / 60) : "0";
        var s1 = parseInt(el.duration) % 60 >= 10 ? parseInt(parseInt(el.duration) % 60 / 10) : "0";
        var s2 = parseInt(parseInt(el.duration) % 60 % 10);
        _this.msg.duration = m + ":" + s1 + s2;//全部时间
        m = parseInt(el.currentTime) / 60 > 0 ? parseInt(parseInt(el.currentTime) / 60) : "0";
        s1 = parseInt(el.currentTime) % 60 >= 10 ? parseInt(parseInt(el.currentTime) % 60 / 10) : "0";
        s2 = parseInt(parseInt(el.currentTime) % 60 % 10);
        _this.msg.currentTime = m + ":" + s1 + s2;//目前的时间
        _this.msg.progressWidth = el.currentTime / el.duration * 100;
      })
    }
  },
    directives: {
    shows: {
    inserted: function (el) {
    
    }
  }
  },
  computed: {
    progress: function () {
      return "width:" + this.msg.progressWidth + "%"
    }
  }

}
</script>
<style>
#music {
  width: 100%;
  position: fixed;
  bottom: 55px;
  height: 50px;
  background: rgba(255, 255, 255, .8);
  left: 0;
  z-index: 200;
}

#music>a {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 0;
  z-index: 2;
}

#music img {
  position: absolute;
  left: 0;
  height: 50px;
  z-index: 1;
}

#music .progress {
  position: absolute;
  display: block;
  left: 110px;
  height: 5px;
  background: #000;
  top: 50%;
  margin-top: -3px;
  z-index: 1;
  width: 70%;
}

#music .progress .currentTime {
  position: absolute;
  left: 0;
}

#music .progress .duration {
  position: absolute;
  right: 0;
}

#music .progress span {
  display: block;
  width: 0;
  height: 5px;
  background: #42b983;
}

#music .play-btn {
  top: 50%;
  margin-top: -20px;
  position: absolute;
  left: 55px;
  width: 40px;
  height: 40px;
  z-index: 1;
}

#music .play-btn.play {
  background: url('../assets/play.png') no-repeat;
  background-size: cover;
}

#music .play-btn.paused {
  background: url('../assets/paused.png') no-repeat;
  background-size: cover;
}

#music audio {
  margin-left: 50px;
  margin-top: 10px;
  z-index: 1;
}

</style>