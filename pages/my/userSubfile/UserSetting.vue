<template>
    <view id="UserSetting">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="userSettingBody">
            <view class="singleOperate"><text class="operateText">修改密码</text><text class="iconfont">&#xe678;</text></view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: '用户个人设置页面' // 文件说明
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
    
    #UserSetting {
        .userSettingBody{
            padding: 16upx;
            .singleOperate{
                border-bottom: 1px solid #bec2c9;
                padding: 20upx;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                color: @font-color-black;
                .operateText{
                    font-size: 14px;
                }
                >.iconfont{
                    font-size: 12px;
                    height: 40upx;
                    line-height: 40upx;
                }
            }
        }
    }
</style>
