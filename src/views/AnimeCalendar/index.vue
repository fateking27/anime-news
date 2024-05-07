<template>
    <div class="main">
        <div class="right">
            <div class="container" style="width: 100%;margin: auto;">
                <el-tabs tab-position="top" v-model="activeName" class="demo-tabs" @tab-click="handleClick"
                    style="height: auto;margin-bottom: 15px;">
                    <el-tab-pane class="p-[10px] pl-[0] pb-[20px]"
                        :label="item.weekday.cn == moment().format('dddd') ? '今天' : item.weekday.cn"
                        :name="item.weekday.cn" v-for="item in calendarData" :key="item.weekday.id">
                        <div v-for="item_ in item.items"
                            class="w-[100%] flex flex-wrap rounded-[10px] mt-[10px] box-border p-[25px]"
                            style="border: 1px dashed darkgray;">
                            <div class="title w-[100%] text-wrap">
                                <span class="text-[20px] font-bold">{{ item_.titleTranslate['zh-Hans'] ?
                                    item_.titleTranslate['zh-Hans'][0] : item_.titleTranslate['zh-Hant'] ?
                                        item_.titleTranslate['zh-Hant'][0] : item_.titleTranslate.en ?
                                            item_.titleTranslate.en[0] : item_.title }}</span>&nbsp;
                                <span
                                    v-show="item_.titleTranslate['zh-Hans'] ? true : item_.titleTranslate['zh-Hant'] ? true : item_.titleTranslate.en ? true : false"
                                    class="text-gray-400">{{ item_.title }}</span>
                            </div>
                            <div class="info flex justify-between items-center flex-wrap w-[100%] mt-[10px]">
                                <div class="flex w-[50%]">
                                    <div class="w-[50%]">
                                        <div class="pb-[10px]">
                                            日本：{{ moment(item_.broadcast).format("ddd H:mm") }}
                                        </div>
                                        <div class="pt-[10px]">开播：{{ moment(item_.begin).format("YYYY-MM-DD") }}</div>
                                    </div>
                                    <div class="w-[50%]">
                                        <div v-for="site in item_.sites">
                                            <div class="pb-[10px]" v-show="site.site == 'bilibili'">
                                                大陆：{{ site.broadcast ?
                                                    moment(`${site.broadcast?.split('/')[1]}`).format("ddd H:mm") :
                                                    site.begin ?
                                                        moment(site.begin).format("ddd H:mm") :
                                                moment(item_.broadcast).format("ddd H:mm")}}
                                            </div>
                                        </div>
                                        <div v-if="item_.sites.length == 0">
                                            <div class="pb-[10px]">大陆：暂无</div>
                                        </div>
                                        <div v-else-if="item_.sites.every((e: any) => { return e.site != 'bilibili' })">
                                            <div class="pb-[10px]">大陆：暂无</div>
                                        </div>
                                        <div class="pt-[10px]">信息：官网 / 番组计划</div>
                                    </div>
                                </div>
                                <div class="flex w-[47%] pl-[20px]"
                                    style="border-left: 1px solid darkgrey;line-height: 25px;">
                                    <div>
                                        <div class="pb-[10px]">配信：Ani-One中文官方动画频道 / 动画疯</div>
                                        <div v-show="false" class="pt-[10px]">下载： 动漫花园</div>
                                        <div v-show="true" class="pt-[10px]">下载： 暂无</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
        <div class="left"></div>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
import { getCalendar, getOnair, getSite,notion } from '@/api/bgmApi/subject';
import type { TabsPaneContext } from 'element-plus'
import moment from 'moment'

const activeName = ref(moment().format('dddd'))
const calendarData = ref()

const handleClick = (tab: TabsPaneContext, event: Event) => {
    // console.log(tab, event)
}
const calendar = async () => {
    const { data } = await getCalendar()
    console.log(data)
    data.push({ weekday: { en: 'All', cn: '全部', ja: '', id: 8 }, items: [] })
    data.forEach((item: any) => {
        item.items = []
    })
    calendarData.value = data
    onair()
}
const onair = async () => {
    const res = await getOnair()
    res.data.items.forEach((item: any) => {
        // item.begin = moment(item.begin).format("dddd")
        item.broadcast = moment(`${item.broadcast?.split('/')[1]}`).format("YYYY-MM-DD H:mm:ss")
        calendarData.value.forEach((item_: any) => {
            if (moment(item.broadcast).format("dddd") == item_.weekday.cn) {
                item_.items.push(item)
            } else if (item_.weekday.cn == '全部') {
                item_.items.push(item)
            }
        })
    })
    console.log(calendarData.value)
}
const site = async () => {
    const {data} = await notion()
    console.log(data)
}

const onCard = (subject_id: string) => {
    router.push({ path: 'animeDetails', query: { subject_id } })
}

onMounted(() => {
    calendar()
    // onair()
    site()
})
</script>

<style lang='scss' scoped>
.main {
    display: flex;
    justify-content: space-between;

    .right {
        // height: 100vh;
        width: 885px;

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
    }

    .left {
        // height: 100vh;
        background-color: cadetblue;
        width: 28.5%;
    }
}

:deep(.el-tabs__item) {
    text-align: center;
    padding: 0;
    margin: 5px 5px;
    min-width: 60px;

    &:hover {
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        color: #1abc9c;
    }
}

:deep(.el-tabs__nav-wrap) {

    &::after {
        content: "";
        width: 0;
    }
}

:deep(.el-tabs__nav) {
    padding: 0;
    border-radius: 12px;
    background-color: #f5f7f8;
}

:deep(.el-tabs__active-bar) {
    opacity: 0;
    color: #1abc9c;
    font-weight: 600;
}

:deep(.is-active) {
    color: #1abc9c;
    font-weight: 600;
    background-color: white;
    border-radius: 10px;
}
</style>
