<template>
    <div class="main">
        <div class="right">
            <div class="container">
                <el-card shadow="never">
                    <template #header>
                        <div class="card-header" style="background-color: #fc5640;height: 20px;">
                            <el-breadcrumb separator="/" style="line-height: 20px;">
                                <el-breadcrumb-item :to="{ path: 'home' }">
                                    <el-icon><HomeFilled /></el-icon>
                                    <span>主页</span>
                                </el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: 'details' }">详情</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </template>
                </el-card>
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
            <el-card shadow="never" class="card_3" :body-style="{ padding: '0px' }"
                style="margin-top: 15px; border-radius: 10px; border: none">
                <div class="title" style="
            display: flex;
            width: 340px;
            margin: auto;
            align-items: center;
            margin-top: 5px;
            border-bottom: 1px solid;
            padding-bottom: 5px;
          ">
                    <div style="width: 15px; height: 15px; background-color: #fcaa40; border-radius: 50%"></div>
                    <div style="
              width: 15px;
              height: 15px;
              background-color: #fc5640;
              border-radius: 50%;
              margin-left: 5px;
            "></div>
                    <div style="font-size: 20px; font-weight: 600; margin-left: 7px">近期必看</div>
                </div>
                <div class="items">
                    <div class="first_item" style="
              width: 340px;
              height: 155px;
              /* background-color: #409efc; */
              margin: auto;
              margin-top: 10px;
              border-radius: 7px;
            ">
                        <div class="title" style="
                width: 23px;
                height: 20px;
                background-color: rgb(252, 91, 63);
                color: white;
                text-align: right;
                line-height: 20px;
                border-radius: 0 10px 10px 0px;
                position: relative;
                top: 15px;
                z-index: 8;
              ">
                            <span style="padding-right: 5px">1</span>
                        </div>
                        <div class="title" style="
                width: 340px;
                height: 20px;
                color: white;
                text-align: center;
                position: relative;
                top: 105px;
                z-index: 9;
              ">
                            <span style="padding-right: 5px">Aniplex新作动画代号《O》《M》制作决定</span>
                        </div>
                        <div class="fir_img">
                            <el-image
                                src="https://www.timelogs.cn/wp-content/uploads/2023/10/%E6%AF%8F%E6%97%A5%E6%96%B0%E9%97%BB%E5%BF%AB%E8%AE%AF.webp"></el-image>
                        </div>
                    </div>
                    <div class="next_items" style="margin-top: 5px;">
                        <div class="item" style="
              width: 340px;
              height: 70px;
              /* background-color: #409efc; */
              margin: auto;
              /* margin-top: 15px; */
              border-radius: 7px;
              display: flex;
              align-items: center;
              margin-top: 15px;
              cursor: pointer;
            " v-for="item in 4">
                            <div :style="{
                                width: '45px',
                                height: '20px',
                                'background-color': `${item == 1 ? 'orange' : item == 2 ? '#0b72f8' : 'darkgray'}`,
                                color: 'white',
                                'text-align': 'right',
                                'line-height': '20px',
                                'border-radius': '0 10px 10px 0px',
                                position: 'relative',
                                top: '-15px',
                                left: '-10px',
                                'z-index': '8'
                            }">
                                <span style="padding-right: 5px">{{ item + 1 }}</span>
                            </div>
                            <div class="items_img" style="margin-left: -30px;">
                                <el-image style="width: 120px;border-radius: 7px;cursor: pointer;"
                                    src="https://www.timelogs.cn/wp-content/uploads/2023/10/%E6%AF%8F%E6%97%A5%E6%96%B0%E9%97%BB%E5%BF%AB%E8%AE%AF.webp"></el-image>
                            </div>
                            <div class="title" style="margin-top: -20px;margin-left: 10px;cursor: pointer;">
                                Aniplex新作动画代号《O》《M》制作决定
                            </div>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>
  
<script setup lang="ts">
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
        width: 875px;

        .container {
            border-radius: 10px;
            // background-color: rgb(231, 230, 230);
            // margin-top: 0px;
            min-height: 1060px;
            width: 100%;

            .el-card {
                border-radius: 10px;
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

        .card_3 {
            .items {
                .first_item {
                    .fir_img {
                        height: 155px;
                        width: 340px;
                        overflow: hidden;
                        margin-top: -40px;

                        .el-image {
                            // margin-top: -40px;
                            border-radius: 10px;
                            height: 155px;
                            width: 340px;
                            cursor: pointer;
                            transition: all 0.4s ease-in-out;
                        }
                    }

                    .fir_img:hover .el-image {
                        transform: scale(1.1);
                    }

                    .title {
                        &:hover+.fir_img .el-image {
                            transform: scale(1.1);
                        }

                        span {
                            transition: all 0.2s ease-in-out;
                        }

                        span:hover {
                            cursor: pointer;
                            color: #0b72f8;
                        }
                    }
                }
            }
        }

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
  