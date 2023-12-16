<script setup>
import { ElButton, ElTable, ElTableColumn } from 'element-plus'

let data = [
  {
    id: 1,
    name: 'John Brown',
    collegeName: 'College of Engineering',
    identity: 'captain',
    email: 'john@gmail.com',
    qq: '123456789',
    wechat: '123456789',
    phone: '123456789'
  },
  {
    id: 2,
    name: 'Jim Green',
    collegeName: 'College of Engineering',
    identity: 'partner',
    email: 'jim@gmail.com',
    qq: '123456789',
    wechat: '123456789',
    phone: '1234599999'
  },
  {
    id: 3,
    name: 'Joe Black',
    collegeName: 'College of Engineering',
    identity: 'partner',
    email: 'joe@gmail.com',
    qq: '123456789',
    wechat: '123456789',
    phone: '1234599999'
  }
]
</script>

<template>
  <div class="table-container">
    <ElTable :data="data" class="custom-table">
      <ElTableColumn prop="name" label="姓名"></ElTableColumn>
      <ElTableColumn prop="collegeName" label="学校"></ElTableColumn>
      <ElTableColumn prop="identity" label="身份"></ElTableColumn>
      <ElTableColumn fixed="right" label="操作">
        <template #default="scope">
          <ElButton
            type="primary"
            size="small"
            @click="
              () => {
                console.log(scope.$index)
                console.log(`modify id: ${data[scope.$index].id}`)
              }
            "
            >编辑</ElButton
          >
        </template>
      </ElTableColumn>
    </ElTable>
  </div>
</template>

<style scoped>
.table-container {
  max-width: 800px;
  margin: auto;
  opacity: 0.88; /* 设置透明度*/
}

.custom-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.el-table th,
.el-table td {
  padding: 15px;
  text-align: center;
}

.el-table th {
  background-color: #f0f0f0;
}

.el-table td {
  transition: background-color 0.3s;
}

.el-table tr:hover td {
  background-color: #f5f5f5;
}

.el-button {
  margin-right: 10px;
}
</style>
