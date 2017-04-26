<template>
    <div id='myHot' class="bounce animated">
        <mySwipe></mySwipe>
        <div class="my-hot">
            <ul>
                <li v-for="(value,i) in datas">
                    <a href="javascript:;" :data-url="datas[i].url" :data-img="datas[i].albumpic_small" :data-imgbig="datas[i].albumpic_big" :data-musicid="datas[i].songid" @click="playing($event)"></a>
                    <img :src="datas[i].albumpic_small" :data-albumid='datas[i].albumid'>
                    <h3>{{ datas[i].songname }}</h3>
                    <h4>{{ datas[i].singername }}</h4>
                </li>
            </ul>
            </div>
    </div>
</template>
<script>
import axios from 'axios'
import mySwipe from './swipe.vue'
export default {
    props: ['msg'],
    beforeCreate: function () {
        var _this = this
        axios.get("http://route.showapi.com/213-4", {
            params: {
                "showapi_appid": "34930",
                "showapi_sign": "4e8350d611e2422da79942a48a0a20b1",
                "topid": "5"
            }
        }
        )
            .then(function (data) {
                _this.datas = data.data.showapi_res_body.pagebean.songlist
            }).catch(function () {
                alert("网络不是太好，请刷新下")
            })
    },
    data() {
        return {
            datas: [],
            musicurl: '',
            img: '',
            musicid: '',
            imgbig: ''
        }
    },
    components: {
        mySwipe: mySwipe
    },
    methods: {
        playing: function ($event) {
            this.musicurl = $event.target.dataset.url
            this.img = $event.target.dataset.img
            this.musicid = $event.target.dataset.musicid
            this.imgbig = $event.target.dataset.imgbig

            this.msg.playBtn = 'paused'
            this.msg.url = this.musicurl
            this.msg.img = this.img
            this.msg.musicid = this.musicid
            this.msg.imgbig = this.imgbig
        }
    },
    mounted: function () {

    }
}
</script>
<style>
#myHot .my-hot li {
    display: block;
    overflow: hidden;
    margin: 5px 0;
    color: #fff;
    position: relative;
}

#myHot .my-hot li a {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
}

#myHot .my-hot li img {
    float: left;
    border-radius: 50%;
}

#myHot .my-hot li h3 {
    font-size: 18px;
    line-height: 36px;
}

#myHot .my-hot li h4 {
    font-size: 14px;
    line-height: 24px;
    margin-top: 12px;
}
</style>