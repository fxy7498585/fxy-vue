<template>
  <div>
    <el-table
    :data="markdown.markDownList"
    style="width: 100%">
    <el-table-column
      label="创建时间"
      width="200">
       <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.createTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="修改时间"
      width="200"
    >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.updateTime }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="阅读数量"
      width="100"
    >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.readNumber }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="文章标题"
      prop="name"
      width="300">
        <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>标题: {{ scope.row.name }}</p>
          <p>创建日期: {{ scope.row.createTime }}</p>
          <div slot="reference" class="name-wrapper name-title" style="color:#409EFF;">
            {{scope.row.name}}
            <!-- <el-tag size="medium">{{ scope.row.name+ '的撒发的说法是对方阿斯顿发送到发送到发阿士大夫撒地方阿斯顿发斯蒂芬' }}</el-tag> -->
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="文章分类"
      prop="category">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
        <!-- <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  </div>
  
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'MarkDownListComponent',
  data() {
    return {
      search: ''
    }
  },
  created() {
    this.getMarkDownList().then((res) => {
      console.log('getMarkDownList', res);
    });
  },
  methods: {
    ...mapActions([
      'getMarkDownList',
      'deleteArticle'
    ]),
    handleDetail(index, row) {
      this.$router.push({name: 'MarkDownAddComponent', params: {...row, flag: 'edit'}});
    },
    handleDelete(index, row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteArticle({
          type: 'deleteArticle',
          payload: {...row}
        }).then(res => {
          if (res.code === 0) {
            this.$message({
              message: res.message,
              type: 'success'
            });
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      });
    }
  },
  computed: {
    ...mapState({
      markdown: 'MarkDownMOdule',
    }),
  }
}
</script>


<style lang="scss" scoped>
@mixin name-title() {
  .name-title {
    cursor: pointer;
  }
}

@include name-title();

</style>

