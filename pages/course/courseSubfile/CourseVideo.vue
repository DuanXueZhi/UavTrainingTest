<template>
    <view id="CourseVideo">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="videoBox">
            <video id="myVideo" :src="videoUrl" autoplay="true" controls></video>
        </view>
        <view class="knowledgePoint" v-if="chapterTitle !== ''">
            <view class="titleName">知识要点：</view>
            <view class="chapterTitle"><text class="titleText">{{ chapterTitle }}</text></view>
            <view class="singleKnowledgePoint" v-for="(knowledgePointItem, knowledgePointIndex) in content" :key="knowledgePointIndex" @tap="playVideo(knowledgePointItem.ThirdContentUrl)">{{ knowledgePointItem.ContentName }}</view>
        </view>
        <view class="catalogueBox">
            <view class="navList">
                <view class="navBox" :class="{'navActive': showCard === 2}"><text>课程目录</text></view>
                <navigator :url="'CourseAdvertise?CourseID=' + courseID" hover-class="navigator-hover" open-type="navigate">
                    <view class="navBox" :class="{'navActive': showCard === 1}"><text>课程概述</text></view>
                </navigator>
            </view>
            <uni-collapse>
                <uni-collapse-item  v-for="(courseSectionItem, courseSectionIndex) in catalogueList" :key="courseSectionIndex" :title="courseSectionIndex + 1 + '.' + courseSectionItem.ChapterTitle">
<!--                    <picker :range="content">-->
                        <view style="padding: 30upx;" v-if="courseSectionItem.son[courseSectionIndex].son === undefined" v-for="(sonCatalogueItem, sonCatalogueIndex) in courseSectionItem.son" :key="sonCatalogueIndex" @tap="courseKnowledgePoint(sonCatalogueItem)">{{ sonCatalogueItem.ChapterTitle }}</view>
<!--                    </picker>-->
                    <uni-collapse-item style="padding-left: 30upx;" v-if="courseSectionItem.son[courseSectionIndex].son !== undefined" :title="sonCatalogueItem.ChapterTitle" v-for="(sonCatalogueItem, sonCatalogueIndex) in courseSectionItem.son" :key="sonCatalogueIndex">
<!--                        <picker :range="content">-->
                            <view class="uni-input" style="padding: 30upx;" v-for="(sonItem, sonIndex) in sonCatalogueItem.son" :key="sonIndex" @tap="courseKnowledgePoint(sonCatalogueItem)">{{ sonItem.ChapterTitle }}</view>
<!--                        </picker>-->
                    </uni-collapse-item>
                </uni-collapse-item>
            </uni-collapse>
        </view>
    </view>
</template>

<script>
    import {uniCollapse, uniCollapseItem} from '@dcloudio/uni-ui'

    export default {
        components: {uniCollapse, uniCollapseItem},
        data() {
            return {
                msg: '课程视频页面', // 文件说明
                showCard: 2,
                courseID: '', // 课程ID
                catalogueList: [], // 课程目录列表
                chapterTitle: '', // 知識點章節名
                content: [], // 知識點內容
                videoUrl: '' // 视频播放路径
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
            mainIndex() {
                this.getCourseCatalogueListDataByCourseID()
            },

            /*
              * -----------------------------------------公用------------------------------------------
              * */
            /* 获取or请求函数 */
            // 获取课程目录通过课程ID
            getCourseCatalogueListDataByCourseID () {
                let vm = this
                this.$jsFn.apiFn.course.APIGetCourseCatalogueByCourseID({CourseID: vm.courseID}).then(res => {
                    console.log('获取课程目录通过课程ID', res)
                    vm.catalogueList = vm.requestCallBackArrange('获取课程目录通过课程ID', res)
                })
            },

            // 获取课程视频ID通过课程ID
            getCourseVideoIDByCourseID (ChapterID) {
                let vm = this
                this.$jsFn.apiFn.course.APIGetCourseCatalogueVideoByCourseID({ ChapterID: ChapterID }).then(res => {
                    console.log('获取课程视频ID通过课程ID', res)
                    vm.findCourseSection(vm.requestCallBackArrange('获取课程视频ID通过课程ID', res))
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
            // 点击课程获取知识点
            courseKnowledgePoint (item) {
                console.log('获取视频', item)
                this.getCourseVideoIDByCourseID(item.ChapterID)
            },

            // 寻找第二、三级数据
            findCourseSection (item) {
                this.chapterTitle = item.ChapterTitle
                this.content = item.Contents
                this.catalogueList.forEach(e => {
                    if (e.CourseID === item.CourseID) {
                        if (item.CourseID === item.ParentID) {
                            e.son.forEach(son => {
                                if (son.ChapterID === item.ChapterID) {
                                    son.content = item.Contents
                                }
                            })
                        } else {
                            e.son.forEach(oneSon => {
                                if (oneSon.ChapterID === item.ParentID) {
                                    oneSon.forEach(twoSon => {
                                        if (twoSon.ChapterID === item.ChapterID) {
                                            towSon.content = item.Contents
                                        }
                                    })
                                }
                            })
                        }
                    }
                })
            },

            // 播放视频
            playVideo (url) {
                console.log('播放视频', url)
                this.videoUrl = url
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

    #CourseVideo {
        background: @background-color-grey;
        .videoBox{
            background: #fff;
            padding-bottom: 28upx;
            margin-bottom: 28upx;
            >video{
                width: 100%;
            }
        }
        .knowledgePoint{
            background: #fff;
            padding: 20upx;
            margin-bottom: 28upx;
            .titleName{
                font-size: 16px;
                color: #c33;
                padding-bottom: 10px;
            }
            .chapterTitle{
                padding: 8upx 20upx;
                font-size: 14px;
                .titleText{
                    color: @color-primary;
                }
            }
            .singleKnowledgePoint{
                color: @color-primary;
                font-size: 14px;
                padding: 24upx 16upx;
                margin: 0 30upx;
                border-bottom: 1px solid #f7f7f7;
            }
        }
        .catalogueBox{
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
        }
    }
</style>
