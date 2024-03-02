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
                    <div class="img" style="width: 100%;height: 225px;background-color: aliceblue;">
                        <el-image style="width: 100%;height: 100%;border-radius: 10px 10px 0 0;" :src="item" fit="cover" />
                    </div>
                    <div class="title">
                        <div>
                            <el-text size="large" tag="b" truncated>
                                动漫电脑壁纸 Vol. 001
                            </el-text>
                        </div>
                    </div>
                    <div class="time">
                        <span>2024年2月10日</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="left"></div>
    </div>
</template>

<script setup lang='ts'>
const urls = [
    'http://8.138.83.140/files/Pictures/d2b16369ff6d111452e55090590c6a70.jpg',
    'http://8.138.83.140/files/Pictures/e3fca56d96308eb5d22bcad998c20454.jpg',
    'http://8.138.83.140/files/Pictures/5ea4a1a827fdcadac2228d2c31611ede.jpg',
    'http://8.138.83.140/files/Pictures/5dbe718f322cae8dbdeb50645c3f7365.jpg',
    'http://8.138.83.140/files/Pictures/91bb2b7ccc1475bd0fe2f91ab212048c.jpg',
    'http://8.138.83.140/files/Pictures/947b048dbef6022399f384591bddcf73.jpg',
    'http://8.138.83.140/files/Pictures/975d6a3b04f5797e2cf81fef10681d90.jpg',
    'http://8.138.83.140/files/Pictures/a867f413ccf43707943fd1d65097627d.jpg',
    'http://8.138.83.140/files/Pictures/d2b16369ff6d111452e55090590c6a70.jpg',
    'http://8.138.83.140/files/Pictures/GGO8BnUWMAAoqyw.jpg',
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
            border-radius: 10px;
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
            margin-top: 15px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .card {
                cursor: pointer;
                width: 435px;
                height: 320px;
                background-color: white;
                border-radius: 10px;
                margin-bottom: 20px;

                .title {
                    width: 95%;
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
                    top: 20px;
                }
            }
        }
    }

    .left {
        width: 28.5%;
        // height: 100vh;
        background-color: aqua;
    }
}
</style>