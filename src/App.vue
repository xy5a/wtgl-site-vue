<script setup>
import { ElContainer, ElHeader, ElMain, ElAside, ElMenu, ElMenuItem, ElIcon } from 'element-plus'
import { Menu } from '@element-plus/icons-vue'


</script>

<template>
  <main>

    <div class="common-layout fullscreen" style="background-color: gray; margin-left: auto;">
      <ElContainer>
        <ElAside style="background-color: aquamarine;">
          <ElMenu class="el-menu-vertical-demo">
            <ElMenuItem index="1">
              <ElIcon>
                <Menu />
              </ElIcon>
              <RouterLink to="/">首页</RouterLink>
            </ElMenuItem>
            <ElMenuItem>

              <RouterLink to="/modify">编辑信息</RouterLink>
            </ElMenuItem>
          </ElMenu>
        </ElAside>
        <ElContainer>
          <ElHeader style="background-color: blueviolet;">
            The Header
          </ElHeader>
          <ElMain style="background-color: darkgray;">
            <RouterView></RouterView>
          </ElMain>
        </ElContainer>
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

.fullscreen {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
