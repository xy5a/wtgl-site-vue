<template>
  <div class="container">
    <h2 style="text-align: center; margin-bottom: 20px;">登录</h2>
    <ElForm :model="form" label-width="20%" class="form-container">
      <ElFormItem class="form-item" label="用户名">
        <ElInput v-model="form.userName" />
      </ElFormItem>
      <ElFormItem class="form-item" label="密码">
        <ElInput v-model="form.password" type="password" />
      </ElFormItem>
      <ElFormItem class="center-button">
        <ElButton type="primary" @click="onSubmit">提交</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup>
import { ElButton, ElForm, ElFormItem, ElInput } from 'element-plus'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  userName: '',
  password: ''
})

const onSubmit = () => {
  console.log(form)
  router.push(`/home`)
}
</script>

<style scoped>
.container {
  max-width: 450px;
  margin: auto;
  padding: 50px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #ffffffbc;
  transition: box-shadow 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container:hover {
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.form-item {
  margin-bottom: 15px;
  transition: transform 0.3s ease-in-out;
}

.form-item:hover {
  transform: scale(1.05);
}

.center-button {
  text-align: center;
  width: 100%; 
}

.form-container {
  width: 100%; 
}
</style>
