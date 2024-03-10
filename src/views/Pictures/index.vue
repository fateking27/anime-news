<template>
    <div class="photo">
        <div class="right">
            <div class="top">
                <div>
                    <div style="color: darkgray;">—— CATEGORY ——</div>
                    <div>壁纸福利</div>
                </div>
            </div>
            <div class="container">
                <div class="card" v-for="item in urls" :key="item">
                    <div class="img" style="width: 100%;height: 225px;border-radius: 4px 4px 0 0;">
                        <el-image style="width: 100%;height: 100%;border-radius: 4px 4px 0 0;" :src="item"
                            fit="cover" />
                    </div>
                    <div class="title">
                        <div style="height: 40px;">
                            <el-text size="large" tag="b" line-clamp="2">
                                剧场动画《OVERLORD 圣王国篇》新视觉图公开
                            </el-text>
                        </div>
                    </div>
                    <div class="time">
                        <span>⏱ 2024年2月10日</span>
                    </div>
                </div>
            </div>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="100" />
            </div>
        </div>
        <!-- <div class="left">
        </div> -->
    </div>
</template>

<script setup lang='ts'>
const urls = [
    'https://dlink.host/wx1.sinaimg.cn/large/008sKYvhly8hng1dr6pnej31cf0u07da.jpg',
    'https://dlink.host/wx3.sinaimg.cn/large/008sKYvhly8hng1fjrq8aj31hc0u07di.jpg',
    'https://dlink.host/wx3.sinaimg.cn/large/008sKYvhly8hng1fjrq8aj31hc0u07di.jpg',
    'https://dlink.host/wx3.sinaimg.cn/large/008sKYvhly8hng1fdo4vhj316k0u0tk7.jpg',
    'https://dlink.host/wx3.sinaimg.cn/large/008sKYvhly8hng1fg4qioj30u00u0n2j.jpg',
    'https://dlink.host/wx3.sinaimg.cn/large/008sKYvhly8hng1fg4qioj30u00u0n2j.jpg',
    'https://dlink.host/wx4.sinaimg.cn/large/008sKYvhly8hng1gcv7r6j31z40u048p.jpg',
]
</script>

<style lang='scss' scoped>
.photo {
    display: flex;
    width: 1260px;
    // background-color: rgb(255, 255, 255);
    margin: 0 auto;
    justify-content: space-between;

    .right {
        width: 885px;
        // height: 100vh;
        // background-color: aquamarine;

        .top {
            border: 1px solid rgb(212, 212, 212);
            background-color: white;
            border-radius: 4px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            height: 100px;

            div {
                // width: 55%;
                text-align: center;

                div {
                    padding: 5px 0;
                }
            }
        }

        .container {
            width: 100%;
            // background-color: aquamarine;
            margin-top: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .card {
                cursor: pointer;
                width: 435px;
                height: 320px;
                background-color: white;
                border-radius: 4px;
                margin-bottom: 20px;
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                transition: all 0.3s ease-in-out;

                &:hover {
                    cursor: pointer;
                    transform: translate(0, -3px);
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 30px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                }

                .title {
                    width: 90%;
                    margin: auto;
                    margin-top: 20px;

                    div {
                        width: 100%;
                    }
                }

                .time {
                    font-size: 13px;
                    color: darkgray;
                    text-align: right;
                    // margin-top: 10px;
                    margin-right: 20px;
                    position: relative;
                    top: 7px;
                }
            }
        }

        .pagination {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .left {
        width: 28.5%;
        // height: 100vh;
        background-color: aqua;
    }
}
</style>