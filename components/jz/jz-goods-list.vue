<template>
	<view>
		<view class="tui-group-name">
			<text>热门推荐</text>
		</view>

		<view class="jz-box tui-flex-box">
				<view class="jz-item-2" v-for="(item,index) in productList" :key="index">
					<!--商品列表-->
					<view class="tui-pro-item" hover-class="hover" :hover-start-time="150" @tap="detail(item)">
						<image :src="item.image" class="tui-pro-img" mode="aspectFit" />
						<view class="tui-pro-content">
							<view class="tui-pro-tit">{{item.name}}</view>
							<view>
								<view class="tui-pro-price">
									<text class="tui-sale-price">￥{{item.sale}}</text>
									<text class="tui-factory-price">￥{{item.factory}}</text>
								</view>
								<view class="tui-pro-pay">{{item.payNum}}人付款</view>
							</view>
						</view>
					</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		name: "jzGoodsList",
		components: {
		},
		props: {
			productList: {
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

	.tui-group-name {
		font-size: 16px;
		font-weight: bold;
		text-align: center;
		padding: 6px 0;
	}
	.tui-pro-item {
		width: 100%;
		margin-bottom: 4%;
		background: #fff;
		box-sizing: border-box;
		border-radius: 12px;
		overflow: hidden;
	}

	.tui-pro-img {
		width: 100%;
		display: block;
	}

	.tui-pro-content {
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

	.tui-pro-price {
		padding-top: 18px;
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

	.tui-pro-pay {
		padding-top: 5px;
		font-size: 12px;
		color: #656565;
	}
</style>
