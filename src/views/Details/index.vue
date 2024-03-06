<template>
    <div class="main">
        <div class="right">
            <div class="container">
                <el-card shadow="never">
                    <template #header>
                        <div class="card-header">
                            <el-breadcrumb separator="/" style="line-height: 20px;">
                                <el-breadcrumb-item :to="{ path: 'home' }">
                                    <el-icon style="position: relative;top: 2px;right: 3px;">
                                        <HomeFilled />
                                    </el-icon>
                                    <span>主页</span>
                                </el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: 'details' }">详情</el-breadcrumb-item>
                            </el-breadcrumb>
                        </div>
                    </template>
                    <div class="text_container">
                        <div class="text_header">
                            <div class="header">Aniplex新作动画代号《O》《M》制作决定 物语系列Off＆Monster Season</div>
                            <div class="date">
                                <span>时间：2024-2-2</span>&nbsp;&nbsp;
                                <span>来源：网络</span>&nbsp;&nbsp;
                                <span>发布：fateking27</span>&nbsp;&nbsp;
                            </div>
                        </div>
                        <div class="text_content">
                            <div class="content-warp">
                                <p>粒子导航，采用Thinkphp8.0开发，不依赖WordPress，独立程序，功能专一，性能强大！</p>
                                <p>不再像WordPress那样，需要各种优化，原生就很快，并且支持导入浏览器书签。</p>
                                <p>价格便宜，是目前市面可以买到的唯一一款独立开发的导航程序。</p>
                                <h3 cat-index="0">前台</h3>
                                <p>支持两种主题，自由选择</p>
                                <p><img decoding="async"
                                        src="https://www.lovestu.com/wp-content/uploads/2024/01/20240104103203771018.webp"
                                        class="core-next-img"><img decoding="async"
                                        src="https://www.lovestu.com/wp-content/uploads/2023/09/20230926135832727725.webp"
                                        class="core-next-img"></p>
                                <h3 cat-index="1">网址详情页</h3>
                                <p><img decoding="async"
                                        src="https://www.lovestu.com/wp-content/uploads/2024/02/20240203090807786628.webp"
                                        class="core-next-img"></p>
                                <h3 cat-index="2">跳转页</h3>
                                <h3 cat-index="3"><img decoding="async"
                                        src="https://www.lovestu.com/wp-content/uploads/2024/02/20240203091451416721.webp"
                                        class="core-next-img">后台</h3>
                                <p>功能分类明确</p>
                                <p><img decoding="async"
                                        src="https://www.lovestu.com/wp-content/uploads/2023/09/20230926140309333924.webp"
                                        class="core-next-img"></p>
                                <p>支持直接读取网站信息，识别名称、描述以及图标</p>
                                <p><img decoding="async"
                                        src="https://www.lovestu.com/wp-content/uploads/2023/09/20230926140349258909.webp"
                                        class="core-next-img"></p>
                                <p>&nbsp;</p>
                                <h2 cat-index="4">购买和演示</h2>
                                <p>目前购买，单域名授权，支持无限个子域名站点。</p>
                                <p>演示站：</p>
                                <p><a href="https://lzdh.lovestu.com/" target="_blank"
                                        rel="noopener">https://lzdh.lovestu.com/</a></p>
                                <p><a href="https://www.lovestu.com/wp-content/plugins/cp-link-open/link.php?a=aHR0cHM6Ly9kaC5naHhpLmNvbS8="
                                        target="_blank" rel="noopener">https://dh.ghxi.com/</a></p>
                                <p>购买：</p>
                                <p><a href="https://www.lovestu.com/wp-content/plugins/cp-link-open/link.php?a=aHR0cHM6Ly93d3cueXVxdWUuY29tL2FwcGxlay9semRoL2J1eQ=="
                                        target="_blank" rel="noopener">https://www.yuque.com/applek/lzdh/buy</a></p>
                                <h2 cat-index="5">更新日志</h2>
                                <h3 cat-index="6">1.3.4</h3>
                                <p>2024.2.3</p>
                                <p>新增 网址详情页 编辑器 自行编辑文章</p>
                                <p>新增 网站实时预览图</p>
                                <h3 cat-index="7">1.3.3</h3>
                                <p>2024.01.26<br>
                                    新增 导出导入新增标签字段<br>
                                    修复 新增网站时选择图标问题<br>
                                    修复 邮箱配置展示异常<br>
                                    修复 后台获取图标异常</p>
                                <h3 cat-index="8">1.3.2</h3>
                                <p>2024.01.22</p>
                                <p>修复导航标签不显示<br>
                                    调整部分界面BUG<br>
                                    分类管理添加图标显示</p>
                                <h3 cat-index="9">1.3.1</h3>
                                <p>2023.01.19</p>
                                <p>新增<br>
                                    管理员更换密码功能<br>
                                    分类支持显示图标，图片<br>
                                    新增资源文件管理系统，网址、分类支持自选图标<br>
                                    新增资源文件管理页面<br>
                                    新增支持加载更多网址，一个分类默认显示12个网址(功能设置-&gt;内容设置 设置数量)，可以手动点击加载更多<br>
                                    适配虚拟主机<br>
                                    调整<br>
                                    后台设置内容超出不滚动问题<br>
                                    不填写备案号不显示分隔符<br>
                                    修复<br>
                                    上传头像不显示问题</p>
                                <h3 cat-index="10">1.2.9</h3>
                                <p>新增 开关二维码显示<br>
                                    新增 CDN切换 站内设置-&gt;CDN配置，支持设置七牛、字节、和本地<br>
                                    修复 分类超出屏幕没有滚动条</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                        <div class="text_footer">
                            <span>——————————</span>
                            <span>&nbsp;&nbsp; THE END &nbsp;&nbsp;</span>
                            <span>——————————</span>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        <!-- <div class="left">
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
            <HostCard/>
        </div> -->
    </div>
</template>
  
<script setup lang="ts">
// import HostCard from '../../../../components/HostCard/index.vue'
import { ref, onMounted } from 'vue'
import moment from 'moment'
//@ts-ignore 忽略当前文件ts类型的检测否则有红色提示(打包会失败)
// import Calendar from 'mpvue-calendar'
//@ts-ignore
// import lunar from 'mpvue-calendar/dist/lunar'

// const selectModeDate = ref(moment().format('YYYY-M-D'))


const isFixed = ref(false)
const handleScroll = () => {
    // 获取滚动位置
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // console.log(scrollPosition)
    // 设置固定条件，例如滚动到某个位置
    if (scrollPosition > 553) {
        isFixed.value = true;
    } else {
        isFixed.value = false;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})
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
        width: 885px;

        .container {
            border-radius: 4px;
            // background-color: rgb(231, 230, 230);
            // margin-top: 0px;
            min-height: 1060px;
            width: 100%;

            .el-card {
                border-radius: 4px;

                // width: 100%;
                .text_container {
                    width: 100%;

                    .text_header {
                        text-align: center;
                        border-bottom: 1px solid #ececec;

                        .header {
                            width: 800px;
                            font-size: 20px;
                        }

                        .date {
                            font-size: 13px;
                            padding: 25px 0 10px 0;
                            color: #99a9bf;
                        }
                    }

                }

                .text_content {
                    // background-color: #99a9bf;
                    width: 100%;
                    margin-top: 25px;
                    margin-bottom: 50px;
                    text-align: left;
                    overflow-wrap: break-word;
                    line-height: 27px;
                    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

                    img {
                        max-width: 100%;
                    }

                    image {
                        max-width: 100%;
                    }
                }

                .text_footer {
                    text-align: center;
                    color: darkgray;
                }
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
  