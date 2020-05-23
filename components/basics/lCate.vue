<template>
    <jz-cate :classify="classify"></jz-cate>
</template>

<script>
    import jzCate from "@/components/jz/jz-cate"
    export default {
        name: "lCate",
        components: {
            jzCate
        },
        data() {
            return {
                classify: [
                    {
                        image: "https://s1.ax1x.com/2020/05/09/YlGgOg.png",
                        url: '/pages/index2/index',
                        name: "空调"
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/09/YlGc6S.png",
                        name: "冰洗"
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/09/YlGgOg.png",
                        name: "热水器"
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/09/YlGc6S.png",
                        name: "床"
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/09/YlGgOg.png",
                        name: "精品"
                    },
                    {
                        image: "https://s1.ax1x.com/2020/05/09/YlGc6S.png",
                        name: "精品"
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