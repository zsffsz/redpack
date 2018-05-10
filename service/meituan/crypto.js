/* eslint-disable */
const CryptoJS = require('crypto-js')

const t = '240789B06A4D4FAG'
  , n = '1513D520B9C1459C'
  , r = 'sxaa1k89dc'

function aesCrypto () {
  return {
    validate: function (e) {
      var t = this
      if (e.length < 32)
        return !1
      var n = e.slice(0, 32)
        , r = e.slice(32)
        , i = this.decrypto(r)
      return n == t.md5(i) ? i : !1
    },
    md5: function (t) {
      return CryptoJS.MD5(t + r).toString().toLocaleUpperCase()
    },
    decrypto: function (e) {
      var r = CryptoJS.enc.Utf8.parse(t)
        , i = CryptoJS.enc.Utf8.parse(n)
        , s = CryptoJS.AES.decrypt(e, r, {
        iv: i,
        mode: CryptoJS.mode.CBC
      })
        , o = CryptoJS.enc.Utf8.stringify(s).toString()
      return o
    }
  }
}

function encrypt (text) {
  const key = CryptoJS.enc.Utf8.parse(t)
  const iv = CryptoJS.enc.Utf8.parse(n)
  const msg = JSON.stringify(text)
  const result = CryptoJS.AES.encrypt(msg, key, {
    iv,
    mode: CryptoJS.mode.CBC
  }).toString()
  return aesCrypto().md5(msg) + encodeURIComponent(result)
}

function decrypto (v) {
  return aesCrypto().validate(decodeURIComponent(v))
}

module.exports = {
  encrypt,
  decrypto
}
