<template>
    <view id="CourseDetail">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        
    </view>
</template>

<script>
    export default {
        data() {
            return {
                msg: '课程二级介绍页面' // 文件说明
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
    #CourseDetail {
    }
</style>
