
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic'
import Font from '@ckeditor/ckeditor5-font/src/font'
import Heading from '@ckeditor/ckeditor5-heading/src/heading'
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote'
import Link from '@ckeditor/ckeditor5-link/src/link'
import List from '@ckeditor/ckeditor5-list/src/list'
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight'
import Table from '@ckeditor/ckeditor5-table/src/table'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'

const editorConfig = {
  language: 'zh',
  height: 500,
  plugins: [
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Heading,
    Underline,
    Strikethrough,
    Font,
    BlockQuote,
    Link,
    List,
    Highlight,
    Table,
    Alignment
  ],
  toolbar: {
    items: [
      'heading',
      '|',
      'fontSize',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'bold',
      'italic',
      'underline',
      'strikethrough',
      'alignment',

      '|',
      'bulletedList',
      'numberedList',
      'blockQuote',
      'link',
      'insertTable',
      '|',
      'undo',
      'redo'
    ]
  },
  fontBackgroundColor: {
    colors: [
      {
        color: 'hsl(0, 75%, 60%)',
        label: 'Red'
      },
      {
        color: 'hsl(30, 75%, 60%)',
        label: 'Orange'
      },
      {
        color: 'hsl(60, 75%, 60%)',
        label: 'Yellow'
      },
      {
        color: 'hsl(90, 75%, 60%)',
        label: 'Light green'
      },
      {
        color: 'hsl(120, 75%, 60%)',
        label: 'Green'
      }
    ]
  },
  fontColor: {
    colors: [
      {
        color: 'hsl(0, 0%, 0%)',
        label: 'Black'
      },
      {
        color: 'hsl(0, 0%, 30%)',
        label: 'Dim grey'
      },
      {
        color: 'hsl(0, 0%, 60%)',
        label: 'Grey'
      },
      {
        color: 'hsl(0, 0%, 90%)',
        label: 'Light grey'
      },
      {
        color: 'hsl(0, 0%, 100%)',
        label: 'White',
        hasBorder: true
      }
    ]
  },
  fontSize: {
    options: ['tiny', 'default', 'big', 'huge']
  }
}

export default editorConfig
