<script setup>
import { ElContainer, ElHeader, ElMain, ElMenu, ElMenuItem, ElIcon } from 'element-plus'
import { Menu } from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)

  console.log(route.path)

  router.push({ path: key })
}
</script>

<template>
  <main>
    <div class="common-layout" style="background-color: gray; margin-left: auto">
      <ElContainer style="position: fixed; top: 0; right: 0; left: 0">
        <ElHeader>
          <ElMenu
            class="el-menu-demo full"
            mode="horizontal"
            :default-active="route.path"
            @select="handleSelect"
          >
            <ElMenuItem index="/home">
              <ElIcon>
                <Menu />
              </ElIcon>
              <span>首页</span>
            </ElMenuItem>
            <ElMenuItem index="/modify">
              <span>编辑信息</span>
            </ElMenuItem>
          </ElMenu>
        </ElHeader>
        <ElMain style="background-color: darkgray">
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
