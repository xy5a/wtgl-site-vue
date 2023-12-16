<script setup>
import {
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElIcon,
  ElSubMenu,
  ElNotification
} from 'element-plus'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const getUserName = (id) => {
  return 'user: ' + id
}

const route = useRoute()

const id = route.params.id

const userName = ref(getUserName(id))
console.log(userName.value)
</script>

<template>
  <main>
    <div class="common-layout">
      <ElContainer style="position: fixed; left: 0; right: 0; top: 0">
        <div class="background-logo"></div>
        <ElHeader>
          <ElMenu
            class="el-menu-demo"
            style="flex: auto; left: 0; right: 0; position: fixed"
            mode="horizontal"
            :default-active="route.path"
            :router="true"
          >
            <ElMenuItem index="/home" route="/home">
              <ElIcon> </ElIcon>
              <img src="./assets/logos/full.png" alt="Logo" class="logo" />
            </ElMenuItem>

            <ElMenuItem index="/modify" route="/modify">
              <span>编辑信息</span>
            </ElMenuItem>
            <ElMenuItem index="" route="/query">
              <span>查询信息</span>
            </ElMenuItem>
          </ElMenu>
          <ElMenu
            class="el-menu-demo"
            style="right: 0; position: fixed"
            mode="horizontal"
            @select="
              () =>
                ElNotification({
                  title: '诶, 还没写呢',
                  message: '是真的还没写呢',
                  type: 'info'
                })
            "
            :ellipsis="false"
          >
            <ElSubMenu index="users" style="">
              <template #title>{{ getUserName(route.params.id) }}</template>
              <ElMenuItem index="/users/logout">退出登陆</ElMenuItem>
            </ElSubMenu>
          </ElMenu>
        </ElHeader>
        <ElMain>
          <!--路由的内容-->
          <RouterView></RouterView>
        </ElMain>
        <div class="bouncing-image"></div>
      </ElContainer>
    </div>
  </main>
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden;
  background-color: rgb(239, 247, 212) !important;
}

.common-layout {
  height: 50vh !important;
  display: flex;
  flex-direction: column;
}

/* 添加 logo 样式 */
.logo {
  width: 150px;
  height: 50px;
  position: absolute;
  top: 5px;
  left: 5px;
}

.full-screen-container {
  flex: 1;
}

.header-menu,
.user-menu {
  position: fixed;
}

.header-menu {
  left: 0;
  right: 0;
}

.user-menu {
  right: 0;
}

.main-content {
  flex: 1;
  overflow: auto;
}
.background-logo {
  background: url('./assets/logos/without-side-text.png') no-repeat center center fixed;
  background-size: contain;
  background-position: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  opacity: 0.5;
  filter: grayscale(50%); /* 应用灰度效果 */
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1); /* 通过 scale 缩小 logo */
}

.el-menu-demo .el-menu-item {
  width: 150px; /* 调整按钮宽度，根据需要设置具体值 */
}

.bouncing-image {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  background: url('./assets/logos/king.jpg') no-repeat center center;
  background-size: cover;
  animation: bounce 1s infinite alternate; /* 添加反弹动画效果 */
  opacity: 0.8;
}

@keyframes bounce {
  to {
    bottom: 550px; /* 调整反弹的高度，根据需要设置具体值 */
  }
}
</style>
