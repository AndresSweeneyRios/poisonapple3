import '@/scss/global.scss'

import { router } from 'bitt'

router(document.body, [
  {
    regex: /^\/?$/,
    module: () => import('@/views/home')
  }
]).catch(console.error)