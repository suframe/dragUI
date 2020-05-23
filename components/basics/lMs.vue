<template>
    <jz-ms :list="msList"></jz-ms>
</template>

<script>
    import jzMs from "@/components/jz/jz-ms"
    export default {
        name: "lMs",
        components: {
            jzMs
        },
        data() {
            return {
                msList: [
                    {
                        id: 1,
                        image: "https://s1.ax1x.com/2020/05/23/YjosPA.png",
                        name: "欧莱雅（LOREAL）奇焕光彩",
                        sale: 599,
                        factory: 899,
                        time:2000
                    },
                    {
                        id: 2,
                        image: "https://s1.ax1x.com/2020/05/23/YjosPA.png",
                        name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
                        sale: 29,
                        factory: 69,
                        time: 1500
                    },
                    {
                        id: 3,
                        image: "https://s1.ax1x.com/2020/05/23/YjosPA.png",
                        name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
                        sale: 299,
                        factory: 699,
                        time: 1800
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