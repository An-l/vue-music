import { playMode } from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [], // 正在播放的列表（无论顺序还是随机播放）
  sequenceList: [], // 顺序的播放列表
  mode: playMode.sequence,
  currentIndex: -1
}

export default state
