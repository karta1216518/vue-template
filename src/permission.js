import router from './router'
import getPageTitle from '@/utils/pageTitle'

router.beforeEach(async(to, from, next) => {
  // start progress bar
  // set page title
  document.title = getPageTitle(to.meta.title)
  // 驗證
  next()
})

router.afterEach(() => {
  // finish progress bar
})
