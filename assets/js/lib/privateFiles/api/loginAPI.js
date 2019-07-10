/*
* create on 2019/7/9.
* explain: 
* */
import apiConfig from './configAPI'

const APIUserLogin = (body) => {
    console.log('参数', body)
    return uni.request({
        url: apiConfig.baseUrl + '/user/login',
        method: 'POST',
        header: {
            Authkey: 't.api.ai.airwing.ai',
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: body
    })
}

export default {
    APIUserLogin
}