<template>
    <div class="main">
        <div class="right">
            <el-card style="width: 100%;">
                <div
                    style="display: flex;justify-content: space-between;border-bottom: 1px solid darkgray;padding-bottom: 5px;">
                    <div class="img">
                        <div class="cover">
                            <img v-lazy="ani_data.images?.large" alt="" />
                        </div>
                    </div>
                    <div class="summary" style="width: 620px;font-size: 14px;">
                        <div class="name" style="font-size: 24px;margin-bottom: 10px;">
                            <span>
                                {{ ani_data.name_cn ? ani_data.name_cn : ani_data.name }}
                            </span>
                        </div>

                        <div style="padding-bottom: 10px;font-size: 20px;">剧情简介：</div>
                        <div>
                            {{ ani_data.summary }}
                        </div>
                    </div>
                </div>
                <div style="width: 200px;">
                    <div v-for="item in ani_data.infobox" :key="item.key"
                        style="border-bottom: 1px darkgrey solid;padding: 5px 0;">
                        <span style="color: darkgray;">{{ item.key }}：</span>
                        <div v-if="item.key == '别名'">
                            <div v-for="v in item.value" style="font-size: 13px;">{{ v.v
                                }}；</div>
                        </div>
                        <span v-else style="font-size: 13px;">{{ item.value }}</span>
                    </div>
                </div>
            </el-card>

        </div>
        <div class="left">
            <el-card>

            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute()
import { getSubject } from '@/api/bgmApi/subject';

const ani_data = ref({})
const subject = async (subject_id: any) => {
    const res = await getSubject(subject_id)
    ani_data.value = res.data
    console.log(ani_data.value)
}

onMounted(() => {
    console.log(route.query)
    let subject_id = route.query.subject_id
    subject(subject_id)
})

</script>

<style scoped>
.main {
    display: flex;
    width: 1260px;
    min-height: 100vh;
    margin: 0 auto;
    margin-top: 20px;
    justify-content: space-between;

    .right {
        width: 885px;

        .img {
            .cover {
                width: 200px;

                img {
                    width: 100%;
                }
            }
        }
    }

    .left {
        width: 28.5%;
    }
}
</style>