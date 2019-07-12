<template>
    <view id="CoursePresentation">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="coursePresentationHeader">
            <view class="courseImageBox">
                <image :src="imageBaseUrl + courseInfo.CoursePicURL"></image>
            </view>
        </view>
        <view class="coursePresentationBody">
            <view class="navList">
                <view class="navBox" @tap="switchoverCard(1)" :class="{'navActive': showCard === 1}"><text>课程概述</text></view>
                <view class="navBox" @tap="switchoverCard(2)" :class="{'navActive': showCard === 2}"><text>课程目录</text></view>
            </view>
            <view class="presentationContentBox">
                <view class="overviewBox" v-if="showCard === 1">
                    <navigator :url="'CourseAdvertise?CourseID=' + courseID" hover-class="navigator-hover" open-type="navigate">
                        <view class="overviewTitle"><text>{{ courseInfo.Summary }}</text></view>
                        <view class="overviewImage"><image :src="imageBaseUrl + courseInfo.RecommendPicUrl"></image></view>
                    </navigator>
                </view>
                <view class="courseCatalogue" v-if="showCard === 2">
                    <uni-collapse>
                        <uni-collapse-item style="font-size: 14px !important;" v-for="(courseSectionItem, courseSectionIndex) in catalogueList" :key="courseSectionIndex" :title="courseSectionIndex + 1 + '.' + courseSectionItem.ChapterTitle">
                            <navigator :url="'CourseVideo?CourseID=' + courseID" hover-class="navigator-hover" open-type="navigate">
                                <view style="padding: 30upx;" v-if="courseSectionItem.son[courseSectionIndex].son === undefined" v-for="(sonCatalogueItem, sonCatalogueIndex) in courseSectionItem.son" :key="sonCatalogueIndex">{{ sonCatalogueItem.ChapterTitle }}</view>
                            </navigator>
                            <uni-collapse-item v-if="courseSectionItem.son[courseSectionIndex].son !== undefined" :title="sonCatalogueItem.ChapterTitle" v-for="(sonCatalogueItem, sonCatalogueIndex) in courseSectionItem.son" :key="sonCatalogueIndex">
                                <navigator :url="'CourseVideo?CourseID=' + courseID" hover-class="navigator-hover" open-type="navigate">
                                    <view style="padding: 30upx;" v-for="(sonItem, sonIndex) in sonCatalogueItem.son" :key="sonIndex">{{ sonItem.ChapterTitle }}</view>
                                </navigator>
                            </uni-collapse-item>
                        </uni-collapse-item>
                    </uni-collapse>
                </view>
            </view>
<!--            <view class="joinCourseBtn"><text>加入我的课程</text></view>-->
        </view>
    </view>
</template>

<script>
    import {uniCollapse, uniCollapseItem} from '@dcloudio/uni-ui'
    import apiConfig from '../../../assets/js/lib/privateFiles/api/configAPI'

    export default {
        components: {uniCollapse, uniCollapseItem},
        data () {
            return {
                msg: '课程介绍页面', // 文件说明
                showCard: 2,
                imageBaseUrl: apiConfig.imageBaseUrl,
                courseID: '', // 课程ID
                courseInfo: {}, // 课程信息
                catalogueList: [] // 目录信息
            }
        },
        onLoad (params) {
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
        onReady () {
            uni.hideLoading({})
            this.mainIndex()
        },
        methods: {
            /*
            * -----------------------------------------入口函数------------------------------------------
            * */
            mainIndex () {
                this.getCoursePresentationByCourseID()
                this.getCourseCatalogueListDataByCourseID()
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

            // 获取课程目录通过课程ID
            getCourseCatalogueListDataByCourseID () {
                let vm = this
                this.$jsFn.apiFn.course.APIGetCourseCatalogueByCourseID({CourseID: vm.courseID}).then(res => {
                    console.log('获取课程目录通过课程ID', res)
                    vm.catalogueList = vm.requestCallBackArrange('获取课程目录通过课程ID', res)
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
            // 切换卡片
            switchoverCard (index) {
                this.showCard = index
            }
            /*
            * -----------------------------------------图表数据处理+渲染 arrangeData*、makeCharts*------------------------------------------
            * */
            /* 数据处理 arrangeData */
            /* 渲染 makeCharts */

        }
    }
</script>

<style lang="less" scoped>
    @import url('../../../assets/less/mainLess');

    #CoursePresentation{
        background: @background-color-grey;
        .coursePresentationHeader{
            background: #fff;
            padding-bottom: 36upx;
            margin-bottom: 22upx;
            .courseImageBox{
                width: 100%;
                height: 400upx;
                >image{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .coursePresentationBody{
            background: #fff;
            .navList{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                .navBox{
                    font-size: 16px;
                    padding: 20upx 40upx;
                    border-bottom: 6px solid transparent;
                    &.navActive{
                        color: rgba(35, 184, 255, 1);
                        border-color: rgb(35, 184, 255);
                    }
                }
            }
            .presentationContentBox{
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
            .courseCatalogue{}
            /*.joinCourseBtn{
                display: inline-block;
                position: fixed;
                bottom: 40upx;
                right: 10upx;
                padding: 28upx 50upx;
                background: rgb(35, 184, 255);
                color: #fff;
                font-size: 14px;
                .border-radius(5px);
            }*/
        }
    }
</style>
