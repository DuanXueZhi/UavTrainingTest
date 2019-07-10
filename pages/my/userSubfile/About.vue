<template>
    <view id="About">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="aboutBody">
            <view class="companySignBox">
                <view class="logBox"><image :src="require('../../../static/images/companyImage/companyLog.png')"></image></view>
                <view class="nameBox"><image :src="require('../../../static/images/companyImage/companyName.png')"></image></view>
            </view>
            <view class="softInformation">
                <text>无人机巡检实训平台</text>
                <text class="softVersion">版本号：6.13.0</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: '关于页面' // 文件说明
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
    
    #About {
        min-height: 768px;
        text-align: center;
        .aboutBody{
            padding-top: 300upx;
            .companySignBox{
                .flex-direction;
                .logBox{
                    margin: 0 auto;
                    width: 176upx;
                    height: 176upx;
                    >image{
                        width: 100%;
                        height: 100%;
                    }
                }
                .nameBox{
                    margin: 0 auto;
                    width: 134upx;
                    height: 88upx;
                    >image{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
            .softInformation{
                .flex-direction;
                font-size: 14px;
                line-height: 56upx;
                .softVersion{
                    font-size: 12px;
                    color: rgb(98, 102, 102);
                }
            }
        }
    }
</style>
