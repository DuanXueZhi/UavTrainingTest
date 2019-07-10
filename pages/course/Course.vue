<template>
    <view id="Course">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="courseHeader">
            <view class="titleBox">
                <text class="titleText">所有课程</text>
            </view>
        </view>
        <view class="courseBody">
            <view class="courseCardBox" v-for="(courseCardItem, courseCardIndex) in courseCardList" :key="courseCardIndex" :style="{backgroundImage: 'url(' + courseCardItem.backgroundImage + ')'}">
                <navigator url="courseSubfile/CoursePresentation" hover-class="navigator-hover" open-type="navigate">
                    <text>{{ courseCardItem.titleText }}</text>
                </navigator>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data () {
            return {
                msg: '课程页面', // 文件说明
                courseCardList: [
                    {
                        backgroundImage: require('../../static/images/courseImage/1.png'),
                        titleText: ''
                    },
                    {
                        backgroundImage: require('../../static/images/courseImage/2.png'),
                        titleText: '无人机入门大疆域2哈苏版实际操作教学'
                    },
                    {
                        backgroundImage: require('../../static/images/courseImage/3.png'),
                        titleText: '无人机入门大疆域2哈苏版实际操作教学'
                    }
                ]
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
        onShow () {
            console.log('onShow')
        },
        onReady () {
            console.log('onReady')
            uni.hideLoading({})
        },
        onReachBottom () {
            console.log('触底')
        },
        methods: {}
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
            padding: 0 32upx;
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
