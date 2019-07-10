<template>
    <view id="UserEditInformation">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="userEditInformationHeader">
            <view class="userHeaderImage">
                <image :src="require('../../../static/images/defaultHeaderImage/greyHeadImage.png')"></image>
            </view>
            <view class="headerRight">
                <view class="setHeaderTextBox">
                    <text>设置头像</text>
                </view>
                <view class="setHeaderArrow">
                    <text class="iconfont">&#xe678;</text>
                </view>
            </view>
        </view>
        <view class="userEditInformationBody">
            <view class="userBaseInformationList">
                <view class="singleMsgBox"><text>姓名</text><text class="userMsg">王乐乐</text></view>
                <view class="singleMsgBox"><text>部门</text><text class="userMsg">运检部</text></view>
            </view>
            <view class="userEtcInformationList">
                <view class="singleMsgBox"><text>手机</text><text class="userMsg">18612582536</text></view>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: '用户编辑个人资料' // 文件说明
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
    @import url('../../../assets/less/mainLess');

    #UserEditInformation {
        background: @background-color-grey;
        .userEditInformationHeader{
            padding: 28upx 20upx;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            background: #fff;
            margin-bottom: 40upx;
            .userHeaderImage{
                margin-left: 20upx;
                width: 144upx;
                height: 144upx;
                >image{
                    width: 100%;
                    height: 100%;
                }
            }
            .headerRight{
                flex-grow: 1; /* 沾满剩余空间 */
                margin-left: 40upx;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                .setHeaderTextBox{
                    .flex-direction;
                    font-size: 14px;
                }
                .setHeaderArrow{
                    .flex-direction;
                    color: @font-color-tint;
                }
            }
        }
        .userEditInformationBody{
            font-size: 14px;
            .userBaseInformationList, .userEtcInformationList{
                .singleMsgBox{
                    margin-bottom: 1px;
                    background: #fff;
                    padding: 16upx;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .userMsg{
                        color: @font-color-tint;
                    }
                }
            }
            .userBaseInformationList{
                margin-bottom: 40upx;
            }
        }
    }
</style>
