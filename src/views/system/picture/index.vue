<template>
  <div class="picture-container container">
    <div class="pageHeader">
      <div class="pageTitle">
        圖片管理
      </div>
      <div class="pageOption">
        <el-button
          icon="el-icon-edit"
          type="primary"
          @click="editPicture('add')"
          >新增圖片</el-button
        >
      </div>
    </div>
    <div class="pictureList">
      <Item v-for="i in 5" :key="i" @editPicture="editPicture" />
    </div>
    <AddPicture ref="addPicture" />
  </div>
</template>

<script>
import AddPicture from '@/components/Picture/AddPicture'
import Item from '@/components/Picture/List/Item'

export default {
  name: 'Picture',
  components: {
    AddPicture,
    Item
  },
  data() {
    return {}
  },
  computed: {},
  methods: {
    editPicture(imgId = '') {
      this.$refs.addPicture.openForm(imgId)
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../../styles/common/index.sass'

.picture-container
  .pictureList
    +flex(row,flex-start)
    max-width: 1200px
    flex-wrap: wrap
</style>
