<template>
    <div class="photo">
        <div class="right">
            <div class="top">
                <div>
                    <div style="color: darkgray;">—— CATEGORY ——</div>
                    <div>资源下载</div>
                </div>
            </div>
            <div class="container">
                <div class="card" v-for="item in urls" :key="item">
                    <div class="img" style="width: 100%;height: 225px;border-radius: 10px 10px 0 0;">
                        <el-image style="width: 100%;height: 100%;border-radius: 10px 10px 0 0;" :src="item"
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
        <div class="left">
            <el-card class="card_1" :body-style="{ padding: '10px' }">
                <div class="card-body" style="width: auto; display: flex">
                    <div class="useimg" style="height: auto; display: flex; align-items: center">
                        <el-avatar :size="45"
                            src="https://dlink.host/wx3.sinaimg.cn/large/008sKYvhly8hng1fg4qioj30u00u0n2j.jpg" />
                    </div>
                    <div style="padding-left: 10px; color: white; font-size: 13px; font-family: 'YouYuan'">
                        <div style="font-size: 17px; padding-bottom: 5px">Fateking27站长</div>
                        <div>我们一日日度过的所谓日常，其实可能是连续不断的奇迹----《日常》</div>
                    </div>
                </div>
            </el-card>
            <el-card class="card_2" :body-style="{ padding: '0px' }" style="margin-top: 15px; border: none">
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
                <Calendar style="width: 100%" monFirst :lunar="lunar" backgroundText class-name="select-mode"
                    language="cn" :select-date="selectModeDate" />
            </el-card>
            <HostCard />
        </div>
    </div>
</template>

<script setup lang='ts'>
import HostCard from '../../components/HostCard/index.vue'
import { getCalendar } from '@/api/calendar';
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
import { RefreshRight } from '@element-plus/icons-vue'
import { Picture as IconPicture } from '@element-plus/icons-vue'
import type { TabsPaneContext } from 'element-plus'
import moment from 'moment'
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import Calendar from 'mpvue-calendar'
//@ts-ignore
import lunar from 'mpvue-calendar/dist/lunar'

const selectModeDate = ref(moment().format('YYYY-M-D'))

const calendar = async () => {
    const { data } = await getCalendar()
    console.log(data)
}

onMounted(() => {
    calendar()
})
const urls = [
    'https://8.138.83.140/files/Pictures/d2b16369ff6d111452e55090590c6a70.jpg',
    // 'https://8.138.83.140/files/Pictures/e3fca56d96308eb5d22bcad998c20454.jpg',
    'https://8.138.83.140/files/Pictures/5ea4a1a827fdcadac2228d2c31611ede.jpg',
    'https://8.138.83.140/files/Pictures/5dbe718f322cae8dbdeb50645c3f7365.jpg',
    'https://8.138.83.140/files/Pictures/91bb2b7ccc1475bd0fe2f91ab212048c.jpg',
    'https://8.138.83.140/files/Pictures/947b048dbef6022399f384591bddcf73.jpg',
    'https://8.138.83.140/files/Pictures/947b048dbef6022399f384591bddcf73.jpg',
    'https://8.138.83.140/files/Pictures/975d6a3b04f5797e2cf81fef10681d90.jpg',
    'https://8.138.83.140/files/Pictures/a867f413ccf43707943fd1d65097627d.jpg',
    'https://8.138.83.140/files/Pictures/d2b16369ff6d111452e55090590c6a70.jpg',
    'https://8.138.83.140/files/Pictures/GGO8BnUWMAAoqyw.jpg',
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
        .pagination{
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .left {
        // height: 100vh;
        // background-color: cadetblue;
        width: 28.5%;

        .card_2 {
            border-radius: 4px;

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
            border-radius: 4px;
            background: linear-gradient(-45deg, #b3e9fd, #418df1, #23a6d5, #74b8f8);
            border: none;
            animation: gradientBG 15s ease infinite;
            background-size: 300% 300%;
        }
    }

}
</style>