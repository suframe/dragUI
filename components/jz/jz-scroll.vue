<template>
	<view class="tui-banner-box">
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :duration="150" class="tui-banner-swiper" :circular="true"
				:previous-margin="margin + 'px'" :next-margin="margin + 'px'" @change="change">
			<swiper-item v-for="(item,index) in list" :key="index" class="tui-banner-item">
				<image :src="item.image" class="tui-slide-image" :class="[current!=index?'tui-banner-scale':'']"
					   mode="scaleToFill" @tap="detail(item)" />
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "jzScroll",
		components: {
		},
		props: {
			margin: {
				type: Number,
				default: 60
			},
			list: {
				type: Array,
				default: []
			}
		},
		data() {
			return {
				current: 0
			}
		},
		methods: {
			change: function(e) {
				this.current = e.detail.current
			},
			detail: function(item) {
				if(item.url) {
					uni.navigateTo({
						url: item.url
					})
				}
			}
		}
	}
</script>

<style>
	/*banner*/

	.tui-banner-box {
		width: 100%;
		padding-top: 10px;
		box-sizing: border-box;
		background: #fff;
	}

	.tui-banner-swiper {
		width: 100%;
		height: 120px;
	}

	.tui-banner-item {
		padding: 0 8px;
		box-sizing: border-box;
	}

	.tui-slide-image {
		width: 100%;
		height: 120px;
		display: block;
		border-radius: 6px;
		/* transition: all 0.1s linear; */
	}

	.tui-banner-scale {
		transform: scaleY(0.9);
		transform-origin: center center;
	}

	/* #ifdef APP-PLUS || MP */
	.tui-banner-swiper .wx-swiper-dot {
		width: 4px;
		height: 4px;
		display: inline-flex;
		background: none;
		justify-content: space-between;
	}

	.tui-banner-swiper .wx-swiper-dot::before {
		content: '';
		flex-grow: 1;
		background: rgba(255, 255, 255, 0.8);
		border-radius: 8px;
		overflow: hidden;
	}

	.tui-banner-swiper .wx-swiper-dot-active::before {
		background: #fff;
	}

	.tui-banner-swiper .wx-swiper-dot.wx-swiper-dot-active {
		width: 8px;
	}

	/* #endif */
</style>
