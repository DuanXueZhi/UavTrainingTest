/*
* create on 2019/7/11.
* explain: 
* */
import apiConfig from './configAPI'

// 获取所有课程
const APIGetAllCourser = (params) => {
    params.EnterpriseID = apiConfig.store.getters.userInformation.EnterpriseID
    return uni.request({
        url: apiConfig.baseUrl + '/training-chapter-manage/training-course-info',
        method: 'GET',
        header: {
            Authkey: 't.api.ai.airwing.ai',
            Token: apiConfig.store.getters.userInformation.Token,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: params
    })
}

// 获取课程概述通过课程ID
const APIGetCoursePresentationByCourseID = (params) => {
    params.EnterpriseID = apiConfig.store.getters.userInformation.EnterpriseID
    return uni.request({
        url: apiConfig.baseUrl + '/training-chapter-manage/training-course-info-in',
        method: 'GET',
        header: {
            Authkey: 't.api.ai.airwing.ai',
            Token: apiConfig.store.getters.userInformation.Token,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: params
    })
}

// 获取课程目录通过课程ID
const APIGetCourseCatalogueByCourseID = (params) => {
    params.EnterpriseID = apiConfig.store.getters.userInformation.EnterpriseID
    return uni.request({
        url: apiConfig.baseUrl + '/training-chapter-manage/training-course-info-list',
        method: 'GET',
        header: {
            Authkey: 't.api.ai.airwing.ai',
            Token: apiConfig.store.getters.userInformation.Token,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: params
    })
}

export default {
    APIGetAllCourser,
    APIGetCoursePresentationByCourseID,
    APIGetCourseCatalogueByCourseID
}