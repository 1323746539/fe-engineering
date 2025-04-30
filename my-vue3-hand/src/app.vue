<!-- src/App.vue -->
<template>
    <div id="app">
        <div class="nav">
            <div class="nav-item" :class="{ 'nav-item-active': item.path === $route.path }" v-for="item in navList" :key="item.path">
                <div @click="handleNav(item.path)">{{ item.name }}</div>
            </div>
        </div>
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            navList: [
                {
                    name: '首页',
                    path: '/',
                },
                {
                    name: '测试表格',
                    path: '/test-table',
                },
                {
                    name: '测试选择器',
                    path: '/test-select',
                },
            ],
        };
    },
    methods: {
        handleNav(path) {
            this.$router.push(path);
        },
    },
};
</script>
<style lang="less" scoped>
#app {
    padding: 0;
    margin: 0;
    display: flex;
    box-sizing: content-box;
    .nav {
        width: 150px;
        height: 100vh;
        flex-shrink: 0;
        border-right: 1px solid #f0f0f0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        .nav-item {
            width: 110px;
            height: 38px;
            line-height: 38px;
            padding: 0 10px;
            margin-bottom: 10px;
            border-radius: 4px;
            cursor: pointer;
            user-select: none;
            background-color: #d4d4d4;
            text-align: center;
            color: #000;
            &.nav-item-active {
                background-color: cornflowerblue;
            }
            &:hover {
                background-color: #b4b4b4;
                &.nav-item-active {
                    background-color: cornflowerblue;
                }
            }
        }
    }
    .content {
        width: calc(100% - 191px);
        padding: 10px;
    }
}
</style>
