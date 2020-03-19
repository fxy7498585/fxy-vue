<template>
  <div class="demo-list">
    <el-card class="box-card demo-list-card">
      <div slot="header" class="clearfix demo-list-card-header">
        <span>防抖函数（触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间）</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">使劲点我</el-button> -->
        <el-button type="success" style="float: right; margin-left: 40px;" 
          round icon="el-icon-plus" @click="addClick">
          增加
        </el-button>
      </div>
      <div>
        {{number}}
      </div>
    </el-card>
    <el-card class="box-card demo-list-card">
      <div slot="header" class="clearfix demo-list-card-header">
        <span>节流函数(两秒执行一次)</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">使劲点我</el-button> -->
        <el-button type="success" style="float: right; margin-left: 40px;" 
          round icon="el-icon-plus" @click="addThrottleNumberClick">
          增加
        </el-button>
      </div>
      <div>
        {{throttleNumber}}
      </div>
    </el-card>
    <el-card class="box-card demo-list-card">
      <div slot="header" class="clearfix demo-list-card-header">
        <span>数组扁平化，去重，得到一个升序的数组</span>
        <span>Array.from(new Set(JSON.parse({{this.flatData}}).flat(Infinity))).sort((a,b) => a - b)</span>
        <!-- <el-button style="float: right; padding: 3px 0" type="text">使劲点我</el-button> -->
        <el-button type="success" style="float: right; margin-left: 40px;" 
          round icon="el-icon-plus" @click="outHandler">
          输出
        </el-button>
      </div>
      <div>
        <el-input v-model="flatData" placeholder="请输入内容"></el-input>
        <span>{{outFlatData}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'DemoList',
  data() {
    return {
      number: 0,
      throttleNumber: 0,
      timeout: null,
      canRun: true,
      flatData: '',
      outFlatData: [],
    }
  },
  methods: {
    ...mapMutations([
      'addNumber',
    ]),
    outHandler() {
      if (!this.flatData) {
        const h = this.$createElement;
        this.$notify({
          title: '填入数据',
          message: h('i', { style: 'color: teal'}, '请填入数据')
        });
        return;
      }
      this.outFlatData = Array.from(new Set(JSON.parse(this.flatData).flat(Infinity))).sort((a,b) => a - b)
    },
    addThrottleNumberClick() {
      const h = this.$createElement;
      this.$notify({
        title: '在使劲点',
        message: h('i', { style: 'color: teal'}, '再怎么快速点击也是两秒执行一次')
      });
      if (!this.canRun) { return; }
      this.canRun = false;
      setTimeout(() => {
        this.throttleNumber ++;
        this.canRun = true;
      }, 2000)
      
    },
    addClick() {
      const h = this.$createElement;
      const _this = this;
      this.$notify({
        title: '在使劲点',
        message: h('i', { style: 'color: teal'}, '再怎么快速点击也没用')
      });
      
      clearTimeout(this.timeout);

      this.timeout = setTimeout(function() {
        _this.number ++;
      }, 2000)
    }
  },
  computed: {
    ...mapState({
      DemoListModule: 'DemoListModule'
    }),
  }

}
</script>

<style lang="scss" scoped>
@mixin demo-list() {
  .demo-list {
    &-card {

      &-header {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
}

@include demo-list();
</style>

