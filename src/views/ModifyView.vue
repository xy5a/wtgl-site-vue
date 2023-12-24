<template>
  <div class="container">
    <h2 class="form-title">用户信息录入</h2>
    <ElForm
      :model="form"
      ref="formRef"
      label-width="100px"
      :inline="true"
      label-position="right"
      :rules="formRule"
      class="custom-form"
    >
      <ElFormItem label="姓名" prop="name">
        <ElInput v-model="form.name" placeholder="请输入姓名" />
      </ElFormItem>
      <ElFormItem label="学校名称" prop="collegeName">
        <ElInput v-model="form.collegeName" placeholder="请输入学校名称" />
      </ElFormItem>
      <ElFormItem label="角色" prop="identity">
        <ElSelect v-model="form.identity" placeholder="请选择角色">
          <ElOption label="队员" value="partner" />
          <ElOption label="队长" value="captain" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="电话" prop="phone">
        <ElInput v-model="form.phone" placeholder="请输入手机号" />
      </ElFormItem>
      <ElFormItem label="QQ">
        <ElInput v-model="form.qq" placeholder="请输入QQ号" />
      </ElFormItem>
      <ElFormItem label="微信">
        <ElInput v-model="form.wechat" placeholder="请输入微信号" />
      </ElFormItem>
      <ElFormItem label="邮箱">
        <ElInput v-model="form.email" placeholder="请输入邮箱" />
      </ElFormItem>

      <ElFormItem>
        <ElButton type="primary" @click="onSubmit" class="submit-button">提交</ElButton>
      </ElFormItem>
    </ElForm>
  </div>
</template>

<script setup>
import { ElForm, ElFormItem, ElInput, ElOption, ElSelect, ElButton } from 'element-plus'
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

const onSubmit = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', form)
    } else {
      console.log('error submit!!', fields)
    }
  })
}
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: rgba(245, 245, 245, 0.45); 
  background: linear-gradient(45deg, rgba(245, 245, 245, 0.45), rgba(200, 200, 200, 0.45));
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.form-title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  background-color: rgba(224, 224, 224, 0.50); 
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(45deg, rgba(224, 224, 224, 0.5), rgba(180, 180, 180, 0.5));
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.custom-form {
  margin-top: 20px;
}

.submit-button {
  width: 100%;
  margin-top: 20px;
  background-color: rgba(76, 175, 80, 0.80); 
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background: linear-gradient(45deg, rgba(76, 175, 80, 0.8), rgba(50, 120, 55, 0.8));
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

}


.submit-button:hover {
  background-color: rgba(69, 160, 73, 0.9); 
}
.el-input {
  position: relative;
}

.el-input:hover {
  animation: breathe 1.5s infinite; 
}

@keyframes breathe {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); 
  }
}

</style>
