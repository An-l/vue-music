<template>
  <div class="singer">
    <list-view :data="singerList"></list-view>
  </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
import ListView from 'base/listView/listView'

const HOT_SINGER_LEN = 10
const HOT_NAME = '热门'

export default {
  data() {
    return {
      singerList: [],
      hotSingerList: [],
      singerMap: {}
    }
  },
  methods: {
    _getSingerList() {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singerList = this._normalizeSinger(res.data.list)
        }
      })
    },
    _normalizeSinger(list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        let key = item.Findex
        let isNumber = !isNaN(Number(key))
        if (isNumber) {
          return
        }

        if (!map[key]) {
          map[key] = {}
          map[key].title = key
          map[key].items = []
        }
        map[key].items.push(new Singer({
          id: item['Fsinger_mid'],
          name: item['Fsinger_name']
        }))
        // 设置热门歌手
        if (index < HOT_SINGER_LEN) {
          map.hot.items.push(new Singer({
            id: item['Fsinger_mid'],
            name: item['Fsinger_name']
          }))
        }
      })

      // 为了得到有序列表，处理map
      let hot = []
      let ret = []
      for (var key in map) {
        var item = map[key]
        if (item.title === HOT_NAME) {
          hot.push(item)
        } else if (item.title.match(/[a-zA-Z]/)) {
          ret.push(item)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    }
  },
  created() {
    this._getSingerList()
  },
  components: {
    ListView
  }
}
</script>

<style lang="scss" scoped>
.singer {
  position: fixed;
  top: 88px;
  bottom: 0;
  width: 100%;
}
</style>

