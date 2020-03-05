<template>
  <div class="container">
    <div class="article-header">
      <p>HTML/CSS</p>
    </div>
    <div class="video-list">
      <nuxt-link :to="`/video_study/${item.id}`" v-for="item in HC" :key="item.id">
        <img :src="item.imgsrc" />
        <span class="video-title">{{item.title}}</span>
        <div class="list-bottom">
          <div>
            <i class="iconfont">&#xe64f;</i>
            <span class="type">{{item.type}}</span>
          </div>
          <div>
            <i class="iconfont">&#xe63b;</i>
            <i class="date">{{item.addtime}}</i>
          </div>
        </div>
      </nuxt-link>
    </div>

    <div class="article-header">
      <p>JavaScript</p>
    </div>
    <div class="video-list">
        <nuxt-link :to="`/video_study/${item.id}`" v-for="item in J" :key="item.id">
        <img :src="item.imgsrc" />
        <span class="video-title">{{item.title}}</span>
        <div class="list-bottom">
          <div>
            <i class="iconfont">&#xe64f;</i>
            <span class="type">{{item.type}}</span>
          </div>
          <div>
            <i class="iconfont">&#xe63b;</i>
            <i class="date">{{item.addtime}}</i>
          </div>
        </div>
      </nuxt-link>
    </div>

    <div class="article-header">
      <p>Vue</p>
    </div>
    <div class="video-list">
        <nuxt-link :to="`/video_study/${item.id}`" v-for="item in V" :key="item.id">
        <img :src="item.imgsrc" />
        <span class="video-title">{{item.title}}</span>
        <div class="list-bottom">
          <div>
            <i class="iconfont">&#xe64f;</i>
            <span class="type">{{item.type}}</span>
          </div>
          <div>
            <i class="iconfont">&#xe63b;</i>
            <i class="date">{{item.addtime}}</i>
          </div>
        </div>
      </nuxt-link>
    </div>

    <div class="article-header">
      <p>Nodejs</p>
    </div>
    <div class="video-list">
        <nuxt-link :to="`/video_study/${item.id}`" v-for="item in N" :key="item.id">
        <img :src="item.imgsrc" />
        <span class="video-title">{{item.title}}</span>
        <div class="list-bottom">
          <div>
            <i class="iconfont">&#xe64f;</i>
            <span class="type">{{item.type}}</span>
          </div>
          <div>
            <i class="iconfont">&#xe63b;</i>
            <i class="date">{{item.addtime}}</i>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { httpGet } from "../../http/index";
export default {
  async asyncData() {
    var reg1 = new RegExp("T", "g");
    var reg2 = new RegExp(".000Z", "g");
    let video_res = await httpGet("videos");
    if (video_res.status === 200) {
      let html_css_videos = [];
      let javascript_videos = [];
      let vue_video = [];
      let nodejs_video = [];
      for (let i of video_res.data) {
        i.addtime = i.addtime.replace(reg1, " ").replace(reg2, "");
        if (i.type === "HTML/CSS") {
          html_css_videos.push(i);
        } else if (i.type === "JavaScript") {
          javascript_videos.push(i);
        } else if (i.type === "Vue") {
          vue_video.push(i);
        } else if (i.type === "Nodejs") {
          nodejs_video.push(i);
        }
      }

      return {
        HC: html_css_videos,
        J: javascript_videos,
        V: vue_video,
        N: nodejs_video
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/video_study.less";
</style>