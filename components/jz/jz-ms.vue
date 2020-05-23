<template>
	<view>

		<view class="tui-spike-box">
			<view class="tui-spike-title list-item">{{title}}</view>
			<!--商品列表-->
			<swiper :indicator-dots="false" :autoplay="true" :interval="5000" :duration="400" :circular="true"
					:display-multiple-items="2" :vertical="true" class="tui-spike-swiper">
				<swiper-item v-for="(item,index) in list" :key="index">
					<view class="tui-pro-item list-item" hover-class="hover" :hover-start-time="150" @tap="detail(item)">
						<image :src="item.image" class="tui-pro-img" mode="aspectFit" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{item.name}}</view>
							<view class="tui-pro-btmbox">
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{item.sale}}</text>
									<text class="tui-factory-price">￥{{item.factory}}</text>
								</view>
								<view class="tui-countdown">
									<view class="tui-countdown-text">剩余</view>
									<tui-countdown :time="item.time" color="#e41f19" bcolor="#e41f19" colonColor="#e41f19" :scale="true"></tui-countdown>
									<view class="tui-countdown-text">结束</view>
								</view>
							</view>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import tuiCountdown from "@/components/thorUi/countdown/countdown"
	export default {
		name: "jzMs",
		components: {
			tuiCountdown
		},
		props: {
			title: {
				type: String,
				default: '限时秒杀'
			},
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			detail: function(item) {
				if(item.url) {
					uni.navigateTo({
						url: item.url
					})
				} else {
					uni.navigateTo({
						url: '/pages/productDetail/productDetail?id' + item.id
					})
				}
			}
		}
	}
</script>

<style>

	/*spike*/

	.tui-spike-box {
		background: #fff;
		margin-top: 10px;
	}

	.tui-spike-title {
		padding: 10px 15px;
		box-sizing: border-box;
		font-size: 15px;
		color: #333;
		font-weight: bold;
	}

	.tui-spike-title::after {
		left: 0;
	}

	.tui-spike-swiper {
		min-height: 220px;
	}

	.tui-pro-item {
		display: flex;
		width: 100%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12px;
		position: relative;
	}

	.tui-pro-item::after {
		left: 120px;
	}

	.tui-pro-img {
		width: 110px;
		height: 110px;
		display: block;
		flex-shrink: 0;
		border-radius: 6px;
	}

	.tui-pro-content {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 10px;
	}

	.tui-pro-tit {
		color: #2e2e2e;
		font-size: 13px;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-pro-btmbox {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.tui-sale-price {
		font-size: 17px;
		font-weight: 500;
		color: #e41f19;
	}

	.tui-factory-price {
		font-size: 12px;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 6px;
	}

	.tui-countdown {
		display: flex;
		align-items: center;
	}

	.tui-countdown-text {
		padding: 0 8px;
		font-size: 12px;
		line-height: 12px;
		color: #555;
	}

	/*spike*/
</style>
