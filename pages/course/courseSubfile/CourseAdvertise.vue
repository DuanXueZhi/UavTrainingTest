<template>
    <view id="CourseAdvertise">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="overviewBox">
            <view class="overviewTitle"><text>{{ courseInfo.Summary }}</text></view>
            <view class="overviewImage"><image :src="imageBaseUrl + courseInfo.RecommendPicUrl"></image></view>
        </view>
    </view>
</template>

<script>
    import apiConfig from '../../../assets/js/lib/privateFiles/api/configAPI'

    export default {
        data() {
            return {
                msg: '课程宣传页面', // 文件说明
                imageBaseUrl: apiConfig.imageBaseUrl,
                courseID: '', // 课程id
                courseInfo: {} // 课程信息
            }
        },
        onLoad(params) {
            uni.showLoading({
                title: '加载中...',
                mask: true,
                success: () => {
                },
                fail: () => {
                },
                complete: () => {
                }
            })
            this.courseID = params.CourseID
        },
        onReady() {
            uni.hideLoading({})
            this.mainIndex()
        },
        methods: {
            /*
            * -----------------------------------------入口函数------------------------------------------
            * */
            mainIndex () {
                this.getCoursePresentationByCourseID()
            },

            /*
            * -----------------------------------------公用------------------------------------------
            * */
            /* 获取or请求函数 */
            // 获取课程简介通过课程ID
            getCoursePresentationByCourseID () {
                let vm = this
                this.$jsFn.apiFn.course.APIGetCoursePresentationByCourseID({CourseID: vm.courseID}).then(res => {
                    console.log('获取课程简介通过课程ID', res)
                    vm.courseInfo = vm.requestCallBackArrange('获取课程简介通过课程ID', res)
                })
            },
            /* 共用 */
            // 请求回调处理+判断
            requestCallBackArrange (local, res) {
                if (res[0] !== null) {
                    uni.showToast({
                        title: local + '错误',
                        icon: 'none',
                        duration: 2000
                    })
                } else {
                    if (res[1].statusCode === 200) {
                        if (res[1].data.code === 200) {
                            uni.showToast({
                                title: local + res[1].data.message,
                                icon: 'none',
                                duration: 2000
                            })
                            return res[1].data.data
                        }
                    }
                    uni.showToast({
                        title: local + res[1].data.message,
                        icon: 'none',
                        duration: 2000
                    })
                }
                return []
            }
            /*
            * -----------------------------------------页面操作------------------------------------------
            * */

            /*
            * -----------------------------------------图表数据处理+渲染 arrangeData*、makeCharts*------------------------------------------
            * */
            /* 数据处理 arrangeData */
            /* 渲染 makeCharts */
        }
    }
</script>

<style lang="less" scoped>
    #CourseAdvertise {
        .overviewBox{
            .overviewTitle{
                color: rgb(124, 128, 128);
                padding: 20upx;
                line-height: 26px;
                font-size: 14px;
                text-indent: 2em;
            }
            .overviewImage{
                width: 100%;
                >image{
                    width: 100%;
                }
            }
        }
    }
</style>
