<template>
  <div class="song-list">
    <ul>
      <li @click="selectItem(song, index)" v-for="(song, index) in songs" class="item">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>    
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    songs: {
      type: Array,
      default: []
    }
  },
  methods: {
    getDesc(song) {
      return `${song.singer} 。${song.album}`
    },
    selectItem(item, index) {
      this.$emit('select', item, index)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable";
@import "~common/scss/mixin";

.song-list {
  .item {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 64px;
    font-size: $font-size-medium;

    .content {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      .name {
        @include no-wrap();
        color: $color-text;
      }
      .desc {
        @include no-wrap();
        margin-top: 2px;
        color: $color-text-d;
      }
    }
  }
}

</style>
