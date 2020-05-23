<template>
	<view>
		<tui-tabbar :tabBar="tabBar" :current="current" @click="tabbarSwitch"></tui-tabbar>
	</view>
</template>

<script>
	import tuiTabbar from "@/components/thorUi/tui-tabbar/tui-tabbar"
	export default {
		name: "jzTabbar",
		components: {
			tuiTabbar
		},
		props: {
			current: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				tabBar: [
					{
						"pagePath": "/pages/index/index",
						"text": "首页",
						"iconPath": "/static/images/tabbar/code_gray.png",
						"selectedIconPath": "/static/images/tabbar/code_active.png"
					},
					{
						"pagePath": "/pages/index2/index",
						"text": "门店",
						"iconPath": "https://s1.ax1x.com/2020/05/07/YeyKOO.png",
						"selectedIconPath": "/static/images/tabbar/release.png"
					},
					{
						"pagePath": "/pages/index/index2",
						"text": "装修单",
						"iconPath": "/static/images/tabbar/release.png",
						"selectedIconPath": "/static/images/tabbar/release.png"
					},
					{
						"pagePath": "/pages/shopcart/shopcart",
						"text": "购物车",
						"iconPath": "/static/images/tabbar/release.png",
						"selectedIconPath": "/static/images/tabbar/release.png"
					},
					{
						"pagePath": "/pages/my/my",
						"text": "我的",
						"iconPath": "/static/images/tabbar/thor_gray.png",
						"selectedIconPath": "/static/images/tabbar/thor_active.png",
						"num": 2,
						"isDot": true
					}
				]
			}
		},
		methods: {
			tabbarSwitch(e) {
				let isLogin = false
				if (e.verify && !isLogin) {
					this.tui.toast("您还未登录，请先登录")
				}
				uni.redirectTo({
					url: e.pagePath
				})
			}
		}
	}
</script>

<style>

</style>
