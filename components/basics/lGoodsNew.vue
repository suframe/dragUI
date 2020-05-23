<template>
    <jz-goods-new :newProduct="newProduct"></jz-goods-new>
</template>

<script>
    import jzGoodsNew from "@/components/jz/jz-goods-new"
    export default {
        name: "lGoodsNew",
        components: {
            jzGoodsNew
        },
        data() {
            return {
                newProduct: [
                    {
                        id: 1,
                        name: "时尚舒适公主裙高街修身长裙",
                        image: "https://s1.ax1x.com/2020/05/23/YjosPA.png",
                        present: 198,
                        original: 298,
                        type: 'new',
                        isLabel: true
                    },
                    {
                        id: 2,
                        name: "高街修身雪纺衫",
                        image: "https://s1.ax1x.com/2020/05/23/YjoD5d.jpg",
                        present: 398,
                        original: 598,
                        type: "discount",
                        isLabel: true
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>