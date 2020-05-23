<template>
	<view>
		<view class="tui-group-name" @tap="more">
			<text>{{title}}</text>
			<tui-icon name="arrowright" :size="20" color="#555"></tui-icon>
		</view>
		<view class="tui-new-box">
			<view class="tui-new-item" :class="[index!=0 && index!=1 ?'tui-new-mtop':'']" v-for="(item,index) in newProduct"
				  :key="index" @tap="detail">
				<image :src="'/static/images/mall/new/'+item.type+'.png'" class="tui-new-label" v-if="item.type"></image>
				<view class="tui-title-box">
					<view class="tui-new-title">{{item.name}}</view>
					<view class="tui-new-price">
						<text class="tui-new-present">￥{{item.present}}</text>
						<text class="tui-new-original">￥{{item.original}}</text>
					</view>
				</view>
				<image :src="item.image" class="tui-new-img" mode="aspectFit"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "jzGoodsNew",
		components: {
		},
		props: {
			title: {
				type: String,
				default: '新品推荐'
			},
			newProduct: {
				type: Array,
				default: []
			}
		},
		data() {
			return {

			}
		},
		methods: {
			more: function(e) {
				let key = e.currentTarget.dataset.key || "";
				uni.navigateTo({
					url: '../page/productList/productList?searchKey=' + key
				})
			},
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
	.tui-new-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.tui-new-item {
		width: 49%;
		height: 100px;
		padding: 0 10px;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background: #f5f2f9;
		position: relative;
		border-radius: 6px;
	}

	.tui-new-title {
		line-height: 16px;
		word-break: break-all;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.tui-new-price {
		padding-top: 18px;
	}

	.tui-new-present {
		color: #ff201f;
		font-weight: bold;
	}

	.tui-new-original {
		display: inline-block;
		color: #a0a0a0;
		text-decoration: line-through;
		padding-left: 6px;
		transform: scale(0.8);
		transform-origin: center center;
	}

	.tui-new-img {
		width: 80px;
		height: 80px;
		display: block;
		flex-shrink: 0;
	}

	.tui-new-label {
		width: 28px;
		height: 28px;
		border-top-left-radius: 6px;
		position: absolute;
		left: 0;
		top: 0;
	}
</style>
