//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData: {
    curLang: {},
    langList: [
      {
        "chs": "英文",
        "lang": "en",
        "index": 0
      },
      {
        "chs": "中文",
        "lang": "zh",
        "index": 1
      },
      {
        "chs": "日文",
        "lang": "jp",
        "index": 2
      },
      {
        "chs": "韩文",
        "lang": "kor",
        "index": 3
      },
      {
        "chs": "法文",
        "lang": "fra",
        "index": 4
      },
      {
        "chs": "西班牙文",
        "lang": "spa",
        "index": 5
      },
      {
        "chs": "阿拉伯文",
        "lang": "ara",
        "index": 6
      }

      ]
  }
})