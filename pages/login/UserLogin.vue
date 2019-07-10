<template>
    <view id="UserLogin">
        <view class="AppAllExplain"><text>{{ msg }}</text></view>
        <view class="userLoginHeader">
            <text class="iconfont icon-wurenji1"></text>
            <text class="titleText">无人机巡检实训平台</text>
        </view>
        <view class="userLoginBody">
            <view class="liBox">
                <text class="iconfont icon-yonghuming inputIcon"></text>
                <input class="uni-input" placeholder-style="color: #fff" placeholder="用户名" v-model="userMsg.Account" />
            </view>
            <view class="liBox">
                <text class="iconfont icon-mima inputIcon"></text>
                <input class="uni-input" placeholder-style="color: #fff" password type="text" placeholder="密码" v-model="userMsg.Password"/>
            </view>
            <view class="rememberPasswordBox">
                <checkbox-group>
                    <label><checkbox class="rememberPassword" value="cb" color="gray"/>记住密码</label>
                </checkbox-group>
            </view>
        </view>
        <view class="userLoginFooter">
            <view>
                <button class="loginBtn" type="primary" @tap="userLogin">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </view>
        </view>
    </view>
</template>
<script>
    import publicKey from '../../assets/js/lib/privateFiles/publicKey'

    export default {
        data() {
            return {
                msg: '用户登录页面', // 文件说明
                userMsg: {
                    Account: 258258,
                    Password: 'Dcy980331',
                    EnterpriseID: 2019041125
                }
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
            this.mainIndex()
        },
        methods: {
            /*
            * -----------------------------------------入口函数------------------------------------------
            * */
            mainIndex () {},

            /*
            * -----------------------------------------公用------------------------------------------
            * */
            /* 获取or请求函数 */
            // 用户登录
            getUserLogin () {
                let vm = this
                this.$jsFn.apiFn.login.APIUserLogin(vm.userMsg).then(res => {
                    console.log('用户登录返回结果', res)
                    vm.requestCallBackArrange('用户登录返回结果', res)
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
                            // return res[1].data.data
                            // 私人订制
                            uni.switchTab({
                                url: '/pages/home/Home'
                            });
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
            // 用户登录
            userLogin () {
                let vm = this
                // 加密
                let encrypt = new vm.$jsEncrypt()
                encrypt.setPublicKey(publicKey.publicKey)
                vm.userMsg.Password = encrypt.encrypt(vm.userMsg.Password)
                this.getUserLogin()
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
    @import '../../assets/less/mainLess'; /* less文件 */

    #UserLogin {
        font-size: 16px;
        background: url("../../static/images/backgroundImage/userLoginBackgroundImage.jpg") 100%;
        .background-size(cover); /* 此时会保持图像的纵横比并将图像缩放成将完全覆盖背景定位区域的最小大小。 */
        .userLoginHeader{
            color: #fff;
            padding: 200upx 0 160upx;
            text-align: center;
            >.iconfont{
                font-size: 72px;
                display: block;
                margin-bottom: 20upx;
            }
            >.titleText{
                font-size: 26px;
            }
        }
        .userLoginBody{
            padding: 0 60upx;
            font-size: 14px;
            .liBox{
                .border-radius(24px);
                color: #fff;
                background: rgba(255, 255, 255, 0.44);
                height: 80upx;
                margin-bottom: 40upx;
                display: flex;
                flex-direction: row;
                line-height: 80upx;
                padding: 0 20upx;
                >.uni-input{
                    height: 100%;
                    padding-left: 18upx;
                }
                .inputIcon{
                    font-size: 22px;
                }
            }
            .rememberPasswordBox{
                text-align: right;
                color: #fff;
                .rememberPassword{
                    opacity: 0.8;
                    .transform(scale(0.7)); /* 缩放 */
                }
            }
        }
        .userLoginFooter{
            padding: 80upx 60upx 482upx;
            .loginBtn{
                height: 40px;
                line-height: 40px;
                background: #26B5EA;
                .border-radius(24px);
                font-size: 14px;
                &:after{
                    border: none;
                }
            }
        }
    }
</style>
