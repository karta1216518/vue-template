<template>
  <div class="dashboard-container container">
    <div class="dashboard-text">name:123</div>
    <ckeditor
      :editor="editor"
      v-model="content"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import editorConfig from './../../ckEditor'

export default {
  name: 'Dashboard',
  computed: {},
  data() {
    return {
      content: '',
      editor: ClassicEditor,
      editorConfig
    }
  }
}
</script>

<style lang="sass" scoped>
.dashboard 
  &-text 
    font-size: 30px
    line-height: 46px
</style>
