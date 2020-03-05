<template>
  <div class="container">
    <div id="content">
      <div id="article">
        <div id="article-header">
          <p>{{this.$route.params.type.toUpperCase()}}</p>
        </div>

        <div id="article-body">
          <div class="article-content" v-for="item in type_article_list" :key="item.id">
            <img :src="type" />
            <ul>
              <h3>
                <nuxt-link :to="`/article_detail/${item.id}`">{{item.title}}</nuxt-link>
              </h3>
              <p class="neirong">{{item.body}}</p>
              <p>
                <span>
                  <i class="iconfont">&#xe64f;</i>
                  <a href="#" class="type">{{item.type}}</a>
                </span>
                <span>
                  <i class="iconfont">&#xe63b;</i>
                  <i class="date">{{item.addtime}}</i>
                </span>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div id="catalog">
      <div id="nav-right">
        <div id="nav-right-top">
          <nuxt-link class="nav-a1" to="/article_list/html">
            <span>HTML</span>
          </nuxt-link>
          <nuxt-link class="nav-a2" to="/article_list/css">
            <span>CSS</span>
          </nuxt-link>
          <nuxt-link class="nav-a3" to="/article_list/javascript">
            <span>JavaScript</span>
          </nuxt-link>
        </div>
        <div id="nav-right-bottom">
          <nuxt-link class="nav-a4" to="/article_list/vue">
            <span>Vue</span>
          </nuxt-link>
          <nuxt-link class="nav-a5" to="/article_list/nodejs">
            <span>Nodejs</span>
          </nuxt-link>
          <nuxt-link class="nav-a6" to="/article_list/life">
            <span>生活趣事</span>
          </nuxt-link>
        </div>
      </div>

      <h1>最新文章</h1>
      <ul>
        <li v-for="item in newArticleList" :key="item.id">
          <nuxt-link :to="`/article_detail/${item.id}`">{{item.title}}</nuxt-link>
        </li>
      </ul>

      <h1>友情链接</h1>
      <div id="youqing">
        <a href="https://www.w3cschool.cn/" target="_blank">w3cschool官网</a>
        <a href="https://cn.vuejs.org/" target="_blank">vue官网</a>
        <a href="https://www.runoob.com/" target="_blank">菜鸟教程</a>
        <a href="http://nodejs.cn/" target="_blank">node中文网</a>
        <a href="http://jquery.cuishifeng.cn/" target="_blank">jquery文档</a>
      </div>
    </div>
  </div>
</template>

<script>
import { httpGet } from "../../http/index";
export default {
  async asyncData({ params }) {
    var reg1 = new RegExp("T", "g");
    var reg2 = new RegExp(".000Z", "g");
    let res = await httpGet("article");
    let type_article = await httpGet("article/" + params.type);
    let data = res.data.splice(-5);
    let type_data = type_article.data;
    if (res.status === 200 && type_article.status === 200) {
      for (let i of type_data) {
        i.addtime = i.addtime.replace(reg1, " ").replace(reg2, "");
      }
      return {
        newArticleList: data,
        type_article_list: type_data,
        type: "http://47.100.137.31/img/" + params.type+"2.png"
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/less/article_list.less";
</style>