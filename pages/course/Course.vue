<template>
    <view id="Course">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="courseHeader">
            <view class="titleBox">
                <text class="titleText">所有课程</text>
            </view>
        </view>
        <view class="courseBody">
            <view class="courseCardBox" v-for="(courseCardItem, courseCardIndex) in courseCardList" :key="courseCardIndex" :style="{backgroundImage: 'url(' + imageBaseUrl + courseCardItem.CoursePicURL + ')'}">
                <navigator :url="'courseSubfile/CoursePresentation?CourseID=' + courseCardItem.CourseID" hover-class="navigator-hover" open-type="navigate">
                    <text>{{ courseCardItem.CourseName }}</text>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script>
    import apiConfig from '../../assets/js/lib/privateFiles/api/configAPI'

    export default {
        data () {
            return {
                msg: '课程页面', // 文件说明
                imageBaseUrl: apiConfig.imageBaseUrl,
                courseCardList: []
            }
        },
        onLoad() {
            console.log('oLoad')
            uni.showLoading({
                title: '加载中...',
                mask: true,
                success: () => {},
                fail: () => {},
                complete: () => {}
            })
        },
        onShow () {},
        onReady () {
            uni.hideLoading({})
            this.mainIndex()
        },
        onReachBottom () {
            console.log('触底')
        },
        methods: {
            /*
            * -----------------------------------------入口函数------------------------------------------
            * */
            mainIndex () {
                this.getAllCourse()
            },

            /*
            * -----------------------------------------公用------------------------------------------
            * */
            /* 获取or请求函数 */
            // 获取所有课程
            getAllCourse () {
                let vm = this
                this.$jsFn.apiFn.course.APIGetAllCourser({}).then(res => {
                    console.log('获取所有课程', res)
                    vm.courseCardList = vm.requestCallBackArrange('获取所有课程', res)
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
            },
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
    @import '../../assets/less/mainLess';

    #Course{
        background: url("../../static/images/backgroundImage/userLoginBackgroundImage.jpg");
        .background-size(cover);
        min-height: 768px;
        .courseHeader{
            margin-bottom: 16upx;
            .titleBox{
                text-align: center;
                position: relative;
                .titleText{
                    font-size: 14px;
                    color: #fff;
                    height: 25px;
                    line-height: 25px;
                    &:before, &:after{
                        position: absolute;
                        background: #fff;
                        content: "";
                        height: 1px;
                        top: 56%;
                        width: 140upx;
                    }
                    &:before{
                        left: 120upx;
                    }
                    &:after{
                        right: 120upx;
                    }
                }
            }
        }
        .courseBody{
            padding: 0 32upx 20upx;
            .courseCardBox{
                color: #fff;
                font-size: 18px;
                padding: 0 26upx;
                margin-bottom: 20upx;
                height: 190px;
                line-height: 190px;
                .border-radius(10upx);
                .background-size(cover);
                >uni-navigator{
                    height: 100%;
                }
            }
        }
    }
</style>
