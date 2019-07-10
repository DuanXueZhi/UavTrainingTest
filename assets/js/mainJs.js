/*
* create on 2019/7/9.
* explain: 
* */
// 专属文件
import apiFn from './lib/privateFiles/api/mainAPI'

// 跨项目公用文件
import publicJsFn from './lib/publicFiles/publicJsFn'

export default {
    apiFn,
    publicJsFn
}