<template>
	<view class="tui-classify-box">
		<view class="tui-classify-item" v-for="(item,index) in classify" :key="index" @tap="more" :data-key="item.url">
			<image :src="item.image" class="tui-classify-img" />
			<view class="tui-classify-name">{{item.name}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "jzCate",
		components: {
		},
		props: {
			classify: {
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
				if(key.length){
					uni.navigateTo({
						url: key
					})
				}
			}
		}
	}
</script>

<style>

	/*classify*/

	.tui-classify-box {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding: 14px 0 0;
		background-color: #fff;
	}

	.tui-classify-item {
		width: 20%;
		text-align: center;
		margin-bottom: 14px;
	}

	.tui-classify-img {
		width: 60px;
		height: 60px;
	}

	.tui-classify-name {
		font-size: 16px;
		line-height: 14px;
		padding-top: 4px;
		color: #555;
		white-space: nowrap;
	}

	/*classify*/
</style>
