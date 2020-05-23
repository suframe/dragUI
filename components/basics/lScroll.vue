<template>
    <jz-scroll :list="banner"></jz-scroll>
</template>

<script>
    import jzScroll from "@/components/jz/jz-scroll"
    export default {
        name: "lScroll",
        components: {
            jzScroll
        },
        data() {
            return {
                banner: [
                    {
                        image: "https://s1.ax1x.com/2020/05/11/YGormq.jpg",
                        url: ''
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/11/YGormq.jpg",
                        url: ''
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/11/YGormq.jpg",
                        url: ''
                    }
                ]
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>