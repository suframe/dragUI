<template>
    <view>
        <view class="tui-bg-white" :class="[className?'tui-activity-'+className:'']">
            <view class="tui-group-name" v-if="config.title" @tap="more">
                <text>{{config.title}}</text>
                <tui-icon name="arrowright" :size="20" color="#555" v-if="config.more"></tui-icon>
            </view>
            <block v-if="config.images">
            <view class="tui-activity-box">
                <image :src="item.image" class="tui-activity-img" mode="widthFix" v-for="(item, key) in config.images"
                       :key="key" @tap="detail(item)"></image>
            </view>
            </block>
        </view>
    </view>
</template>

<script>
    import tuiIcon from "@/components/icon/icon"

    export default {
        name: "jzActivity",
        components: {
            tuiIcon
        },
        props: {
            className: {
                type: String,
                default: ''
            },
            config: {
                type: Object,
                default: {}
            }
        },
        data() {
            return {}
        },
        methods: {
            more: function (e) {
                if (this.config.more) {
                    uni.navigateTo({
                        url: this.config.more
                    })
                }
            },
            detail: function (item) {
                if(item.url){
                    uni.navigateTo({
                        url: item.url
                    })
                }

            }
        }
    }
</script>

<style lang="scss">
    .tui-activity-box {
        display: flex;

        overflow: hidden;
        .tui-activity-img {
            width: 100%;
            display: block;
        }
    }

    .tui-activity-cards {
        padding: 20px;
    }
    .tui-activity-cards .tui-activity-box {
        border-radius: 12px;
    }
</style>
