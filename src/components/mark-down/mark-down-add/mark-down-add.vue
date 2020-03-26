<template>
  <div class="editor-content">
    <div class="editor-content-form">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="文章名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
         <el-form-item label="文章分类">
          <el-select v-model="form.category" placeholder="请选择文章分类">
            <el-option :label="category.label" :value="category.value" v-for="category in categoryList" v-bind:key="category.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
   
     <div class="editor-content-mavon">
       <mavon-editor :ishljs="true" ref=md v-model="form.editorValue" :toolbars="markdownOption" @imgAdd="imgAdd" @save="save" style="width: 100%;"/>
     </div>
     <div class="editor-content-operation">
       
       <el-button type="primary" round @click="updateMarkdownArticle" v-if="editButton">修改文章</el-button>
       <el-button type="primary" round @click="addMarkdownArticle" v-else>增加文章</el-button>
       <el-button round v-if="editButton" @click="backList">返回列表</el-button>
     </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import moment from 'moment'
export default {
  name: 'MarkDownAddComponent',
  components: {
  },
  data() {
    return {
      categoryList: [
        {
          label: 'JavaScript',
          value: 'JavaScript'
        },
        {
          label: 'CSS',
          value: 'CSS'
        }, {
          label: 'Vue',
          value: 'Vue'
        }, {
          label: 'Html',
          value: 'Html'
        }, {
          label: 'React',
          value: 'React'
        }, {
          label: 'Http',
          value: 'Http'
        }
      ],
      form: {
        name: '',
        category: '',
        editorValue: '',
      },
      markdownOption: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        /* 1.3.5 */
        undo: true, // 上一步
        redo: true, // 下一步
        trash: false, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.1.8 */
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        /* 2.2.1 */
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      editButton: false,
    }
  },

  created() {
    if (JSON.stringify(this.$route.params) !== '{}') {
      this.editButton = true;
      this.form = {...this.$route.params}
    }
  },

  computed: {
    ...mapState({
      markdown: 'MarkDownMOdule'
    })
  },

  methods: {
    ...mapActions([
      'addMarkDownArticle',
      'updateArticle'
    ]),
    save() {
const {name, category, editorValue} = this.form;
      if (!name || !category || !editorValue) {
        this.$message({
          message: '文章内容请填写完整',
          type: 'warning'
        });
        return;
      }
      let updateTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.updateArticle({
        type: 'updateArticle',
        payload: {...this.form, updateTime}
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.message,
            type: 'success'
          });
        }
      });
    },
    backList() {
      this.$router.push({name: 'MarkDownListComponent'})
    },
    updateMarkdownArticle() {
      const {name, category, editorValue} = this.form;
      if (!name || !category || !editorValue) {
        this.$message({
          message: '文章内容请填写完整',
          type: 'warning'
        });
        return;
      }
      let updateTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.updateArticle({
        type: 'updateArticle',
        payload: {...this.form, updateTime}
      }).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.message,
            type: 'success'
          });
          this.$router.push({name: 'MarkDownListComponent'})
        }
      });
    },
    addMarkdownArticle() {
      const {name, category, editorValue} = this.form;
      if (!name || !category || !editorValue) {
        this.$message({
          message: '文章内容请填写完整',
          type: 'warning'
        });
        return;
      }
      let createTime = moment().format("YYYY-MM-DD HH:mm:ss");
      let updateTime = moment().format("YYYY-MM-DD HH:mm:ss");
      this.addMarkDownArticle({...this.form, createTime, updateTime}).then(res => {
        if (res.code === 0) {
          this.$message({
            message: res.message,
            type: 'success'
          });
        }
      });
    },
    imgAdd(pos, file) {
      const formData = new FormData();
      formData.append('file', file);
      this.axios({
        method: 'POST',
        url: this.$baseUrl + '/api/upload/img',
        data: formData
      }).then(res => {
        const { data } = res;
        if (data.res.status === 200) {
          this.$refs.md.$img2Url(pos, data.url);
        }
      }).catch(err => {
        throw new Error(err)
      });
    }
  }
}
</script>

<style lang="scss" scoped>

@mixin editor-content() {
  .editor-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

   &-mavon {
     flex: 1;
     display: flex;
     flex-direction: row;
     justify-content: flex-start;
     overflow: hidden;
     padding: 10px 20px;
   }

   &-form {
     width: 300px;
   }

   &-operation {
     height: 200px;
     width: 100%;
     display: flex;
     flex-direction: row;
     justify-content: center;
     align-items: center;
   }
 }
}


@include editor-content();
</style>
