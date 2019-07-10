<template>
	<view id="Home">
		<view class="AppAllExplain"><text>{{ msg }}</text></view>
		<view class="homeHeader">
			<view class="titleBox">
				<text>无人机巡检实训平台</text>
			</view>
		</view>
		<view class="homeBody">
			<view class="paragraphCard abstractBox">
				<text class="abstractTitleText">平台介绍</text>
				<text>无人机巡检实训平台是非受的一个重要的实践环节，主要母的是提高飞手综合应用所学专业知识的能力，帮助飞手了解各行业内无人及应用情况，掌握实地操作知识，落地实际行业应用。</text>
			</view>
			<view class="paragraphCard studyContentBox" v-for="(studyItem, studyIndex) in studyMsg" :key="studyIndex">
				<text class="studyCardTitle">{{ studyItem.title }}</text>
				<view v-for="(clauseItem, clauseIndex) in studyItem.studyClause" :key="clauseIndex">
					<text>{{ clauseItem }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg: '主页页面',
				studyMsg: [
					{
						title: '课程实践目的',
						studyClause: [
							'1、深化已学知识，完成理论到实践的转化',
							'2、提高分析和解决实际问题的能力',
							'3、培养“开拓创新”的能力'
						]
					},
					{
						title: '如何加入',
						studyClause: [
							'1、深化已学知识，完成理论到实践的转化',
							'2、提高分析和解决实际问题的能力',
						]
					}
				]
			}
		},
		onLoad() {
			// tabbar 的页面展现过一次后就保留在内存中，再次切换 tabbar 页面，只会触发每个页面的onShow，不会再触发onLoad。
			console.log('oLoad')
			uni.showLoading({
				title: '加载中...',
				mask: true,
				success: () => {},
				fail: () => {},
				complete: () => {}
			})
		},
		onShow() {
			console.log('onShow')
		},
		onReady() {
			console.log('onReady')
			uni.hideLoading({})
		},
		onReachBottom() {
			console.log('触底')
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>
	@import '../../assets/less/mainLess';

	#Home{
		background: url("../../static/images/backgroundImage/homeBackgroundImage.jpg");
		.background-size(cover);
		min-height: 768px;
		.homeHeader{
			.titleBox{
				color: #fff;
				text-align: center;
				padding: 32px 40px;
				font-size: 28px;
			}
		}
		.homeBody{
			font-size: 14px;
			padding: 20px;
			.paragraphCard{
				padding: 18upx 40upx;
				margin-bottom: 40upx;
				line-height: 26px;
				.border-radius(8upx);
				&.abstractBox{
					background: rgba(255, 255, 255, 0.74);
					.abstractTitleText{
						display: block;
						text-align: center;
					}
				}
				&.studyContentBox{
					color: #fff;
					position: relative;
					background: rgba(153, 204, 204, 0.87);
					.box-shadow(rgb(234, 235, 242) 6px 0px 0px 0px);
					padding-top: 80upx;
					padding-bottom: 60upx;
					line-height: 30px;
					.studyCardTitle{
						background: rgba(153, 204, 204, 0.87);
						position: absolute;
						top: -10px;
						left: 0;
						padding: 16upx 28upx;
					}
				}
			}
		}
	}
</style>
