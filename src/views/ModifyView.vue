<template>
  <div class="container">
    <ElForm
      :model="form"
      ref="formRef"
      label-width="100px"
      :inline="true"
      :label-position="right"
      :rules="formRule"
    >
      <ElFormItem label="姓名" prop="name">
        <ElInput v-model="form.name" />
      </ElFormItem>
      <ElFormItem label="学校名称" prop="collegeName">
        <ElInput v-model="form.collegeName" />
      </ElFormItem>
      <ElFormItem label="角色" prop="identity">
        <ElSelect v-model="form.identity">
          <ElOption label="队员" value="partner"> </ElOption>
          <ElOption label="队长" value="captain"> </ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="电话" prop="phone">
        <ElInput v-model="form.phone" />
      </ElFormItem>
      <ElFormItem label="QQ">
        <ElInput v-model="form.qq" />
      </ElFormItem>
      <ElFormItem label="微信">
        <ElInput v-model="form.wechat" />
      </ElFormItem>
      <ElFormItem label="邮箱">
        <ElInput v-model="form.email" />
      </ElFormItem>

      <ElFormItem>
        <ElButton type="primary" @click="onSubmit(formRef)">提交</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup>
import { ElForm, ElFormItem, ElInput, ElOption, ElSelect } from 'element-plus'
import { reactive, ref } from 'vue'

let form = reactive({
  name: '',
  identity: '',
  collegeName: '',
  email: '',
  phone: '',
  qq: '',
  wechat: ''
})
let formRef = ref()

const formRule = reactive({
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' },
    { min: 2, max: 6, message: '长度在 2 到 6 个字符', trigger: 'blur' }
  ],
  identity: [{ required: true, message: '请选择角色', trigger: 'change' }],
  collegeName: [{ required: true, message: '请输入学校名称', trigger: 'blur' }],
  phone: [{ required: true, message: '请输入手机号', trigger: 'blur' }]
})

const onSubmit = async (formRef) => {
  console.log(formRef)
  if (!formRef) return
  await formRef.validate((valid, fields) => {
    console.log(valid)
    if (valid) {
      console.log('submit!')
      console.log(form)
    } else {
      console.log('error submit!!', fields)
    }
  })
}
</script>
