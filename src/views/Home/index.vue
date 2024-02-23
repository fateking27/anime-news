<template>
    <div class="main">
        <div class="right">
            <div class="carousel" style="width: 100%">
                <el-carousel :interval="5000" style="border-radius: 10px; height: 100%">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <h3 text="2xl" justify="center">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="showImg">
                <div class="item" v-for="i in 4">
                    <el-image
                        src="https://www.timelogs.cn/wp-content/uploads/2023/10/%E6%AF%8F%E6%97%A5%E6%96%B0%E9%97%BB%E5%BF%AB%E8%AE%AF.webp">
                        <template #error>
                            <div class="image-slot">
                                <el-icon><icon-picture /></el-icon>
                            </div>
                        </template>
                    </el-image>
                </div>
            </div>
            <div class="tabs">
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="最新资讯" name="first">
                        <div class="items" style="
                  /* background-color: bisque; */
                  width: 100%;
                  height: 150px;
                  display: flex;
                  margin-bottom: 10px;
                  border-radius: 10px 10px 0 0;
                  justify-content: space-between;
                  border-bottom: 1px solid rgb(218, 217, 217);
                  padding-bottom: 10px;
                " v-for="item in 7">
                            <div class="img"
                                style="cursor: pointer;width: 230px; height: 100%; background-color: darkgrey; border-radius: 10px;margin-right: 20px;">
                                <el-image style="height: 150px;width: 230px; border-radius: 10px"
                                    src="https://www.timelogs.cn/wp-content/uploads/2023/10/%E6%AF%8F%E6%97%A5%E6%96%B0%E9%97%BB%E5%BF%AB%E8%AE%AF.webp">
                                    <template #error>
                                        <div class="image-slot">
                                            <el-icon><icon-picture /></el-icon>
                                        </div>
                                    </template>
                                </el-image>
                                <div class="mark_" style="z-index: 8; position: relative; top: -149px; left: 7px;">
                                    <el-tag class="ml-2" size="small" type="info" style="
                        background-color: rgb(29, 27, 27);
                        border: none;
                        opacity: 0.8;
                        color: aliceblue;
                      ">{{ item == 2 ? '动画' : item == 1 ? 'ACG' : '轻小说' }}</el-tag>
                                </div>
                            </div>
                            <div class="content" style="width: 600px">
                                <div class="title">
                                    <el-text size="large" tag="b" truncated>Aniplex新作动画代号《O》《M》制作决定 物语系列Off＆Monster
                                        Season</el-text>
                                </div>
                                <div class="date" style="padding: 5px 0 10px 0">
                                    <el-text type="info" size="small">时间：2024-2-2</el-text>&nbsp;&nbsp;&nbsp;
                                    <el-text type="info" size="small">来源：本站</el-text>&nbsp;&nbsp;&nbsp;
                                    <el-text type="info" size="small">发布：fateking27</el-text>
                                </div>
                                <div class="con">
                                    <el-text line-clamp="2">
                                        Yorushika
                                        (ヨルシカ、可译作夜鹿）担任电视动画《葬送的芙莉莲》新一期的开场主题曲！1月5日新曲《晴る》（可译作晴朗）将会发布！
                                    </el-text>
                                </div>
                                <div class="mark" style="margin-top: 15px">
                                    <el-text type="info" size="small">标签：
                                        <el-tag class="ml-2" size="small" type="info">葬送的芙莉莲</el-tag></el-text>
                                </div>
                            </div>
                        </div>
                        <div class="refresh" style="position: relative; left: 45%; margin-bottom: 10px">
                            <el-button :icon="RefreshRight"
                                style="border: 1px solid #409efc; color: #409efc">加载更多</el-button>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="动画资讯" name="second">动画资讯</el-tab-pane>
                    <el-tab-pane label="轻小说资讯" name="third">轻小说资讯</el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="left">
            <el-card class="card_1" shadow="never" :body-style="{ padding: '10px' }">
                <div class="card-body" style="width: auto; display: flex">
                    <div class="useimg" style="height: auto; display: flex; align-items: center">
                        <el-avatar :size="45"
                            src="https://dlink.host/sharepoint/aHR0cHM6Ly95dW53dTI3LW15LnNoYXJlcG9pbnQuY29tLzppOi9nL3BlcnNvbmFsL2ZhdGVraW5nMjdfeXVud3UyN19vbm1pY3Jvc29mdF9jb20vRVpuLVNTZjR6QzVQck1NbkNaWWJnSmdCZ0tPanl0VHZwNzRvN2F2eGhHUzVFdz9lPTliTlM0Zg.jpg" />
                    </div>
                    <div style="padding-left: 10px; color: white; font-size: 13px; font-family: 'YouYuan'">
                        <div style="font-size: 17px; padding-bottom: 5px">Fateking27站长</div>
                        <div>我们一日日度过的所谓日常，其实可能是连续不断的奇迹----《日常》</div>
                    </div>
                </div>
            </el-card>
            <el-card class="card_2" shadow="never" :body-style="{ padding: '0px' }" style="margin-top: 15px; border: none">
                <div class="title">
                    <div style="
              font-size: 27px;
              font-weight: 600;
              color: white;
              text-align: center;
              line-height: 70px;
              height: 70px;
              width: 70px;
              padding-left: 10px;
            ">
                        日历
                    </div>
                    <div class="todoy" style="display: flex; padding-right: 17px">
                        <div style="padding-right: 10px">
                            <div style="color: white; font-size: 20px; text-align: right">
                                {{ moment().format('MMM') }}
                            </div>
                            <div style="color: white; font-size: 24px">{{ moment().format('dddd') }}</div>
                        </div>
                        <div style="color: white; font-size: 47px">{{ moment().format('DD') }}</div>
                    </div>
                </div>
                <Calendar style="width: 100%" monFirst :lunar="lunar" backgroundText class-name="select-mode" language="cn"
                    :select-date="selectModeDate" />
            </el-card>
            <HostCard />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import HostCard from '../../components/HostCard/index.vue'
import { ref } from 'vue'
import { RefreshRight } from '@element-plus/icons-vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import moment from 'moment'
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import Calendar from 'mpvue-calendar'
//@ts-ignore
import lunar from 'mpvue-calendar/dist/lunar'

const selectModeDate = ref(moment().format('YYYY-M-D'))
const nowTime = ref(moment().format('YYYY-MM-DD h:mm:ss a'))
const nowTime_ = () => {
    nowTime.value = moment().format('YYYY-MM-DD h:mm:ss a')
}

setInterval(nowTime_, 1000)

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
}
</script>
  
