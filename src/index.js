import '@/scss/global.scss'

import router from './router'

router(document.querySelector('#app').attachShadow({ mode: 'open' }))
