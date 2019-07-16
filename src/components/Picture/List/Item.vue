<template>
  <div class="el-upload-list__item pictureListItem">
    <img class="el-upload-list__item-thumbnail" :src="imgUrl" alt="" />
    <span class="el-upload-list__item-actions">
      <div class="content">
        <div class="name">{{ name }}</div>
        <div class="remark">{{ type }}</div>
        <div class="type">{{ remark }}</div>
        <div class="option">
          <el-button
            icon="el-icon-search"
            circle
            @click="handlePictureCardPreview"
          >
          </el-button>
          <el-button
            icon="el-icon-edit"
            type="primary"
            circle
            @click="handleEdit('file')"
          >
          </el-button>
          <el-button
            icon="el-icon-delete"
            type="danger"
            circle
            @click="handleRemove('file')"
          >
          </el-button>
        </div>
      </div>
    </span>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="imgUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddPicture',
  data() {
    return {
      dialogVisible: false,
      imgUrl:
        'http://static.doutudalao.com/1d272b52dbc90f9cb01bd5bb66dbf404/sad-frog-%E4%BD%9B%E7%A5%96.jpg',
      name: '勸世青蛙',
      remark: '呱呱呱呱呱',
      type: '大OO',
      imgId: ''
    }
  },
  computed: {},
  methods: {
    handleEdit() {
      console.log('edit')
      this.$emit('editPicture', this.imgId)
    },
    handleRemove(file) {
      //刪除
      console.log(file)
    },
    handlePictureCardPreview(url) {
      //大圖
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../styles/common/index.sass'

.el-upload-list__item,.pictureListItem
  +size(200px)
  +bg
  +por
  +shadow
  overflow: hidden
  +hover
    background-color: rgba(#000,.8)
    .content
      z-index: 10
  .el-upload-list__item-thumbnail
    +size(100%)
    +poa
    max-height: 200px
    z-index: -1
  .content
    +size(200px)
    +flex(column)
    +por
    z-index: -10
    color: #FFF
    font-size: $fz
</style>
