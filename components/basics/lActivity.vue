<template>
    <view>
        <jz-activity :config="activityConfig" className="cards"></jz-activity>
    </view>
</template>

<script>
    import jzActivity from "@/components/jz/jz-activity"
    export default {
        components: {
            jzActivity
        },
        name: "lActivity",
        data() {
            return {
                activityConfig: {
                    title: '热门大促销',
                    more: '/pages/index2/index',
                    images: [
                        {image: 'https://s1.ax1x.com/2020/05/09/YlQN9S.png', url: '/pages/index2/index'},
                        {image: 'https://s1.ax1x.com/2020/05/09/YlQYh8.png', url: '/pages/index/index'}
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>