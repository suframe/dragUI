<template>
	<view class="tui-toast" :class="[visible?'tui-toast-show':'',content?'tui-toast-padding':'',icon?'':'tui-unicon-padding']" :style="{width:getWidth(icon,content)}">
		<image :src="imgUrl" class="tui-toast-img" v-if="icon"></image>
		<view class="tui-toast-text" :class="[icon?'':'tui-unicon']">{{title}}</view>
		<view class="tui-toast-text tui-content-ptop" v-if="content && icon">{{content}}</view>
	</view>
</template>

<script>
	export default {
		name: "tuiToast",
		props: {
		},
		data() {
			return {
				timer: null,
				//是否显示
				visible: false,
				//显示标题
				title: "操作成功",
				//显示内容
				content: "",
				//是否有icon
				icon:false,
				imgUrl:""
			};
		},
		methods: {
			show: function(options) {
				let {
					duration = 2000,
					icon=false
				} = options;
				clearTimeout(this.timer);
				this.visible = true;
				this.title = options.title || "";
				this.content = options.content || "";
				this.icon=icon;
				if(icon && options.imgUrl){
					this.imgUrl=options.imgUrl
				}
				this.timer = setTimeout(() => {
					this.visible = false;
					clearTimeout(this.timer);
					this.timer = null;
				}, duration);
			},
			getWidth(icon,content){
				let width="auto";
				if(icon){
					width=content?'420px':'360px'
				}
				return width
			}
		}
	}
</script>

<style>
	.tui-toast {
		background: rgba(0, 0, 0, 0.75);
		border-radius: 10px;
		position: fixed;
		visibility: hidden;
		opacity: 0;
		left: 50%;
		top: 48%;
		-webkit-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		transition:  0.3s ease-in-out;
		transition-property:opacity,visibility;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		padding: 60px 20px 54px 20px;
		box-sizing: border-box;
	}

	.tui-toast-padding {
		padding-top: 50px !important;
		padding-bottom: 50px !important;
	}
	.tui-unicon-padding {
		padding: 24px 40px !important;
		word-break: break-all;
	}

	.tui-toast-show {
		visibility: visible;
		opacity: 1;
	}


	.tui-toast-img {
		width: 120px;
		height: 120px;
		display: block;
		margin-bottom: 28px;
	}

	.tui-toast-text {
		font-size: 30px;
		line-height: 30px;
		font-weight: 400;
		color: #fff;
		text-align: center;
	}
	.tui-unicon{
		line-height: 40px !important;
		font-size: 32px !important;
	}
	.tui-content-ptop {
		padding-top: 10px;
		font-size: 26px !important;
	}
</style>
