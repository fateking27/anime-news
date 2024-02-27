<template>
    <div class="photo">
        <div class="item" v-for="item in 30"></div>
    </div>
</template>

<script setup lang='ts'>
</script>

<style lang='scss' scoped>
.photo{
    width: 65.5vw;
    margin: auto;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .item{
        width: 15%;
        height: 300px;
        background-color: cadetblue;
        margin: 0 10px 10px 10px;
    }

}
</style>