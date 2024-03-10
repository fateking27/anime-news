<template>
    <div class="container" style="width: 1260px;margin: auto;box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;">
        <el-tabs type="border-card" tab-position="top" v-model="activeName" class="demo-tabs" @tab-click="handleClick"
            style="height: auto;margin-bottom: 15px;">
            <!-- <el-scrollbar max-height="80.7vh"> -->
            <el-tab-pane :label="item.weekday.cn + ' (' + item.weekday.ja + ')'" :name="item.weekday.cn"
                v-for="item in calendarData" :key="item.weekday.id">
                <div class="card" v-for="item_ in item.items" :key="item_.id" @click="subject(item_.id)">
                    <div class="img" style="width: 100%;height: 225px;border-radius: 4px;">
                        <el-image laze :src="item_.images?.common" style="width: 100%;height: 100%;border-radius: 4px;"
                            fit="cover" />
                    </div>
                    <div class="title">
                        <div style="height: 40px;margin-top: 10px;">
                            <el-text size="large" tag="b" line-clamp="2">
                                {{ item_.name_cn ? item_.name_cn : item_.name }}
                            </el-text>
                        </div>
                    </div>
                    <div class="time">
                        <span>⏱放送时间：{{ item_.air_date }}</span>
                    </div>
                </div>
            </el-tab-pane>
            <!-- </el-scrollbar> -->

        </el-tabs>
    </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
import { getCalendar, getSubject } from '@/api/bgmApi/subject';
import type { TabsPaneContext } from 'element-plus'
import moment from 'moment'

const activeName = ref(moment().format('dddd'))
const calendarData = ref()

const handleClick = (tab: TabsPaneContext, event: Event) => {
    // console.log(tab, event)
}
const calendar = async () => {
    const { data } = await getCalendar()
    // console.log(data)
    calendarData.value = data
}

const subject = async (subject_id: string) => {
    const res = await getSubject(subject_id)
    console.log(res.data)
}

onMounted(() => {
    calendar()
})
</script>

<style lang='scss' scoped>
.container {
    .el-tabs {
        .el-tab-pane {
            .card {
                width: 170px;
                float: left;
                transition: all 0.3s ease-in-out;
                border: 1px solid rgb(198, 200, 202);
                box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
                margin: 0px 0px 20px 0;
                border-radius: 4px;
                padding: 10px;
                margin: 6.5px;

                .title {
                    .el-text {
                        &:hover {
                            color: rgb(21, 115, 238);
                        }

                    }

                }

                .time {
                    font-size: 13px;
                    color: darkgrey;
                }

                &:hover {
                    cursor: pointer;
                    transform: translate(0, -3px);
                    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 30px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
                }
            }
        }
    }
}
</style>
