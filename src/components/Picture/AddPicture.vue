<template>
  <div class="addPicture">
    <div
      class="dialog "
      :class="{
        dialogShow: isOpen
      }"
      @click="closeForm"
    >
      <div class="dialogForm" @click.stop="openForm">
        <div class="dialogHeader">
          <div class="dialogTitle">新增圖片</div>
          <el-button
            @click.stop="closeForm"
            icon="el-icon-close"
            circle=""
          ></el-button>
        </div>
        <div class="addPictureForm">
          <el-form
            style="width:100%;padding:20px 40px;box-sizing: border-box"
            ref="form"
            :model="addForm"
            label-width="60px"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="名稱">
                  <div class="pictureName">
                    <el-input
                      placeholder="名稱"
                      v-model="addForm.name"
                      clearable
                    >
                    </el-input>
                  </div>
                </el-form-item>
                <el-form-item label="分類">
                  <div class="pictureType">
                    <el-select
                      v-model="addForm.type"
                      clearable
                      placeholder="分類"
                    >
                      <el-option
                        v-for="item in typeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                </el-form-item>
                <el-form-item label="備註">
                  <div class="pictureRemark">
                    <el-input
                      type="textarea"
                      :autosize="{ minRows: 2, maxRows: 4 }"
                      placeholder="備註"
                      v-model="addForm.remark"
                    >
                    </el-input>
                  </div> </el-form-item
              ></el-col>
              <el-col style="padding-left:40px" :span="12"
                ><el-form-item label="圖片">
                  <div class="pictureUpload">
                    <el-upload
                      ref="upload"
                      class="picture-uploader"
                      list-type="picture-card"
                      :auto-upload="false"
                      :action="addApi"
                      :data="parameter"
                      :limit="1"
                      :show-file-list="true"
                      :on-preview="handlePictureCardPreview"
                      :on-remove="handleRemove('file')"
                    >
                      <i class="el-icon-plus picture-uploader-icon"></i>
                      <div slot="file" slot-scope="{ file }">
                        <img
                          class="el-upload-list__item-thumbnail"
                          :src="file.url"
                          alt=""
                        />
                        <span class="el-upload-list__item-actions">
                          <span
                            class="el-upload-list__item-preview"
                            @click="handlePictureCardPreview('file')"
                          >
                            <i class="el-icon-zoom-in"></i>
                          </span>

                          <span
                            v-if="!disabled"
                            class="el-upload-list__item-delete"
                            @click="handleRemove('file')"
                          >
                            <i class="el-icon-delete"></i>
                          </span>
                        </span>
                      </div>
                    </el-upload>
                  </div> </el-form-item
              ></el-col>
            </el-row>
          </el-form>
        </div>
        <div class="dialogFooter">
          <el-button @click.stop="closeForm" icon="el-icon-">返回</el-button>
          <el-button @click.stop="closeForm" icon="el-icon-" type="primary"
            >儲存</el-button
          >
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'AddPicture',
  data() {
    return {
      isOpen: false,
      server: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      typeOptions: [
        { value: 'T1', label: '分類1' },
        { value: 'T2', label: '分類2' },
        { value: 'T3', label: '分類3' },
        { value: 'T4', label: '分類4' },
        { value: 'T5', label: '分類5' }
      ],
      addForm: {
        name: '',
        remark: '',
        type: ''
      }
    }
  },
  computed: {
    addApi() {
      return this.server
    },
    uploadFile() {
      return this.$refs.upload.uploadFiles || []
    },
    parameter() {
      return {}
    }
  },
  methods: {
    openForm(imgId = null) {
      this.isOpen = true
    },
    closeForm() {
      this.isOpen = false
    },
    handleRemove(file) {
      //刪除
      console.log(file)
    },
    handlePictureCardPreview(file) {
      //大圖
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../styles/common/index.sass'

.addPicture
  .pictureUpload
    +size(200px)
    overflow: hidden
  .addPictureForm
    +flex(column)

</style>
