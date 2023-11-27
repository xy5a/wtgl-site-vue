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

<template>
  <div class="container">
    <ElForm :model="form" label-width="10%">
      <ElFormItem label="User Name">
        <ElInput v-model="form.userName" />
      </ElFormItem>
      <ElFormItem label="Password">
        <ElInput v-model="form.password" type="password" />
      </ElFormItem>
      <ElFormItem>
        <ElButton type="primary" @click="onSubmit">submit</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>
