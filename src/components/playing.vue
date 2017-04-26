<template>
<div id="playing" class="zoomInLeft animated">
<div>
<img :src="msg.imgbig" alt="">
<p v-for="(value,i) in lyric">{{ value }}</p>
</div>
</div>
</template>

<script>
import axios from 'axios'
    export default {
        props:['msg'],
        data(){
            return {
                datas:''
            }
        },
        mounted:function(){
            var _this=this
          axios.get("http://route.showapi.com/213-2",{
              params:{
                "showapi_appid":"34930",
                "showapi_sign":"4e8350d611e2422da79942a48a0a20b1",
                "musicid":_this.msg.musicid
              }
          }).then(function(data){
            _this.datas=data.data.showapi_res_body.lyric_txt
          })
        },
        computed:{
            lyric:function(){
                if(this.datas === undefined){
                    return
                }
                var lyric=this.datas.split(" ");
                var arr=[];
                lyric.forEach(function(cur,i){
                  if(cur!=""){
                      arr.push(cur)
                  }
                })
                return arr
            }
        }
    }
</script>
<style>
#playing{
    position: relative;
    z-index: 2;
}
    #playing p{
        font-size:16px;
        line-height:24px;
    }
    #playing p:nth-of-type(1){
        font-size:24px;
        line-height:36px;
    }
</style>