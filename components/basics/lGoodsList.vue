<template>
    <jz-goods-list :productList="productList"></jz-goods-list>
</template>

<script>
    import jzGoodsList from "@/components/jz/jz-goods-list"
    export default {
        name: "lGoodsList",
        components: {
            jzGoodsList
        },
        data() {
            return {
                productList: [
                    {
                        id: 1,
                        image: 'https://s1.ax1x.com/2020/05/23/YjosPA.png',
                        name: "欧莱雅（LOREAL）奇",
                        sale: 599,
                        factory: 899,
                        payNum: 2342
                    },
                    {
                        image: 'https://s1.ax1x.com/2020/05/23/YjoD5d.jpg',
                        name: "德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒",
                        sale: 29,
                        factory: 69,
                        payNum: 999
                    },
                    {
                        image: 'https://s1.ax1x.com/2020/05/23/YjoBUH.jpg',
                        name: "【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红",
                        sale: 299,
                        factory: 699,
                        payNum: 666
                    },
                    {
                        image: 'https://s1.ax1x.com/2020/05/23/YjosPA.png',
                        name: "百雀羚套装女补水保湿护肤品",
                        sale: 1599,
                        factory: 2899,
                        payNum: 236
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>