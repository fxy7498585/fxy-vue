<template>
  <div>
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" 
      @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      @select="handlerSelect"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">MarkDown文章</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item index="/">文章列表</el-menu-item>
          <el-menu-item index="/markdown-add">添加文章</el-menu-item>
        </el-menu-item-group>
        <!-- title="分组2" -->
        <el-menu-item-group >
          <el-menu-item index="/demo/list">demo列表</el-menu-item>
        </el-menu-item-group>
        <!-- <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu> -->
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {

  name: 'Menu',
  data() {
    return {
      isCollapse: false,
      isRouter: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log('handleOpen', key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('handleClose', key, keyPath);
    },
    handlerSelect(index, indexPath) {
      console.log('handlerSelect', index, indexPath);
      this.$router.push(index);
    }
  }
}
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
