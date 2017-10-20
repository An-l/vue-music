<template>
  <div class="player" v-show="playList.length > 0">
      <div class="normal-player" v-show="fullScreen">
        <div class="background">
          <img :height="100%" width="100%" src="" >
        </div>
        <div class="top">
          <div class="back">
            <i class="icon-back"></i>
          </div>
          <h1 class="title"></h1>
          <h2 class="subtitle"></h2>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper">
              <div class="cd">
                <img class="image">
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="operators">
            <div class="icon i-left">
              <i class="icon-sequence"></i>
            </div>
            <div class="icon i-left">
              <i class="icon-prev"></i>
            </div>
            <div class="icon i-center">
              <i class="icon-play"></i>
            </div>
            <div class="icon i-right">
              <i class="icon-next"></i>
            </div>
            <div class="icon i-right">
              <i class="icon-not-favorite"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="mini-player" v-show="!fullScreen">
          <div class="icon">
            <img width="40" height="40">
          </div>
          <div class="text">
            <div class="name"></div>
            <div class="desc"></div>
          </div>
          <div class="control"></div>
          <div class="control">
            <i class="icon-playlist"></i>
          </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '~common/scss/variable';

.player {
  .normal-player {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 150;
    background: $color-background;

    .background {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.6;
      filter: blur(20px);
    }
    .top {
      position: relative;
      margin-bottom: 25px;
      .back {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        .icon-back {
          display: block;
          padding: 9px;
          font-size: $font-size-large-x;
        }
      }
      .title {
        width: 70%;
        margin: 0 auto;
        line-height: 40px;
        text-align: center;
        @include no-wrap();
        font-size: $font-size-large;
        color: $color-text;
      }
      .subtitle {
        line-height: 20px;
        text-align: center;
        font-size: $font-size-medium;
        color: $color-text;
      }
    }
  }
}
</style>
