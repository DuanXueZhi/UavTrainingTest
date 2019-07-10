<template>
    <view id="My">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="myHeader">
            <view class="headerTop">
                <navigator url="userSubfile/UserEditInformation" hover-class="navigator-hover" open-type="navigate">
                    <text>编辑资料</text>
                </navigator>
            </view>
            <view class="headerBody">
                <view class="userHeaderImage">
                    <image src="../../static/images/defaultHeaderImage/whiteHeadImage.png"></image>
                </view>
                <view class="userMsg">
                    <view><text>王乐乐</text></view>
                    <view><text>ID：890610</text></view>
                </view>
            </view>
        </view>
        <view class="myBody">
            <view class="operateList">
                <navigator url="userSubfile/UserEditInformation" hover-class="navigator-hover" open-type="navigate">
                    <view class="operateBox"><text class="iconfont">&#xe60a;</text><text class="operateText">我的课程</text></view>
                </navigator>
                <navigator url="userSubfile/UserSetting" hover-class="navigator-hover" open-type="navigate">
                    <view class="operateBox"><text class="iconfont">&#xe65a;</text><text class="operateText">设置</text></view>
                </navigator>
                <view class="operateBox"><text class="iconfont">&#xe60e;</text><text class="operateText">清除缓存</text></view>
                <navigator url="userSubfile/About" hover-class="navigator-hover" open-type="navigate">
                    <view class="operateBox"><text class="iconfont">&#xe601;</text><text class="operateText">关于</text></view>
                </navigator>
            </view>
            <view class="bodyBottom">
                <view class="loginOutBox">
                    <button class="loginOutBtn" type="warn">退出登录</button>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: '我的页面' // 文件说明
            }
        },
        onLoad() {
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
        },
        onReady() {
            uni.hideLoading({})
        },
        methods: {}
    }
</script>

<style lang="less" scoped>
    @import url('../../assets/less/mainLess.less');
    
    #My{
        .myHeader{
            color: #fff;
            font-size: 14px;
            padding: 16upx 16upx 60upx;
            background: url("../../static/images/backgroundImage/userLoginBackgroundImage.jpg");
            .background-size(100%);
            opacity: 0.57;
            .headerTop{
                text-align: right;
            }
            .headerBody{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                margin-left: 48upx;
                .userHeaderImage{
                    >image{
                        width: 144upx;
                        height: 144upx;
                    }
                }
                .userMsg{
                    margin-left: 40upx;
                    padding: 18upx 0 12upx;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
            }
        }
        .myBody{
            padding: 16upx;
            .operateList{
                .operateBox{
                    border-bottom: 1px solid #bec2c9;
                    padding: 20upx 0;
                    display: flex;
                    >.iconfont{
                        font-size: 20px;
                        color: #bec2c9;
                    }
                    .operateText{
                        padding-left: 20upx;
                        font-size: 14px;
                        height: 100%;
                        line-height: 22px;
                    }
                }
            }
            .bodyBottom{
                padding: 160upx 20upx;
                .loginOutBox{
                    .loginOutBtn{
                        font-size: 14px;
                        padding: 8upx 0;
                        background: rgb(229, 28, 35);
                        .border-radius(80upx);
                    }
                }
            }
        }
    }
</style>
