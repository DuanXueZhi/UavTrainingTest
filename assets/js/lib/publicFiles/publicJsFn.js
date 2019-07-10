/*
* create on 2019/7/10.
* explain: 
* */
import CryptoJS from 'crypto-js'
// crypto-js加密
let key = CryptoJS.enc.Utf8.parse('"-----BEGIN PUBLIC KEY-----\n' +
    '                    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCCHbwZCOhcm/pIyKXC1DO/Vdd5\n' +
    '                    6jOFBvZXzQaxmBk25OGPMJ2+bVS+/QWQ3oDZ6v1MUVTmI8gUXTcvdqdq7bJNiuX7\n' +
    '                    qhL9UKFDKlEu8Um41BYXq8Eu4GByw91jHbLoVlTC8+6uZgFIuBY3ibPFgld0dBNl\n' +
    '                    e3IS4yQLBPeILYPqHQIDAQAB\n' +
    '-----END PUBLIC KEY-----"')
let iv = CryptoJS.enc.Utf8.parse('')
// 加密
const Encrypt = (word) => {
    let srcs = CryptoJS.enc.Utf8.parse(word)
    let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
    return encrypted.ciphertext.toString().toUpperCase()
}

export default {
    Encrypt
}