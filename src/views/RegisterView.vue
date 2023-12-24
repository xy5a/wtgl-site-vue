<template>
  <div class="container">
    <ElForm
      :model="form"
      ref="formRef"
      label-width="100px"
      :inline="true"
      label-position="right"
      :rules="{
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 18, message: '密码长度为6-18位', trigger: 'blur' }
        ],
        password2: [{ required: true, message: '请再次输入密码', trigger: 'blur' }]
      }"
    >
      <!-- 用户名 -->
      <ElFormItem label="用户名" prop="name">
        <ElInput v-model="form.name" placeholder="请输入用户名" />
      </ElFormItem>
      <!-- 密码 -->
      <ElFormItem label="密码" prop="password">
        <ElInput v-model="form.password" placeholder="请输入密码" />
      </ElFormItem>
      <ElFormItem label="确认密码" prop="password2">
        <ElInput v-model="form.password2" placeholder="请再次输入密码" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="onSubmit">提交</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup>
import { ElForm, ElFormItem, ElMessage, ElInput } from 'element-plus'
import { reactive, ref } from 'vue'

let form = reactive({
  name: '',
  password: '',
  password2: ''
})

let formRef = ref()

const onSubmit = () => {
  if (!formRef.value) return
  formRef.value.validate((valid) => {
    if (valid) {
      if (form.password !== form.password2) {
        ElMessage.error('两次输入的密码不一致')
        return false
      } else {
        console.log('submit!')
        console.log(form)
      }
    } else {
      console.log('error submit!!')
    }
  })
}
</script>
