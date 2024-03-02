<template>
    <el-card ref="myElement" v-scroll="handleScroll" class="card_3" :body-style="{ padding: '10px' }"
        :class="{ 'fixed': isFixed, 'bottom': isBottom }" style="margin-top: 15px; border-radius: 10px; border: none">
        <div class="title" style="
            display: flex;
            width: 340px;
            margin: auto;
            align-items: center;
            /* margin-top: 5px; */
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
</template>
  
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isFixed = ref(false)
const isBottom = ref(false)

const myElement = ref()
const handleScroll = () => {
    // 获取滚动位置
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    // console.log(scrollPosition)
    // console.log(document.body.offsetHeight)

    // 设置固定条件，例如滚动到某个位置
    if (scrollPosition > 553) {
        isFixed.value = true;
    } else {
        isFixed.value = false;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    
})

onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
});
</script>
  
<style lang="scss" scoped>
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

.fixed {
    position: fixed;
    top: 50px;

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

.bottom {
    position: fixed;
    bottom: 120px;

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
</style>
  