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
import { Menu } from '@element-plus/icons-vue'
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
    <div class="common-layout" style="background-color: gray">
      <ElContainer style="position: fixed; left: 0; right: 0; top: 0">
        <ElHeader>
          <ElMenu
            class="el-menu-demo"
            style="flex: auto; left: 0; right: 0; position: fixed"
            mode="horizontal"
            :default-active="route.path"
            :router="true"
          >
            <ElMenuItem index="/home" route="/home">
              <ElIcon>
                <Menu />
              </ElIcon>
              <span>首页</span>
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
        <ElMain style="background-color: lightblue">
          <!--路由的内容-->
          <RouterView></RouterView>
        </ElMain>
      </ElContainer>
    </div>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

.full {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
</style>
