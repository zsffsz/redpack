const randomHeadimg = require('./random-headimg')
const randomNickname = require('./random-nickname')
const randomOpenid = require('./random-openid')
const crypto = require('./crypto')
const logger = require('../logger')

module.exports = nickname => {
  if (nickname) {
    if (nickname.length === 11) {
      // 当使用大号手机号领取时，昵称用手机号（这样在领取成功时能看到弹出），中间 4 位打码
      nickname = nickname.replace(/(\d{3})(\d{4})(\d{3})/, '$1****$3')
    }
  } else {
    nickname = randomNickname()
  }
  const ewxinfo = {
    nickname,
    imgUrl: randomHeadimg(),
    openId: randomOpenid()
  }
  logger.info(JSON.stringify(ewxinfo))
  return `ewxinfo="${crypto.encrypt(ewxinfo)}"`
}

