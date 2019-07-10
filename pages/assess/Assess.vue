<template>
    <view id="Assess">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: '考核页面' // 文件说明
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

<style>
    #Assess {
    }
</style>