<style lang="scss" scoped>
.main {
    display: flex;
    width: 1260px;
    // height: 100vh;
    // background-color: rgb(255, 255, 255);
    margin: 0 auto;
    justify-content: space-between;

    .right {
        // height: 100vh;
        // background-color: blanchedalmond;
        width: 885px;

        .showImg {
            width: 100%;
            height: 120px;
            // background-color: #99a9bf;
            margin-top: 15px;
            display: flex;
            justify-content: space-between;

            .item {
                height: 100%;
                width: 23.6%;
                background-color: #d3dce6;
                border-radius: 10px;
                transition: all 0.3s ease-in-out;
                font-size: 30px;

                .image-slot {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 100%;
                    background: var(--el-fill-color-light);
                    color: var(--el-text-color-secondary);
                    font-size: 30px;
                }

                .el-image {
                    width: 100%;
                    height: 100%;
                    border-radius: 10px;
                }
            }

            .item:hover {
                cursor: pointer;
                transform: translate(0, -10px);
            }
        }

        .tabs {
            border-radius: 10px;
            background-color: white;
            margin-top: 15px;

            .el-tabs {
                padding: 0 10px;
            }
        }

        .items {
            .content {
                .title {
                    cursor: pointer;
                }

                .title .el-text {
                    font-size: 20px;
                    transition: all 0.3s ease-in-out;
                }

                .title .el-text:hover {
                    color: #409efc;
                }
            }
        }
    }

    .left {
        height: 100vh;
        // background-color: cadetblue;
        width: 28.5%;

        .card_2 {
            border-radius: 10px;

            .title {
                width: 100%;
                height: 70px;
                background: linear-gradient(-45deg, #b3e9fd, #0b72f8, #23a6d5, #74b8f8);
                display: flex;
                justify-content: space-between;
                align-items: center;
                animation: gradientBG 10s ease infinite;
                background-size: 300% 300%;
            }
        }

        .card_1 {
            border-radius: 10px;
            background: linear-gradient(-45deg, #b3e9fd, #418df1, #23a6d5, #74b8f8);
            border: none;
            animation: gradientBG 15s ease infinite;
            background-size: 300% 300%;
        }
    }
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
  